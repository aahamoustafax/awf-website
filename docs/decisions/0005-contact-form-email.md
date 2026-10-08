# 0005. Contact form: Server Action + Resend REST API, no SDK

- **Status:** accepted
- **Date:** 2026-10-07

## Context

Visitors need to reach AWF (enrollment, donations, volunteering, partnerships) without exposing an
inbox to spam, and without the foundation running a mail server.

## Decision

- The form posts to a Next.js Server Action (`src/actions/contact.ts`). Validation uses zod
  (`src/lib/validation/contact.ts`), and error messages are dictionary keys so they can be translated.
- Email goes through [Resend](https://resend.com) using one `fetch` call to its REST API
  (`src/lib/email/send.ts`). There's no SDK, so no new dependency.
- Spam defence:
  - a hidden honeypot field;
  - a minimum fill time of 2 seconds;
  - an in-memory limit of 5 messages per IP per 10 minutes.

  Suspected bots get a fake "success" and nothing is sent.

- Without `RESEND_API_KEY`, messages are logged in development. In production the form shows an
  error with the foundation's email address, so messages are never silently lost.

## Consequences

- Setup for launch:
  1. Create a Resend account.
  2. Verify the sending domain.
  3. Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` in Vercel.
- The rate limit is per server instance (best effort). If spam gets through, move it to a shared
  store (e.g. Upstash).
- Switching provider means changing only `sendEmail()`.
