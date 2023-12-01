import React from "react";
import PetProfileEditLayout from "@/app/layouts/pet-profile/PetProfileEdit";
import { getData } from "@/app/utils/getData";

async function AddPet({params}:{params: {newId?:string}}) {
  const data = await getData();
  return (
    <main className="main_container">
      {data && <PetProfileEditLayout userId={data.id} petId={params?.newId}/>}
    </main>
  );
}

export default AddPet;
