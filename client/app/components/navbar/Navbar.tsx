import React from "react";
import style from "./navbar.module.css";
import type { Claims } from "@auth0/nextjs-auth0";

function Navbar({ user }: { user: Claims }) {
  return (
    <header className={style.navbar}>
      <div>
        <img
          className={style.profile_image}
          src={user.picture}
          width={41}
          height={41}
        />
        <a href="/api/auth/logout">
          <img src="/assets/icons/logout.svg" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
