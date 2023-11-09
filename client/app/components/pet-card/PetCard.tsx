import React from "react";
import style from "./pet-card.module.css";
import { MdEdit } from "react-icons/md";
import InfoRow from "./InfoRow";

function PetCard({
  name,
  race,
  location,
}: {
  name: string;
  race: string;
  location: string;
}) {
  return (
    <div className={style.container}>
      <img className={style.image_profile} />
      <div className={style.text_container}>
        <h3>{name}</h3>
        <InfoRow icon={1} text={race} />
        <InfoRow icon={2} text={location} />
      </div>
      <figure>
        <MdEdit />
      </figure>
    </div>
  );
}

export default PetCard;
