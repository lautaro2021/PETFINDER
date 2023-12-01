import React from "react";
import Link from "next/link";
import style from './NavButton.module.css'

function NavButton({
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
      <a className={style.NavButton} href={href}>
        {text}
      </a>
    );
  } else {
    return (
      <Link href={href} className={style.NavButton}>
        {text}
      </Link>
    );
  }
}

export default NavButton;

