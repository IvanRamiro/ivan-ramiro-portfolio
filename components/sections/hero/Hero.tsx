import HeroSequence from "@/components/motion/HeroSequence";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { CONTAINER_CLASS } from "@/components/ui/Section";
import { heroEyebrow, heroHeadline, heroIntro } from "@/data/hero";
import { cn } from "@/lib/css";
import HeroVisual from "./HeroVisual";
import SpecSheet from "./SpecSheet";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <HeroSequence>
        <div
          className={cn(
            CONTAINER_CLASS,
            "grid gap-12 pt-14 pb-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-24 lg:pb-24"
          )}
        >
          <div className="lg:col-span-7">
            <div data-hero="line">
              <Eyebrow index="00">{heroEyebrow}</Eyebrow>
            </div>

            <h1 id="hero-heading" data-hero="line" className="mt-8 text-display font-semibold">
              {heroHeadline.lead}
            </h1>
            <p
              data-hero="line"
              className="mt-5 max-w-[30ch] font-display text-[1.375rem] leading-snug font-medium tracking-[-0.01em] text-ink-muted sm:text-2xl lg:text-[1.75rem]"
            >
              {heroHeadline.support}
            </p>

            <p data-hero="copy" className="mt-8 max-w-[52ch] text-lede text-ink-muted">
              {heroIntro}
            </p>

            <div data-hero="copy" className="mt-10 flex flex-wrap gap-3">
              <Button href="#projects" size="lg">
                View work
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Get in touch
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>

        <div className={cn(CONTAINER_CLASS, "pb-6")}>
          <SpecSheet />
        </div>
      </HeroSequence>
    </section>
  );
}
