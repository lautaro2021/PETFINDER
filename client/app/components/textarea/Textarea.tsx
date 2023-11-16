import React from "react";
import styled from "styled-components";

function Textarea({
  id,
  placeholder,
  label,
  value,
  onChange,
}: {
  id?: string;
  placeholder: string;
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <StyledTextArea>
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

const StyledTextArea = styled.div`
  grid-area: 4 / 1 / 5 / 3;
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
