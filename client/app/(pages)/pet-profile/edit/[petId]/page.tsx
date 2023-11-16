// "use client";
import React from "react";
import PetProfileEditLayout from "@/app/layouts/pet-profile/PetProfileEdit";
import { getPetData } from "@/app/utils/getPetData";
import { redirect } from 'next/navigation'

async function EditPet({params}:{params:{petId:string}}) {
  const petId = params.petId
  
  const petData = await getPetData(petId);

  if(!petData) return redirect(`/pet-profile/add?newId=${petId}`)

  return (
    <main className="main_container">
      <PetProfileEditLayout petData={petData}/>
    </main>
  );
}

export default EditPet;
