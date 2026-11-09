import Image from "next/image";

import { cn } from "@/lib/cn";

type LogoProps = {
  name: string;
  /** "light" for use on navy backgrounds. */
  variant?: "default" | "light";
  className?: string;
};

/**
 * The foundation's logo with its name beside it. Both files are transparent, so the logo blends into
 * whatever is behind it; the navy version has white lettering. `alt` is empty because the name is
 * right next to it.
 */
export function Logo({ name, variant = "default", className }: LogoProps) {
  const onNavy = variant === "light";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        onNavy ? "text-on-primary" : "text-primary",
        className,
      )}
    >
      <Image
        src={onNavy ? "/images/logo-white-text.png" : "/images/logo.png"}
        alt=""
        width={60}
        height={56}
        className="h-14 w-auto shrink-0"
      />
      <span className="font-display text-lg leading-tight font-semibold">{name}</span>
    </span>
  );
}
