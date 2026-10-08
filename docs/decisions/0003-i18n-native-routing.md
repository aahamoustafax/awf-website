# 0003. Native Next.js i18n instead of next-intl

- **Status:** accepted (replaces the plan's original choice of next-intl)
- **Date:** 2026-10-07

## Context

English at launch; French, Dari, Pashto or Arabic (right-to-left) are likely later. The code should
be ready for them without a rewrite.

## Decision

Use the pattern built into Next.js 16: every route under `app/[lang]`, `proxy.ts` redirects
unprefixed URLs to `/en`, UI strings in `src/i18n/messages/<locale>.json`, and the locale is read
anywhere on the server with `next/root-params`. The root layout sets `lang` and `dir`.

## Consequences

- No extra dependency, and it works natively with Cache Components and static prerendering.
- No built-in ICU pluralisation or date formatting helpers. If we need those, use `Intl.*` directly
  or adopt next-intl in a new ADR.
