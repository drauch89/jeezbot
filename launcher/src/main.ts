import { app, BrowserWindow, shell } from 'electron';
import * as path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Open VS Code in the repo and show session note
  const repoPath = path.resolve(__dirname, '..', '..');
  const sessionNote = path.join(repoPath, 'docs', 'session-2025-10-27.md');
  // Use the user's default browser to open the session note in GitHub (or local file)
  shell.openPath(sessionNote).catch(() => {});

  // Open repository root in VS Code if `code` is available
  shell.openExternal('vscode://file/' + repoPath);

  // Also open the GitHub PR for the backup branch
  shell.openExternal('https://github.com/drauch89/jeezbot/pull/new/backup/session-20251027130142');

  win.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent('<h2>Jeezbot launcher</h2><p>VS Code and session notes should open automatically.</p>'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
