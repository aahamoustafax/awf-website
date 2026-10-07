"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { isNavGroup, type NavGroup, type NavItem } from "@/lib/navigation";

type DesktopNavProps = { label: string; items: NavItem[] };

const linkStyle =
  "rounded-full px-4 py-2 font-medium text-primary transition-colors hover:bg-surface-muted";

/**
 * Desktop menu (lg and up). Groups open as disclosure dropdowns: click or keyboard
 * (Enter/Space) toggles, hover opens on mouse devices, Escape or clicking outside closes.
 */
export function DesktopNav({ label, items }: DesktopNavProps) {
  const pathname = usePathname();
  // Remember which page a dropdown was opened on; after navigating it counts as closed,
  // so no effect is needed to reset it.
  const [openState, setOpenState] = useState<{ group: string; path: string } | null>(null);
  const openGroup = openState?.path === pathname ? openState.group : null;
  const setOpenGroup = (group: string | null) =>
    setOpenState(group ? { group, path: pathname } : null);
  const navRef = useRef<HTMLElement>(null);

  // Close when clicking anywhere outside the menu.
  useEffect(() => {
    if (!openGroup) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenState(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openGroup]);

  return (
    <nav ref={navRef} aria-label={label} className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {items.map((item) =>
          isNavGroup(item) ? (
            <DropdownGroup
              key={item.label}
              group={item}
              pathname={pathname}
              open={openGroup === item.label}
              onOpenChange={(open) => setOpenGroup(open ? item.label : null)}
            />
          ) : (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(linkStyle, pathname === item.href && "bg-surface-muted")}
              >
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

type DropdownGroupProps = {
  group: NavGroup;
  pathname: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function DropdownGroup({ group, pathname, open, onOpenChange }: DropdownGroupProps) {
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lastPointer = useRef<string>("");
  const isActive = group.children.some((child) => pathname.startsWith(child.href));

  return (
    <li
      className="relative"
      // Mouse users get hover-to-open; touch and keyboard users toggle with the button.
      onPointerEnter={(event) => event.pointerType === "mouse" && onOpenChange(true)}
      onPointerLeave={(event) => event.pointerType === "mouse" && onOpenChange(false)}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          onOpenChange(false);
          buttonRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        // Close when keyboard focus leaves the group entirely.
        if (!event.currentTarget.contains(event.relatedTarget)) onOpenChange(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onPointerDown={(event) => (lastPointer.current = event.pointerType)}
        onClick={(event) => {
          // A mouse click arrives after hover already opened the menu, so keep it open.
          // Keyboard "clicks" (detail 0) and touch taps toggle.
          const isMouseClick = event.detail > 0 && lastPointer.current === "mouse";
          onOpenChange(isMouseClick ? true : !open);
        }}
        className={cn(
          linkStyle,
          "inline-flex items-center gap-1.5",
          isActive && "bg-surface-muted",
        )}
      >
        {group.label}
        <Chevron open={open} />
      </button>
      {/* pt-2 bridges the gap between button and panel so hover doesn't flicker closed. */}
      <div id={panelId} hidden={!open} className="absolute top-full left-0 z-50 min-w-72 pt-2">
        <ul className="rounded-2xl border border-border bg-surface p-2 shadow-lg">
          {group.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                aria-current={pathname === child.href ? "page" : undefined}
                className={cn(
                  "block rounded-xl px-4 py-2.5 text-foreground transition-colors hover:bg-surface-muted",
                  pathname === child.href && "bg-surface-muted font-semibold",
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("size-4 transition-transform", open && "rotate-180")}
    >
      <path
        d="M4 6l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
