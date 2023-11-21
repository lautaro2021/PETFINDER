import axios from "axios"

const TOKEN_QR_GENERATOR = "8a7e14f0-881a-11ee-b43e-2f0953ad3afb";

export default async function QRGenerator(){
  const fetchUUIDs = await axios.get(`https://www.uuidgenerator.net/api/version4/1`);
  const UUIDs = fetchUUIDs.data?.split("\r\n");

  // ========== Verificar que la ID no exista en la DB
  //
  // traernos solo las que no existes de la DB e iterar esas
  //
  //


  // console.log("UUIDs: ", UUIDs);
  const QRs:any[] = [];
  if(UUIDs) {
    for (const id of UUIDs){
      try {
        const response = await axios.post(`https://www.qrtiger.com/api/qr/static`,{
          "size": 500,
          // "colorDark": "rgb(5,64,128)",
          // "logo": "scan_me.png",
          // "eye_outer": "eyeOuter2",
          // "eye_inner": "eyeInner1",
          // "qrData": "pattern0",
          // "backgroundColor": "rgb(255,255,255)",
          "transparentBkg": false,
          "qrCategory": "url",
          "text": `http://localhost:3000/pet-profile/${id}`
          },{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN_QR_GENERATOR}`
            }
          });
        QRs.push(response.data);
      } catch (error) {
        console.error(`Error al obtener la respuesta para el UUID ${id}:`, error);
      }
    }
  }

  // const allData = 

  console.log("QRs :", QRs);
  return (
    <table>
      <tr>
        <th>IDs</th>
        <th>QR Image</th>
        <th>QR URL</th>
        <th>Download</th>
      </tr>
      {
        UUIDs?.map((id:string, i:number)=>{
          const QRItem = QRs[i]
          return (
            <tr>
              <td>
                {id}
              </td>
              <td>
                <img src={QRItem?.url} style={{height: 100}}/>
              </td>
              <td>
                {QRItem?.url}
              </td>
              <td>
                <a
                  href={QRItem?.url}
                  download="Example-PDF-document"
                  target="_blank"
                  rel="noreferrer"
                >
                  download
                </a>
              </td>
            </tr>
          )
        })
      }
    </table>
  )
}