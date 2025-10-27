Backend — Jeezbot

Quick start (Windows PowerShell):

1) Install dependencies (from repo root):
   npm install

2) Create environment file for development:
   Copy-Item .\packages\backend\.env.example .\packages\backend\.env

3) Run in dev mode (nodemon + ts-node):
   npm run dev --prefix packages/backend

4) Build for production:
   npm run build --prefix packages/backend

5) Run built server:
   npm run start --prefix packages/backend

6) Run tests:
   npm test --prefix packages/backend

Notes
- The server exposes POST /api/message which accepts JSON { "message": "..." } and returns { "reply": "..." }.
- Extend the bot logic in `packages/backend/src/bot.ts`.
- Environment variables are loaded from `.env` (see `.env.example`).
