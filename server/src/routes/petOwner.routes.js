import {Router} from 'express';
import { getAllPetOwner, getPetOwner, createPetOwner, updatePetOwner, deletePetOwner } from '../controllers/petOwner.controller.js';

const router = Router();

router.get('/petowner', getAllPetOwner)
router.post('/petowner', createPetOwner)
router.get('/petowner/:id', getPetOwner)
router.put('/petowner/:id', updatePetOwner)
router.delete('/petowner/:id', deletePetOwner)

export default router;