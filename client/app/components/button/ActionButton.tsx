import React from "react";
import style from "./ActionButton.module.css";

function ActionButton({
  text,
  action,
  bgcolor,
  textcolor,
  border,
  disabled,
}: {
  text: string;
  action?: any;
  bgcolor?: string;
  textcolor?: string;
  border?: string;
  disabled?: boolean;
}) {
  return (
    <button
      className={style.ActionButton}
      onClick={action}
      style={{
        backgroundColor: bgcolor ? bgcolor : disabled ? "#43494a" : "#224f56",
        color: textcolor || "#fff",
        border: border || "none",
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default ActionButton;
