import React from "react";
import styled from "styled-components";
import s from "./textarea.module.css";

function Textarea({
  id,
  placeholder,
  label,
  value,
  onChange,
  form,
}: {
  id?: string;
  placeholder: string;
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  form?: "pet" | "petowner";
}) {
  return (
    <StyledTextArea form={form}>
      <div className={s.container}>
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </StyledTextArea>
  );
}

export default Textarea;

interface StyledTextAreaInterface {
  form?: "pet" | "petowner";
}

const StyledTextArea = styled.div<StyledTextAreaInterface>`
  grid-area: ${(props) =>
    props.form === "pet" ? "8 / 1 / 9 / 3" : "4 / 1 / 5 / 3"};

  @media screen and (max-width: 700px) {
    grid-area: auto;
    width: 100%;
    textarea {
      background-color: white;
    }
  }
`;
