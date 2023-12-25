"use client";
import PetProfileEditLayout from "@/app/layouts/pet-profile/PetProfileEdit";
import { redirect } from "next/navigation";
import { useClientData } from "@/app/utils/hooks/useClientData";
import Loader from "@/app/components/loader/Loader";

function EditPet({ params }: { params: { petId: string } }) {
  const petId = params.petId;

  const fetchType = "pet";

  const { data, isLoading } = useClientData(fetchType, petId);

  console.log(data);

  if (!data && !isLoading) return redirect(`/pet-profile/add?newId=${petId}`);

  return (
    <main className="main_container">
      {data ? <PetProfileEditLayout petData={data} /> : <Loader />}
    </main>
  );
}

export default EditPet;
