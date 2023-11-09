import React from "react";
import AddPet from "@/app/components/add-pet/AddPet";
import PetCard from "@/app/components/pet-card/PetCard";

function PetProfile() {
  return (
    <main className="main_container">
      <PetCard name="Cloe" race="Gato gris" location="Rosario, Santa Fe" />
      <AddPet />
    </main>
  );
}

export default PetProfile;
