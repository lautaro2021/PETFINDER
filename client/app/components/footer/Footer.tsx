"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import style from "./footer.module.css";
import type { Claims } from "@auth0/nextjs-auth0/edge";

function Footer({ user }: { user?: Claims }) {
  const pathname = usePathname();

  if (user && Object.keys(user).length) {
    if (pathname !== "/login" && pathname !== "/register") {
      return (
        <footer className={style.footer}>
          <nav>
            <img
              src={user?.picture}
              width={50}
              height={50}
              className={style.profile_picture}
              alt="profile image icon"
              title="profile image icon"
            />
            <Link href={"/pet-profile"}>
              <button
                style={{
                  background: `${
                    pathname.split("/")[1] === "pet-profile"
                      ? "rgba(77, 77, 77, 0.53)"
                      : "none"
                  }`,
                }}
              >
                <img
                  src="/assets/icons/dog.svg"
                  alt="pet icon"
                  title="pet icon"
                />
              </button>
            </Link>
            <Link href={"/"}>
              <button
                style={{
                  background: `${
                    pathname === "/" ? "rgba(77, 77, 77, 0.53)" : "none"
                  }`,
                }}
              >
                <img
                  src="/assets/icons/menu.svg"
                  alt="dashboard icon"
                  title="dashboard icon"
                />
              </button>
            </Link>
            <Link href={"/profile"}>
              <button
                style={{
                  background: `${
                    pathname === "/profile" ? "rgba(77, 77, 77, 0.53)" : "none"
                  }`,
                }}
              >
                <img
                  src="/assets/icons/profile.svg"
                  alt="profile icon"
                  title="profile icon"
                />
              </button>
            </Link>
            <div className={style.logout_container}>
              <a
                href="https://polytusk.com.ar/categoria-producto/qrsmart/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/icons/shop.svg"
                  alt="shop icon"
                  title="shop icon"
                />
              </a>
              <a href="/api/auth/logout">
                <img
                  src="/assets/icons/logout.svg"
                  alt="logout icon"
                  title="logout icon"
                />
              </a>
            </div>
          </nav>
        </footer>
      );
    }
  }
}

export default Footer;
