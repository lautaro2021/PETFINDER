"use client";
import React from "react";
import style from "./user-profile.module.css";
import Typography from "@/app/components/typography/Typography";
import { MdEdit } from "react-icons/md";
import Input from "@/app/components/input/Input";
import Textarea from "@/app/components/textarea/Textarea";
import ActionButton from "@/app/components/button/ActionButton";

function UserProfile() {
  return (
    <section className={style.section}>
      <Typography color="#000" size="sm" textalignment="center">
        <p>Información personal</p>
      </Typography>
      <figure>
        <img />
        <div className={style.icon_container}>
          <MdEdit />
        </div>
      </figure>
      <form action="">
        <Input placeholder="Inserte su nombre" label="Nombre" />
        <Input placeholder="Inserte su apellido" label="Apellido" />
        <Input
          placeholder="Inserte un teléfono de contacto 1"
          label="Teléfono de contacto 1"
          type="number"
        />
        <Input placeholder="Inserte su provincia" label="Provincia" />
        <Input placeholder="Inserte su localidad" label="Localidad" />
        <Input placeholder="Inserte su email" label="Email" />
        <ActionButton text="Guardar información" />
      </form>
    </section>
  );
}

export default UserProfile;
