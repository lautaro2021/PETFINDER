import React from "react";
import style from './ActionButton.module.css'

function ActionButton({
  text,
  action,
  bgcolor,
  textcolor,
  border,
}: {
  text: string;
  action?: any;
  bgcolor?: string;
  textcolor?: string;
  border?: string;
}) {
  return (
    <button
      className={style.ActionButton}
      onClick={action}
      style={{
        backgroundColor: bgcolor || "#224f56",
        color: textcolor || "#fff",
        border: border || "none"
      }}
    >
      {text}
    </button>
  );
}

export default ActionButton;
