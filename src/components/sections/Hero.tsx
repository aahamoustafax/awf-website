import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

import { Container, Heading } from "@/components/ui";
import type { Photo } from "@/content/types";

export type HeroProps = {
  title: string;
  lead: string;
  image: Photo;
  /** CSS object-position keeping the photo's subject in view. */
  imageFocus: string;
  /** Desktop only: the photo's background, mirrored and blurred, shown behind the text. */
  backdrop?: StaticImageData;
  /** Under the headline: buttons, or a card such as the donation box. */
  actions: ReactNode;
};

/**
 * Home page opening, filling the screen below the header. On desktop the sharp photo fills the right
 * 70% and dissolves into its own extended background behind the text. On phones the photo fills
 * the top and fades into navy, and the text sits below it, so the headline never covers a face.
 */
export function Hero({ title, lead, image, imageFocus, backdrop, actions }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-5rem)] overflow-hidden bg-primary text-on-primary"
    >
      {/* Desktop backdrop behind the text: the photo's own background, extended (see `backdrop`), so
          the text side reads as the photo carrying on rather than flat navy. Decorative. */}
      {backdrop && (
        <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-20 hidden w-[60%] lg:block">
          <Image src={backdrop} alt="" fill sizes="60vw" className="object-cover object-right" />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      )}

      {/* On desktop the sharp photo starts 30% in, clear of the text, and its left edge dissolves
          into the backdrop. */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[55%] lg:inset-y-0 lg:right-0 lg:left-[30%] lg:h-auto lg:mask-[linear-gradient(to_right,transparent,black_40%)]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          fetchPriority="high"
          placeholder="blur"
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover"
          style={{ objectPosition: imageFocus }}
        />
        {/* Shade on phones: the photo's bottom edge fades into navy above the text. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-primary via-primary/60 via-35% to-transparent to-80% lg:hidden"
        />
      </div>
      {/* Shade on desktop, over both photos, so the white text keeps its contrast. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-linear-to-r from-primary/60 via-primary/45 via-40% to-transparent to-70% lg:block"
      />

      <Container className="flex w-full items-end pt-40 pb-14 sm:pb-20 lg:items-center lg:py-24">
        <div className="max-w-xl">
          <Heading level={1} size="lg" id="hero-title" className="drop-shadow-sm">
            {title}
          </Heading>
          <p className="mt-5 max-w-md text-lg text-pretty text-on-primary/90">{lead}</p>
          <div className="mt-8">{actions}</div>
        </div>
      </Container>
    </section>
  );
}
