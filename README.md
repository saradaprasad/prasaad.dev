# prasaad.dev — Engineering Hub

Minimalist, high-signal portfolio and knowledge base. Astro 5 (SSG) + Cloudflare Pages + Tailwind v4. Dark mode by default, slate/zinc palette.

## Project structure (single source of truth)

| Path | Purpose |
|------|--------|
| `public/resume.pdf` | Master resume (add your PDF here) |
| `public/logos/` | Company logos (SVG or PNG); grayscale → color on hover |
| `public/favicon.svg`, `favicon.ico` | Site favicons (referenced as `/favicon.svg`, `/favicon.ico`) |
| `src/content/blog/` | Blog posts (Markdown with frontmatter) |

**Asset placement:** Use `public/` for static files served as-is (favicons, resume PDF, logos). Use `src/assets/` only for images you import in components (Vite will process and hash them). This project keeps logos in `public/logos/` so you can drop in files without changing code.

## Routes

- **/** — Home (hero, experience logos, latest writing)
- **/blog** — Blog index
- **/blog/[slug]** — Individual post
- **/resume** — Resume page (links to PDF)

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Local dev at `localhost:4321` |
| `npm run build` | Production build |
| `npm run preview` | Preview build (wrangler pages dev) |
| `npm run deploy` | Build + deploy to Cloudflare Pages |

## Stack

- **Framework:** Astro 5 (static)
- **Adapter:** @astrojs/cloudflare
- **Styling:** Tailwind CSS v4
- **Deploy:** Cloudflare Pages (wrangler)

Replace placeholder links (GitHub, LinkedIn, company logos) and add `public/resume.pdf` when ready.
