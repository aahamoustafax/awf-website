# 0008. Remove the old programs for good

- **Status:** accepted
- **Date:** 2026-11-09
- **Replaces:** the "hide, don't delete" part of ADR 0007

## Context

The foundation's Organization Profile and draft Memorandum of Association (2027) are now the source
of truth for what AWF does. Neither includes the Hamilton programs (weekend classes at ACCP, the Kids
Essentials Bank, the Hamilton skills tracks). Keeping them switched off in the repo no longer served
a purpose.

## Decision

- Delete the four program entries, the `/programs` pages and `/who-we-serve`, along with the
  components only they used (`ProgramGrid`, `ProgramStory`, `ProgramOfferings`).
- Delete the hidden-pages system (`hiddenRoutes`, `isHiddenRoute`). Old URLs get the normal 404.
- Keep `ProgramIllustration` and `ProgramNeeds`, which `/our-work` still uses.

## Consequences

- The site's menus and sitemap come only from `staticRoutes` and `src/lib/navigation.ts`.
- The old content exists only in git history.
- The profile's seven program areas replace the old focus areas. They live in `src/content/work.ts`
  and appear on the home page and `/our-work`, in the profile's careful wording ("may", "aims to",
  "where lawful"). Claims about records and reporting go no further than the profile and memorandum.
