import React from "react";
import styled from "styled-components";

function Textarea({
  id,
  placeholder,
  label,
}: {
  id?: string;
  placeholder: string;
  label: string;
}) {
  return (
    <StyledTextArea>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} placeholder={placeholder} />
    </StyledTextArea>
  );
}

export default Textarea;

const StyledTextArea = styled.div`
  width: 100%;
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

    &:focus {
      outline: 0;
      border: 1px solid #c5c5c5;
    }
  }
`;
