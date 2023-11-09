import React from "react";
import style from "./info-row.module.css";

function InfoRow({ text, icon }: { text: string; icon: 1 | 2 }) {
  return (
    <div className={style.row_container}>
      <img
        src={
          icon === 1
            ? "/assets/icons/dog-icon.svg"
            : "/assets/icons/location.svg"
        }
      />
      <p>{text}</p>
    </div>
  );
}

export default InfoRow;
