---
description: Common dev commands for projects that use npm. Apply when running, building, or previewing a project.
globs: ["**/package.json", "**/vite.config.*", "**/next.config.*"]
alwaysApply: false
---

Run all commands from inside the project folder (e.g. `projects/<client-name>/frontend/`):

```bash
npm install       # Install dependencies
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

For plain HTML projects (no package.json), open `index.html` directly in the browser — no server needed.
