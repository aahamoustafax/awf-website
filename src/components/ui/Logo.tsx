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
 * becomes its alt text. Both files are transparent; the navy version has white lettering.
 */
export function Logo({ name, variant = "default", className }: LogoProps) {
  const onNavy = variant === "light";
  return (
    <Image
      src={onNavy ? "/images/logo-white-text.png" : "/images/logo.png"}
      alt={name}
      width={960}
      height={224}
      className={cn("h-10 w-auto shrink-0 sm:h-11", className)}
    />
  );
}
