---
description: Explains the repo layout and where each client project lives. Apply when creating new projects, adding files, or navigating the codebase.
alwaysApply: true
---

This is a web design agency system. Each client project lives in its own subdirectory:

```
testClaude2/
├── projects/
│   └── <client-name>/     # One folder per client project
│       ├── frontend/      # UI (HTML/CSS/JS or framework)
│       └── backend/       # API / server if needed
├── shared/                # Reusable components, utilities, assets
└── CLAUDE.md
```

Never put client files outside `projects/<client-name>/`. Keep client assets (images, fonts, icons) in `assets/` within the project folder.
