---
description: HTML and CSS coding conventions for all frontend work in this repo. Apply when writing or editing any HTML or CSS file.
globs: ["**/*.html", "**/*.css", "**/*.jsx", "**/*.tsx"]
alwaysApply: false
---

- Use semantic HTML5 elements: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`
- Define all theme values as CSS custom properties at `:root` level: `--color-primary`, `--font-heading`, `--space-md`, etc. — makes per-client theming a one-line change
- Mobile-first responsive design: base styles target mobile, use `min-width` media queries to scale up
- No inline styles except for dynamic JS-driven values
- Navigation links must point to actual `.html` files — never use hash anchors (`#page`) for cross-page navigation
