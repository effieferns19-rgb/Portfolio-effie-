# Effie — UI/UX Designer Portfolio Landing Page

## Original Problem Statement
A UI/UX designer's portfolio landing page replicating a provided PDF/Figma design exactly. Fonts: Libre Bodoni (titles) + DM Sans (body). Complex UI: fanned hero polaroids, sticky-stacking Featured Work case cards with Figma prototype modals, and a pinned horizontal scroll-driven timeline with cumulative reveal.

Language: English.

## Architecture
- Frontend-only React app (Tailwind + heavy custom CSS in `App.css`). No backend wired yet (mock data in `src/data/mock.js`).
- Preview backend URL: `frontend/.env` → REACT_APP_BACKEND_URL.

Key files:
- `src/components/Hero.jsx` — overlapping fanned polaroids, hover spread.
- `src/components/FeaturedWork.jsx` — sticky-stacking case cards + Figma modal.
- `src/components/Timeline.jsx` — horizontal pinned scroll timeline, cumulative reveal, draw-in dotted SVG path.
- `src/components/LifeGallery.jsx` — stack-to-fan gallery.
- `src/components/Contact.jsx` — footer w/ blended sky bg.
- `src/App.css` — all animations, sticky, scroll transitions.
- `src/data/mock.js` — TIMELINE, WORK (Figma embeds), HERO_PHOTOS, LIFE_PHOTOS.

## Implemented (as of 2026-06)
- Full pixel-faithful frontend of all sections.
- Featured Work: removed extra card box-shadows; cropped ~330px transparent top padding from `proj_industrisalg.png`; tightened title→first-card gap (`.work-list` margin 24px).
- Timeline redesigned to match latest "on scroll" reference: **5 milestones** (India HCI 2023 removed per user), gentle near-flat wavy dotted path, wider spacing between cards, single MDes photo (SMI Bengaluru), polaroids on BFA/MDes/UI/UX, grid background, cumulative scroll reveal. Strip = 2800×640 (top offset `50% - 230px` for extra title→timeline gap); last node fully visible at end of scroll.

## Backlog / Roadmap
- P1: "View Prototype" link inside Figma modal (open full prototype in new tab).
- P1: Contact form backend so "Get in touch"/"Hire me!" sends real enquiry emails (needs email integration e.g. Resend/SendGrid).
- P1: Wire "Resume" nav link to download PDF resume.

## Notes / Gotchas
- Do NOT apply `overflow: hidden` to `.App`/section wrappers — breaks sticky scroll in FeaturedWork & Timeline. Use `overflow: clip` if clipping needed.
- Timeline reveal is driven by vertical scroll `progress` mapped to path length fraction, independent of horizontal `tx`.
