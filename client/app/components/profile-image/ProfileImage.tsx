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
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={handler}
        ></input>
        <img
          src={src ? src : "/assets/images/default_image.png"}
          className={style.primary_image}
        />
        <div className={style.icon_container}>
          <MdEdit />
        </div>
      </figure>
    </>
  );
}

export default ProfileImage;
