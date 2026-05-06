import { Request, Response } from 'express';

export const uploadResume = (req: Request, res: Response) => {
    try {
        const { resumeText } = req.body;
        if (!resumeText) {
            return res.status(400).json({ error: "No resume text provided" });
        }

        return res.json({
            message: "Resume uploaded successfully",
            length: resumeText.length
        });
    } catch (err) {
        return res.status(500).json({ error: "Failed to upload resume" });
    }
}