# 0001. Next.js 16 + TypeScript + Tailwind CSS

- **Status:** accepted
- **Date:** 2026-10-07

## Context

A marketing/credibility site for a non-profit. It must be fast, SEO-friendly, accessible, cheap to
host, and easy for a future engineer (or AI agent) to pick up.

## Decision

Next.js 16 (App Router, Cache Components), React 19, strict TypeScript, Tailwind CSS v4, hosted on
Vercel. npm as package manager.

## Consequences

- The most widely known React stack, which makes hiring and handover easy. Static prerendering gives
  fast pages and good SEO. Vercel's free tier covers this traffic level.
- Next.js 16 changed APIs (proxy.ts, root params, Cache Components), and agents trained on older
  versions may get them wrong. AGENTS.md points them to the bundled docs.
