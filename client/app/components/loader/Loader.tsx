'use client'
import React from "react";
import style from "./loader.module.css";
import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div className={style.container}>
      <Oval />
    </div>
  );
}

export default Loader;
