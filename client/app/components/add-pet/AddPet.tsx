import React from "react";
import style from "./add-pet.module.css";
import { CiWarning } from "react-icons/ci";

function AddPet() {
  return (
    <div className={style.container}>
      <CiWarning style={{ fontSize: "40px" }} />
      <p>
        No tiene ninguna mascota agregada. Vincule un QR a su cuenta para añadir
        una mascota.
      </p>
    </div>
  );
}

export default AddPet;
