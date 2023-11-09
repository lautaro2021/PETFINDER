import React from "react";
import styled from "styled-components";

function ActionButton({
  text,
  action,
  bgcolor,
  textcolor,
  border,
}: {
  text: string;
  action?: any;
  bgcolor?: string;
  textcolor?: string;
  border?: string;
}) {
  return (
    <StyledActionButton
      onClick={action}
      bgcolor={bgcolor}
      textcolor={textcolor}
      border={border}
    >
      {text}
    </StyledActionButton>
  );
}

export default ActionButton;

interface StyledActionInterface {
  bgcolor?: string;
  textcolor?: string;
  border?: string;
}

const StyledActionButton = styled.button<StyledActionInterface>`
  width: 100%;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#224f56")};
  color: ${(props) => (props.textcolor ? props.textcolor : "#ffffff")};
  font-size: 13px;
  font-weight: 500;
  padding: 12px 0px;
  text-align: center;
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: 100px;
`;
