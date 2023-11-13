import React from "react";
import PetProfileLayout from "@/app/layouts/pet-profile/PetProfile";
import { getData } from "@/app/utils/getData";

async function AddPet() {
  const data = await getData();

  return (
    <main className="main_container">
      {data && <PetProfileLayout userId={data.id} />}
    </main>
  );
}

export default AddPet;
