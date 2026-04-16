# Design Token Inventory — tailwindcss.com Clone for "Windflow"

Extracted from: https://tailwindcss.com
Date: 2026-04-16

---

## COLOR PALETTE

| Token | Value | Usage |
|-------|-------|-------|
| Background (page) | `#ffffff` / white | Main page background |
| Surface (cards) | `#f8fafc` / gray-50 | Card surfaces |
| Text Main | `#030712` / gray-950 | Primary headings |
| Text Body | `#111827` / gray-900 | Body paragraphs |
| Text Muted | `#6b7280` / gray-500 | Subheadings, descriptions |
| Text Light | `#9ca3af` / gray-400 | Captions |
| Primary Accent | `#06b6d4` / cyan-500 | Tailwind's signature cyan — buttons, nav Plus, badge |
| Primary Accent Dark | `#0891b2` / cyan-600 | Button hover, inline code |
| Primary Accent Light | `#cffafe` / cyan-100 | Inline code background tint |
| Emerald Accent | `#10b981` / emerald-500 | Feature icons, badge dot, gradient stop |
| Emerald BG | `#f0fdf4` / emerald-50 | Feature icon bg, badge background |
| Emerald Border | `#d1fae5` / emerald-100 | Badge border, card hover border |
| Border | `#e5e7eb` / gray-200 | Card borders, dividers |
| Nav Background | `rgba(255,255,255,0.85)` | Semi-transparent sticky nav |
| Nav Border | `#f3f4f6` / gray-100 | Navbar bottom border |
| Button Primary BG | `#0f172a` / slate-900 | "Get started" dark button |
| Button Primary Hover | `#1e293b` / slate-800 | Hover state |
| Code Block BG | `#0f172a` / slate-900 | Dark code blocks |
| Code Block Header | `linear-gradient(to right, #1e293b, #0f172a)` | Code header bar |
| Code Text | `#e2e8f0` / slate-200 | Code body text |
| Code Keyword | `#93c5fd` / blue-300 | `export`, `default`, element names |
| Code String | `#86efac` / green-300 | String values |
| Code Attr | `#f9a8d4` / pink-300 | Attribute names |
| Code Value | `#c4b5fd` / violet-300 | Resolved values |
| Code Comment | `#64748b` / slate-500 | Comments |
| Footer BG | `#030712` / gray-950 | Dark footer |
| Footer Border | `#1e293b` / slate-800 | Footer top divider |
| Footer Text | `#94a3b8` / slate-400 | Footer body text |
| Footer Text Dim | `#64748b` / slate-500 | Footer copyright |
| Hero Orb 1 | `rgba(224,242,254,0.7)` / sky-100-ish | Left orb gradient |
| Hero Orb 2 | `rgba(209,250,229,0.6)` / emerald-100-ish | Right orb gradient |
| Mint Custom 100 | `oklch(0.97 0.15 145)` | Original Tailwind v4 custom token |
| Mint Custom 500 | `oklch(0.7 0.28 145)` | Original Tailwind v4 custom token |

---

## TYPOGRAPHY

| Token | Value |
|-------|-------|
| Heading Font | "Inter", sans-serif |
| Body Font | "Inter", sans-serif |
| Mono Font | "IBM Plex Mono", monospace |
| Google Fonts URL | `https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=IBM+Plex+Mono:wght@400;500&display=swap` |
| H1 Size (mobile) | clamp(2.25rem, 5vw, 4.5rem) — responsive fluid |
| H1 Weight | 800 (extrabold) |
| H1 Line Height | 1.08 |
| H1 Letter Spacing | -0.03em |
| H2 Size | text-3xl md:text-4xl (1.875rem → 2.25rem) |
| H2 Weight | 700 (bold) |
| H2 Letter Spacing | -0.02em |
| H3 Size | text-sm–text-base |
| H3 Weight | 600 (semibold) |
| Body Size | text-lg (1.125rem) |
| Body Line Height | 1.75 (leading-relaxed) |
| Small/Caption | text-xs–text-sm |
| Code Size | 0.8125rem (13px) |
| Code Line Height | 1.8 |
| Nav Label Size | text-xs font-semibold uppercase tracking-widest |
| Nav Link Size | text-sm font-medium |

---

## SPACING SCALE

| Token | Value | Usage |
|-------|-------|-------|
| Section Padding Y | py-24 md:py-32 (96px→128px) | All major sections |
| Hero Padding Top | pt-24 md:pt-32 (96px→128px) | Hero top spacing |
| Hero Padding Bottom | pb-20 md:pb-28 (80px→112px) | Hero bottom spacing |
| Card Padding | p-6 (24px) | Feature cards |
| Nav Height | h-16 (64px) | Navbar |
| Nav Padding X | px-6 lg:px-8 | Nav horizontal |
| Max Container | max-w-7xl (1280px) | All sections |
| Feature Grid Gap | gap-5 (20px) | Card grid |
| Button Padding | px-6 py-3 (24px×12px) | Standard CTA |
| Hero Badge Bottom | mb-7 | Below badge |
| Headline Bottom | mb-6 | Below H1 |
| Subheading Bottom | mb-10 | Below subheading |
| CTAs Bottom | mb-16 | Below buttons, before code |
| Section Header Bottom | mb-16 | Below section titles |
| Plus Cards Bottom | mb-10 | Before CTA |
| Footer Cols Bottom | mb-14 | Before footer bottom bar |

---

## BORDERS & RADII

| Token | Value |
|-------|-------|
| Radius XS | rounded (0.25rem) |
| Radius SM | rounded-md (0.375rem) |
| Radius MD | rounded-lg (0.5rem) |
| Radius LG | rounded-xl (0.75rem) |
| Radius XL | rounded-2xl (1rem) — feature cards |
| Radius Full | rounded-full (9999px) — badges, dots |
| Border Width | 1px |
| Card Border | `#e5e7eb` |
| Card Hover Border | `#d1fae5` (emerald-100) |
| Nav Bottom Border | `#f3f4f6` |
| Code Block Border | `rgba(255,255,255,0.06)` |
| Section Divider | `#f3f4f6` (border-t) |

---

## SHADOWS

| Token | Value | Usage |
|-------|-------|-------|
| shadow-sm | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Subtle lift |
| shadow-md | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | Cards |
| shadow-lg | `0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.06)` | Card hover |
| shadow-xl (code) | `0 20px 25px -5px rgb(0 0 0 / 0.12), 0 8px 10px -6px rgb(0 0 0 / 0.08)` | Code blocks |
| Button hover shadow | `0 4px 12px rgb(15 23 42 / 0.25)` | Primary button |
| Nav scroll shadow | `0 1px 3px 0 rgb(0 0 0 / 0.07)` | Sticky nav on scroll |
| Default card | `0 1px 3px 0 rgb(0 0 0 / 0.05)` | Resting card state |

---

## GRADIENTS

| Token | Value | Usage |
|-------|-------|-------|
| Hero Orb 1 | `radial-gradient(ellipse at center, rgba(224,242,254,0.7) 0%, transparent 70%)` | Left hero bg |
| Hero Orb 2 | `radial-gradient(ellipse at center, rgba(209,250,229,0.6) 0%, transparent 70%)` | Right hero bg |
| Logo/Badge | `linear-gradient(135deg, #06b6d4, #10b981)` | Logo bg, decorative accents |
| Feature Section BG | `linear-gradient(to bottom right, #f8fafc, #f0fdf4)` | Features, Plus sections |
| Headline Gradient | `linear-gradient(135deg, #06b6d4, #10b981)` | "HTML." gradient text |
| Plus Card 1 | `linear-gradient(135deg, #06b6d4, #3b82f6)` | Templates top bar + count |
| Plus Card 2 | `linear-gradient(135deg, #10b981, #06b6d4)` | UI Blocks top bar + count |
| Plus Card 3 | `linear-gradient(135deg, #8b5cf6, #06b6d4)` | UI Kit top bar + count |
| Code Block Header | `linear-gradient(to right, #1e293b, #0f172a)` | Code window top bar |

---

## ANIMATIONS & TRANSITIONS

| Name | @keyframes Definition | Duration | Applied To |
|------|----------------------|----------|-----------|
| fadeInUp | `from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) }` | 0.6s ease-out | Hero badge, H1, subtext |
| fadeInUp delay-1 | same keyframe | 0.6s ease-out, delay 0.15s | Hero subheading |
| fadeInUp delay-2 | same keyframe | 0.6s ease-out, delay 0.3s | Hero CTA buttons |
| fadeInUp delay-3 | same keyframe | 0.6s ease-out, delay 0.45s | Hero code block |
| fadeIn | `from { opacity:0 } to { opacity:1 }` | 0.5s ease-out | Hero badge wrapper |
| slideDown | `from { opacity:0; transform:translateY(-8px) } to { opacity:1; transform:translateY(0) }` | 0.4s ease-out | Navbar on mount |
| float | `0%,100% { transform:translateY(0) } 50% { transform:translateY(-8px) }` | 3s ease-in-out infinite | Decorative elements |
| pulseSoft | `0%,100% { opacity:1 } 50% { opacity:0.6 }` | 2.5s ease-in-out infinite | Badge green dot |
| All animations | `animation-fill-mode: forwards` | — | Prevents flash-back to opacity:0 |
| Button hover | `transform: translateY(-1px)` + shadow | 180ms ease | Primary + secondary buttons |
| Button active | `transform: translateY(0)` | instant | Primary button press |
| Card hover | `transform: translateY(-4px)` + shadow-lg + border | 220ms ease | Feature cards |
| Nav link color | `color` property | 150ms ease | Navbar links |
| Footer link color | `color` property | 150ms ease | Footer links |
| Nav scroll shadow | `box-shadow` | 200ms ease | Navbar on scroll |

---

## LAYOUT

| Token | Value |
|-------|-------|
| Max Container Width | 1280px / max-w-7xl |
| Nav Height | 64px / h-16 |
| Nav Position | sticky top-0 z-50 |
| Nav Backdrop | backdrop-blur-sm bg-white/85 |
| Nav Border | border-b border-[#f3f4f6] |
| Hero Layout | text-center, flex-col items-center |
| Features Grid | grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 |
| How It Works | grid-cols-1 lg:grid-cols-2 gap-16 |
| Plus Grid | grid-cols-1 md:grid-cols-3 gap-5 |
| Footer Grid | grid-cols-2 md:grid-cols-5 gap-10 |
| Hero H1 Max Width | max-w-3xl |
| Hero Subheading Max Width | max-w-2xl |
| Section Copy Max Width | max-w-2xl (centered) |
| Z-index Nav | z-50 |

---

## BREAKPOINTS

| Name | Min Width | Usage |
|------|-----------|-------|
| sm | 640px | Button layout (col→row), footer bottom |
| md | 768px | Grid changes (1→2 or 3 cols), typography scale up |
| lg | 1024px | Grid 3 cols, nav px increase, 2-col layout |
| xl | 1280px | (container max-width) |
| 2xl | 1536px | (not explicitly used on this page) |

---

## COMPONENT NOTES

- Navbar: Sticky top-0, semi-transparent white/85 + backdrop-blur. Thin border-b. Logo is gradient square icon + "Windflow" text. Desktop shows links + GitHub icon + CTA. Mobile shows hamburger toggle with slideDown menu.
- Hero: Centered layout. Radial orb backgrounds (sky + emerald). Staggered fadeInUp animations on badge, H1, subtext, CTAs, code block. Gradient text on "HTML." keyword. Inline code pills in subtext.
- Features: 12-card 3-col grid. Each: emerald icon bg + icon, semibold title, muted description. Hover lifts card 4px with shadow + emerald border.
- How It Works: 2-col split (text + code). Dark code block with syntax highlighting.
- Plus Section: 3 cards with gradient top bar + gradient count number. CTA at bottom.
- Footer: Dark (#030712) background. 5-col grid (logo + 4 link categories). Bottom bar with copyright + social/links.

---

## APPROXIMATIONS MADE

1. **oklch() colors** — Converted to nearest hex equivalents; oklch is not universally supported in all CSS contexts
2. **Tailwind v4 @theme directive** — Recreated using Tailwind CDN v3 `tailwind.config` extended theme
3. **Next.js SSR** — Recreated as client-side React 18 + Babel CDN; no SSR
4. **Inter variable font axes** — Used full variable font URL from Google Fonts; browser renders correctly
5. **Original's exact @keyframes** — Not extractable from CDN (404 on build.css); recreated from visual analysis and Tailwind's documented animation scale
6. **Code syntax highlighting** — No Prism/Shiki available without build step; recreated with styled `<span>` elements per token type
