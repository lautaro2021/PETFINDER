import React from "react";
import ActionButton from "@/app/components/button/ActionButton";
import QRGeneratorTable from "../QRGeneratorTable";
import style from "./admin-panel.module.css";

function AdminPanel({
  data,
  generateAction,
  downloadAction,
  children,
}: {
  data: { IDpet: string; QRurl: string }[];
  generateAction: () => void;
  downloadAction: () => void;
  children: React.ReactNode;
}) {
  console.log(data.length);

  return (
    <section className={style.section}>
      <div className={style.button_container}>
        <ActionButton action={generateAction} text="Generar QR" />
        <ActionButton action={generateAction} text="Generar 100 QR" />
        <ActionButton action={downloadAction} text="Descargar toda la página" />
      </div>
      <QRGeneratorTable data={data} />
      <div className={style.pagination_container}>{children}</div>
    </section>
  );
}

export default AdminPanel;
