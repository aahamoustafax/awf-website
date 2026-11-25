# Walkthrough

One line per file we created or changed a lot: what it does, in plain words, and why it exists.
Unreviewed items have an empty box.

- [ ] `public/images/logo.png`, `logo-white-text.png`, `src/app/icon.png`: the new AZAN logo with a see-through background, a white-lettered copy for the navy footer, and the crescent as the browser-tab icon. Made from the image the foundation sent.
- [ ] `src/components/ui/Logo.tsx`: shows the logo picture. The picture already spells the name, so the name is only its description for screen readers.
- [ ] `src/content/work.ts`: the text for all eight programs, including the Kids Essentials Bank. Edit this file to change what the Programs page says.
- [ ] `src/components/sections/ProgramList.tsx`: draws each program as a card that opens when clicked, showing its lists, steps, tiles and goal.
- [ ] `src/components/sections/OpenDetailsFromHash.tsx`: when a link points at a program (for example `/our-work#kids-essentials-bank`), opens that card and scrolls to it.
- [ ] `src/components/sections/ProgramIllustration.tsx`: the small line drawings; four new ones (blood drop, mother and child, house, tent).
- [ ] `src/app/[lang]/page.tsx`: the home page, now just headline, mission, program cards and a "Get in touch" band.
- [ ] `src/app/[lang]/contact/page.tsx`: contact details with the street address; the message form is switched off for now.
- [ ] `docs/decisions/0009-new-name-simpler-site.md`: records why we renamed, simplified the site and what we left out of the Kids Essentials Bank (budget, named partners).
