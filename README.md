# payload-img-convert — Marketing Website

The official landing page for [payload-img-convert](https://github.com/stianlars1/payload-img-convert), an automatic image conversion and resizing plugin for Payload CMS v3.

**Live:** [payload-img-convert.vercel.app](https://payload-img-convert.vercel.app)

---

## What This Site Delivers

A single-page marketing site showcasing the plugin's value proposition, features, and developer experience. Sections include:

- **Hero** — Tagline, install command with copy-to-clipboard, WebGL animated background (Unicorn Studio)
- **Mock Window** — Scroll-animated 3D perspective reveal of the plugin's admin UI
- **Bento Grid** — Four feature cards with inline animations (format morphing, resize preview, admin dropdown, compression chart)
- **Full Feature List** — 25 features grouped by category (Conversion, Resize, Admin UI, Safety, Architecture) in a Raycast-inspired layout
- **Code Example** — Syntax-highlighted `payload.config.ts` snippet with copy button
- **Footer** — Links to GitHub, npm, Payload CMS, and maintainer info

## Tech Stack

| Layer        | Technology                                     |
| ------------ | ---------------------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org) (App Router)  |
| React        | React 19                                       |
| Language     | TypeScript 5                                   |
| Animations   | GSAP 3 + ScrollTrigger, Framer Motion 12       |
| Icons        | Lucide React                                   |
| Hero Effect  | Unicorn Studio (self-hosted SDK)                |
| Fonts        | Geist Sans & Geist Mono (next/font)            |
| Styling      | CSS Modules + global CSS custom properties      |
| Deployment   | Vercel                                         |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, JSON-LD, fonts
│   ├── page.tsx            # Main landing page (client component)
│   ├── page.module.css     # Page styles
│   ├── globals.css         # Design tokens, resets, global styles
│   ├── sitemap.ts          # Dynamic XML sitemap
│   └── robots.ts           # Robots.txt with AI-crawler rules
├── components/
│   ├── Navbar.tsx           # Top navigation bar
│   ├── MonolithElement.tsx  # Glass-morphism card component
│   ├── MockWindowAnimation.tsx  # 3D admin UI mock window
│   ├── CopyButton.tsx       # Clipboard copy button
│   ├── LiquidAss.tsx        # SVG liquid glass background filter
│   ├── data.ts              # Shared data constants
│   └── animations/
│       ├── FormatMorphAnimation.tsx
│       ├── ResizePreviewAnimation.tsx
│       ├── AdminUIDropdownAnimation.tsx
│       ├── ModernStandardChartAnimation.tsx
│       └── AnimatedFeatureIcon.tsx
└── lib/
    └── motion.ts            # GSAP utilities and reveal helpers
public/
├── promo/                   # Marketing graphics (dark, transparent, glass variants)
├── unicornStudio.umd.js    # Self-hosted Unicorn Studio SDK
├── llms.txt                # AI/LLM context file
└── icon.png                # Favicon
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The dev server runs at `http://localhost:3000`.

## SEO & Discoverability

- Full Open Graph and Twitter Card metadata
- JSON-LD `SoftwareApplication` structured data
- Auto-generated `sitemap.xml` and `robots.txt`
- `llms.txt` for AI search engine context
- AI-crawler-aware robot rules (allows search bots, blocks training crawlers)

## The Plugin

This site promotes **payload-img-convert** — drop-in image optimization for Payload CMS v3:

```ts
import { imageConverterPlugin } from 'payload-img-convert'

imageConverterPlugin({
  collections: ['media'],
  defaultFormat: 'webp',
  quality: 80,
  maxWidth: 1920,
})
```

- Automatic WebP/AVIF/PNG/JPEG conversion on upload
- Aspect-ratio preserving resize with no upscaling
- Admin UI format selector with compression savings display
- Graceful fallback — originals preserved on failure

**npm:** [payload-img-convert](https://npmjs.com/package/payload-img-convert) | **GitHub:** [stianlars1/payload-img-convert](https://github.com/stianlars1/payload-img-convert)

## License

MIT — [Stian Larsen](https://stianlarsen.com)
