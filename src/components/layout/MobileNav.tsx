"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { buttonClasses } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import { isNavGroup, type Navigation } from "@/lib/navigation";

type MobileNavProps = {
  navigation: Navigation;
  siteName: string;
  labels: { menu: string; openMenu: string; closeMenu: string; nav: string };
};

/**
 * Full-screen menu for phones and tablets (below lg). Uses the native <dialog> element, which
 * provides focus trapping, Escape to close and an inert page behind it, with no extra code.
 * Groups use native <details> so they expand without JavaScript.
 */
export function MobileNav({ navigation, siteName, labels }: MobileNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.classList.add("overflow-hidden");
  };
  const close = () => dialogRef.current?.close();

  // Close after navigating (tapping a link changes the pathname).
  useEffect(() => dialogRef.current?.close(), [pathname]);

  const linkClass = (href: string) =>
    cn(
      "block rounded-xl px-3 py-3 text-lg text-primary hover:bg-surface-muted",
      pathname === href && "bg-surface-muted font-semibold",
    );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={open}
        aria-label={labels.openMenu}
        className="inline-flex items-center gap-2 rounded-full px-3 py-2 font-medium text-primary hover:bg-surface-muted"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="hidden sm:inline">{labels.menu}</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={labels.menu}
        onClose={() => document.documentElement.classList.remove("overflow-hidden")}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-background p-0 text-foreground backdrop:bg-primary/40"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-border px-4 sm:px-6">
            <Logo name={siteName} />
            <button
              type="button"
              onClick={close}
              aria-label={labels.closeMenu}
              className="rounded-full p-2 text-primary hover:bg-surface-muted"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav aria-label={labels.nav} className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <ul className="space-y-1">
              {navigation.main.map((item) =>
                isNavGroup(item) ? (
                  <li key={item.label}>
                    <details
                      className="group"
                      open={item.children.some((child) => pathname.startsWith(child.href))}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 font-display text-display-sm font-semibold text-primary hover:bg-surface-muted [&::-webkit-details-marker]:hidden">
                        {item.label}
                        <svg
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                          className="size-5 transition-transform group-open:rotate-180"
                        >
                          <path
                            d="M4 6l4 4 4-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </summary>
                      <ul className="mt-1 mb-3 ml-3 space-y-1 border-l-2 border-border pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className={linkClass(child.href)}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="block rounded-xl px-3 py-3 font-display text-display-sm font-semibold text-primary hover:bg-surface-muted"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="grid shrink-0 gap-3 border-t border-border p-4 sm:grid-cols-2 sm:p-6">
            <Link
              href={navigation.partner.href}
              className={cn(buttonClasses({ variant: "outline", size: "lg" }), "text-primary")}
            >
              {navigation.partner.label}
            </Link>
            <Link
              href={navigation.donate.href}
              className={buttonClasses({ variant: "cta", size: "lg" })}
            >
              {navigation.donate.label}
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
}
