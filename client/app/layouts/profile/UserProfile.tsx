"use client";
import React, { useState, useEffect } from "react";
import style from "./user-profile.module.css";
import Typography from "@/app/components/typography/Typography";
import { MdEdit } from "react-icons/md";
import Input from "@/app/components/input/Input";
import ActionButton from "@/app/components/button/ActionButton";
import { useUser } from "@auth0/nextjs-auth0/client";
import useFetcher from "@/app/utils/hooks/useFetcher";
import Loader from "@/app/components/loader/Loader";
import axios from "axios";
import { ProfileType } from "@/app/types/profile.type";

function UserProfile() {
  const { user } = useUser();
  const { data, isLoading } = useFetcher<ProfileType>(
    `http://localhost:3001/petowner/login?email=${user?.email}`,
    user
  );

  const [formData, setFormData] = useState<ProfileType>({
    name: "",
    surname: "",
    phone: "",
    province: "",
    location: "",
    email: "",
  });
  const [profileImage, setProfileImage] = useState<any>("");

  const handleFromData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data) {
      await axios
        .post("http://localhost:3001/petowner", formData)
        .then((res) => console.log(res.data))
        .catch((error) => {
          throw new Error(error);
        });
    } else {
      await axios
        .put(`http://localhost:3001/petowner/${data.id}`, formData)
        .then((res) => console.log(res.data))
        .catch((error) => {
          throw new Error(error);
        });
    }
  };

  useEffect(() => {
    setFormData({
      ...formData,
      email: user?.email,
    });
    setProfileImage(user?.picture);
    if (data && user) {
      setFormData({
        ...formData,
        ...data,
        email: user?.email,
      });
    }
  }, [user, data]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className={style.section}>
      <Typography color="#000" size="sm" textalignment="center">
        <p>Información personal</p>
      </Typography>
      <figure>
        <img src={profileImage} />
        <div className={style.icon_container}>
          <MdEdit />
        </div>
      </figure>
      <form action="POST">
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

export default UserProfile;
