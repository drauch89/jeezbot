Launcher

This Electron launcher opens VS Code on the project, opens the session notes, and opens the backup PR in your browser.

How to build (Windows):

1) Install dependencies:
   cd launcher
   npm install

2) Build an installer:
   npm run build

The built installer will be in `launcher/dist`.

Note: Building requires installed native tools (node-gyp, Python, Visual Studio Build Tools). If that is too heavy, use the provided `open-jeezbot.bat` instead (already in project root).
