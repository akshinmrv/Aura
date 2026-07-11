# Aura — a dark, glassmorphic product dashboard

A premium dashboard interface built around a single idea: a calm, glass-and-void surface where
data reads clearly and nothing shouts. Sidebar navigation, metric cards, and charts, composed on
a considered design system rather than a component-library default.

**Live:** [aura-lime-one.vercel.app](https://aura-lime-one.vercel.app)

<!-- Add a screenshot here — a dashboard sells on how it looks.
<p align="center"><img src="./docs/preview.png" alt="Aura dashboard" width="100%"></p>
-->

## Design system

Aura is built on its own tokens (see [`design.md`](./design.md)):

- **Palette** — Void Black `#05050A`, Neon Indigo `#6366F1` → Violet `#8B5CF6`, Cyber Cyan `#06B6D4`
- **Surfaces** — layered glass panels (`backdrop-blur`, hairline borders, soft shadow)
- **Type** — Geist / Inter, tight tracking on headings
- **Components** — glow buttons, metric cards, chart containers, active-state sidebar items

## Stack

- **Framework** — Next.js, TypeScript
- **Styling** — Tailwind CSS (custom token layer)
- **Charts** — Recharts
- **Quality** — ESLint + Prettier
- **Deploy** — Vercel

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## License

© 2026 Akshin Miranov (Servoogle). All rights reserved. Published publicly as a **portfolio
reference only** — not licensed for reuse. See [`LICENSE`](./LICENSE).

---
Built by [Akshin Miranov](https://github.com/akshinmrv) under the Servoogle name — [servoogle.com](https://servoogle.com).
