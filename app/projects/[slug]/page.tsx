import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects, type Project } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const primaryButton =
  "rounded-lg bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-90";
const secondaryButton =
  "rounded-lg border border-border px-6 py-3 transition hover:border-accent hover:text-accent";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Ivan Ramiro`,
    description: project.summary,
  };
}

function getSections({ problem, solution, results }: Project) {
  return [
    { title: "The problem", body: problem },
    { title: "The solution", body: solution },
    ...(results ? [{ title: "Results", body: results }] : []),
  ];
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { title, summary, role, image, stack, links } = project;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/#projects"
        className="font-mono text-sm text-muted transition hover:text-accent"
      >
        ← back to projects
      </Link>

      <p className="mt-8 font-mono text-sm text-accent">{role}</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 text-lg text-muted">{summary}</p>

      <Image
        src={image}
        alt={`Screenshot of ${title}`}
        width={1200}
        height={700}
        priority
        sizes="(min-width: 768px) 768px, 100vw"
        className="mt-10 h-auto w-full rounded-2xl border border-border"
      />

      <ul className="mt-8 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-border bg-card px-3 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-12 space-y-10">
        {getSections(project).map(({ title, body }) => (
          <section key={title}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{body}</p>
          </section>
        ))}
      </div>

      {links && links.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-4">
          {links.map(({ label, href }, index) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={index === 0 ? primaryButton : secondaryButton}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </main>
  );
}