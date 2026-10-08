import { ButtonLink, Container, Heading } from "@/components/ui";

type CtaBandProps = { title: string; body: string; action: { label: string; href: string } };

/** Closing call to action before the footer. */
export function CtaBand({ title, body, action }: CtaBandProps) {
  return (
    <section aria-labelledby="cta-title" className="bg-background py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-start gap-8 rounded-3xl bg-accent p-8 text-on-primary sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16">
          <div className="max-w-2xl">
            <Heading level={2} size="lg" id="cta-title">
              {title}
            </Heading>
            <p className="mt-4 text-lg">{body}</p>
          </div>
          <div className="shrink-0">
            <ButtonLink href={action.href} variant="cta" size="lg">
              {action.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
