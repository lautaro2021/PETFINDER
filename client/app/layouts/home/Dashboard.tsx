"use client";
import React from "react";
import Link from "next/link";
import style from "./dashboard.module.css";
import styled from "styled-components";
import Typography from "@/app/components/typography/Typography";
import NavButton from "@/app/components/button/NavButton";

function Dashboard() {
  return (
    <section className={style.section}>
      <Link href="/pet-profile">
        <StyledArticle background={1} height={"250px"}>
          <Typography color="white" textAlignment="start" size="md">
            <p>Editar o ingresar los datos de mis mascotas</p>
          </Typography>
          <img src="/assets/images/dog.svg" />
        </StyledArticle>
      </Link>
      <Link href="/profile">
        <StyledArticle background={2} height={"190px"}>
          <Typography color="white" textAlignment="start">
            <p>Editar mi información personal</p>
          </Typography>
          <img src="/assets/images/editprofile.svg" />
        </StyledArticle>
      </Link>
      <StyledArticle background={3} height={"auto"}>
        <Typography color="black" textAlignment="start" size="ssm">
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
      </StyledArticle>
    </section>
  );
}

export default Dashboard;

interface StyledArticleInterface {
  background: 1 | 2 | 3;
  height: string;
}

const StyledArticle = styled.article<StyledArticleInterface>`
  width: 100%;
  height: ${(props) => props.height};
  border-radius: 20px;
  position: relative;
  padding: 35px 40px;
  background: ${(props) =>
    props.background === 1
      ? `linear-gradient(237deg, #49A9B7 1.61%, #224F56 109.87%)`
      : props.background === 2
      ? "#224F56"
      : "#F5F5F5"};

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 0px 0px 20px 0px;
  }
`;
