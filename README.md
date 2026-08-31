# Pallavi Kidz

Multi-page marketing site built with **Vite + React**, compiled to a fully static
`dist/` folder that can be dropped on any static host (Netlify, S3, Nginx, cPanel).

## Commands

| Command           | What it does                                      |
| ----------------- | ------------------------------------------------- |
| `npm install`     | Install dependencies                              |
| `npm run dev`     | Dev server with HMR                               |
| `npm run build`   | Static production build into `dist/`              |
| `npm run preview` | Serve the built `dist/` locally to verify it      |

## Structure

```
.
├── index.html                  # Home page shell  ->  /
├── vite.config.js              # MPA entry discovery, `@` alias, static build
├── public/                     # Copied verbatim to dist/ (referenced as /assets/...)
│   └── assets/images/
├── docs/                       # Planning notes (plan.md, todo.md)
└── src/
    ├── pages/
    │   └── home/
    │       ├── main.jsx        # Mount point referenced by index.html
    │       └── HomePage.jsx    # Composes the sections for this page
    ├── components/
    │   ├── layout/             # Chrome shared by every page
    │   │   ├── SiteLayout.jsx  # Header + <main> + Footer + scroll behaviour
    │   │   ├── Header.jsx/.css
    │   │   └── Footer.jsx/.css
    │   └── sections/           # Page sections; stylesheet co-located per component
    │       ├── Hero.jsx / Hero.css
    │       └── ...
    ├── lib/
    │   └── useSiteScroll.js    # Lenis smooth scroll + scroll-reveal observer
    └── styles/
        └── global.css          # Design tokens, resets, shared utilities
```

### Conventions

- **One stylesheet per component, next to it**, named after it (`Hero.jsx` ->
  `Hero.css`), imported as `import './Hero.css'`.
- **Imports across folders use the `@` alias** (`@/components/sections/Hero`)
  instead of `../../` chains.
- **Anything under `public/` is served from the site root**, so reference it as
  `/assets/images/...` from both JSX and CSS.

## Adding a page

`vite.config.js` discovers pages automatically — no config edit needed.

1. `mkdir about` and add `about/index.html` (copy `index.html`, change the
   `<title>`/meta and point the script at `/src/pages/about/main.jsx`).
2. Add `src/pages/about/main.jsx` and `src/pages/about/AboutPage.jsx`, wrapping
   the content in `<SiteLayout>` so it inherits the header, footer and scrolling.
3. `npm run build` — it emits `dist/about/index.html`, served at `/about/`.

Shared code (React, layout, global styles) is automatically split into a common
chunk across pages.

## Deploying

`npm run build`, then upload the contents of `dist/`. The site is configured with
`base: '/'` because assets are referenced by absolute path; if you deploy under a
sub-path, change `base` in `vite.config.js` to match.
