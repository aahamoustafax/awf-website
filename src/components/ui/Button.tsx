import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const variants = {
  /** Saffron call to action: Donate, Partner with us. At most one per view. */
  cta: "bg-cta text-on-cta hover:bg-cta-hover",
  /** Navy: the main action on light backgrounds. */
  primary: "bg-primary text-on-primary hover:bg-primary-hover",
  /** Outlined: secondary actions. Inherits text colour, so it works on dark sections too. */
  outline: "border-2 border-current hover:bg-current/10",
} as const;

const sizes = {
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
} as const;

export type ButtonStyle = { variant?: keyof typeof variants; size?: keyof typeof sizes };

/** Shared by Button and ButtonLink so links and buttons look identical. */
export function buttonClasses({ variant = "primary", size = "md" }: ButtonStyle = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
  );
}

/** For actions on the page (submit a form, open a menu). */
export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ComponentProps<"button"> & ButtonStyle) {
  return (
    <button type={type} className={cn(buttonClasses({ variant, size }), className)} {...props} />
  );
}

/** For navigation that should look like a button (Donate, Learn more). */
export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ComponentProps<typeof Link> & ButtonStyle) {
  return <Link className={cn(buttonClasses({ variant, size }), className)} {...props} />;
}
