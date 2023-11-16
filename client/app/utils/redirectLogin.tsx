'use client'
import { redirect, usePathname } from "next/navigation";

export default function RedirectLogin({user}:any){
  const pathname = usePathname();

  if(!user){
    const petProfileURL = pathname.split('/');
    if(petProfileURL[1] === "pet-profile" && petProfileURL[2] !== 'add' && petProfileURL[2] !== 'edit'){
      return null
    }
    redirect("/api/auth/login")
  }
  return null
}