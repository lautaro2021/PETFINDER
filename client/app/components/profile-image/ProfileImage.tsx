"use client";
import React from "react";
import style from "./profile-image.module.css";
import { MdEdit } from "react-icons/md";

function ProfileImage({
  src,
  handler,
}: {
  src?: string;
  handler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {

  return (
    <>
      <figure className={style.figure}>
        <input type="file" accept="image/*" onChange={handler}></input>
        <img src={src} className={style.primary_image} />
        <div className={style.icon_container}>
          <MdEdit />
        </div>
      </figure>
    </>
  );
}

export default ProfileImage;
