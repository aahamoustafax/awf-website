# 0002. Content in typed files behind a content layer

- **Status:** accepted
- **Date:** 2026-10-07

## Context

Foundation staff will eventually want to edit content without a developer, but a CMS adds cost,
setup and accounts before the site exists. Content is still being gathered.

## Decision

Store content as typed TypeScript objects in `src/content/`. Routes and components get it only
through async functions in `src/lib/content` (e.g. `getPrograms()`). A headless CMS (likely Sanity)
is a later feature. When it arrives, only `lib/content` changes.

## Consequences

- No external service needed now; TypeScript catches missing fields at build time.
- Every content change needs a developer, a commit and a deploy until the CMS lands. The
  `content-editor` Claude subagent lowers that cost in the meantime.
