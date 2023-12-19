import { Router } from "express";
import { getPet, getAllPet, createPet, updatePet, deletePet } from "../controllers/pet.controller.js";

const router = Router();

router.get('/api/pet', getAllPet)
router.post('/api/pet', createPet)
router.get('/api/pet/:id', getPet)
router.put('/api/pet/:id', updatePet)
router.delete('/api/pet/:id', deletePet)

export default router;