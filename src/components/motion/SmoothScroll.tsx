"use client";

import Lenis from "lenis";
import { useEffect } from "react";

import "lenis/dist/lenis.css";

/**
 * Smooth (inertia) scrolling for mouse wheels, so stepped wheel scrolling glides like a trackpad.
 * Off for touch devices (they already scroll natively) and for visitors who prefer reduced motion.
 * Keyboard, scrollbar and find-in-page keep working; scrolling inside dialogs is left native.
 * See ADR 0006.
 */
export function SmoothScroll() {
  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (touch || reducedMotion) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.12,
      anchors: true, // in-page links (e.g. "Skip to main content") glide too
      prevent: (node) => node.closest("dialog") !== null,
    });
    return () => lenis.destroy();
  }, []);

  return null;
}
