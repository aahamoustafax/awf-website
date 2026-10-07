# AWF Website: guide for AI agents

@AGENTS.md

## What this is

Website for **Azan Welfare Foundation (AWF)**, a non-profit in Hamilton, Ontario, with programs in
Hamilton and Afghanistan. The main audience is **diplomatic and institutional sponsors**, followed by
families who want to enroll and people who want to donate or volunteer. The site must feel
credible: evidence, transparency, real photography, no hype.

## Stack

Next.js 16 (App Router, Cache Components, Turbopack) · React 19 · TypeScript (strict) ·
Tailwind CSS v4 · zod · Vitest · Playwright + axe · npm · Node 22 (`.nvmrc`).

## Commands

| Command                               | Use                                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------- |
| `npm run dev`                         | Dev server on :3000 (reuse an already-running one; see `.next/dev/lock`)                  |
| `npm run check`                       | **Quality gate**: format, lint, typecheck, unit tests, build. Must pass before you finish |
| `npm run test:e2e`                    | Playwright + axe against a production build (desktop + mobile)                            |
| `npm run lint:fix` / `npm run format` | Auto-fix                                                                                  |

## Where things go

```
src/app/[lang]/        Routes only. Thin: fetch from lib/content, compose sections.
src/components/ui/     Primitives (Button, Container, Heading…). No content, no data fetching.
src/components/layout/ Header, Footer, MobileNav.
src/components/sections/ Page sections (Hero, ImpactStats…). Receive data via props.
src/content/           ALL site content as typed objects + types.ts.
src/lib/content/       The content layer. The ONLY thing routes import content from.
src/i18n/              Locales, dictionaries (UI strings), messages/en.json.
src/actions/           Server Actions (contact form).
src/styles/globals.css Design tokens (@theme). The one place colors/fonts are defined.
tests/unit, tests/e2e  Vitest, Playwright.
docs/                  Architecture, ADRs, design references, content guide.
```

## Rules

- **Server Components by default.** Add `"use client"` only to the small interactive leaf that needs it.
- **No hard-coded copy in components.** Program and page content goes in `src/content`; UI strings
  (buttons, labels, nav) go in `src/i18n/messages/en.json`.
- **Routes never import `src/content` directly.** Go through `@/lib/content` so a CMS can replace it later.
- **Use design tokens** (`bg-primary`, `text-foreground`…), never raw hex values or arbitrary colors.
- **Accessibility is required (WCAG 2.1 AA / AODA):** semantic HTML, every image has a meaningful
  `alt` (or `alt=""` if decorative), visible focus, colour contrast ≥ 4.5:1, respect `prefers-reduced-motion`.
- **Next.js 16 APIs:** `proxy.ts` (not middleware), async `params`, `next/root-params`,
  Cache Components. Read `node_modules/next/dist/docs/` before using an API you are unsure of.
- **Don't pass display or visibility classes** (`hidden`, `flex`, `block`…) to `ui/` primitives. They
  set their own display, and the two classes conflict. Wrap the primitive instead: `<div className="hidden sm:block"><ButtonLink…/></div>`.
- Small files, one job each. Name components in PascalCase, everything else camelCase.

## Definition of done

1. `npm run check` passes. Run `npm run test:e2e` too if you touched routes, layout or interactivity.
2. New sections/primitives appear on `/styleguide` (from Phase 2).
3. Docs updated if you changed structure or made a decision. Significant decisions go in a new ADR in
   `docs/decisions/`.

## Never

- Add a dependency without an ADR explaining why.
- Read, print or commit `.env*` files or secrets (only `.env.example` is committed).
- Publish identifiable photos or names of children without recorded consent. Use program-level
  stories, not individual children.
- Invent statistics, partners or testimonials. Use a visible `TODO(foundation)` placeholder instead.
- Push, deploy or change Vercel settings without the user asking.

## More detail

[README](README.md) · [Architecture](docs/ARCHITECTURE.md) · [Decisions](docs/decisions/) ·
[Design references](docs/DESIGN-REFERENCES.md) · [Content guide](docs/CONTENT-GUIDE.md)
