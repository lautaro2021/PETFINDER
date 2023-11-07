"use client";
import React from "react";
import { usePathname } from "next/navigation";
import style from "./navbar.module.css";

function Navbar() {
  const pathname = usePathname();

  if (pathname !== "/login" && pathname !== "/register") {
    return (
      <header className={style.navbar}>
        <div>
          <img className={style.profile_image} />
          <button>
            <img src="/assets/icons/logout.svg" />
          </button>
        </div>
      </header>
    );
  }
}

export default Navbar;
