import {Router} from 'express';
import { getAllPetOwner, getPetOwner, createPetOwner, updatePetOwner, deletePetOwner, getOrCreatePetOwnerByEmail } from '../controllers/petOwner.controller.js';

const router = Router();

router.get('/ws/petowner', getAllPetOwner)
router.get('/ws/petowner/login', getOrCreatePetOwnerByEmail)
router.post('/ws/petowner', createPetOwner)
router.get('/ws/petowner/:id', getPetOwner)
router.put('/ws/petowner/:id', updatePetOwner)
router.delete('/ws/petowner/:id', deletePetOwner)

export default router;