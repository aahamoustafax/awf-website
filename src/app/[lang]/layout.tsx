import type { Metadata } from "next";

import { locales, getDirection } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getSite } from "@/lib/content";

import "@/styles/globals.css";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    title: { default: site.name, template: `%s | ${site.name}` },
    description: site.description,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <html lang={locale} dir={getDirection(locale)} className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a href="#main" className="sr-only focus:not-sr-only">
          {dict.site.skipToContent}
        </a>
        <main id="main" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
