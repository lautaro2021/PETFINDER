"use client";
import QRGeneratorTable from "@/app/layouts/QRGenerator/QRGeneratorTable";
import axios from "axios";
import { useEffect, useState } from "react";
import JSZip from "jszip";
import QrForm from "@/app/layouts/QRGenerator/form/QrForm";
import { QRType } from "@/app/types/qr.type";
import PaginationButtons from "@/app/layouts/QRGenerator/pagination/pagination";

const NEXT_PUBLIC_TOKEN_QR_GENERATOR = process.env.NEXT_PUBLIC_TOKEN_QR_GENERATOR;
const NEXT_PUBLIC_QR_GEN_PASS = process.env.NEXT_PUBLIC_QR_GEN_PASS;

export default function QRGenerator() {
  const [userActive, setUserActive] = useState(false);
  const [dataQRs, setDataQRs] = useState<QRType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const getAllQRs = async () =>{
      const dataQRs = await axios.get(`http://localhost:3001/qr-generator?page=${currentPage}`).then(res => res.data);
      setDataQRs(dataQRs.data);
      setLastPage(dataQRs.pageInfo?.totalPages);
    }
    getAllQRs();
  }, [currentPage]);

  const handleClickGenerator = async () => {
    try {
      const qrDataArray: QRType[] = [];
      const res = await axios.get(`https://www.uuidgenerator.net/api/version4/1`);
      if (res.data) {
        const uuids = res.data?.split("\r\n");
        await Promise.all(
          uuids.map(async (id:string) => {
            try {
              const qrResponse = await axios.post(
                `https://www.qrtiger.com/api/qr/static`,
                {
                  size: 500,
                  transparentBkg: false,
                  qrCategory: "url",
                  text: `http://localhost:3000/pet-profile/${id}`,
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
              console.error(`Error al obtener la respuesta para el UUID ${id}:`, error);
            }
          })
        );

        if (qrDataArray.length > 0) {
          const response = await axios.post('http://localhost:3001/qr-generator', qrDataArray);
          setDataQRs([...response.data, ...dataQRs]);
        }
      }
    } catch (e) {
      console.error('Error al obtener UUIDs:', e);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.elements[0].value === NEXT_PUBLIC_QR_GEN_PASS)
      setUserActive(true);
  };

  const handleDownloadAllPage = async () => {
    try {
      const zip = new JSZip();

      await Promise.all(
        dataQRs.map(async (d) => {
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

  return (
    <section>
      {!userActive ? (
        <QrForm handleSubmit={handleSubmit} />
      ) : (
        <>
          <div>
            <button onClick={handleClickGenerator}>Generate 100 QR</button>
            <button onClick={handleDownloadAllPage}>Download ALL PAGE</button>
          </div>
          <PaginationButtons currentPage={currentPage} lastPage={lastPage} setCurrentPage={setCurrentPage}/>
          <QRGeneratorTable data={dataQRs} />
          <PaginationButtons currentPage={currentPage} lastPage={lastPage} setCurrentPage={setCurrentPage}/>
        </>
      )}
    </section>
  );
}
