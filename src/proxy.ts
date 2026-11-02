import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales } from "@/i18n/config";
import { getPrograms } from "@/lib/content";
import { isHiddenRoute } from "@/lib/routes";

/**
 * Runs before every page request:
 * 1. Sends any URL without a language prefix to the default language (/about → /en/about).
 * 2. Gives hidden pages (ADR 0007) and unknown program slugs a real 404 status. Pages stream
 *    (Cache Components), and a page that has started streaming can only show not-found UI with a
 *    200 status, so the check happens here, before rendering, by rewriting to the catch-all
 *    not-found route.
 * Static files and Next internals are skipped by `matcher`.
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = locales.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));

  if (!locale) {
    request.nextUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  const path = pathname.slice(`/${locale}`.length) || "/";
  if (isHiddenRoute(path) || !(await isKnownProgramPath(path))) {
    request.nextUrl.pathname = `/${locale}/not-found`;
    return NextResponse.rewrite(request.nextUrl);
  }
}

/** False only for a program path whose slug isn't a visible program; other paths pass. */
async function isKnownProgramPath(path: string): Promise<boolean> {
  const slug = path.match(/^\/programs\/([^/]+)\/?$/)?.[1];
  if (!slug) return true;
  return (await getPrograms()).some((program) => program.slug === slug);
}

export const config = {
  // Skip Next internals, API routes and any path with a file extension (images, favicon, robots.txt…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
