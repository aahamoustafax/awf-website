---
description: Accessibility review of the current changes (WCAG 2.1 AA / AODA)
---

Use the `a11y-reviewer` subagent to review the current diff (`git diff` and untracked files under
`src/`). Pass along any focus area the user gave: $ARGUMENTS

Present its findings ranked by severity, each with file:line and a concrete fix. Do not apply fixes
unless the user asks.
