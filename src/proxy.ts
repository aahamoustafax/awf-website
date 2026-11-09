import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales } from "@/i18n/config";

/**
 * Runs before every page request: sends any URL without a language prefix to the default language
 * (/about → /en/about). Static files and Next internals are skipped by `matcher`.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));

  if (!hasLocale) {
    request.nextUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}

export const config = {
  // Skip Next internals, API routes and any path with a file extension (images, favicon, robots.txt…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
