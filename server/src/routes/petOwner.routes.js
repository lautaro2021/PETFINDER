import {Router} from 'express';
import { getAllPetOwner, getPetOwner, createPetOwner, updatePetOwner, deletePetOwner, getPetOwnerByEmail } from '../controllers/petOwner.controller.js';

const router = Router();

router.get('/petowner', getAllPetOwner)
router.get('/petowner/login', getPetOwnerByEmail)
router.post('/petowner', createPetOwner)
router.get('/petowner/:id', getPetOwner)
router.put('/petowner/:id', updatePetOwner)
router.delete('/petowner/:id', deletePetOwner)

export default router;