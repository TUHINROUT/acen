# Upvik Technologies — Digital Agency (Next.js)

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4.

## Getting started
```
npm install
npm run dev
```

## Structure
```
src/
  app/            # layout.tsx, page.tsx, globals.css
  components/
    sections/     # Navbar, Hero, Services, Works, PromoVideo, Team,
                   # Events, Testimonials, Blog, Clients, CTA, Footer
    ui/            # Button, Eyebrow/SectionHeading, Divider/DotPagination
  data/           # site.ts — all editable copy/content in one place
  types/          # shared TypeScript types
```

## Notes
- This sandbox has no internet access to fonts.googleapis.com, so the
  build currently uses a system font stack. On your own machine (which
  has internet), you can swap back to Google Fonts for a closer match
  to the design (e.g. `Sora` for headings + `Inter` for body) — just
  reintroduce `next/font/google` in `src/app/layout.tsx` and reference
  the variables in `globals.css`.
- Images are represented with dark gradient placeholder tiles (Works,
  Team, Blog) since the original photos weren't provided as assets —
  swap in real photography by replacing those `<figure>`/`<div>`
  backgrounds with `next/image`.
- `npm run build` and `npx eslint .` both pass with 0 errors.
