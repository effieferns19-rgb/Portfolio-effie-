# Effie Fernandes — Portfolio

A pixel-crafted personal portfolio landing page for **Effie Fernandes**, UI/UX &
Product Designer. Built as a single-page React experience with custom
scroll-driven animations, an interactive design-journey timeline, and clickable
Figma case-study prototypes.

**Live:** _add your deployed URL here_

---

## ✨ Highlights

- **Animated hero** — overlapping fanned polaroids on desktop (hover to spread);
  a swipeable stacked card deck on mobile.
- **About "Hello! I'm Effie"** — scroll-driven word-by-word reveal paragraph.
- **Featured Work** — sticky-stacking case-study cards that open full **Figma
  prototype** embeds in a modal (Industrisalg, Norw'eh, Hotel Continental).
- **Design Journey timeline** — desktop: a pinned horizontal scroll with a
  draw-in dotted path and cumulative milestone reveal; mobile: a clean
  left-aligned vertical timeline.
- **Life gallery** — stack-to-fan photo gallery on desktop; swipeable deck on
  mobile.
- **Continuous grid background** that fades seamlessly into the "sky" sections
  (Featured Work + footer).
- **Fully responsive** — dedicated mobile layouts; desktop design untouched.
- **One-tap contact** — email, phone (tel:), LinkedIn, and a downloadable resume.

## 🛠 Tech Stack

- **React** (Create React App) + **React Router**
- **Tailwind CSS** + custom CSS (`App.css`) for all animations & scroll logic
- **lucide-react** icons, **shadcn/ui** components
- Fonts: **Libre Bodoni** (display) + **DM Sans** (body)
- Backend scaffold: **FastAPI** + **MongoDB** (present but not used — the site is
  currently static/frontend-only)

## 📁 Project Structure

```
/app
├── frontend/
│   ├── public/
│   │   ├── images/         # hero, case-study, timeline & gallery assets
│   │   └── resume.pdf      # served at /resume.pdf
│   └── src/
│       ├── App.js
│       ├── App.css         # animations, sticky/scroll behavior, grid bg, responsive
│       ├── components/     # Navbar, Hero, About, FeaturedWork, Timeline,
│       │                   # LifeGallery, Contact, SwipeDeck, Sparkle
│       ├── hooks/          # useReveal, useIsMobile
│       └── data/mock.js    # nav, hero photos, WORK (Figma), TIMELINE, gallery
└── backend/                # FastAPI scaffold (unused for now)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Yarn

### Run the frontend

```bash
cd frontend
yarn install
yarn start
```

The app runs at `http://localhost:3000`.

### Environment variables

`frontend/.env`
```
REACT_APP_BACKEND_URL=<your backend base url>
```
The frontend reads the backend base URL from this variable. The current site is
static, so no backend is required to run it.

`backend/.env` (only if you enable the FastAPI scaffold)
```
MONGO_URL=<mongodb connection string>
DB_NAME=<database name>
```

### Build for production

```bash
cd frontend
yarn build
```

## ✏️ Editing Content

Most content lives in **`frontend/src/data/mock.js`**:

- `NAV` — navbar links
- `HERO_PHOTOS` — hero polaroid cards
- `WORK` — case-study cards (image + title + **Figma embed URL**)
- `TIMELINE` — the "Design Journey" milestones (badge, title, description, photo)
- `LIFE_PHOTOS` — the life gallery images

Contact details live in **`frontend/src/components/Contact.jsx`**
(email, phone, LinkedIn). Replace **`frontend/public/resume.pdf`** to update the
downloadable resume.

## 📦 Deployment

Deployed via the Emergent platform. Any static host (Vercel, Netlify, etc.) can
also serve the production build of `frontend/`.

## 📄 License

Personal portfolio project. All imagery and case-study content © Effie Fernandes.
