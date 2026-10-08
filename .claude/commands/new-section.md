---
description: Scaffold a new page section component (e.g. /new-section ImpactStats)
argument-hint: <PascalCaseName> [short description]
---

Create a new section component named `$1`. Purpose: $ARGUMENTS

1. Read CLAUDE.md rules and look at 1-2 existing files in `src/components/sections/` to match style.
2. Create `src/components/sections/$1.tsx`:
   - A Server Component unless it truly needs interactivity (then put only the interactive part in a
     separate `"use client"` file).
   - Export a `$1Props` type. All text/data comes in through props, none hard-coded.
   - Build from `src/components/ui/` primitives and design tokens; semantic HTML (`<section>` with
     an accessible heading).
3. If it needs new content types, add them to `src/content/types.ts` and a getter in `src/lib/content`.
4. Use it on its page (content in `src/content`), and screenshot desktop and mobile to check it.
5. Run `npm run check` and report the result.
