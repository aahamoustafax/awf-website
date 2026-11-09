import Link from "next/link";

import { Container, Logo } from "@/components/ui";
import type { Site } from "@/content/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import type { Navigation } from "@/lib/navigation";

type FooterProps = {
  site: Site;
  navigation: Navigation;
  locale: Locale;
  dict: Dictionary;
};

/** Site footer: mission, link columns, transparency/legal links. */
export function Footer({ site, navigation, locale, dict }: FooterProps) {
  const path = (p: string) => localePath(locale, p);
  const { footer, nav } = dict;

  const columns = [
    {
      title: footer.about,
      links: [
        { label: nav.whoWeAre, href: path("/about") },
        { label: nav.governance, href: path("/about/governance") },
        { label: footer.faq, href: path("/faq") },
      ],
    },
    {
      title: footer.ourWork,
      links: [
        { label: footer.howWeWork, href: path("/our-work") },
        { label: footer.whatWeSupply, href: path("/our-work#what-we-supply") },
      ],
    },
    {
      title: footer.getInvolved,
      links: [
        navigation.partner,
        navigation.donate,
        { label: footer.volunteer, href: path("/get-involved") },
        { label: nav.contact, href: path("/contact") },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-on-primary">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo name={site.name} variant="light" />
            <p className="mt-6 text-pretty">{site.tagline}</p>
            <p className="mt-4 text-sm text-brand-sky">{footer.basedIn}</p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-display text-lg font-semibold text-brand-sky">{column.title}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="underline-offset-4 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {site.socials.length > 0 && (
          <div className="mt-12">
            <h2 className="sr-only">{footer.followUs}</h2>
            <ul className="flex gap-4">
              {site.socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    className="capitalize underline-offset-4 hover:underline"
                    rel="me noopener"
                  >
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-14 flex flex-col gap-4 border-t border-on-primary/20 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {site.name}. {footer.rights}
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href={path("/privacy")} className="underline-offset-4 hover:underline">
                {footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={path("/accessibility")} className="underline-offset-4 hover:underline">
                {footer.accessibility}
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

/** Reading the current date must be cached under Cache Components; refreshes with each cache cycle. */
async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
