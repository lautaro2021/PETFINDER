"use client";
import React from "react";
import style from "./pet-profile.module.css";
import Typography from "@/app/components/typography/Typography";
import { MdEdit } from "react-icons/md";
import Input from "@/app/components/input/Input";
import Textarea from "@/app/components/textarea/Textarea";
import ActionButton from "@/app/components/button/ActionButton";

function PetProfileLayout() {
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
        <Input placeholder="Inserte el apodo" label="Apodo" />
        <Input placeholder="Inserte el sexo" label="Sexo" />
        <Input placeholder="Inserte la raza" label="Raza" />
        <Input placeholder="Inserte la edad" label="Edad" type="number" />
        <Input
          placeholder="Inserte enfermedad"
          label="Tiene alguna enfermedad?"
        />
        <Input
          placeholder="Inserte tipo de enfermedad"
          label="Si la respuesta es si, cuál es?"
        />
        <Input
          placeholder="Inserte tratamiento"
          label="Se encuentra en tratamiento?"
        />
        <Input
          placeholder="Inserte tipo de tratamiento"
          label="Si la respuesta es si, cuál es?"
        />
        <Input
          placeholder="Inserte vacunas"
          label="Tiene las vacunas al dia?"
        />
        <Input placeholder="Inserte " label="Esta castrado?" />
        <Input placeholder="Inserte PetShop amigo" label="PetShop amigo" />
        <Input
          placeholder="Inserte veterinaria amiga"
          label="Veterinaria amiga"
        />
        <Textarea label="Observaciones" placeholder="Describa.." />
        <ActionButton text={"Guardar información"} />
      </form>
    </section>
  );
}

export default PetProfileLayout;
