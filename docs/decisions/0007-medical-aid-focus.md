# 0007. Focus the site on medical aid; hide the Hamilton programs

- **Status:** accepted
- **Date:** 2026-11-02

## Context

The foundation narrowed its message. AWF's one job, for now, is to source medicines and medical
supplies from around the world for people in need, with a focus on Afghanistan. The founder sent an
outline (an AI-drafted HTML wireframe) with the structure he wants: vision and mission, six focus
areas, operations, and "established 2020, head office in Hamilton". That outline is the source of
truth for content. Our design stays.

The Hamilton programs (Children's Education, Skills & Livelihoods, Kids Essentials Bank) are paused,
not cancelled, and may come back.

## Decision

- **Hide, don't delete.** `hiddenRoutes` in `src/lib/routes.ts` lists the switched-off pages: the
  three Hamilton programs, Healthcare for Afghanistan (its content moved to `/our-work`), the programs
  index and Who we serve. A hidden page:
  - returns a real 404 (`proxy.ts`);
  - is left out of the menu, footer, sitemap and program lists (`getPrograms()` skips hidden programs);
  - keeps its content in `src/content`, so it can come back.

  Hidden program pages are still prerendered (`getPrograms({ includeHidden: true })`), because
  Cache Components requires `generateStaticParams` to return at least one param.

- **New content model.** `src/content/work.ts` holds the six focus areas, the four supply steps and
  the supply list. The home page and the new `/our-work` page both read it.
- **Home page:** hero with a donation box, mission with the "Choose how to help" card beside it,
  focus areas, how we work, goals, partner call to action. The donation box is visual only until
  online giving launches (ADR 0004): its button leads to `/donate`, and it collects no payment
  details. The help card took the globe's place "for now"; `GlobeMap` (Canada → Afghanistan) is kept
  and comes back as `MissionQuote`'s `aside`. The Programs, Two places, Ways to help and Values sections are gone; values
  stay on About. `Geographies` and `WaysToGive` were deleted (restore them from git history if needed).
  The home donation module (ADR 0004) is the hero's `DonationBox`.
- **Goals without numbers.** No targets are set yet, so each goal's `value` is a short headline
  ("First shipment"). Replace it with a figure when the foundation confirms one.
- The contact form's "Enrolling a child" topic was removed.

## Consequences

- To bring a page back: delete its path from `hiddenRoutes`, check its copy, and run `npm run check`.
  The unit test "hidden pages are never linked from a page that is shown" catches stale links in
  both directions. Bringing the programs back also brings back the Programs menu and their footer
  links on their own.
- The About story no longer says AWF was founded in Afghanistan. It follows the outline:
  established 2020, head office in Hamilton.
- Still to confirm with the foundation (marked `TODO(foundation)` where relevant): the supply list,
  whether donated medicines are ever accepted, the hero photo, and real goal figures.
