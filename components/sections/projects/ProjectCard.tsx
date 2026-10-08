import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import TagList from "@/components/ui/TagList";
import type { Project } from "@/data/projects";

/** The whole card is one link to the case study; hover effects come from GlassCard's `group`. */
export default function ProjectCard({ project }: { project: Project }) {
  const { slug, title, summary, role, image, stack } = project;

  return (
    <GlassCard tilt className="h-full">
      <Link
        href={`/projects/${slug}`}
        className="flex h-full flex-col focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
      >
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            width={800}
            height={450}
            sizes="(min-width: 1152px) 560px, (min-width: 768px) 45vw, 100vw"
            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-xs text-accent">{role}</p>
          <h3 className="mt-2 text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted">{summary}</p>

          <TagList items={stack} size="sm" className="mt-4" />

          <p className="mt-auto pt-5 text-sm text-accent">
            View case study{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </p>
        </div>
      </Link>
    </GlassCard>
  );
}
