import express from 'express';
import cors from 'cors';
import resumeRoutes from "./routes/resumeRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/resume', resumeRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;