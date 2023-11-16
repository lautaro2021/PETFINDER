"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./screen-loader.module.css";

function ScreenLoader() {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {flag ? (
        <section className={style.section}>
          <figure>
            <Image
              src="/assets/images/polytusk.png"
              fill
              alt="Polytusk logo - loader"
              title="Polytusk loader"
            />
          </figure>
          <img src="/assets/icons/loader.png" />
        </section>
      ) : null}
    </>
  );
}

export default ScreenLoader;
