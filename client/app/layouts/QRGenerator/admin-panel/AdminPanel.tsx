import React from "react";
import ActionButton from "@/app/components/button/ActionButton";
import QRGeneratorTable from "../QRGeneratorTable";
import style from "./admin-panel.module.css";
import Loader from "@/app/components/loader/Loader";
import Input from "@/app/components/input/Input";

function AdminPanel({
  data,
  generateAction,
  downloadAction,
  children,
  isLoading,
  handleInput,
  inputValue,
  totalQr,
}: {
  data: { IDpet: string; QRurl: string }[];
  generateAction: () => void;
  downloadAction: () => void;
  children: React.ReactNode;
  isLoading: boolean;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  totalQr: number;
}) {
  return (
    <section className={style.section}>
      <div className={style.button_container}>
        <Input
          placeholder="Ingrese cantidad de QR a generar"
          label="Cantidad de QR"
          value={inputValue}
          onChange={handleInput}
          type="number"
        />
        <ActionButton
          action={generateAction}
          text="Generar QR"
          disabled={!inputValue}
        />
        <ActionButton action={downloadAction} text="Descargar toda la página" />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <p>Cantidad total de QR: {`${totalQr}`}</p>
          <QRGeneratorTable data={data} />
          <div className={style.pagination_container}>{children}</div>
        </>
      )}
    </section>
  );
}

export default AdminPanel;
