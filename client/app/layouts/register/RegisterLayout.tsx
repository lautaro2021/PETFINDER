"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "./register-layout.module.css";
import Input from "@/app/components/input/Input";
import ActionButton from "@/app/components/button/ActionButton";
import useFetcher from "@/app/utils/hooks/useFetcher";
import axios from "axios";

function RegisterLayout() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    province: "",
    location: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const req = await axios.post("http://localhost:3001/petowner", form);
  };

  return (
    <section className={style.section}>
      <figure>
        <img src="/assets/images/logo.png" />
        <p>Un mejor cuidado para tu mascota</p>
      </figure>
      <form action="POST">
        <Input
          label="Nombre completo"
          placeholder="Ingrese nombre completo"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
        <Input
          label="Teléfono de contacto"
          placeholder="Ingrese telefono de contacto"
          type="number"
          name="phone"
          value={form.phone}
          onChange={handleInputChange}
        />
        <Input
          label="Provincia"
          placeholder="Ingrese provincia"
          name="province"
          value={form.province}
          onChange={handleInputChange}
        />
        <Input
          label="Localidad"
          placeholder="Ingrese localidad"
          name="location"
          value={form.location}
          onChange={handleInputChange}
        />
        <Input
          label="Email"
          type="string"
          placeholder="Ingrese email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />
        <Input
          label="Contraseña"
          type="password"
          placeholder="Ingrese contraseña"
          name="password"
          value={form.password}
          onChange={handleInputChange}
        />
        <ActionButton text="Registrarme" action={submitForm} />
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
