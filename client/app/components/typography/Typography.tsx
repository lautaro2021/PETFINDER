import React from "react";
import styled from "styled-components";

function Typography({
  color,
  size = "sm",
  textAlignment = "start",
  children,
}: {
  color: string;
  size?: "ssm" | "sm" | "md";
  textAlignment: "start" | "center";
  children: React.ReactNode;
}) {
  return (
    <StyledText color={color} textAlignment={textAlignment} size={size}>
      {children}
    </StyledText>
  );
}

export default Typography;

interface TypographyType {
  color: string;
  size: string;
  textAlignment: string;
}

const StyledText = styled.div<TypographyType>`
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlignment};
  ${(props) =>
    props.size === "sm"
      ? "font-size: 25px;"
      : props.size === "md"
      ? "font-size: 30px; font-weight: 600"
      : "font-size: 18px;"}
`;
