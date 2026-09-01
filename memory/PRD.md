# Effie — UI/UX Designer Portfolio Landing Page

## Original Problem Statement
A UI/UX designer's portfolio landing page replicating a provided PDF/Figma design exactly. Fonts: Libre Bodoni (titles) + DM Sans (body). Complex UI: fanned hero polaroids, sticky-stacking Featured Work case cards with Figma prototype modals, and a pinned horizontal scroll-driven timeline with cumulative reveal.

Language: English.

## Architecture
- Frontend-only React app (Tailwind + heavy custom CSS in `App.css`). No backend wired yet (mock data in `src/data/mock.js`).
- Preview backend URL: `frontend/.env` → REACT_APP_BACKEND_URL.

Key files:
- `src/components/Hero.jsx` — overlapping fanned polaroids (desktop), hover spread; "Get in touch" opens resume.
- `src/components/About.jsx` — "Hello! I'm Effie" scroll word-reveal paragraph (inline images removed).
- `src/components/FeaturedWork.jsx` — sticky-stacking case cards + Figma modal.
- `src/components/Timeline.jsx` — horizontal pinned scroll timeline (desktop) + stacked mobile list (`tl-mobile`).
- `src/components/LifeGallery.jsx` — stack-to-fan gallery.
- `src/components/Navbar.jsx` — pill nav; "Resume" opens resume.pdf.
- `src/components/Contact.jsx` — footer w/ blended sky bg; "Hire me!" opens resume.pdf.
- `src/App.css` — all animations, sticky, scroll transitions, page grid background, responsive media queries.
- `src/data/mock.js` — TIMELINE (5 milestones), WORK (Figma embeds), NAV, LIFE_PHOTOS.
- `public/resume.pdf` — served at `/resume.pdf`.

## Implemented (as of 2026-06 / Sep session)
- Full pixel-faithful desktop frontend of all sections.
- Featured Work: removed extra card box-shadows; cropped transparent top padding from `proj_industrisalg.png`; tightened title→first-card gap.
- Timeline redesigned to match latest "on scroll" reference: 5 milestones (India HCI 2023 removed), gentle wavy dotted path, wider card spacing, single MDes photo, grid background, cumulative reveal. Strip 2800×640.
- Continuous light grid background across all non-sky sections; fades into peach before the two sky sections (Featured Work + footer).
- Reduced timeline→"Somewhere between…" gap (life section `margin-top`/padding tuned).
- Resume PDF wired to: Resume nav link, hero "Get in touch", footer "Hire me!" (open in new tab). data-testids: `nav-resume-link`, `hero-get-in-touch-btn`, `contact-hire-me-btn`.
- Removed inline images between text in the About ("Hello! I'm Effie") section (desktop + mobile).
- Mobile layout (`@media max-width:768px`, desktop untouched): Hero + Life gallery use swipeable stacked card decks (`SwipeDeck.jsx` + `useIsMobile.js` hook, rendered only on mobile); Featured Work non-sticky stacked cards; footer heights adjusted.
- Timeline order REVERSED (Kilowott first → BFA last) on desktop & mobile via `TIMELINE` data reorder (photos land on Kilowott/MDes/BFA, matching reference).
- Mobile timeline: images hidden; clean left-aligned vertical timeline (dotted left rail + terra dots) with badge/title/desc stacked; item titles 17px.
- Footer socials: Email → mailto:effieferns19@gmail.com, LinkedIn → real profile URL, Notion replaced with Phone icon → tel:+919370777682. testids: footer-email-link / footer-linkedin-link / footer-phone-link.
- Kilowott timeline photo replaced with supplied finished polaroid (`kw_team_new.png`), rendered via `readymade` flag (no duplicate frame/caption; `.tl-ready` style).
- Desktop timeline reveal: first milestone (Kilowott) shown at scroll start (`effProgress = startFrac + progress*(1-startFrac)`); scroll reveals from 2nd onward. Title→timeline gap reduced (`.tl-strip` top `50% - 270px`).
- Deployment readiness health check: PASS.

## Backlog / Roadmap
- P1: "View full prototype" link inside each Figma modal (open in new tab).
- P1: Real contact/email option (Hire me! + Get in touch currently open resume; no live email form). Needs email integration (e.g. Resend/SendGrid) if wanted.
- P2: Resume download icon next to nav link.
- P2: Timeline "you are here" progress marker along the path.

## Notes / Gotchas
- Do NOT apply `overflow: hidden` to `.App`/section wrappers — breaks sticky scroll in FeaturedWork & Timeline. Use `overflow: clip`.
- Timeline reveal is driven by vertical scroll `progress` mapped to path length fraction, independent of horizontal `tx`.
- All mobile changes are scoped to media queries (`≤768px`, and nav/timeline switch `≤860px`) to keep desktop unchanged.
- Screenshot tool: set viewport AFTER `page.goto` for mobile widths to take effect.
