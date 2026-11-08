# Thulasiyan Yogeswaran — Portfolio

Personal portfolio of a Senior Software Engineer, built as a fully static site and deployed to GitHub Pages.

**Live:** https://sythulasi.github.io/MyPortfolio/

## Tech stack

- [Next.js](https://nextjs.org) (App Router, static export) and React
- TypeScript (strict)
- Tailwind CSS v4
- ESLint and Prettier
- GitHub Actions for CI and deployment

## Getting started

Requires Node.js 22 (see `.nvmrc`).

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script              | What it does                      |
| ------------------- | --------------------------------- |
| `npm run dev`       | Start the dev server              |
| `npm run build`     | Build the static site into `out/` |
| `npm start`         | Serve `out/` locally              |
| `npm run lint`      | Lint with ESLint                  |
| `npm run typecheck` | Type-check with TypeScript        |
| `npm run format`    | Format with Prettier              |

## Project structure

```
src/
├── app/                  # Routes, root layout, global styles, SEO files
├── assets/images/        # Optimised images (imported, so paths are hashed)
├── components/
│   ├── contact/          # Contact form and copy-email button
│   ├── layout/           # Header, footer, theme picker, background
│   ├── projects/         # Desktop showcase and mobile carousel
│   ├── sections/         # One component per page section
│   └── ui/               # Shared primitives: icons, tags, headings
├── data/                 # All site content, typed — edit here to update the site
└── lib/                  # Helpers: theme store, base path, class names
public/                   # Files served as-is (CV PDF)
```

Content lives in `src/data/`, so updating experience, projects or skills never requires touching components.

## Colour themes

Visitors can switch between Teal (default), Champagne and Mono from the nav. Themes are CSS variables on `<html data-theme>`, defined in `src/app/globals.css` and listed in `src/lib/themes.ts`. The choice is saved in `localStorage` and applied before first paint.

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which lints, type-checks, builds and publishes `out/` to GitHub Pages. The workflow sets the base path (`/MyPortfolio`) automatically.

One-time setup: in the repository go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

Pull requests and other branches run `.github/workflows/ci.yml` (lint, type-check, format check and build).
