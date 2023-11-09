import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <header className={style.navbar}>
      <div>
        <img className={style.profile_image} />
        <Link href="/api/auth/logout">
          <img src="/assets/icons/logout.svg" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
