# Content guide

How to change words, numbers and images on the site. (Later, a CMS dashboard will replace this.)

## Where content lives

| What                                                          | File                        |
| ------------------------------------------------------------- | --------------------------- |
| Organization name, description, contact details, social links | `src/content/site.ts`       |
| The 7 programs, how we work (the 4 steps), what we supply     | `src/content/work.ts`       |
| Home page: hero, mission, section titles, goals, partner band | `src/content/home.ts`       |
| Other pages (About, Our work, Partner, Donate, FAQ…)          | `src/content/pages.ts`      |
| About: intro, mission, vision, values, leadership             | `src/content/about.ts`      |
| Buttons, menu labels, form messages                           | `src/i18n/messages/en.json` |
| Photos                                                        | `public/images/`            |

The allowed fields for each item are defined in `src/content/types.ts`. If you leave out a required
field, `npm run check` fails and names the missing field.

## Steps

1. Edit the file. Keep the quotes and commas as they are.
2. Run `npm run check`.
3. Commit, push, open a pull request, and check the preview link.

Or ask Claude Code: _"use the content-editor agent to update the impact numbers to …"_.

## Writing style

- **Goals, not results.** Our work is launching, so figures are labelled as goals or targets. Until
  a goal has a confirmed number, its `value` is a short headline, e.g. "First shipment".
  When real results exist, publish them as results and keep the goals for comparison.
- Links in content are site paths without the language, e.g. `/partner`. The site adds `/en`.

- Clear, factual, dignified. The readers include diplomats and institutional funders.
- Canadian English spelling (centre, honour, organization, program).
- Numbers must be real and sourced. If a number isn't confirmed, leave a `TODO(foundation)` note
  rather than estimating.

## Photos

- Images live in `src/content/images/`. The home hero is a stock photo for now; its source is kept in
  the `credit` field. Replace it with AWF's own consented photo when available.

- Use real photos of AWF's work, at least 2000px wide, in JPG or WebP format.
- **Consent is required** for anyone identifiable. For children, get written guardian consent, or
  use images where faces aren't identifiable.
- Every photo needs alt text: describe what it shows and why it matters, in one sentence.
