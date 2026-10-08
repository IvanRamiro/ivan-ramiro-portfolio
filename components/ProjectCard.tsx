import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import GlassCard from "./GlassCard";

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

          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-white/10 bg-background/60 px-2 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

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