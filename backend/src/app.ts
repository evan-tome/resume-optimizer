import express from 'express';
import cors from 'cors';
import resumeRoutes from "./routes/resumeRoutes";
import analyzeRoutes from "./routes/analyzeRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/resume', resumeRoutes);
app.use("/api", analyzeRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;