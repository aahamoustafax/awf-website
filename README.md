# Azan Welfare Foundation: website

The public website of the Azan Welfare Foundation (AWF), a non-profit in Hamilton, Ontario
supporting newcomer families through education, skills training and humanitarian work, with
healthcare programs in Afghanistan.

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
    sections/         Page sections: Hero, ImpactStats, ProgramGrid…
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

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for how the pieces fit together.

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
- Slash commands: `/check`, `/new-section`, `/new-program`, `/review-a11y`.
- Subagents: `a11y-reviewer` (read-only WCAG review) and `content-editor` (content files only).

Personal overrides go in `.claude/settings.local.json` (git-ignored).

## Deployment

Hosted on Vercel (Phase 9). Every pull request gets a preview URL. `main` deploys to production.
