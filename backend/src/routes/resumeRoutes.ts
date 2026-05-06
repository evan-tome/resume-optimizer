import express from 'express';
import { uploadResume } from '../controllers/resumeController';

const router = express.Router();

router.post('/upload', uploadResume);

export default router;