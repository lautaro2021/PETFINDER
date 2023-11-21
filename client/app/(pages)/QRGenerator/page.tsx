'use client'
import QRGeneratorTable from "@/app/layouts/QRGenerator/QRGeneratorTable";
import axios from "axios"
import { useEffect, useState } from "react";
import JSZip from 'jszip';

const NEXT_PUBLIC_TOKEN_QR_GENERATOR = process.env.NEXT_PUBLIC_TOKEN_QR_GENERATOR;
const NEXT_PUBLIC_QR_GEN_PASS = process.env.NEXT_PUBLIC_QR_GEN_PASS;

export default function QRGenerator(){
  const [userActive, setUserActive] = useState(false);
  const [dataQRs, setDataQRs] = useState<{
    IDpet:string,
    QRurl:string
  }[]>([]);

  useEffect(()=>{
    // GET from DB first 100 QRs
  },[])

  const handleClick = ()=>{
    axios.get(`https://www.uuidgenerator.net/api/version4/1`)
    .then(res => {
      if(res.data) {
        const uuids = res.data?.split("\r\n")
        for (const id of uuids){
          try {
            axios.post(`https://www.qrtiger.com/api/qr/static`,{
              "size": 500,
              "transparentBkg": false,
              "qrCategory": "url",
              "text": `http://localhost:3000/pet-profile/${id}`
            },{
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${NEXT_PUBLIC_TOKEN_QR_GENERATOR}`
              }
            }).then(res => {
              setDataQRs([...dataQRs, {IDpet: id, QRurl: res.data.url}])
            });
          } catch (error) {
            console.error(`Error al obtener la respuesta para el UUID ${id}:`, error);
          }
        }
      }
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(e.currentTarget.elements[0].value === NEXT_PUBLIC_QR_GEN_PASS) setUserActive(true);
  }

  const handleDownloadAllPage = async ()=>{
    try {
      const zip = new JSZip();
  
      await Promise.all(
        dataQRs.map(async (d) => {
          const response = await axios.get(d.QRurl, { responseType: 'blob' });
          const blob = new Blob([response.data], { type: 'application/octet-stream' });
  
          zip.file(`QR_${d.IDpet}.png`, blob);
        })
      );
  
      const content = await zip.generateAsync({ type: 'blob' });
  
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(content);
      link.download = 'QRFiles.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error al descargar archivos:', error);
    }
  }
  // console.log("DATA QRS: ", dataQRs);
  // ========== Verificar que la ID no exista en la DB
  //
  // traernos solo las que no existes de la DB e iterar esas
  //
  //

  return (
    <section>
      {
        !userActive ?
        <>
          <form onSubmit={handleSubmit}>
            <input type="password"/>
            <button>ENTRAR</button>
          </form>
        </>
        :
        <>
          <div>
            <button onClick={handleClick}>
              Generate 100 QR
            </button>
            <button onClick={handleDownloadAllPage}>
              Download ALL PAGE
            </button>
          </div>
          <QRGeneratorTable data={dataQRs}/>
        </>
      }
    </section>
  )
}