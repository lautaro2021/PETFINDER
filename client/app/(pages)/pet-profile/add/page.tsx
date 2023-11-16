import React from "react";
import PetProfileEditLayout from "@/app/layouts/pet-profile/PetProfileEdit";
import { getData } from "@/app/utils/getData";

async function AddPet({searchParams}:{searchParams: {newId?:string}}) {
  const data = await getData();

  return (
    <main className="main_container">
      {data && <PetProfileEditLayout userId={data.id} petData={{id: Number(searchParams?.newId)}}/>}
    </main>
  );
}

export default AddPet;
