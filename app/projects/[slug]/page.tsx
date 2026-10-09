import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Media from "@/components/ui/Media";
import { CONTAINER_CLASS } from "@/components/ui/Section";
import SpecTable from "@/components/ui/SpecTable";
import TagList from "@/components/ui/TagList";
import {
  getAdjacentProjects,
  getCaseStudySections,
  getProjectBySlug,
  getProjectSpecRows,
  getProjectStaticParams,
  type Project,
} from "@/data/projects";
import { cn } from "@/lib/css";
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
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: project.title, description: project.summary },
  };
}

type AdjacentLinkProps = {
  project: Project | undefined;
  direction: "previous" | "next";
};

function AdjacentLink({ project, direction }: AdjacentLinkProps) {
  const isNext = direction === "next";
  const href = project ? `/projects/${project.slug}` : "/#projects";
  const kicker = project ? `${direction} project` : direction;
  const label = project?.title ?? "Back to all work";

  return (
    <Link
      href={href}
      className={cn("group flex flex-col gap-2 py-6", isNext ? "items-end text-right" : "items-start")}
    >
      <span className="font-mono text-label uppercase tracking-[0.12em] text-ink-faint">
        {kicker}
      </span>
      <span className="font-semibold transition-colors duration-(--dur-fast) group-hover:text-copper">
        {isNext ? `${label} →` : `← ${label}`}
      </span>
    </Link>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { title, summary, image, backdrop, stack, gallery = [], links = [] } = project;
  const { previous, next } = getAdjacentProjects(slug);

  return (
    <article className={cn(CONTAINER_CLASS, "pt-12 pb-24 lg:pt-20")}>
      <Link
        href="/#projects"
        className="font-mono text-label uppercase tracking-[0.12em] text-ink-muted transition-colors duration-(--dur-fast) hover:text-copper"
      >
        ← All work
      </Link>

      <header className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          <Eyebrow index="Case study">{project.kind}</Eyebrow>
          <h1 className="mt-6 text-h2 font-semibold lg:text-[3.5rem]">{title}</h1>
          <p className="mt-6 max-w-[56ch] text-lede text-ink-muted">{summary}</p>
        </div>
        <div className="lg:col-span-4 lg:pt-14">
          <SpecTable rows={getProjectSpecRows(project)} />
        </div>
      </header>

      <Media
        asset={image}
        backdrop={backdrop}
        width={2400}
        height={1500}
        sizes="(min-width: 1280px) 1200px, 100vw"
        priority
        className="mt-14"
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        <div className="space-y-12 lg:col-span-7">
          {getCaseStudySections(project).map(({ title: heading, body }) => (
            <section key={heading}>
              <h2 className="text-h3 font-semibold">{heading}</h2>
              <p className="mt-4 max-w-[62ch] leading-relaxed text-ink-muted">{body}</p>
            </section>
          ))}
        </div>

        <aside className="space-y-10 lg:col-span-4 lg:col-start-9">
          <div>
            <h2 className="font-mono text-label uppercase tracking-[0.12em] text-ink-faint">
              Stack
            </h2>
            <TagList items={stack} className="mt-4" />
          </div>

          {links.length > 0 && (
            <div>
              <h2 className="font-mono text-label uppercase tracking-[0.12em] text-ink-faint">
                Links
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
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
            </div>
          )}
        </aside>
      </div>

      {gallery.length > 0 && (
        <section className="mt-20">
          <h2 className="font-mono text-label uppercase tracking-[0.12em] text-ink-faint">
            Gallery
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {gallery.map((asset) => (
              <Media
                key={asset.src}
                asset={asset}
                width={1600}
                height={1000}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="aspect-[16/10]"
              />
            ))}
          </div>
        </section>
      )}

      <nav
        aria-label="Other projects"
        className="mt-20 grid border-t border-line sm:grid-cols-2 sm:divide-x sm:divide-line"
      >
        <AdjacentLink project={previous} direction="previous" />
        <div className="sm:pl-8">
          <AdjacentLink project={next} direction="next" />
        </div>
      </nav>
    </article>
  );
}
