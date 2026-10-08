import { getDictionary } from "@/i18n/dictionaries";
import { getSite } from "@/lib/content";

// Placeholder until Phase 5 (home page sections).
export default async function HomePage() {
  const [site, dict] = await Promise.all([getSite(), getDictionary()]);

  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-24">
      <h1 className="text-4xl font-semibold">{site.name}</h1>
      <p className="text-lg">{site.description}</p>
      <p>{dict.home.comingSoon}</p>
    </section>
  );
}
