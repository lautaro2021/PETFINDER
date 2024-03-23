import styles from "@/app/layouts/QRGenerator/QRGeneratorTable.module.css";
import { IoMdDownload } from "react-icons/io";

export default function QRGeneratorTable({
  data,
}: {
  data: {
    IDpet: string;
    QRurl: string;
    createdAt?: string;
  }[];
}) {
  return (
    <table className={`${styles.QRGeneratorTable}`}>
      <thead>
        <tr>
          <th>Imagen QR</th>
          <th className={styles.date}>Fecha</th>
          <th className={styles.id}>ID</th>
          <th className={styles.url}>URL</th>
          <th>Descargar</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((d) => {
          const date = d.createdAt?.slice(0, 10).split('-').reverse().join('-');
          return (
            <tr>
              <td>
                <img src={d.QRurl} style={{ height: 100 }} />
              </td>
              <td className={styles.date}>{date}</td>
              <td className={styles.id}>{d.IDpet}</td>
              <td className={styles.url}>{d.QRurl}</td>
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
