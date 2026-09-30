import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, title, summary, role, image, stack } = project;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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

      <div className="p-6">
        <p className="font-mono text-xs text-accent">{role}</p>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted">{summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-background px-2 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <p className="mt-5 text-sm text-accent">View case study →</p>
      </div>
    </Link>
  );
}