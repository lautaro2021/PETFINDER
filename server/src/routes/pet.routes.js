import { Router } from "express";
import { getPet, getAllPet, createPet, updatePet, deletePet } from "../controllers/pet.controller.js";

const router = Router();

router.get('/pet', getAllPet)
router.post('/pet', createPet)
router.get('/pet/:id', getPet)
router.put('/pet/:id', updatePet)
router.delete('/pet/:id', deletePet)

export default router;