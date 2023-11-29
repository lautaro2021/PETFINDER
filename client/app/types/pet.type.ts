import { ProfileType } from "./profile.type";

export type PetType = {
  id?: string;
  petOwnerId?: number;
  pet_owner?: ProfileType;
  picture?: string;
  name?: string;
  surname?: string;
  nickname?: string;
  gender?: string;
  age?: string;
  race?: string;
  disease?: string;
  diseaseType?: string;
  treatment?: string;
  treatmentType?: string;
  vaccines?: string;
  castrated?: string;
  petshop?: string;
  veterinary?: string;
  info?: string;
};
