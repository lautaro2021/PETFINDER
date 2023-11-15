import React from "react";

function Typography({
  color,
  size = "sm",
  textalignment = "start",
  children,
}: {
  color: string;
  size?: "ssm" | "sm" | "md";
  textalignment: "start" | "center";
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        color: color,
        textAlign: textalignment,
        fontSize: fontSizes[size],
        fontWeight: size === "md" ? 600 : "",
      }}
    >
      {children}
    </div>
  );
}

export default Typography;

const fontSizes = {
  sm: "25px",
  md: "28px",
  ssm: "18px",
};
