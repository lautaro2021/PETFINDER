import React from "react";
import Link from "next/link";
import style from "./dashboard.module.css";
import NavButton from "@/app/components/button/NavButton";
import TermsPolicy from "@/app/components/terms-policy/TermsPolicy";

function Dashboard() {
  return (
    <section className={style.section}>
      <Link href="/pet-profile">
        <article className={style.article1}>
          <p>Editar o ingresar los datos de mis mascotas</p>
          <img src="/assets/images/dog.svg" />
        </article>
      </Link>
      <Link href="/profile">
        <article className={style.article2} style={{}}>
          <p>Editar mi información personal</p>
          <img src="/assets/images/editprofile.svg" />
        </article>
      </Link>
      <article className={style.article3}>
        <p>
          Ingresa a nuestra tienda y conocé todos los productos y novedades que
          tenemos para ofrecerte
        </p>
        <br />
        <NavButton
          text="Visitar tienda online"
          type="anchor"
          href="https://polytusk.com.ar/categoria-producto/qrsmart/"
        ></NavButton>
      </article>
      <article className={style.terms}>
        <figure>
          <img src="/assets/images/iso.png" />
          <img src="/assets/images/logo.png" />
        </figure>
        <TermsPolicy />
      </article>
    </section>
  );
}

export default Dashboard;
