import { Eyebrow, Heading, Lead, Section } from "@/components/ui";
import { getDictionary } from "@/i18n/dictionaries";
import { getSite } from "@/lib/content";

// Placeholder until Phase 5 (home page sections).
export default async function HomePage() {
  const [site, dict] = await Promise.all([getSite(), getDictionary()]);

  return (
    <Section aria-labelledby="home-title">
      <Eyebrow className="text-accent">{dict.home.comingSoon}</Eyebrow>
      <Heading level={1} id="home-title" className="mt-4 text-primary">
        {site.name}
      </Heading>
      <Lead className="mt-6 text-muted">{site.description}</Lead>
    </Section>
  );
}
