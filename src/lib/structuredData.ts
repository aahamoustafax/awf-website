import type { Site } from "@/content/types";

/**
 * schema.org description of AWF as an NGO, rendered as JSON-LD in the root layout so search
 * engines can show the organization's name, contact details and location.
 */
export function organizationJsonLd(site: Site, url: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: url.toString(),
    logo: new URL("/images/logo.png", url).toString(),
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      addressCountry: "CA",
    },
    areaServed: ["Canada", "Afghanistan"],
    founder: { "@type": "Person", name: "Nasratullah Rahim" },
    sameAs: site.socials.map((social) => social.url),
  };
}

/** Serializes JSON-LD safely for a <script> tag (escapes "<" so content can't close the tag). */
export function jsonLdScript(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
