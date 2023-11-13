"use client";
import React, { useState } from "react";
import style from "./pet-profile.module.css";
import Typography from "@/app/components/typography/Typography";
import { MdEdit } from "react-icons/md";
import Input from "@/app/components/input/Input";
import Select from "@/app/components/input/Select";
import ActionButton from "@/app/components/button/ActionButton";
import Swal from "sweetalert2";
import axios from "axios";
import type { PetType } from "@/app/types/pet.type";

function PetProfileLayout({ petOwnerId }: { petOwnerId?: number }) {
  const [formData, setFormData] = useState<PetType>({
    name: "",
    gender: "",
    age: "",
    race: "",
    disease: "",
    diseaseType: "",
    treatment: "",
    treatmentType: "",
    vaccines: "",
    castrated: "",
    petshop: "",
    veterinary: "",
  });

  console.log(petOwnerId);

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { ...formData, petOwnerId: petOwnerId };
    await axios
      .post(`http://localhost:3001/pet`, data)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Mascota creada con exito",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error al crear tu mascota",
          icon: "error",
        });
      });
  };

  return (
    <section className={style.section}>
      <Typography color="#000" size="sm" textalignment="center">
        <p>Información de tu mascota</p>
      </Typography>
      <figure>
        <img />
        <div className={style.icon_container}>
          <MdEdit />
        </div>
      </figure>
      <form action="POST">
        <Input
          placeholder="Inserte el Nombre"
          label="Nombre(*)"
          name="name"
          value={formData.name}
          onChange={handleForm}
        />
        <Select
          placeholder="Inserte el sexo"
          label="Sexo"
          name="gender"
          value={formData.gender}
          onChange={handleForm}
          options={["Macho", "Hembra"]}
        />
        <Input
          placeholder="Inserte la raza"
          label="Raza"
          name="race"
          value={formData.race}
          onChange={handleForm}
        />
        <Input
          placeholder="Inserte la edad"
          label="Edad"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleForm}
        />
        <Select
          placeholder="Inserte enfermedad"
          label="Tiene alguna enfermedad?"
          name="disease"
          value={formData.disease}
          onChange={handleForm}
        />
        <Input
          placeholder="Inserte tipo de enfermedad"
          label="Si la respuesta es si, cuál es?"
          name="diseaseType"
          value={formData.diseaseType}
          onChange={handleForm}
          disabled={!formData.disease || formData.disease === "NO"}
        />
        <Select
          placeholder="Inserte tratamiento"
          label="Se encuentra en tratamiento?"
          name="treatment"
          value={formData.treatment}
          onChange={handleForm}
        />
        <Input
          placeholder="Inserte tipo de tratamiento"
          label="Si la respuesta es si, cuál es?"
          name="treatmentType"
          value={formData.treatmentType}
          onChange={handleForm}
          disabled={!formData.treatment || formData.treatment === "NO"}
        />
        <Select
          placeholder="Inserte vacunas"
          label="Tiene las vacunas al dia?"
          name="vaccines"
          value={formData.vaccines}
          onChange={handleForm}
        />
        <Select
          placeholder="Inserte "
          label="Esta castrado?"
          name="castrated"
          value={formData.castrated}
          onChange={handleForm}
        />
        <Input
          placeholder="Inserte PetShop amigo"
          label="PetShop amigo"
          name="petshop"
          value={formData.petshop}
          onChange={handleForm}
        />
        <Input
          placeholder="Inserte veterinaria amiga"
          label="Veterinaria amiga"
          name="veterinary"
          value={formData.veterinary}
          onChange={handleForm}
        />
        <ActionButton
          text={"Guardar información"}
          action={submitForm}
          disabled={!formData.name}
        />
      </form>
    </section>
  );
}

export default PetProfileLayout;
