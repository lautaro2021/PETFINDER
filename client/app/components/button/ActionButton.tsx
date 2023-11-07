import React from "react";
import styled from "styled-components";

function ActionButton({ text, action }: { text: string; action?: () => void }) {
  return <StyledActionButton onClick={action}>{text}</StyledActionButton>;
}

export default ActionButton;

const StyledActionButton = styled.button`
  width: 100%;
  background-color: #224f56;
  color: white;
  font-size: 13px;
  font-weight: 500;
  padding: 12px 0px;
  text-align: center;
  border: none;
  border-radius: 100px;
`;
