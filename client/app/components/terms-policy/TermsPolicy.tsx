import React from "react";
import Link from "next/link";
import style from "./terms-policy.module.css";

function TermsPolicy() {
  return (
    <div className={style.container}>
      Polytusk® 2023 -{" "}
      <span>
        <Link href={"/terms"}>Terminos y condiciones</Link>
      </span>
    </div>
  );
}

export default TermsPolicy;
