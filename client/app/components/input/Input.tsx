import React from "react";
import styled from "styled-components";

function Input({
  id,
  type = "text",
  placeholder,
  label,
}: {
  id?: string;
  type?: string;
  placeholder: string;
  label: string;
}) {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} />
    </StyledInput>
  );
}

export default Input;

const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  font-size: 14px;

  label {
    font-weight: 500;
  }

  input {
    padding: 10px 15px;
    border-radius: 100px;
    border: 1px solid #e1e1e1;

    &:focus {
      outline: 0;
      border: 1px solid #c5c5c5;
    }
  }
`;
