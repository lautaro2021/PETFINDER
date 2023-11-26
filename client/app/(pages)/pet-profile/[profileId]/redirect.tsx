"use client"
import Loader from "@/app/components/loader/Loader";
import { redirect } from "next/navigation";
import { useEffect } from "react"

export default function RedirectPofilePet({profileId}:{profileId:string}){
  useEffect(()=>{
    localStorage.setItem("IDpetRedirect",profileId);
    redirect(`/pet-profile/add/${profileId}`);
  },[])

  return <Loader/>
}