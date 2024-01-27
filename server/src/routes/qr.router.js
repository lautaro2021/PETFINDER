import { Router } from "express";
import { createQRsByUUID, getAllQRs } from "../controllers/qr.controller.js";

const router = Router();

router.get('/ws/qr-generator', getAllQRs)
router.post('/ws/qr-generator', createQRsByUUID)

export default router;