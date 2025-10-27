@echo off
REM Open Jeezbot project in VS Code, open session notes, and open PR for backup session branch.
REM Double-click this file to resume work.

:: Resolve script directory
set SCRIPT_DIR=%~dp0

:: Open project in VS Code (requires `code` CLI in PATH)
start "" code "%SCRIPT_DIR%"

:: Give VS Code a moment to open
timeout /t 1 >nul

:: Open session notes inside VS Code (will open a new window/tab if VS Code not already running)
start "" code "%SCRIPT_DIR%docs\session-2025-10-27.md"

:: Open the PR URL so you can review the backup branch (optional)
start "" "https://github.com/drauch89/jeezbot/pull/new/backup/session-20251027130142"

:: Helpful message
echo Opened project and session notes. If VS Code did not open, make sure the `code` command is available in PATH.
echo To start dev servers, open a terminal and run: npm run start:dev
pause
