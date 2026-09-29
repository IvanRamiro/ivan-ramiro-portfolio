import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const sections = [
    { title: "The problem", body: project.problem },
    { title: "The solution", body: project.solution },
    ...(project.results ? [{ title: "Results", body: project.results }] : []),
  ];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/#projects" className="font-mono text-sm text-muted transition hover:text-accent">
        ← back to projects
      </Link>

      <p className="mt-8 font-mono text-sm text-accent">{project.role}</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
      <p className="mt-4 text-lg text-muted">{project.summary}</p>

      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={700}
        className="mt-10 rounded-2xl border border-border"
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="rounded-md border border-border bg-card px-3 py-1 font-mono text-xs text-muted">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-12 space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 flex gap-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-90">
            Live demo
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-border px-6 py-3 transition hover:border-accent hover:text-accent">
            GitHub
          </a>
        )}
      </div>
    </main>
  );
}