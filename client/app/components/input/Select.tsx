import React from "react";
import s from "./select.module.css";

function Select({
  id,
  type = "text",
  placeholder,
  label,
  onChange,
  name,
  value,
  options,
}: {
  id?: string;
  type?: string;
  placeholder: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  value?: any;
  options?: string[];
}) {
  return (
    <div className={s.container}>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={onChange} name={name} value={value}>
        <option value="" defaultValue={""} hidden>
          {placeholder}
        </option>
        {!options ? (
          <>
            <option value="SI">SI</option>
            <option value="NO">NO</option>
          </>
        ) : (
          options.map((option, index: number) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))
        )}
      </select>
    </div>
  );
}

export default Select;
