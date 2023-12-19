import { Router } from "express";
import { createQRsByUUID, getAllQRs } from "../controllers/qr.controller.js";

const router = Router();

router.get('/api/qr-generator', getAllQRs)
router.post('/api/qr-generator', createQRsByUUID)

export default router;