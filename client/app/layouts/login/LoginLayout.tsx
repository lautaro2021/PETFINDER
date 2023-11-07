"use client";
import React from "react";
import Link from "next/link";
import style from "./login-layout.module.css";
import Input from "@/app/components/input/Input";
import ActionButton from "@/app/components/button/ActionButton";

function LoginLayout() {
  return (
    <section className={style.section}>
      <figure>
        <img src="/assets/images/logo.png" />
        <p>Un mejor cuidado para tu mascota</p>
      </figure>
      <form action="">
        <Input label="Email" placeholder="Ingrese email" />
        <Input
          label="Contraseña"
          placeholder="Ingrese contraseña"
          type="password"
        />
        <ActionButton text="Ingresar" />
        <img src="/assets/images/login-barrel.png" />
        <ActionButton
          text="Ingresa con Google"
          bgcolor="white"
          textcolor="#000"
          border="1px solid #e1e1e1"
        />
      </form>
    </section>
  );
}

export default LoginLayout;
