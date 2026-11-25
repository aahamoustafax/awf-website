"use client";

import { useEffect } from "react";

/**
 * Opens the <details> panel that holds the link target, so /our-work#kids-essentials-bank (or a
 * link to something inside a panel) shows the content instead of a closed panel. Renders nothing.
 */
export function OpenDetailsFromHash() {
  useEffect(() => {
    let timer: number | undefined;
    function open() {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      const panel = target?.closest("details");
      if (!target || !panel) return;
      // Chrome may already have opened the panel itself, but it scrolled while the panel was still
      // closed, so scroll either way.
      panel.open = true;
      target.scrollIntoView({ block: "start", behavior: "instant" });
      // The panel slides open (globals.css); scroll again once it has its full height.
      timer = window.setTimeout(
        () => target.scrollIntoView({ block: "start", behavior: "instant" }),
        400,
      );
    }
    open();
    window.addEventListener("hashchange", open);
    return () => {
      window.removeEventListener("hashchange", open);
      window.clearTimeout(timer);
    };
  }, []);
  return null;
}
