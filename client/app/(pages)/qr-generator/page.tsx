"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import JSZip from "jszip";
import QrForm from "@/app/layouts/QRGenerator/form/QrForm";
import { QRType } from "@/app/types/qr.type";
import PaginationButtons from "@/app/layouts/QRGenerator/pagination/pagination";
import AdminPanel from "@/app/layouts/QRGenerator/admin-panel/AdminPanel";
import {
  NEXT_PUBLIC_AUTH0_BASE_URL,
  NEXT_PUBLIC_BACK_URL,
} from "@/app/config/config";

const NEXT_PUBLIC_TOKEN_QR_GENERATOR =
  process.env.NEXT_PUBLIC_TOKEN_QR_GENERATOR;
const NEXT_PUBLIC_QR_GEN_PASS = process.env.NEXT_PUBLIC_QR_GEN_PASS;

export default function QRGenerator() {
  const [userActive, setUserActive] = useState(false);
  const [dataQRs, setDataQRs] = useState<{ qr: QRType[]; totalQR: number }>({
    qr: [],
    totalQR: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [qrCuantity, setQrCuantity] = useState("1");

  useEffect(() => {
    const getAllQRs = async () => {
      const dataQRs = await axios
        .get(`${NEXT_PUBLIC_BACK_URL}/qr-generator?page=${currentPage}`)
        .then((res) => res.data);
      setDataQRs({ qr: dataQRs.data, totalQR: dataQRs.pageInfo?.totalResults });
      setLastPage(dataQRs.pageInfo?.totalPages);
    };
    getAllQRs();
  }, [currentPage]);

  const handleClickGenerator = async () => {
    setIsLoading(true);
    try {
      const qrDataArray: QRType[] = [];
      const res = await axios.get(
        `https://www.uuidgenerator.net/api/version4/${qrCuantity}`
      );
      if (res.data) {
        const uuids = res.data?.split("\r\n");
        await Promise.all(
          uuids.map(async (id: string) => {
            try {
              const qrResponse = await axios.post(
                `https://www.qrtiger.com/api/qr/static`,
                {
                  size: 500,
                  transparentBkg: false,
                  qrCategory: "url",
                  text: `${NEXT_PUBLIC_AUTH0_BASE_URL}/pet-profile/${id}`,
                  qrData: "pattern3",
                  colorDark: "rgb(0,0,0)",
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${NEXT_PUBLIC_TOKEN_QR_GENERATOR}`,
                  },
                }
              );
              qrDataArray.push({ IDpet: id, QRurl: qrResponse.data.url });
            } catch (error) {
              console.error(
                `Error al obtener la respuesta para el UUID ${id}:`,
                error
              );
            }
          })
        );

        if (qrDataArray.length > 0) {
          const response = await axios.post(
            `${NEXT_PUBLIC_BACK_URL}/qr-generator`,
            qrDataArray
          );
          setDataQRs({
            ...dataQRs,
            qr: [...response?.data],
          });
          setCurrentPage(1);
          setLastPage((prev) => prev + 1);
          setIsLoading(false);
        }
      }
    } catch (e) {
      console.error("Error al obtener UUIDs:", e);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget.elements[0] as HTMLInputElement;
    if (inputElement.value === NEXT_PUBLIC_QR_GEN_PASS) {
      sessionStorage.setItem('pass', inputElement.value);
      setUserActive(true);
    }
  };

  const handleDownloadAllPage = async () => {
    try {
      const zip = new JSZip();

      await Promise.all(
        dataQRs?.qr.map(async (d) => {
          const response = await axios.get(d.QRurl, { responseType: "blob" });
          const blob = new Blob([response.data], {
            type: "application/octet-stream",
          });

          zip.file(`QR_${d.IDpet}.png`, blob);
        })
      );

      const content = await zip.generateAsync({ type: "blob" });

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(content);
      link.download = "QRFiles.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error al descargar archivos:", error);
    }
  };

  const handleQrCuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQrCuantity(e.target.value);
  };

  useEffect(() => {
    const pass = sessionStorage.getItem('pass');
    if (pass === NEXT_PUBLIC_QR_GEN_PASS) setUserActive(true)
  }, [])

  return (
    <main className="main_container">
      {!userActive ? (
        <QrForm handleSubmit={handleSubmit} />
      ) : (
        <>
          <AdminPanel
            data={dataQRs.qr}
            generateAction={handleClickGenerator}
            downloadAction={handleDownloadAllPage}
            isLoading={isLoading}
            handleInput={handleQrCuantity}
            inputValue={qrCuantity}
            totalQr={dataQRs.totalQR}
            totalPage={lastPage}
          >
            <PaginationButtons
              currentPage={currentPage}
              lastPage={lastPage}
              setCurrentPage={setCurrentPage}
            />
          </AdminPanel>
        </>
      )}
    </main>
  );
}
