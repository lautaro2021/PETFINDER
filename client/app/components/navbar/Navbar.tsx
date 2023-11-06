import React from "react";
import style from "./navbar.module.css";
import { IoLogOutOutline } from "react-icons/io5";

function Navbar() {
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

export default Navbar;
