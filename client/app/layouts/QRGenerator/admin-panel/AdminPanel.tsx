import React from "react";
import ActionButton from "@/app/components/button/ActionButton";
import QRGeneratorTable from "../QRGeneratorTable";
import style from "./admin-panel.module.css";

function AdminPanel({
  data,
  generateAction,
  downloadAction,
}: {
  data: { IDpet: string; QRurl: string }[];
  generateAction: () => void;
  downloadAction: () => void;
}) {
  return (
    <section className={style.section}>
      <div className={style.button_container}>
        <ActionButton action={generateAction} text="Generate 100 QR" />
        <ActionButton action={downloadAction} text="Download ALL PAGE" />
      </div>
      <QRGeneratorTable data={data} />
    </section>
  );
}

export default AdminPanel;
