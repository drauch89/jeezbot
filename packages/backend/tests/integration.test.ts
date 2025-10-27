import request from 'supertest';
import express from 'express';
import { generateReply } from '../src/bot';
import app from '../src/app';

describe('integration', () => {
  test('POST /api/message returns reply', async () => {
    const res = await request(app).post('/api/message').send({ message: 'hello' });
    expect(res.status).toBe(200);
    expect(res.body.reply).toMatch(/Jeezbot|Hello/i);
  });
});
