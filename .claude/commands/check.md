---
description: Run the full quality gate and summarize the results
allowed-tools: Bash(npm run check), Bash(npm run test:e2e)
---

Run `npm run check`. If routes, layout or interactive components changed in this session
(see `git diff --stat`), also run `npm run test:e2e`.

Report in this format:

- One line per step (format, lint, typecheck, unit tests, build, e2e) with pass/fail.
- For each failure: the file:line, the error in one sentence, and the fix you propose.

Do not fix anything unless the user asks. $ARGUMENTS
