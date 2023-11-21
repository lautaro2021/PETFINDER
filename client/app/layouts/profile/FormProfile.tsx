"use client";
import React, { useState } from "react";
import style from "./user-profile.module.css";
import Input from "@/app/components/input/Input";
import Textarea from "@/app/components/textarea/Textarea";
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
    info: data?.info,
    email: data?.email,
  });

  const formRequiredData = ["name", "surname", "phone"];
  const validate = formRequiredData.every(
    (key) => formData[key as keyof ProfileType]
  );

  const handleFromData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      info: e.target.value,
    });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:3001/petowner/${data.id}`, formData)
      .then(() => {
        Swal.fire({
          title: "Cambios guardados con exito",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error al guardar  tus cambios",
          icon: "error",
        });
        throw new Error(error);
      });
  };

  if (!data) return <Loader />;

  return (
    <section className={style.section}>
      <p>Información personal</p>
      <figure>
        <img src={data?.picture} />
      </figure>
      <form action="PUT">
        <Input
          placeholder="Inserte su nombre"
          label="Nombre(*)"
          name="name"
          value={formData.name}
          onChange={handleFromData}
          required
        />
        <Input
          placeholder="Inserte su apellido"
          label="Apellido(*)"
          name="surname"
          value={formData.surname}
          onChange={handleFromData}
          required
        />
        <Input
          placeholder="Inserte un teléfono de contacto"
          label="Teléfono de contacto(*)"
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleFromData}
          required
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
          onChange={handleFromData}
          disabled
        />
        <Textarea
          placeholder="Inserte información adicional"
          label="Información adicional"
          value={formData.info}
          onChange={handleTextArea}
        />
        <ActionButton
          text="Guardar información"
          action={submitForm}
          disabled={!validate}
        />
      </form>
    </section>
  );
}
