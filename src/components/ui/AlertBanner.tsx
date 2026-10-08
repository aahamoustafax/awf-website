import Link from "next/link";

type AlertBannerProps = {
  /** Accessible name for the region, from the dictionary (e.g. "Announcement"). */
  label: string;
  message: string;
  link?: { href: string; label: string };
};

/**
 * Site-wide urgent notice (e.g. an emergency appeal), shown above the header.
 * Rendered only when content provides an alert, so it costs nothing when unused.
 */
export function AlertBanner({ label, message, link }: AlertBannerProps) {
  return (
    <aside aria-label={label} className="bg-alert px-4 py-2.5 text-center text-sm text-white">
      <span>{message}</span>
      {link && (
        <>
          {" "}
          <Link href={link.href} className="font-semibold underline underline-offset-2">
            {link.label}
          </Link>
        </>
      )}
    </aside>
  );
}
