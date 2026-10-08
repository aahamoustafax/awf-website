import Link from "next/link";

type Crumb = { label: string; href?: string };

type BreadcrumbProps = { label: string; items: Crumb[] };

/** Trail of links back up the site. The last item is the current page (no link). */
export function Breadcrumb({ label, items }: BreadcrumbProps) {
  return (
    <nav aria-label={label}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-on-primary/80">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="underline-offset-4 hover:text-on-primary hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-on-primary">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
