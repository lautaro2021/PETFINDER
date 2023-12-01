import React from "react";
import { getData } from "@/app/utils/getData";
import FormProfile from "./FormProfile";

async function UserProfile() {
  const data = await getData();

  return <FormProfile data={data} />;
}

export default UserProfile;
