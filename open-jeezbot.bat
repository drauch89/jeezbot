@echo off
REM Jeezbot resume script — opens VS Code, session note, backup PR, installs deps and starts dev servers.

REM Resolve script directory (ends with backslash)
set SCRIPT_DIR=%~dp0

necho Opening project in VS Code...
start "" code "%SCRIPT_DIR%"
timeout /t 1 > nul

necho Opening session notes in VS Code...
start "" code "%SCRIPT_DIR%docs\session-2025-10-27.md"
timeout /t 1 > nul

necho Opening backup PR in your default browser...
start "" "https://github.com/drauch89/jeezbot/pull/new/backup/session-20251027130142"
timeout /t 1 > nul

necho Launching a dedicated PowerShell window to install dependencies and start dev servers...
start "" powershell -NoExit -Command "Set-Location -LiteralPath '%SCRIPT_DIR%'; Write-Host 'Running npm install... (this may take a while)'; npm install; if ($LASTEXITCODE -ne 0) { Write-Host 'npm install failed - check output'; } else { Write-Host 'npm install completed'; } ; Write-Host 'Starting dev servers: npm run start:dev (press Ctrl+C in this window to stop)'; npm run start:dev"

necho All set. If VS Code did not open, make sure the 'code' command is available in PATH.
echo The dev servers run in the separate PowerShell window opened above.
pause
