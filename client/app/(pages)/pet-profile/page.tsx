import React from "react";
import AddPet from "@/app/components/add-pet/AddPet";
import PetCard from "@/app/components/pet-card/PetCard";
import { getData } from "@/app/utils/getData";

async function Pets() {
  const data = await getData();

  return (
    <main className="main_container">
      <div className={`container`}>
        {data?.pets?.length ? (
          data.pets?.map((pet, index: number) => (
            <PetCard
              petId={pet.id}
              profileImage={pet.picture}
              name={pet.name}
              race={pet.race}
              location={data.location}
              key={index}
            />
          ))
        ) : (
          <AddPet />
        )}
      </div>
    </main>
  );
}

export default Pets;
