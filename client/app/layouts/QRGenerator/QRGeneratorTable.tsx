import styles from "@/app/layouts/QRGenerator/QRGeneratorTable.module.css";
import { IoMdDownload } from "react-icons/io";

export default function QRGeneratorTable({
  data,
}: {
  data: {
    IDpet: string;
    QRurl: string;
  }[];
}) {
  return (
    <table className={`${styles.QRGeneratorTable}`}>
      <thead>
        <tr>
          <th>Imagen QR</th>
          <th>ID</th>
          <th>URL</th>
          <th>Descargar</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((d) => {
          return (
            <tr>
              <td>
                <img src={d.QRurl} style={{ height: 100 }} />
              </td>
              <td>{d.IDpet}</td>
              <td>{d.QRurl}</td>
              <td>
                <a
                  href={d.QRurl}
                  download="Example-PDF-document"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoMdDownload />
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
