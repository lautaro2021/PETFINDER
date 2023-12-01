"use client";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RedirectLogin({ user }: any) {
  let IDpetLS;
  const pathname = usePathname();

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
  useEffect(() => {
    IDpetLS = localStorage.getItem("IDpetRedirect");
    if (IDpetLS) {
      localStorage.removeItem("IDpetRedirect");
      return redirect(`/pet-profile/add/${IDpetLS}`);
    }
  }, []);
  return null;
}
