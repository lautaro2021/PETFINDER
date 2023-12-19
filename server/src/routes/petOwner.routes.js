import {Router} from 'express';
import { getAllPetOwner, getPetOwner, createPetOwner, updatePetOwner, deletePetOwner, getOrCreatePetOwnerByEmail } from '../controllers/petOwner.controller.js';

const router = Router();

router.get('/api/petowner', getAllPetOwner)
router.get('/api/petowner/login', getOrCreatePetOwnerByEmail)
router.post('/api/petowner', createPetOwner)
router.get('/api/petowner/:id', getPetOwner)
router.put('/api/petowner/:id', updatePetOwner)
router.delete('/api/petowner/:id', deletePetOwner)

export default router;