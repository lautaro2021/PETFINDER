import React from "react";
import style from './input.module.css'

function Input({
  id,
  type = "text",
  placeholder,
  label,
  onChange,
  name,
  value,
}: {
  id?: string;
  type?: string;
  placeholder: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: any;
}) {
  return (
    <div className={style.InputContainer}>
      <label className={style.LabelInput} htmlFor={id}>{label}</label>
      <input
        className={style.Input}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
}

export default Input;
