import express from "express";
import { analyzeResumeController } from "../controllers/analyzeController";

const router = express.Router();

router.post("/analyze", analyzeResumeController);

export default router;