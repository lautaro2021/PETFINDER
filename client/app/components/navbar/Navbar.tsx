import React from "react";
import style from "./navbar.module.css";
import type { Claims } from "@auth0/nextjs-auth0";

function Navbar({ user }: { user: Claims }) {
  return (
    <header className={style.navbar}>
      {Object.keys(user).length ? (
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
      ) : (
        <div>
          <img
            className={style.logo}
            src="/assets/images/logo.png"
            height={50}
          />
          <a href="/api/auth/logout" target="_blank" rel="noreferrer">
            <img src="/assets/icons/shop.svg" width={25} height={25} />
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
