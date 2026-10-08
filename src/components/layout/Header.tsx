import Link from "next/link";

import { AlertBanner, ButtonLink, Container, Logo } from "@/components/ui";
import type { Site } from "@/content/types";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Navigation } from "@/lib/navigation";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

type HeaderProps = {
  site: Site;
  navigation: Navigation;
  homeHref: string;
  dict: Dictionary;
};

/** Sticky site header. Server-rendered; only the menus are interactive (client) components. */
export function Header({ site, navigation, homeHref, dict }: HeaderProps) {
  return (
    <>
      {site.alert && <AlertBanner label={dict.site.announcement} {...site.alert} />}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link href={homeHref} className="shrink-0 rounded-lg">
            <Logo name={site.name} />
          </Link>

          <DesktopNav label={dict.nav.label} items={navigation.main} />

          <div className="flex items-center gap-2">
            {/* Visibility lives on wrappers: primitives own their display style (see src/lib/cn.ts). */}
            <div className="hidden xl:block">
              <ButtonLink href={navigation.partner.href} variant="outline" className="text-primary">
                {navigation.partner.label}
              </ButtonLink>
            </div>
            <div className="hidden sm:block">
              <ButtonLink href={navigation.donate.href} variant="cta">
                {navigation.donate.label}
              </ButtonLink>
            </div>
            <MobileNav
              navigation={navigation}
              siteName={site.name}
              labels={{
                menu: dict.nav.menu,
                openMenu: dict.nav.openMenu,
                closeMenu: dict.nav.closeMenu,
                nav: dict.nav.label,
              }}
            />
          </div>
        </Container>
      </header>
    </>
  );
}
