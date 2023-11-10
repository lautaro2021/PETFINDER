import React from "react";
import Link from "next/link";
import style from "./dashboard.module.css";
import Typography from "@/app/components/typography/Typography";
import NavButton from "@/app/components/button/NavButton";

function Dashboard() {
  return (
    <section className={style.section}>
      <Link href="/pet-profile">
        <article
          className={style.ArtcilesHome}
          style={{
            background:"linear-gradient(237deg, #49A9B7 1.61%, #224F56 109.87%)", 
            height:"250px"
          }}
          >
          <Typography color="white" textalignment="start" size="md">
            <p>Editar o ingresar los datos de mis mascotas</p>
          </Typography>
          <img src="/assets/images/dog.svg" />
        </article>
      </Link>
      <Link href="/profile">
        <article
          className={style.ArtcilesHome}
          style={{
            background:"#224F56", 
            height:"190px"
          }}
          >
          <Typography color="white" textalignment="start">
            <p>Editar mi información personal</p>
          </Typography>
          <img src="/assets/images/editprofile.svg" />
        </article>
      </Link>
      <article
        className={style.ArtcilesHome}
        >
        <Typography color="black" textalignment="start" size="ssm">
          <p>
            Ingresa a nuestra tienda y conocé todos los productos y novedades
            que tenemos para ofrecerte
          </p>
        </Typography>
        <br />
        <NavButton
          text="Visitar tienda online"
          type="anchor"
          href="https://polytusk.com.ar/"
        ></NavButton>
      </article>
    </section>
  );
}

export default Dashboard;

