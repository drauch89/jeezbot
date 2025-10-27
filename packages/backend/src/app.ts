import express from 'express';
import { generateReply } from './bot';

const app = express();
app.use(express.json());

app.post('/api/message', (req, res) => {
  const message = String(req.body?.message ?? '');
  const reply = generateReply(message);
  res.json({ reply });
});

export default app;
