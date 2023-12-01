import { getSession } from "@auth0/nextjs-auth0";
import axios, { AxiosResponse } from "axios";
import type { ProfileType } from "../types/profile.type";
import { BACK_API } from "../(pages)/qr-generator/page";

export const getData = async (): Promise<ProfileType> => {
  const Session = await getSession();

  if (Session) {
    const response = await axios.get(
      `${BACK_API}/petowner/login?email=${Session.user.email}&picture=${Session.user.picture}&name=${Session.user.given_name}&surname=${Session.user.family_name}`
    );

    return response.data;
  }
  throw new Error("No session detected");
};
