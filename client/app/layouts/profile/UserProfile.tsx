import React from "react";
import axios from "axios";
import { getSession } from "@auth0/nextjs-auth0";
import FormProfile from "./FormProfile";

async function UserProfile() {
  const Session = await getSession();

  let data;
  if (Session) {
    data = await axios
      .get(`http://localhost:3001/petowner/login?email=${Session.user.email}`)
      .then((res) => res.data);
  }
  return <FormProfile data={data} user={Session?.user} />;
}

export default UserProfile;
