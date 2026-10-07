import { notFound } from "next/navigation";

/**
 * Catch-all for unknown URLs under a language (e.g. /en/does-not-exist), so they render the
 * styled [lang]/not-found.tsx inside the site layout instead of Next's bare default 404.
 */
export default function CatchAll() {
  notFound();
}
