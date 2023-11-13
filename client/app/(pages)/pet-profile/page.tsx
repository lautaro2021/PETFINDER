import React from "react";
import AddPet from "@/app/components/add-pet/AddPet";
import PetCard from "@/app/components/pet-card/PetCard";
import { getData } from "@/app/utils/getData";

async function PetProfile() {
  const data = await getData();

  return (
    <main className="main_container">
      {data &&
        data.pets?.map((pet, index: number) => (
          <PetCard
            petId={pet.id}
            name={pet.name}
            race={pet.race}
            location={data.location}
            key={index}
          />
        ))}
      <AddPet />
    </main>
  );
}

export default PetProfile;
