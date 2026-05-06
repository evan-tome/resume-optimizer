import { Request, Response } from 'express';
import { analyzeResume } from '../services/analyzeService';

export function analyzeResumeController(req: Request, res: Response) {
    const { resumeText, jobText } = req.body

    if (!resumeText || !jobText) {
        return res.status(400).json({ error: "Missing input" });
    }

    const result = analyzeResume(resumeText, jobText);

    return res.json(result);
}