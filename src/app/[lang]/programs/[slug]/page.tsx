import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  CtaBand,
  GoalsBand,
  PageHeader,
  ProgramGrid,
  ProgramIllustration,
  ProgramNeeds,
  ProgramOfferings,
  ProgramStory,
} from "@/components/sections";
import { Badge } from "@/components/ui";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getPage, getProgram, getPrograms } from "@/lib/content";
import { toProgramCard } from "@/lib/programs";

/** Every program page is prerendered at build time. */
export async function generateStaticParams() {
  const programs = await getPrograms();
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/programs/[slug]">): Promise<Metadata> {
  const program = await getProgram((await params).slug);
  return program ? { title: program.title, description: program.summary } : {};
}

export default async function ProgramPage({ params }: PageProps<"/[lang]/programs/[slug]">) {
  const { slug } = await params;
  const [program, programs, intro, dict, locale] = await Promise.all([
    getProgram(slug),
    getPrograms(),
    getPage("programs").then((page) => page.intro),
    getDictionary(),
    getLocale(),
  ]);
  if (!program) notFound();

  const t = dict.programs;
  const others = programs.filter((p) => p.slug !== program.slug);

  return (
    <>
      <PageHeader
        breadcrumb={{
          label: dict.breadcrumb.label,
          items: [
            { label: dict.breadcrumb.home, href: localePath(locale, "/") },
            { label: intro.eyebrow, href: localePath(locale, "/programs") },
            { label: program.title },
          ],
        }}
        eyebrow={t.regions[program.region]}
        title={program.title}
        lead={program.summary}
        meta={
          <div className="flex flex-wrap items-center gap-2">
            {program.status === "launching" && <Badge tone="cta">{t.status.launching}</Badge>}
            {program.focus.map((tag) => (
              <Badge key={tag} tone="onDark">
                {tag}
              </Badge>
            ))}
          </div>
        }
        art={<ProgramIllustration icon={program.icon} animated />}
      />

      <ProgramStory
        overview={program.overview}
        audience={program.audience}
        facts={program.facts}
        labels={{
          whyItMatters: t.whyItMatters,
          whoWeServe: t.whoWeServe,
          keyDetails: t.keyDetails,
        }}
      />

      <ProgramOfferings {...program.offerings} />

      {program.needs && (
        <ProgramNeeds
          eyebrow={t.mostNeeded}
          title={t.mostNeededTitle}
          lead={t.mostNeededLead}
          needs={program.needs}
        />
      )}

      {program.goals && (
        <GoalsBand
          eyebrow={t.goalsEyebrow}
          title={t.goalsTitle}
          items={program.goals}
          note={t.goalsNote}
        />
      )}

      <CtaBand
        title={program.action.heading}
        body={program.action.body}
        action={{ label: t.contactUs, href: localePath(locale, "/contact") }}
      />

      <ProgramGrid
        id="other-programs"
        intro={{ eyebrow: t.otherProgramsEyebrow, title: t.otherProgramsTitle }}
        learnMoreLabel={t.learnMore}
        programs={others.map((p) => toProgramCard(p, dict, locale))}
      />
    </>
  );
}
