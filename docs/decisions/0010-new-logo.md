# 0010. New logo: star and swoosh, redrawn as flat SVG

- **Status:** accepted
- **Date:** 2026-11-25
- **Partly replaces:** ADR 0009 (the logo and the crescent browser-tab icon)

## Context

The client chose a new logo: a star with a swoosh in a rounded square, "AZAN" in heavy capitals,
"INTERNATIONAL ORGANIZATION" below, and a small globe on a rule. The file they sent
(`docs/brand/azan-logo-original.webp`) is a raster image on a white background, with gradients and
shine. On the site that meant a white box on the navy footer, a blurry logo when scaled, and a
second line about 5 px tall in the 44 px header.

## Decision

- **Redraw it as flat SVG**, keeping the design: same star, swoosh, frame, lettering and globe, in
  one solid blue (`#0D5BB0`, 6.7:1 on white) with a lighter swoosh. Where the swoosh crosses the
  star there is a cut-out gap, so the mark still reads in one colour. "AZAN" is drawn by hand;
  "INTERNATIONAL ORGANIZATION" is Inter Medium (already in `src/assets/fonts`) turned into outlines.
- **Four files:**
  - `public/images/logo-full.svg`: the full logo with the globe, for documents and large uses.
  - `public/images/logo.svg`: header and mobile menu. It drops the globe and rule, which vanish at
    48 px.
  - `public/images/logo-white.svg`: the same in white with a sky-blue swoosh, for the navy footer
    and the social share image.
  - `src/app/icon.svg`: the browser-tab icon, a white star and swoosh on a blue tile.
- The header logo is 36/40 px tall (phone/larger screens) to keep the header light; the footer logo
  is 44/48 px, where the second line has more room.
- The old PNG logos and the crescent icon are removed (copies kept outside the repo).

## Consequences

- One source of truth per version, sharp at any size, small files (about 11 KB each).
- The blue sits beside the site's navy, sky and saffron without changing any design tokens.
- If the foundation later provides official vector files, replace these four files and keep their names.
