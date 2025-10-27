import express from 'express';
import { generateReply } from './bot';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/api/message', (req, res) => {
  const message = String(req.body?.message ?? '');
  const reply = generateReply(message);
  res.json({ reply });
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(port, () => {
  console.log(`Jeezbot backend listening on http://localhost:${port}`);
});
