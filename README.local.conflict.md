<<<<<<< HEAD
<!-- CI badge: replace OWNER and REPO with your GitHub values -->

[![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/REPO/actions/workflows/ci.yml)

Jeezbot — Full-stack TypeScript chatbot monorepo

Quick start (Windows PowerShell):

1) Install dependencies (root workspace uses npm workspaces):

   npm install

2) Run development servers (backend + frontend concurrently):

   npm run start:dev

3) Build both packages:

   npm run build

Backend
- API: POST /api/message  { "message": "..." } -> { "reply": "..." }
- Default backend port: 3000

Frontend
- Vite dev server (default port 5173) proxies /api to backend during development.

Docker (backend)
- Build: docker build -t jeezbot-backend packages/backend
- Run: docker run -p 3000:3000 --env-file packages/backend/.env -d jeezbot-backend

Notes
- Scripts are written to work in PowerShell on Windows. If you use another shell, adjust accordingly.
- Extend bot logic in packages/backend/src/bot.ts. Unit tests for bot logic are in packages/backend/tests.

## Git hooks (Husky)

This repository includes a Husky pre-commit hook that runs the workspace linter before commits. To enable hooks locally after cloning or after changing dev dependencies, run (PowerShell):

```powershell
npm install
npx husky install
``` 

The project already defines a `prepare` script (`npm run prepare`) which calls `husky install` when run as part of an `npm install`. The pre-commit hook will run `npm run lint` and abort the commit if linting fails. To skip hooks for a single commit you can use `git commit --no-verify`.

License: MIT
=======
# jeezbot
Bot for Jeez discord
>>>>>>> origin/main
