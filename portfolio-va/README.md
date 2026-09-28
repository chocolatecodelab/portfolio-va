# Nazar Gunawan — Tech-Savvy Virtual Assistant Portfolio

> *"A remote assistant who doesn't just manage your tasks — he builds the systems that make your work easier."*

Portfolio website designed with an **Editorial Newspaper × Soft Neo-Brutalism × 90s Terminal** aesthetic. Built to position Nazar Gunawan as a high-leverage Virtual Assistant specializing in **Research, Operations, Data, and Automation**.

---

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, SSG & Static Export ready)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom design tokens
- **Typography:** Fraunces (Optical Serif), IBM Plex Sans (Body), IBM Plex Mono (Terminal/Meta)
- **Architecture:** Decoupled Content (`/content/*.json` + typed loaders in `/lib/content.ts`)
- **Hosting:** [Vercel](https://vercel.com/)

---

## 🎨 Design System & Palette

- **Paper (Background):** `#F4F0E8`
- **Paper Raised (Cards/Sections):** `#EAE4D6`
- **Ink (Text & Borders):** `#171717`
- **Ink Soft (Body Copy):** `#4A4640`
- **Accent (Terracotta):** `#D94F35`
- **Focus Ring:** `#2F6FED`
- **Shadows:** Hard neo-brutalist shadow (`3px 3px 0px #171717`)
- **Corners:** Strict `2px` editorial radius

---

## 📂 Project Structure

```text
portfolio-va/
├── app/
│   ├── layout.tsx            # Root layout, font injection, SEO metadata
│   ├── page.tsx              # Landing page stitching all P0 sections
│   ├── globals.css           # Design tokens, base resets, reduced-motion
│   ├── fonts.ts              # Google Fonts (Fraunces, IBM Plex Sans, Mono)
│   ├── opengraph-image.tsx   # Dynamic native 1200x630 OpenGraph generator
│   ├── icon.tsx              # Dynamic editorial favicon generator
│   ├── sitemap.ts            # Dynamic XML sitemap
│   └── robots.ts             # Dynamic robots.txt
├── components/
│   ├── layout/
│   │   ├── SiteNav.tsx       # Sticky minimal nav & anchor links
│   │   └── SiteFooter.tsx    # Editorial newspaper footer
│   ├── sections/
│   │   ├── Hero.tsx          # Section 8.1 PRD
│   │   ├── Pillars.tsx       # 4 Pillars (Research, Ops, Data, Automation)
│   │   ├── SelectedWork.tsx  # Case studies & technical baseline
│   │   ├── WorkCard.tsx      # Reusable card with optional screenshot/media
│   │   ├── HowIWork.tsx      # 4-Step sequential process timeline
│   │   ├── Tools.tsx         # Categorized daily toolkit
│   │   ├── About.tsx         # Narrative bio & verified credentials
│   │   └── ClosingCta.tsx    # Single-conversion inquiry card
│   └── ui/
│       ├── Button.tsx        # Neo-brutalist hard-shadow button
│       ├── StatusBadge.tsx   # 90s terminal status badge
│       ├── TagList.tsx       # Capability tags (IBM Plex Mono)
│       └── SectionHeading.tsx# Reusable editorial section heading
├── content/                  # Decoupled content data (JSON)
│   ├── hero.json
│   ├── pillars.json
│   ├── how-i-work.json
│   ├── tools.json
│   ├── about.json
│   ├── contact.json
│   ├── navigation.json
│   └── work/
│       ├── umkm-toolkit.json
│       ├── student-os.json
│       └── technical-capability.json
├── lib/
│   ├── content.ts            # Typed loaders
│   └── types.ts              # TypeScript content interfaces
├── AGENTS.md                 # Operating guide for AI agents
├── PRD.md                    # Product Requirements Document
└── design.md                 # Technical design specs
```

---

## 🚀 Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 🚢 Production Build & Deployment

```bash
# Verify static build
npm run build

# Deploy to Vercel (CLI)
npx vercel
```
