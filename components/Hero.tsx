import Typewriter from "./Typewriter";

const roles = ["Web Apps", "Mobile Apps", "IoT Systems", "Custom Platforms"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background glow + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-32 h-[24rem] w-[24rem] rounded-full bg-accent-2/20 blur-3xl" />
        <div className="bg-grid absolute inset-0" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <p className="font-mono text-sm text-accent">
            Hello, world! I&apos;m Ivan Ramiro
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Computer Engineer building
            <span className="block min-h-[1.2em] bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              <Typewriter words={roles} />
            </span>
            <span className="animate-blink inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-accent" />
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            I turn ideas into fast, reliable software for businesses and teams,
            from first sketch to deployment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border px-6 py-3 transition hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Fake code editor */}
        <div className="rounded-xl border border-border bg-card/80 shadow-2xl shadow-accent/10 backdrop-blur">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-3 font-mono text-xs text-muted">ivan.ts</span>
          </div>
          <div className="overflow-x-auto p-5 font-mono text-sm leading-7">
            <div>
              <span className="text-accent-2">const</span>{" "}
              <span className="text-accent">ivan</span> {"= {"}
            </div>
            <div className="pl-6">
              role: <span className="text-emerald-400">&quot;Computer Engineer&quot;</span>,
            </div>
            <div className="pl-6">
              stack: [<span className="text-emerald-400">&quot;React&quot;</span>,{" "}
              <span className="text-emerald-400">&quot;TypeScript&quot;</span>,{" "}
              <span className="text-emerald-400">&quot;Node.js&quot;</span>],
            </div>
            <div className="pl-6">
              focus: <span className="text-emerald-400">&quot;Web &amp; Mobile Apps&quot;</span>,
            </div>
            <div className="pl-6">
              openToWork: <span className="text-accent-2">true</span>,
            </div>
            <div>{"};"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}