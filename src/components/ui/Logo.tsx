import Image from "next/image";

import { cn } from "@/lib/cn";

type LogoProps = {
  name: string;
  /** "light" for use on navy backgrounds. */
  variant?: "default" | "light";
  className?: string;
};

/**
 * The organization's logo. The image already spells out the name, so it stands alone and `name`
 * becomes its alt text. Both files are flat SVGs with see-through backgrounds; the navy version is
 * white. They leave out the globe of the full logo (`logo-full.svg`), which vanishes at this size.
 */
export function Logo({ name, variant = "default", className }: LogoProps) {
  const onNavy = variant === "light";
  return (
    <Image
      src={onNavy ? "/images/logo-white.svg" : "/images/logo.svg"}
      alt={name}
      width={680}
      height={140}
      // Smaller in the header, larger on navy (the footer).
      className={cn("w-auto shrink-0", onNavy ? "h-11 sm:h-12" : "h-9 sm:h-10", className)}
    />
  );
}
