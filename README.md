# Shepway Commercial — Ceilings & Partitions

Next.js (App Router) site for the **Ceilings & Partitions** service page.

## Run locally

```bash
npm install
npm run dev
```

Then open:

- http://localhost:3000/services/ceilings-partitions — the page
- http://localhost:3000/services/ceilings-partitions/compare — live-vs-proposed comparison view

## Build

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4

## Project layout

| Path | Purpose |
|------|---------|
| `app/services/ceilings-partitions/page.tsx` | Page entry |
| `app/services/ceilings-partitions/_content.tsx` | Page content/layout (header, hero, body + Services sidebar, sections, footer) |
| `app/services/ceilings-partitions/compare/page.tsx` | Side-by-side comparison view |
| `public/images/` | Project photos and logos |

## Single-file static version

`ceilings-partitions-standalone.html` is a fully self-contained copy of the
page — CSS and all images are embedded inside the one file, with no JavaScript.
Open it directly in any browser, email it, or drop it onto any web server as-is.
It has no build step and no dependencies.

To regenerate it from the source: build a static export
(`output: "export"` + `images: { unoptimized: true }` in `next.config.ts`,
then `npm run build`) and inline the resulting CSS/images into the exported
`out/services/ceilings-partitions.html`.

## Notes

- Styling tokens are sampled from the live site (`shepwaycommercial.co.uk`): brand red `#d62828`, navy `#1a3a5e`, light-blue rows `#e6f0f7`.
- The Featured Project section (One Ashford Hospital) contains two placeholder captions — `[scope figure TBC]` and `[outcome detail TBC]` — to be confirmed with the client before going live.
