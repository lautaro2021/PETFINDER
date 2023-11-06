import React from "react";
import Link from "next/link";
import style from "./footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <nav>
        <Link href={""}>
          <button>
            <img src="/assets/icons/dog.svg" />
          </button>
        </Link>
        <Link href={""}>
          <button>
            <img src="/assets/icons/menu.svg" />
          </button>
        </Link>
        <Link href={""}>
          <button>
            <img src="/assets/icons/profile.svg" />
          </button>
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
