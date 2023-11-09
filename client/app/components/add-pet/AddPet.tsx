import React from "react";
import Link from "next/link";
import style from "./add-pet.module.css";

function AddPet() {
  return (
    <Link href="/pet-profile/add">
      <div className={style.container}>
        <img src="/assets/icons/add.svg" />
        <p>Añadir una nueva Mascota</p>
      </div>
    </Link>
  );
}

export default AddPet;
