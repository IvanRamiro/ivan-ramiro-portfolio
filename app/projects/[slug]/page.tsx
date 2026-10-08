import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import TagList from "@/components/ui/TagList";
import {
  getCaseStudySections,
  getProjectBySlug,
  getProjectStaticParams,
} from "@/data/projects";
import { EXTERNAL_LINK_PROPS } from "@/lib/site";

type ProjectPageProps = PageProps<"/projects/[slug]">;

export const generateStaticParams = getProjectStaticParams;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { title, summary, role, image, stack, links = [] } = project;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/#projects" className="font-mono text-sm text-muted transition hover:text-accent">
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

      <TagList items={stack} surface="solid" className="mt-8" />

      <div className="mt-12 space-y-10">
        {getCaseStudySections(project).map(({ title: heading, body }) => (
          <section key={heading}>
            <h2 className="text-xl font-semibold">{heading}</h2>
            <p className="mt-3 leading-relaxed text-muted">{body}</p>
          </section>
        ))}
      </div>

      {links.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-4">
          {links.map(({ label, href }, index) => (
            <Button
              key={href}
              href={href}
              variant={index === 0 ? "primary" : "secondary"}
              {...EXTERNAL_LINK_PROPS}
            >
              {label}
            </Button>
          ))}
        </div>
      )}
    </article>
  );
}
