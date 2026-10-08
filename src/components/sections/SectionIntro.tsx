import { Eyebrow, Heading, Lead } from "@/components/ui";
import { cn } from "@/lib/cn";

type SectionIntroProps = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  /** "light" for navy sections. */
  tone?: "default" | "light";
  className?: string;
};

/** Eyebrow + heading + optional lead: the standard opening of a page section. */
export function SectionIntro({
  id,
  eyebrow,
  title,
  lead,
  tone = "default",
  className,
}: SectionIntroProps) {
  const light = tone === "light";
  return (
    <div className={cn("max-w-3xl", className)}>
      <Eyebrow className={light ? "text-brand-sky" : "text-accent"}>{eyebrow}</Eyebrow>
      <Heading level={2} id={id} className={cn("mt-3", !light && "text-primary")}>
        {title}
      </Heading>
      {lead && (
        <Lead className={cn("mt-5", light ? "text-on-primary/85" : "text-muted")}>{lead}</Lead>
      )}
    </div>
  );
}
