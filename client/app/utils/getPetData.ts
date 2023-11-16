import axios from "axios";
import type { PetType } from "../types/pet.type";

export const getPetData = async (id: string): Promise<PetType> => {
  const petResponse = await axios
    .get(`http://localhost:3001/pet/${id}`)
    .then((res) => res.data)
    .catch(()=>{
      return null
    });
  return petResponse;
};
