import Button from "@/components/ui/Button";
import { CONTAINER_CLASS } from "@/components/ui/Section";
import { heroIntro, heroRoles } from "@/data/hero";
import { cn } from "@/lib/css";
import { SITE } from "@/lib/site";
import HeroCard from "./HeroCard";
import Typewriter from "./Typewriter";
import ViewfinderFrame from "./ViewfinderFrame";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background glow + grid (decorative) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 size-120 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-24 top-32 size-96 rounded-full bg-accent-2/20 blur-3xl" />
        <div className="bg-grid absolute inset-0" />
      </div>

      <div
        className={cn(CONTAINER_CLASS, "grid items-center gap-12 py-24 lg:grid-cols-2 lg:py-32")}
      >
        <div>
          <p className="font-mono text-sm text-accent">Hello, world! I&apos;m {SITE.name}</p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            {SITE.role} building
            {/* Screen readers get the full list once, not every typed letter */}
            <span className="sr-only">: {heroRoles.join(", ")}</span>
            <span
              aria-hidden="true"
              className="block min-h-[1.2em] bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent"
            >
              <Typewriter words={heroRoles} />
              <span className="animate-blink ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-accent" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">{heroIntro}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">View my work</Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>

        <ViewfinderFrame>
          <HeroCard />
        </ViewfinderFrame>
      </div>
    </section>
  );
}
