"use client";
import React from "react";
import AddPet from "@/app/components/add-pet/AddPet";
import PetCard from "@/app/components/pet-card/PetCard";
import { useClientData } from "@/app/utils/hooks/useClientData";
import type { PetType } from "@/app/types/pet.type";
import Loader from "@/app/components/loader/Loader";

function Pets() {
  const fetchType = "petowner";
  const { data } = useClientData(fetchType);

  return (
    <main className="main_container">
      {data ? (
        <div className={`container`}>
          {data?.pets?.length ? (
            data.pets?.map((pet: PetType, index: number) => (
              <PetCard
                petId={pet.id}
                profileImage={pet.picture}
                name={pet.name}
                race={pet.race}
                location={data?.location}
                province={data?.province}
                key={index}
              />
            ))
          ) : (
            <AddPet />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default Pets;
