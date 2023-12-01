import React from "react";
import style from "./qr-form.module.css";
import Image from "next/image";
import { CiLock } from "react-icons/ci";

function QrForm({
  handleSubmit,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section className={style.form_container}>
      <figure>
        <Image
          src={"/assets/images/polytusk.png"}
          alt="Polytusk-logo"
          title="Polytusk logo"
          fill
        />
      </figure>
      <form onSubmit={handleSubmit}>
        <div>
          <CiLock />
        </div>
        <input type="password" required />
        <button>Entrar</button>
      </form>
    </section>
  );
}

export default QrForm;
