# 0006. Smooth mouse-wheel scrolling with Lenis

- **Status:** accepted
- **Date:** 2026-10-07

## Context

With a mouse wheel, browsers scroll in steps, which the foundation found choppy. We measured the
site at a steady 60 fps with no dropped frames, so the cause is the browser's native wheel
stepping, not slow rendering. Premium sites smooth this with inertia scrolling.

## Decision

Add [Lenis](https://github.com/darkroomengineering/lenis) (about 3 KB gzipped, MIT licence) through
one client component, `src/components/motion/SmoothScroll.tsx`, mounted in the root layout.

- It isn't started on touch devices, which already scroll smoothly by themselves.
- It isn't started for visitors who prefer reduced motion.
- Scrolling inside `<dialog>` elements (the mobile menu) stays native.
- In-page anchor links use Lenis, so they glide too.

## Consequences

- Wheel scrolling feels smooth. Keyboard scrolling, the scrollbar and find-in-page still work.
- One more client-side dependency. To remove it, delete the component, its use in the layout, and
  the package.
- If something scrolls wrongly inside a scrollable area, add `data-lenis-prevent` to that element.
