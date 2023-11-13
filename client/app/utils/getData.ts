import { getSession } from "@auth0/nextjs-auth0";
import axios, { AxiosResponse } from "axios";
import type { ProfileType } from "../types/profile.type";

export const getData = async (): Promise<ProfileType> => {
  const Session = await getSession();

  if (Session) {
    const response = await axios.get(
      `http://localhost:3001/petowner/login?email=${Session.user.email}&picture=${Session.user.picture}`
    );

    return response.data;
  }
  throw new Error("No session detected");
};
