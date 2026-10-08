import { Reveal } from "@/components/motion";
import { Card, Heading, Section } from "@/components/ui";

type ContactMethod = { label: string; value: string; href?: string };

type ContactPanelProps = { title: string; methods: ContactMethod[] };

/** Contact details as large, tappable cards (mailto: and tel: links on phones). */
export function ContactPanel({ title, methods }: ContactPanelProps) {
  return (
    <Section aria-labelledby="contact-details-title">
      <Heading level={2} size="md" id="contact-details-title" className="text-primary">
        {title}
      </Heading>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {methods.map((method, index) => (
          <li key={method.label}>
            <Reveal delay={index * 90} className="h-full">
              <Card className="h-full border-t-4 border-t-cta">
                <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
                  {method.label}
                </p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="mt-3 block font-display text-display-sm font-semibold break-words text-primary underline-offset-4 hover:underline"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="mt-3 font-display text-display-sm font-semibold text-primary">
                    {method.value}
                  </p>
                )}
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
