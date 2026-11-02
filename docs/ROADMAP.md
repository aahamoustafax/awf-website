# Roadmap: planned after launch

Features agreed with the foundation but not built yet. Each needs a short ADR when it starts.

## Newsletter / subscriber emails

Build a mailing list of supporters who opted in, to send updates and appeals.

**Legal: CASL (Canada's Anti-Spam Legislation) applies to every one of these emails.**

- Express opt-in only. People who used the contact form are **not** subscribers unless they ticked the
  box. Pre-ticked boxes don't count as consent.
- Record consent for each subscriber: date and time, source page, and the exact wording they agreed to.
- Every email identifies AWF, gives a contact address, and has a working one-click unsubscribe that
  takes effect within 10 business days.

**Plan:**

1. Contact form: optional checkbox "Keep me updated about AWF's work", unticked by default.
   When ticked, `sendContactMessage` also adds the address to the list.
2. Sign-up form in the footer (and optionally on the home page): email, consent text, subscribe.
   It uses a Server Action with the same honeypot, timing and rate-limit protections as the contact
   form (ADR 0005).
3. Store subscribers with the email provider: **Resend Audiences** (fits the existing setup, and
   handles unsubscribe automatically). Mailchimp or Buttondown are alternatives if staff want a visual
   newsletter editor.
4. Optional double opt-in: send a confirmation email before adding someone. This is stronger evidence
   of consent and keeps the list clean.

## Other planned work

- **Bring back the Hamilton programs** when the foundation is ready: remove them from `hiddenRoutes`
  (ADR 0007) and review their copy.
- **Online donations** (after CRA registration): `DonationWidget` with Zeffy or CanadaHelps, in the
  hero help card and on /donate. See ADR 0004.
- **Headless CMS** (Sanity), so staff can edit content. Only `src/lib/content` changes. See ADR 0002.
- **More languages:** French, Dari, Pashto, Arabic (right-to-left). See ADR 0003.
- **Smooth mouse-wheel scrolling** (Lenis) and a performance pass.
- **Partnership one-pager PDF** linked from /partner.
- **News and stories** section, including urgent appeals using the existing `AlertBanner`.
- **Real photos** with consent, replacing the stock hero photo.
