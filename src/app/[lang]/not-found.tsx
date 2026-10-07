import { ButtonLink, Eyebrow, Heading, Lead, Section } from "@/components/ui";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";

export default async function NotFound() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <Section aria-labelledby="not-found-title" className="py-24 sm:py-32">
      <Eyebrow className="text-accent">404</Eyebrow>
      <Heading level={1} size="lg" id="not-found-title" className="mt-4 text-primary">
        {dict.notFound.title}
      </Heading>
      <Lead className="mt-6 text-muted">{dict.notFound.body}</Lead>
      <ButtonLink href={localePath(locale, "/")} className="mt-10">
        {dict.notFound.home}
      </ButtonLink>
    </Section>
  );
}
