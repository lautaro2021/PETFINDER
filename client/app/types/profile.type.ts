import type { PetType } from "./pet.type";

export type ProfileType = {
  id?: number;
  name?: string;
  surname?: string;
  phone?: string;
  location?: string;
  province?: string;
  email: string | null | undefined;
  picture?: string;
  pets?: PetType[];
};
