"use client";
import React, { useEffect, useState } from "react";
import style from "./user-profile.module.css";
import Typography from "@/app/components/typography/Typography";
import Input from "@/app/components/input/Input";
import ActionButton from "@/app/components/button/ActionButton";
import axios from "axios";
import { ProfileType } from "@/app/types/profile.type";
import Loader from "@/app/components/loader/Loader";
import Swal from "sweetalert2";

export default function FormProfile({ data }: { data: ProfileType }) {
  const [formData, setFormData] = useState<ProfileType>({
    name: data?.name,
    surname: data?.surname,
    phone: data?.phone,
    province: data?.province,
    location: data?.location,
    email: data?.email,
  });

  const handleFromData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:3001/petowner/${data.id}`, formData)
      .then((res) => {
        Swal.fire({
          title: "Cambios guardados con exito",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error al guardar  tus cambios",
          icon: "error",
        });
      });
  };

  if (!data) return <Loader />;

  return (
    <section className={style.section}>
      <Typography color="#000" size="sm" textalignment="center">
        <p>Información personal</p>
      </Typography>
      <figure>
        <img src={data?.picture} />
      </figure>
      <form action="PUT">
        <Input
          placeholder="Inserte su nombre"
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleFromData}
        />
        <Input
          placeholder="Inserte su apellido"
          label="Apellido"
          name="surname"
          value={formData.surname}
          onChange={handleFromData}
        />
        <Input
          placeholder="Inserte un teléfono de contacto"
          label="Teléfono de contacto"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleFromData}
        />
        <Input
          placeholder="Inserte su provincia"
          label="Provincia"
          name="province"
          value={formData.province}
          onChange={handleFromData}
        />
        <Input
          placeholder="Inserte su localidad"
          label="Localidad"
          name="location"
          value={formData.location}
          onChange={handleFromData}
        />
        <Input
          placeholder="Inserte su email"
          label="Email"
          name="email"
          value={formData.email}
        />
        <ActionButton text="Guardar información" action={submitForm} />
      </form>
    </section>
  );
}
