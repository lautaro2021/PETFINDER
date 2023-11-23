"use client";
import { redirect, usePathname } from "next/navigation";
import type { Claims } from "@auth0/nextjs-auth0/edge";

export default function RedirectLogin({ user }: Claims) {
  const pathname = usePathname();

  console.log(pathname);

  if (!user) {
    const petProfileURL = pathname.split("/");
    if (
      petProfileURL[1] === "pet-profile" &&
      petProfileURL[2] !== "add" &&
      petProfileURL[2] !== "edit"
    ) {
      return null;
    }
    redirect("/api/auth/login");
  }
  return null;
}
