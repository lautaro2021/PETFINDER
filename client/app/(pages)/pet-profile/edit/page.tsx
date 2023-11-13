"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PetProfileLayout from "@/app/layouts/pet-profile/PetProfile";
import { getPetData } from "@/app/utils/getPetData";
import type { PetType } from "@/app/types/pet.type";
import Loader from "@/app/components/loader/Loader";

function EditPet() {
  const searchParams = useSearchParams();
  const petId = searchParams.get("pet");

  const [petData, setPetData] = useState<PetType>();

  useEffect(() => {
    if (petId) {
      getPetData(petId)
        .then((res) => setPetData(res))
        .catch((error) => {
          throw new Error(error);
        });
    }
  }, [petId]);

  return (
    <main className="main_container">
      {!petData ? <Loader /> : <PetProfileLayout petData={petData} />}
    </main>
  );
}

export default EditPet;
