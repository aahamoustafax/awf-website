import { Container, Heading } from "@/components/ui";
import type { ProseSection as ProseBlock } from "@/content/types";

type ProseSectionProps = { sections: ProseBlock[]; updated: string; updatedLabel: string };

/** Long-form text page body (privacy, accessibility): readable measure, clear headings. */
export function ProseSection({ sections, updated, updatedLabel }: ProseSectionProps) {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-muted">
            {updatedLabel}: {updated}
          </p>
          {sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <Heading level={2} size="sm" className="text-primary">
                {section.heading}
              </Heading>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="mt-4 text-lg text-pretty">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
