import axios from "axios";
import type { PetType } from "../types/pet.type";
import { BACK_API } from "../(pages)/qr-generator/page";

export const getPetData = async (id: string): Promise<PetType> => {
  const petResponse = await axios
    .get(`${BACK_API}/pet/${id}`)
    .then((res) => res.data)
    .catch(()=>{
      return null
    });
  return petResponse;
};
