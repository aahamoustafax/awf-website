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

## Site layout and navigation

- `app/[lang]/layout.tsx` loads site content, programs and the dictionary once, builds the
  navigation, and renders `Header` → page → `Footer` around every page.
- `src/lib/navigation.ts` is the **single menu definition**, used by the desktop menu, the mobile
  menu and the footer. The Programs submenu is generated from `getPrograms()`, so adding a program
  adds it to every menu. The submenu only appears while at least one program is visible.
- **Hidden pages** (ADR 0007): `hiddenRoutes` in `src/lib/routes.ts`. The proxy answers them with a
  404, and the menu, footer, sitemap and `getPrograms()` leave them out.
- Every internal link goes through `localePath(locale, path)` in `src/i18n/paths.ts`.
- Interactive parts are small Client Components:
  - `DesktopNav`: dropdowns. Hover opens them for mouse users; click or keyboard toggles them;
    Escape and outside clicks close them.
  - `MobileNav`: a native `<dialog>`, which provides focus trapping and Escape for free; groups use
    `<details>`.
- Unknown URLs hit `app/[lang]/[...rest]` → `notFound()` → the styled `[lang]/not-found.tsx`.

## Page sections

- `src/components/sections/` holds page-level blocks (Hero, ProgramGrid, GoalsBand…), exported from
  `@/components/sections`. They take plain props and know nothing about where content comes from.
- A route gets content, adds the language to every href (`localePath`), and passes the result in.
  See `app/[lang]/page.tsx`.
- The hero is a background photo (`next/image` `fill`, static import, blur placeholder) fading into
  navy, with `DonationBox` (a small Client Component: frequency, amount, Donate button; visual only
  until online giving launches). Beside the mission quote sits `HelpCard` (the ways to help today). `GlobeMap` (line-art globe, Canada → Afghanistan) is kept for later (ADR 0007).
- The home-page donation module (ADR 0004) is the hero's `DonationBox`. (`WaysToGive`, the earlier
  slot, was removed in the medical-aid refocus, ADR 0007.)

## Inner pages and motion

- Every inner page opens with `PageHeader` (breadcrumb, title, lead, optional illustration).
- Program pages live at `app/[lang]/programs/[slug]`. All slugs, hidden ones included, are prerendered
  from `getPrograms({ includeHidden: true })`. Unknown and hidden slugs get a real 404 from `proxy.ts`,
  because a streamed page can only return 200.
- `/our-work` and the home page share `src/content/work.ts` (focus areas, the four steps, supplies).
- `ProgramIllustration` draws one line-art mark per program (the `icon` field). It's animated in
  page headers and static on cards.
- `src/components/motion` holds the motion helpers:
  - `InView` marks an element when it first scrolls into view.
  - `Reveal` fades content up as it appears.
  - `drawOnViewClass` makes SVG lines draw in.

  They play once, are skipped for reduced motion, and leave content visible without JS.

- Accessibility e2e scans use `tests/e2e/a11y.ts`, which switches animations off first so contrast is
  measured on final colours.
- Standalone pages (about, partner, donate…) read their copy with `getPage("<key>")` from
  `src/content/pages.ts`. They're built from shared sections: `PageHeader`, `CardGrid`,
  `StorySection`, `FaqList`, `ContactPanel`, `ProseSection` and `CtaBand`. `src/lib/pageHelpers.ts`
  builds breadcrumbs and metadata.

## Contact form

`ContactForm` (client) → `sendContactMessage` Server Action → zod validation → spam checks → rate
limit → `sendEmail()` (Resend or log). It works as a plain HTML form without JavaScript. See
[ADR 0005](decisions/0005-contact-form-email.md).

## SEO, sharing and performance

- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`. Add new static
  pages to `src/lib/routes.ts`; program pages are added automatically.
- Every page sets a canonical URL and its own share title through `pageMetadata` / `pageSeo`
  (`src/lib/pageHelpers.ts`). These spread the parent's Open Graph data, so the generated share image
  (`app/[lang]/opengraph-image.tsx`) isn't lost.
- The root layout embeds schema.org `NGO` JSON-LD (`src/lib/structuredData.ts`).
- `NEXT_PUBLIC_SITE_URL` must be set **at build time** in production. It's baked into the canonical
  links, the sitemap and share URLs.
- Performance budget: Lighthouse mobile ≥ 95 in all categories (measured 95–97 on 2026-10-07).
  What keeps it there:
  - the hero image uses `fetchPriority="high"` and is served as AVIF/WebP;
  - the display font loads only the `opsz` axis;
  - the body font isn't preloaded.
- Smooth wheel scrolling: `SmoothScroll` (Lenis), see ADR 0006.
