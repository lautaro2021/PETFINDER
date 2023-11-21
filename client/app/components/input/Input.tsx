import React from "react";
import style from "./input.module.css";

function Input({
  id,
  type = "text",
  placeholder,
  label,
  onChange,
  name,
  value,
  disabled,
  accept,
  required,
}: {
  id?: string;
  type?: string;
  placeholder: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: any;
  disabled?: boolean;
  accept?: any;
  required?: boolean;
}) {
  return (
    <div className={style.InputContainer}>
      <label className={style.LabelInput} htmlFor={id}>
        {label}
      </label>
      <input
        className={style.Input}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        disabled={disabled}
        accept={accept}
        required={required}
      />
    </div>
  );
}

export default Input;
