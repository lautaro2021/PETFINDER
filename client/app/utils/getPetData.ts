import axios from "axios";
import type { PetType } from "../types/pet.type";
import { NEXT_PUBLIC_BACK_URL } from "../config/config";

export const getPetData = async (id: string): Promise<PetType> => {
  const petResponse = await axios
    .get(`${NEXT_PUBLIC_BACK_URL}/pet/${id}`)
    .then((res) => res.data)
    .catch(()=>{
      return null
    });
  return petResponse;
};
