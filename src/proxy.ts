import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales } from "@/i18n/config";

/**
 * Sends any URL without a language prefix to the default language,
 * e.g. /about → /en/about. Static files and Next internals are skipped by `matcher`.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals, API routes and any path with a file extension (images, favicon, robots.txt…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
