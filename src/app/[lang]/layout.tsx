import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/motion";
import { getDirection, locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getPrograms, getSite } from "@/lib/content";
import { buildNavigation } from "@/lib/navigation";
import { siteUrl } from "@/lib/siteUrl";
import { jsonLdScript, organizationJsonLd } from "@/lib/structuredData";
import { fontVariables } from "@/styles/fonts";

import "@/styles/globals.css";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    metadataBase: siteUrl(),
    title: { default: site.name, template: `%s | ${site.name}` },
    description: site.description,
    applicationName: site.name,
    openGraph: {
      type: "website",
      siteName: site.name,
      title: site.name,
      description: site.description,
      locale: "en_CA",
    },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: "#0b2545", // matches --color-primary
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const [dict, site, programs] = await Promise.all([getDictionary(), getSite(), getPrograms()]);
  const navigation = buildNavigation(dict, locale, programs);

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      className={`${fontVariables} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationJsonLd(site, siteUrl())) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-on-primary"
        >
          {dict.site.skipToContent}
        </a>
        <SmoothScroll />
        <Header
          site={site}
          navigation={navigation}
          homeHref={localePath(locale, "/")}
          dict={dict}
        />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer
          site={site}
          programs={programs}
          navigation={navigation}
          locale={locale}
          dict={dict}
        />
      </body>
    </html>
  );
}
