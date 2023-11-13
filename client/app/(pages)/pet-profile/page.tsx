import React from "react";
import AddPet from "@/app/components/add-pet/AddPet";
import PetCard from "@/app/components/pet-card/PetCard";
import { Claims, getSession } from "@auth0/nextjs-auth0";
import axios, { AxiosResponse } from "axios";
import type { ProfileType } from "@/app/types/profile.type";

const getData = async (Session: Claims): Promise<AxiosResponse<ProfileType>> =>
  await axios.get(
    `http://localhost:3001/petowner/login?email=${Session.user.email}`
  );

async function PetProfile() {
  const Session = await getSession();
  let userData;

  if (Session) {
    userData = await getData(Session).then((res) => res.data);
  }

  return (
    <main className="main_container">
      {userData &&
        userData.pets?.map((pet, index: number) => (
          <PetCard name={pet.name} race={pet.race} location={""} key={index} />
        ))}
      <AddPet />
    </main>
  );
}

export default PetProfile;
