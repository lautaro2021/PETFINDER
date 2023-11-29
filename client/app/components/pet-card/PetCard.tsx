import React from "react";
import Link from "next/link";
import style from "./pet-card.module.css";
import { MdEdit } from "react-icons/md";
import InfoRow from "./InfoRow";

function PetCard({
  petId,
  profileImage,
  name,
  race,
  location,
  province,
}: {
  petId?: string;
  profileImage?: string;
  name?: string;
  race?: string;
  location?: string;
  province?: string;
}) {
  return (
    <Link href={`/pet-profile/${petId}`}>
      <div className={style.container}>
        <img
          className={style.image_profile}
          src={profileImage ? profileImage : "/assets/images/default_image.png"}
        />
        <div className={style.text_container}>
          <h3>{name}</h3>
          <InfoRow icon={1} text={race} />
          <InfoRow icon={2} text={`${location}, ${province}`} />
        </div>
        <Link href={`/pet-profile/edit/${petId}`}>
          <figure>
            <MdEdit />
          </figure>
        </Link>
      </div>
    </Link>
  );
}

export default PetCard;
