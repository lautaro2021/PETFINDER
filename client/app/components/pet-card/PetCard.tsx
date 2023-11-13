import React from "react";
import Link from "next/link";
import style from "./pet-card.module.css";
import { MdEdit } from "react-icons/md";
import InfoRow from "./InfoRow";

function PetCard({
  petId,
  name,
  race,
  location,
}: {
  petId?: number;
  name: string;
  race?: string;
  location?: string;
}) {
  return (
    <Link href={`/pet-profile/edit?pet=${petId}`}>
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
    </Link>
  );
}

export default PetCard;
