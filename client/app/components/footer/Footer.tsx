"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import style from "./footer.module.css";

function Footer() {
  const pathname = usePathname();

  if (pathname !== "/login" && pathname !== "/register") {
    return (
      <footer className={style.footer}>
        <nav>
          <Link href={"/pet-profile"}>
            <button
              style={{
                background: `${
                  pathname === "/pet-profile"
                    ? "rgba(77, 77, 77, 0.53)"
                    : "none"
                }`,
              }}
            >
              <img src="/assets/icons/dog.svg" />
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
              <img src="/assets/icons/menu.svg" />
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
              <img src="/assets/icons/profile.svg" />
            </button>
          </Link>
        </nav>
      </footer>
    );
  }
}

export default Footer;
