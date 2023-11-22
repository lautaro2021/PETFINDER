import { Router } from "express";
import { createQRsByUUID, getAllQRs } from "../controllers/qr.controller.js";

const router = Router();

router.get('/qr-generator', getAllQRs)
router.post('/qr-generator', createQRsByUUID)

export default router;