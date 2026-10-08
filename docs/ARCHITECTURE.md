# Architecture

## Goals

1. **Credible and fast**: pages are prerendered static HTML; minimal client JavaScript.
2. **Easy to hand over**: conventional Next.js, clear layers, decisions written down.
3. **Content can change source**: today files in the repo, later a CMS, with no page rewrites.
4. **Accessible**: WCAG 2.1 AA (AODA), checked automatically in CI.

## Layers

```
 Request ──► proxy.ts ──► app/[lang]/…/page.tsx ──► components/sections ──► components/ui
 (/ → /en)                     │                         ▲ props only
                               ▼
                         lib/content  ──►  src/content/*.ts   (later: Sanity CMS)
                         i18n/dictionaries ──► i18n/messages/en.json
```

| Layer                 | Knows about                    | Must not                                 |
| --------------------- | ------------------------------ | ---------------------------------------- |
| `app/[lang]` routes   | lib/content, i18n, sections    | Hold copy, import `src/content` directly |
| `components/sections` | ui primitives, content _types_ | Fetch data; hard-code copy               |
| `components/ui`       | design tokens                  | Know about AWF content at all            |
| `lib/content`         | where content is stored        | Render anything                          |
| `src/content`         | types                          | Import React or components               |

## Content vs UI strings

- **Content** (programs, stats, team, FAQ, page copy) → `src/content/*.ts`, typed by
  `src/content/types.ts`, read through `lib/content`. This moves to the CMS later.
- **UI strings** (nav labels, buttons, form errors) → `src/i18n/messages/<locale>.json`, read with
  `getDictionary()`. These stay in the repo.

## Rendering

Next.js 16 with Cache Components. All routes are under `app/[lang]` and use `generateStaticParams`,
so every page is prerendered at build time. Interactive pieces (mobile menu, contact form) are small
Client Components inside otherwise server-rendered pages.

## Internationalization

English only at launch, routed as `/en/...`. The locale comes from the `[lang]` segment via
`next/root-params`. The root layout sets `lang` and `dir` (right-to-left support for Dari, Pashto and
Arabic later). See [ADR 0003](decisions/0003-i18n-native-routing.md).

## Donations

Not yet a CRA-registered charity, so the site lists offline ways to give. Online giving will sit
behind a single `DonationWidget` component in `lib/donations`, so switching provider (Zeffy,
CanadaHelps) touches one file. See [ADR 0004](decisions/0004-donations-deferred.md).

## Quality gates

`npm run check` (format, lint, typecheck, unit, build) and `npm run test:e2e` (Playwright on desktop
and mobile + axe accessibility scan) run in GitHub Actions on every PR.

## Design system

- **Tokens** live only in `src/styles/globals.css` (`@theme`). Each colour lists its contrast ratio.
  Tailwind turns each token into classes (`--color-primary` → `bg-primary`, `text-primary`).
- **Fonts** load in `src/styles/fonts.ts` (Fraunces for display, Inter for body), self-hosted at
  build time.
- **Primitives** live in `src/components/ui`, imported from `@/components/ui`. They own their visual
  style. A `className` passed in should only add layout (margin, width, colour inheritance).
- **`/en/styleguide`** shows every token and primitive. It's hidden from search engines and covered
  by an axe contrast test, so a token change that breaks contrast fails CI.
