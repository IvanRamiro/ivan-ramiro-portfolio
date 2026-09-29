import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20"
    >
      <div className="overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="font-mono text-xs text-accent">{project.role}</p>
        <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-background px-2 py-1 font-mono text-xs text-muted"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm text-accent">View case study →</p>
      </div>
    </Link>
  );
}