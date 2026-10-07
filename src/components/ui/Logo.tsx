import { useId } from "react";

import { cn } from "@/lib/cn";

type LogoProps = {
  name: string;
  /** "light" for use on navy backgrounds. */
  variant?: "default" | "light";
  className?: string;
};

/**
 * TEMPORARY logo: a drawn crescent mark plus the name as text.
 * TODO(foundation): replace the <svg> with the official logo file (SVG preferred).
 */
export function Logo({ name, variant = "default", className }: LogoProps) {
  // Unique per instance: the logo appears in both header and footer.
  const maskId = useId();
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        variant === "light" ? "text-on-primary" : "text-primary",
        className,
      )}
    >
      <svg viewBox="0 0 48 48" aria-hidden="true" className="size-10 shrink-0">
        <defs>
          <mask id={maskId}>
            <rect width="48" height="48" fill="white" />
            <circle cx="30" cy="20" r="16" fill="black" />
          </mask>
        </defs>
        <circle
          cx="22"
          cy="25"
          r="19"
          mask={`url(#${maskId})`}
          className={variant === "light" ? "fill-brand-sky" : "fill-accent"}
        />
      </svg>
      <span className="font-display text-lg leading-tight font-semibold">{name}</span>
    </span>
  );
}
