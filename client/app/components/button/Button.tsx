import React from "react";
import Link from "next/link";
import styled from "styled-components";

function Button({
  text,
  href = "",
  type,
}: {
  text: string;
  href?: string;
  type: "anchor" | "link";
}) {
  if (type === "anchor") {
    return (
      <StyledButton as="a" href={href}>
        {text}
      </StyledButton>
    );
  } else {
    return (
      <Link href={href}>
        <StyledButton>{text}</StyledButton>
      </Link>
    );
  }
}

export default Button;

const StyledButton = styled.button`
  border: 1px solid #000;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  border-radius: 100px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 215px;
`;
