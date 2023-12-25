import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { NEXT_PUBLIC_BACK_URL } from "@/app/config/config";
import type { ProfileType } from "../../types/profile.type";
import type { PetType } from "@/app/types/pet.type";

type FetchType = "petowner" | "pet";

type FetchFunction = (user: any, id?: string) => Promise<ProfileType | PetType>;

const fetchFunctions: Record<FetchType, FetchFunction> = {
  petowner: async (user) => {
    const response = await axios.get(
      `${NEXT_PUBLIC_BACK_URL}/petowner/login?email=${user.email}&picture=${user.picture}&name=${user.given_name}&surname=${user.family_name}`
    );
    return response.data;
  },
  pet: async (_, id) => {
    const response = await axios.get(`${NEXT_PUBLIC_BACK_URL}/pet/${id}`);
    return response.data;
  },
};

export const useClientData = (fetchType: FetchType, id?: string) => {
  const { user } = useUser();
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        if (fetchFunctions[fetchType]) {
          try {
            const data = await fetchFunctions[fetchType](user, id);
            setData(data);
            setIsLoading(false);
          } catch (error) {
            console.log(error);
            throw new Error();
          }
        }
      };

      fetchData();
    }
  }, [user, id, fetchType]);

  return { data, isLoading };
};
