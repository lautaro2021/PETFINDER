"use client";
import React from "react";
import Link from "next/link";
import style from "./register-layout.module.css";
import Input from "@/app/components/input/Input";
import ActionButton from "@/app/components/button/ActionButton";

function RegisterLayout() {
  return (
    <section className={style.section}>
      <figure>
        <img src="/assets/images/logo.png" />
        <p>Un mejor cuidado para tu mascota</p>
      </figure>
      <form action="">
        <Input label="Nombre completo" placeholder="Ingrese nombre completo" />
        <Input
          label="Teléfono de contacto"
          placeholder="Ingrese telefono de contacto"
          type="number"
        />
        <Input label="Provincia" placeholder="Ingrese provincia" />
        <Input label="Localidad" placeholder="Ingrese localidad" />
        <Input
          label="Contraseña"
          type="password"
          placeholder="Ingrese contraseña"
        />
        <ActionButton text="Registrarme" />
        <img src="/assets/images/login-barrel.png" />
        <ActionButton
          text="Ingresa con Google"
          bgcolor="white"
          textcolor="#000"
          border="1px solid #e1e1e1"
        />
        <Link href={"/login"}>
          <p>Tienes una cuenta? Inicia sesión</p>
        </Link>
      </form>
    </section>
  );
}

export default RegisterLayout;
