# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a web design agency system for building full stack web projects. The workflow involves cloning/recreating existing website designs and customizing their layout, content, and branding for clients.

## Project Structure

Each client project lives in its own subdirectory:

```
testClaude2/
├── projects/
│   └── <client-name>/     # One folder per client project
│       ├── frontend/      # UI (HTML/CSS/JS or framework)
│       └── backend/       # API / server if needed
├── shared/                # Reusable components, utilities, assets
└── CLAUDE.md
```

## Stack Decisions

Stack is chosen per project based on the site being recreated. Default choices:

- **Static sites**: Plain HTML + CSS + vanilla JS (or Tailwind CSS)
- **Dynamic/interactive sites**: React + Vite
- **Full stack**: React frontend + Node.js/Express backend
- **CMS-driven**: Next.js with a headless CMS (e.g., Sanity, Contentful)

## Common Commands

Commands vary per project but follow these conventions. Run from the project folder:

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design & Customization Workflow

1. Analyze the reference website's layout, color palette, typography, and component structure
2. Recreate the structure with clean, semantic HTML
3. Apply custom branding: colors, fonts, logo, copy
4. Replace placeholder content with client-specific content
5. Ensure responsiveness across mobile, tablet, and desktop

## Key Conventions

- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, etc.)
- CSS custom properties (`--color-primary`, `--font-heading`) for easy theming per client
- Keep client assets (images, fonts, icons) in `assets/` within the project folder
- Mobile-first responsive design
