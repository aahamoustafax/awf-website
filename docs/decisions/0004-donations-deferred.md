# 0004. Offline giving now, embedded provider after CRA registration

- **Status:** accepted
- **Date:** 2026-10-07

## Context

AWF is not yet a CRA-registered charity, so it cannot issue official tax receipts. CanadaHelps
requires registration. Zeffy's eligibility for non-registered non-profits must be confirmed.

## Decision

The Donate page lists the ways to give now: e-transfer, in-kind medical equipment, volunteering, and
a partnership enquiry. Online giving will be one `DonationWidget` component in `src/lib/donations`,
added after registration, with no payment code of our own.

## Consequences

- Nothing to secure or maintain for payments now.
- Fewer impulse donations until the widget is live. Revisit once registration is confirmed.
- Planned: a donation module on the home page itself (amount buttons tied to concrete outcomes),
  using the same `DonationWidget`. Phase 5 reserves a home-page section for it.
