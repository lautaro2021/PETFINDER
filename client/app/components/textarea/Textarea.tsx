import React from "react";
import styled from "styled-components";

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
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledTextArea>
  );
}

export default Textarea;

interface StyledTextAreaInterface {
  form?: "pet" | "petowner";
}

const StyledTextArea = styled.div<StyledTextAreaInterface>`
  grid-area: ${(props) =>
    props.form === "pet" ? "7 / 1 / 8 / 3" : "4 / 1 / 5 / 3"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  font-size: 14px;

  label {
    font-weight: 500;
  }

  textarea {
    padding: 10px 15px;
    border-radius: 20px;
    border: 1px solid #e1e1e1;
    resize: none;
    min-height: 125px;
    font-family: "Inter", sans-serif;
    background-color: #f5f5f5;

    &:focus {
      outline: 0;
      border: 1px solid #c5c5c5;
    }
  }

  @media screen and (max-width: 700px) {
    grid-area: auto;
    width: 100%;
    textarea {
      background-color: white;
    }
  }
`;
