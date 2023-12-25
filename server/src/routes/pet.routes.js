import { Router } from "express";
import { getPet, getAllPet, createPet, updatePet, deletePet } from "../controllers/pet.controller.js";

const router = Router();

router.get('/ws/pet', getAllPet)
router.post('/ws/pet', createPet)
router.get('/ws/pet/:id', getPet)
router.put('/ws/pet/:id', updatePet)
router.delete('/ws/pet/:id', deletePet)

export default router;