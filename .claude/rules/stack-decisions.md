---
description: Defines which tech stack to use for each type of project. Apply when starting a new client project or choosing a framework.
alwaysApply: false
---

Stack is chosen per project based on the site being recreated:

- **Static sites**: Plain HTML + CSS + vanilla JS (or Tailwind CSS via CDN)
- **Dynamic/interactive sites**: React + Vite
- **Full stack**: React frontend + Node.js/Express backend
- **CMS-driven**: Next.js with a headless CMS (e.g., Sanity, Contentful)

**Important:** Node.js may not be installed on this machine. Default to plain HTML + Tailwind CDN unless the user confirms Node.js is available. Never assume `npm` works without verifying first.
