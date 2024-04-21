import { Router } from "express";
import { getAdminPassword, createAdminUser, updateAdminUser } from "../controllers/admin.controller.js";

const router = Router();

router.get('/ws/admin', getAdminPassword);
router.post('/ws/admin', createAdminUser)
router.put('/ws/admin', updateAdminUser);

export default router;