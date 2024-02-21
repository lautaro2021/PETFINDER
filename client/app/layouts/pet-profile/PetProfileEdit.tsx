"use client";
import React, { useState } from "react";
import style from "./pet-profile.module.css";
import Input from "@/app/components/input/Input";
import Select from "@/app/components/input/Select";
import ActionButton from "@/app/components/button/ActionButton";
import Swal from "sweetalert2";
import axios from "axios";
import type { PetType } from "@/app/types/pet.type";
import ProfileImage from "@/app/components/profile-image/ProfileImage";
import Textarea from "@/app/components/textarea/Textarea";
import { uploadImage } from "@/app/utils/uploadCloudinaryImage";
import { useRouter } from "next/navigation";
import { NEXT_PUBLIC_BACK_URL } from "@/app/config/config";

function PetProfileEditLayout({
  userId,
  petData,
  petId,
}: {
  userId?: number;
  petData?: PetType;
  petId?: string;
}) {
  const router = useRouter();
  const [formData, setFormData] = useState<PetType>({
    id: petData?.id || petId,
    name: petData?.name,
    surname: petData?.surname,
    nickname: petData?.nickname,
    picture: petData?.picture,
    gender: petData?.gender,
    age: petData?.age,
    race: petData?.race,
    disease: petData?.disease,
    diseaseType: petData?.diseaseType,
    treatment: petData?.treatment,
    treatmentType: petData?.treatmentType,
    vaccines: petData?.vaccines,
    castrated: petData?.castrated,
    petshop: petData?.petshop,
    veterinary: petData?.veterinary,
    info: petData?.info,
  });
  const [ageError, setAgeError] = useState(false);

  const formRequiredFields = [
    "nickname",
    "gender",
    "race",
    "age",
    "name",
    "surname",
  ];
  const validate = formRequiredFields.every(
    (key) => formData[key as keyof PetType]
  );

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const inputValue = e.target.value.trim();
    const valueToNumber = parseFloat(inputValue);

    if (
      e.target.type === "number" &&
      (isNaN(valueToNumber) ||
        inputValue.startsWith("0") ||
        valueToNumber <= 0 ||
        valueToNumber >= 100)
    ) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }

    setFormData({
      ...formData,
      [e.target.name]: inputValue,
    });
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      const imageUrl = await uploadImage(file);

      if (imageUrl) {
        setFormData({
          ...formData,
          picture: imageUrl,
        });
      }
    }
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      info: e.target.value,
    });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { ...formData, petOwnerId: userId };
    if (!petData) {
      await axios
        .post(`${NEXT_PUBLIC_BACK_URL}/pet`, data)
        .then(() => {
          Swal.fire({
            title:
              "Mascota creada con exito, revise su información personal para completar el registro",
            icon: "success",
            iconColor: "#3C8B96",
            customClass: {
              confirmButton: `${style.confirm_button}`,
              popup: `${style.notification_container}`,
            },
          });
          router.push("/profile");
        })
        .catch((error) => {
          const err = error.response.data;

          Swal.fire({
            title: `${err}`,
            icon: "error",
            iconColor: "#3C8B96",
            customClass: {
              confirmButton: `${style.confirm_button}`,
              popup: `${style.notification_container}`,
            },
          });
          throw new Error(error);
        });
    } else {
      await axios
        .put(`${NEXT_PUBLIC_BACK_URL}/pet/${petData.id}`, formData)
        .then(() => {
          Swal.fire({
            title: "Mascota editada con exito",
            icon: "success",
            iconColor: "#3C8B96",
            customClass: {
              confirmButton: `${style.confirm_button}`,
              popup: `${style.notification_container}`,
            },
          });
          router.push("/pet-profile");
        })
        .catch((error) => {
          Swal.fire({
            title: "Error al crear tu mascota",
            icon: "error",
            iconColor: "#3C8B96",
            customClass: {
              confirmButton: `${style.confirm_button}`,
              popup: `${style.notification_container}`,
            },
          });
          throw new Error(error);
        });
    }
  };

  return (
    <section className={style.section}>
      <p>Información de mi mascota</p>
      <ProfileImage src={formData.picture} handler={handleImage} />
      <form>
        <Input
          placeholder="Inserte el nombre"
          label="Nombre(*)"
          name="name"
          value={formData.name}
          onChange={handleForm}
        />
        <Input
          placeholder="Inserte el apellido"
          label="Apellido(*)"
          name="surname"
          value={formData.surname}
          onChange={handleForm}
        />
        <Input
          placeholder="Inserte el apodo"
          label="Apodo(*)"
          name="nickname"
          value={formData.nickname}
          onChange={handleForm}
        />
        <Select
          placeholder="Inserte el sexo"
          label="Sexo(*)"
          name="gender"
          value={formData.gender}
          onChange={handleForm}
          options={["Macho", "Hembra"]}
        />
        <Input
          placeholder="Inserte la raza"
          label="Raza(*)"
          name="race"
          value={formData.race}
          onChange={handleForm}
        />
        <Input
          placeholder="Inserte la edad"
          label="Edad(*)"
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
        <Textarea
          placeholder="Inserte información adicional"
          label="Información adicional"
          value={formData.info}
          onChange={handleTextArea}
          form="pet"
        />
        <ActionButton
          text={"Guardar información"}
          action={submitForm}
          disabled={!validate || ageError}
        />
      </form>
    </section>
  );
}

export default PetProfileEditLayout;
