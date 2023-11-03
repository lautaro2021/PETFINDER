import {Router} from 'express';
import { getPetOwner, createPetOwner } from '../controllers/petOwner.controller.js';

const router = Router();

router.get('/petowner/:id', getPetOwner)
router.post('/petowner', createPetOwner)
router.put('/petowner/:id')
router.delete('/petowner/:id')

export default router;