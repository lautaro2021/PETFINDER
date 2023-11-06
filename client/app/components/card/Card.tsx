import React from "react";
import Link from "next/link";
import style from "./card.module.css";

function Card({
  text,
  bgColor,
  href = "",
  size = "md",
}: {
  text: string;
  bgColor: 1 | 2 | 3;
  href?: string;
  size?: string;
}) {
  return (
    <Link href={href} style={{ width: "100%" }}>
      <article
        className={style.article}
        style={{
          background: `${
            bgColor === 1
              ? "linear-gradient(237deg, #49A9B7 1.61%, #224F56 109.87%)"
              : bgColor === 2
              ? "#224F56"
              : "white"
          }`,
          height: `${size === "md" ? "250px" : "192px"}`,
        }}
      >
        <p>{text}</p>
      </article>
    </Link>
  );
}

export default Card;
