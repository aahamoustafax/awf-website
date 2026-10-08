---
description: Add a new AWF program (content + detail page)
argument-hint: <program name>
---

Add a new program: $ARGUMENTS

1. Ask the user for anything missing: summary, who it serves, what we do, outcomes/impact numbers,
   how people can help, and photos (with consent). Never invent figures; use `TODO(foundation)`.
2. Add the program to `src/content/programs.ts` following the `Program` type in `src/content/types.ts`.
   Pick a short, kebab-case `slug`.
3. Confirm `/programs` and `/programs/<slug>` render it (the routes read from `getPrograms()`, so no
   new route file should be needed).
4. Run `npm run check` and `npm run test:e2e`, then report.
