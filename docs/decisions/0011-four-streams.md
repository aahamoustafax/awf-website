# 0011. Four areas of work and a shorter mission

- **Status:** accepted
- **Date:** 2026-11-26
- **Partly replaces:** ADR 0008 (Hamilton education work comes back); ADR 0009 (eight programs)

## Context

The owner sent a voice note saying the site should show only what AIO really does: healthcare
(medicines, medical equipment and supplies), education (a weekend Islamic school in Hamilton),
help for newcomer parents held back by language, and the Kids Essentials Bank. Eight panels and a
45-word mission made it hard for a first-time reader to see that.

## Decision

- **Four panels on `/our-work` and four cards on the home page:** Healthcare (Afghanistan),
  Education, Newcomer families and the Kids Essentials Bank (Hamilton).
- **Healthcare keeps its steps and supply list.** Thalassemia and women's and children's health
  become tiles inside it, not panels of their own.
- **Removed for now:** poverty relief, women's skills and emergency response. Their text is in git
  history if they come back.
- **Hero headline:** "Healthcare, education and the basics, for the people who need them most."
- **Mission** (home and About): a short version agreed with the owner replaces the Profile's
  sentence, with the four areas named and "healthcare, education and everyday essentials"
  highlighted. The vision stays word for word from the Profile.
- Education and Newcomer families have no confirmed details yet, so they say "plan to" and carry
  `TODO(foundation)` notes. No dates, places or partners are stated.

## Consequences

- The Profile is no longer the only source of truth for the mission: the owner's wording is.
- The hero photo (Kabul) still fits, because the work covers Afghanistan and Hamilton.
