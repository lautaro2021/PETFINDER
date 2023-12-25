"use client";
import { useClientData } from "@/app/utils/hooks/useClientData";
import FormProfile from "./FormProfile";
import Loader from "@/app/components/loader/Loader";

function UserProfile() {
  const fetchType = "petowner";
  const { data } = useClientData(fetchType);

  return <>{data ? <FormProfile data={data} /> : <Loader />}</>;
}

export default UserProfile;
