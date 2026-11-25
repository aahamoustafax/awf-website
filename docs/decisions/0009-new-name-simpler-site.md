# 0009. New name, a simpler site, and the Kids Essentials Bank

- **Status:** accepted
- **Date:** 2026-11-24
- **Partly replaces:** ADR 0008 (the Kids Essentials Bank comes back); ADR 0005 (the form is off)

## Context

The foundation renamed itself **Azan International Organization (AIO)** and sent a new logo. It also
sent a proposal for the Kids Essentials Bank, a Hamilton program for children, which ADR 0008 had
removed because the Organization Profile did not list it. The client wants a plain home page, one
place to read about every program, contact details, and no online giving or contact form yet.

## Decision

- **Name and logo:** "Azan International Organization (AIO)" everywhere visitors see it. The logo
  image already spells out the name, so `Logo` shows the image alone with the name as its alt text.
  The browser-tab icon is the logo's crescent. Code, the repo name and the email address keep "awf".
- **Home page:** hero with two buttons, the mission, the program cards, and a contact band. The
  donation box, help card, steps, goals and partner band are gone from it; their components stay.
- **Programs (`/our-work`):** all eight programs as expanding panels (`ProgramList`, native
  `<details>`), each with its own drawing. `/our-work#<slug>` opens that panel (`OpenDetailsFromHash`).
  The four steps and the supply list now sit inside the healthcare panel.
- **Kids Essentials Bank:** summarized as who it serves, its four parts, the most-needed items and a
  goal of 50–100 children a month, labelled as a goal. The budget and the named organizations
  (Hamilton Food Share, Mission Services, Ontario Trillium Foundation) are left out: there are no
  signed agreements, and the site never claims partners it doesn't have.
- **Contact:** email, phone and the street address (778 King St E), no form. The form's code and
  its unit tests stay, ready for when email sending is set up.
- **Donate:** the page says "Donations opening soon" and points to the contact page.

## Consequences

- The site is shorter and easier to keep accurate.
- The new logo's red crescent on white is close to the protected Red Crescent emblem. The foundation
  should check this before using the logo widely; a variant that works the crescent into a letter
  was drafted and can replace it.
- Brand colours (navy and saffron) don't yet match the logo's blue and red. Revisit if the logo stays.
