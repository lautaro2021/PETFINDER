import styles from "@/app/layouts/QRGenerator/QRGeneratorTable.module.css";

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
          <th>IDs</th>
          <th>QR Image</th>
          <th>QR URL</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>uusidsd--sd asd---sds-d-s-d</td>
          <td>
            <img src={""} style={{ height: 100 }} alt="QR Image" />
          </td>
          <td>https:// sadsad s,.com/asdsar</td>
          <td>
            <a
              href={""}
              download="Example-PDF-document"
              target="_blank"
              rel="noreferrer"
            >
              download
            </a>
          </td>
        </tr>
        {data?.map((d) => {
          return (
            <tr>
              <td>{d.IDpet}</td>
              <td>
                <img src={d.QRurl} style={{ height: 100 }} />
              </td>
              <td>{d.QRurl}</td>
              <td>
                <a
                  href={d.QRurl}
                  download="Example-PDF-document"
                  target="_blank"
                  rel="noreferrer"
                >
                  download
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
