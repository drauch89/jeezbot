<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This repository contains a monorepo for the "jeezbot" full-stack TypeScript chatbot. When generating code, prefer small, well-tested functions and place backend code under packages/backend and frontend code under packages/frontend.

Guidelines:
- Keep backend logic framework-agnostic and easily testable.
- Expose minimal, well-documented functions for bot logic to facilitate unit testing.
- Follow existing ESLint and Prettier rules in the project.
