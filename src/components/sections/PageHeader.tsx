import type { ReactNode } from "react";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container, Eyebrow, Heading } from "@/components/ui";

type PageHeaderProps = {
  breadcrumb: { label: string; items: { label: string; href?: string }[] };
  eyebrow?: string;
  title: string;
  lead: string;
  /** Extra content under the lead, e.g. badges or focus tags. */
  meta?: ReactNode;
  /** Optional illustration on the right (e.g. a ProgramIllustration). */
  art?: ReactNode;
};

/**
 * Opening band of every inner page: navy like the home hero, with the same soft crescent
 * watermark and a thin sky-to-saffron rule echoing the Afghanistan → Canada line.
 */
export function PageHeader({ breadcrumb, eyebrow, title, lead, meta, art }: PageHeaderProps) {
  return (
    <section
      aria-labelledby="page-title"
      className="relative isolate overflow-hidden bg-primary text-on-primary"
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-40 -z-10 size-[34rem] opacity-[0.06]"
      >
        <defs>
          <mask id="header-crescent">
            <rect width="100" height="100" fill="white" />
            <circle cx="62" cy="42" r="34" fill="black" />
          </mask>
        </defs>
        <circle cx="46" cy="52" r="40" mask="url(#header-crescent)" className="fill-on-primary" />
      </svg>

      <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Breadcrumb {...breadcrumb} />
          {eyebrow && <Eyebrow className="mt-10 text-brand-sky">{eyebrow}</Eyebrow>}
          <Heading level={1} size="lg" id="page-title" className={eyebrow ? "mt-3" : "mt-10"}>
            {title}
          </Heading>
          <span
            aria-hidden="true"
            className="mt-6 block h-1 w-24 rounded-full bg-linear-to-r from-brand-sky to-cta"
          />
          <p className="mt-6 max-w-2xl text-lg text-pretty text-on-primary/90 sm:text-xl">{lead}</p>
          {meta && <div className="mt-8">{meta}</div>}
        </div>
        {art && (
          <div className="mx-auto w-36 sm:w-56 lg:w-72">
            <div className="rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-brand-sky)_16%,transparent),transparent_70%)] p-6">
              {art}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
