import Image from "next/image";
import type { ReactNode } from "react";

import { Container, Heading } from "@/components/ui";
import type { Photo } from "@/content/types";

export type HeroProps = {
  title: string;
  lead: string;
  image: Photo;
  /** CSS object-position keeping the photo's subject in view. */
  imageFocus: string;
  /** Under the headline: buttons, or a card such as the donation box. */
  actions: ReactNode;
};

/**
 * Home page opening, filling the screen below the header. On desktop the photo covers it all, with
 * a navy shade on the left where the text sits. On phones the photo fills the top and fades into
 * navy, and the text sits below it, so the headline never covers a face.
 */
export function Hero({ title, lead, image, imageFocus, actions }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-5rem)] overflow-hidden bg-primary text-on-primary"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[55%] lg:inset-0 lg:h-auto">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          fetchPriority="high"
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imageFocus }}
        />
        {/* Shades: the photo's bottom edge on phones, the text side on desktop. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-primary via-primary/60 via-35% to-transparent to-80% lg:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-linear-to-r from-primary/95 via-primary/70 via-35% to-transparent to-65% lg:block"
        />
      </div>

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
