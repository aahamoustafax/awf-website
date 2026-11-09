# Azan Welfare Foundation: website

The public website of the Azan Welfare Foundation (AWF), a non-profit in Hamilton, Ontario
improving access to healthcare and humanitarian assistance, with a primary focus on Afghanistan.

## Quick start

```bash
nvm use            # Node 22 (see .nvmrc)
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000 → redirects to /en
```

## Scripts

| Script                                | What it does                                                                  |
| ------------------------------------- | ----------------------------------------------------------------------------- |
| `npm run dev`                         | Development server with hot reload                                            |
| `npm run build` / `npm start`         | Production build / serve it                                                   |
| `npm run check`                       | **Run before every commit**: format check, lint, typecheck, unit tests, build |
| `npm test` / `npm run test:watch`     | Unit tests (Vitest)                                                           |
| `npm run test:e2e`                    | Browser tests + accessibility scan (Playwright + axe), desktop and mobile     |
| `npm run lint:fix` / `npm run format` | Auto-fix lint and formatting                                                  |

First time running e2e tests: `npx playwright install chromium`.

## Project structure

```
src/
  app/[lang]/         Routes (one folder per URL). Thin: get content, render sections.
  components/
    ui/               Reusable primitives: Button, Container, Heading…
    layout/           Header, Footer, navigation
    sections/         Page sections: Hero, CardGrid, GoalsBand…
  content/            All site content as typed TypeScript objects
  lib/content/        Content layer: the only way routes read content
  i18n/               Languages and UI strings (messages/en.json)
  actions/            Server Actions (e.g. contact form)
  styles/globals.css  Design tokens: colours, fonts, spacing
  proxy.ts            Redirects / → /en
tests/
  unit/               Vitest
  e2e/                Playwright
docs/                 Architecture, decisions (ADRs), design references, content guide
.claude/              Shared Claude Code setup: permissions, hooks, commands, agents
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for how the pieces fit together. Planned features
are in [docs/ROADMAP.md](docs/ROADMAP.md).

## Common tasks

- **Edit text or numbers:** see [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md).
- **Add a page:** create `src/app/[lang]/<route>/page.tsx`, get content from `@/lib/content`, compose
  existing sections. Add it to the e2e route list.
- **Add a language:** follow the steps at the top of `src/i18n/config.ts`.
- **Record a decision:** copy the newest file in `docs/decisions/`, bump the number.

## Working with AI agents

The repo is set up for Claude Code and other coding agents:

- `CLAUDE.md`: project rules for agents (imports `AGENTS.md`, which Next.js manages).
- `.claude/settings.json`: safe defaults. Quality commands are allowed; installs, pushes and deploys
  ask first; `.env` files can't be read. A hook auto-formats every file an agent edits.
- Slash commands: `/check`, `/new-section`, `/review-a11y`.
- Subagents: `a11y-reviewer` (read-only WCAG review) and `content-editor` (content files only).

Personal overrides go in `.claude/settings.local.json` (git-ignored).

## Environment variables

See `.env.example`. The contact form needs `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and
`CONTACT_TO_EMAIL` in production. In development, messages are printed to the terminal instead
(ADR 0005).

## Deployment

**Live site:** https://awf-website.vercel.app (Vercel project `awf-website`, temporarily under the
`aahamoustafax` account until it moves to a foundation-owned account).

How changes go live:

1. Branch off `main` and open a pull request.
2. CI (`check` + `e2e`) must pass. Vercel also posts a **preview URL** on the PR to review the change.
3. Merge into `main`. Vercel deploys production automatically, usually within a couple of minutes.

Production environment variables (Vercel → Project → Settings → Environment Variables):

| Variable                                                   | Value                                                              | Status                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                                     | `https://awf-website.vercel.app` (change to the real domain later) | Set                                                            |
| `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` | See ADR 0005                                                       | Not set: the contact form shows the foundation's email instead |

`NEXT_PUBLIC_SITE_URL` is baked in at build time. After changing it, redeploy.

### Adding a custom domain later

1. Buy the domain.
2. Add it in Vercel → Project → Settings → Domains, and set the DNS records Vercel shows.
3. Update `NEXT_PUBLIC_SITE_URL` and redeploy.
4. Verify the domain in Resend for the contact form.
5. Submit `/sitemap.xml` in Google Search Console.
