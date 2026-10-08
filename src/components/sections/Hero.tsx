import Image from "next/image";

import { Container, Eyebrow, Heading } from "@/components/ui";
import type { Photo } from "@/content/types";

import { ConnectionLine, type ConnectionLineProps } from "./ConnectionLine";
import { HeroGiveCard, type HeroGiveCardProps } from "./HeroGiveCard";

export type HeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image: Photo;
  /** CSS object-position keeping the photo's subject in view. */
  imageFocus: string;
  giveCard: HeroGiveCardProps;
  /** Afghanistan → Canada line across the bottom of the hero. */
  connection: ConnectionLineProps;
};

/**
 * Home page opening, charity: water style: the photo fills the right of the band and fades into
 * navy on the left, where the headline and the action card sit. On phones the photo sits on top
 * and fades into the navy below it. The Afghanistan → Canada line runs across the bottom, over the
 * photo on desktop, tying the image to AWF's story.
 */
export function Hero({ eyebrow, title, lead, image, imageFocus, giveCard, connection }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-primary text-on-primary"
    >
      <div className="relative h-80 sm:h-[30rem] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[30%] lg:h-auto">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          placeholder="blur"
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover"
          style={{ objectPosition: imageFocus }}
        />
        {/* Fades that blend the photo into the navy band (bottom on phones, left on desktop). */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-primary via-primary/10 to-transparent lg:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-linear-to-r from-primary via-primary/45 via-30% to-transparent to-60% lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-linear-to-t from-primary via-primary/40 via-20% to-transparent to-45% lg:block"
        />
      </div>

      <Container className="relative -mt-16 pb-2 sm:-mt-24 lg:mt-0 lg:flex lg:min-h-[38rem] lg:items-center lg:pt-20 lg:pb-4">
        <div className="max-w-xl">
          <Eyebrow className="text-brand-sky">{eyebrow}</Eyebrow>
          <Heading level={1} size="lg" id="hero-title" className="mt-4 drop-shadow-sm">
            {title}
          </Heading>
          <p className="mt-5 max-w-lg text-lg text-pretty text-on-primary/90">{lead}</p>
          <div className="mt-8">
            <HeroGiveCard {...giveCard} />
          </div>
        </div>
      </Container>

      {/* On phones the line sits below the card, so a soft glow keeps it from feeling flat. */}
      <div className="relative bg-[radial-gradient(ellipse_at_50%_60%,color-mix(in_oklab,var(--color-brand-sky)_18%,transparent),transparent_70%)] lg:bg-none">
        <ConnectionLine {...connection} />
      </div>
    </section>
  );
}
