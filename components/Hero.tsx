import HeroCard from "./HeroCard";
import Typewriter from "./Typewriter";
import ViewfinderFrame from "./ViewfinderFrame";

const NAME = "Ivan Ramiro";
const ROLE = "Computer Engineer";

const roles = [
  "Web Apps",
  "Mobile Apps",
  "IoT Systems",
  "Custom Platforms",
  "Admin Dashboards",
  "VR Experiences",
  "API Integrations",
];

const primaryButton =
  "rounded-lg bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-90";
const secondaryButton =
  "rounded-lg border border-border px-6 py-3 transition hover:border-accent hover:text-accent";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background glow + grid (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/4 size-120 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-24 top-32 size-96 rounded-full bg-accent-2/20 blur-3xl" />
        <div className="bg-grid absolute inset-0" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <p className="font-mono text-sm text-accent">
            Hello, world! I&apos;m {NAME}
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            {ROLE} building
            {/* Screen readers get the full list once, not every typed letter */}
            <span className="sr-only">: {roles.join(", ")}</span>
            <span
              aria-hidden="true"
              className="block min-h-[1.2em] bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent"
            >
              <Typewriter words={roles} />
              <span className="animate-blink ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-accent" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            I turn ideas into fast, reliable software for businesses and teams,
            from first sketch to deployment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className={primaryButton}>
              View my work
            </a>
            <a href="#contact" className={secondaryButton}>
              Get in touch
            </a>
          </div>
        </div>

        <ViewfinderFrame>
          <HeroCard />
        </ViewfinderFrame>
      </div>
    </section>
  );
}