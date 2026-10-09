import Link from "next/link";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Media from "@/components/ui/Media";
import SpecTable from "@/components/ui/SpecTable";
import { getProjectSpecRows, type Project } from "@/data/projects";
import { cn } from "@/lib/css";

type ProjectPlateProps = {
  project: Project;
  index: number;
};

export default function ProjectPlate({ project, index }: ProjectPlateProps) {
  const { slug, title, summary, image, backdrop } = project;
  const href = `/projects/${slug}`;
  const isReversed = index % 2 === 1;

  return (
    <article className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
      <Link
        href={href}
        aria-label={`Open the ${title} case study`}
        className={cn(
          "group block rounded-media lg:col-span-7",
          isReversed && "lg:order-2 lg:col-start-6"
        )}
      >
        <Media
          asset={image}
          backdrop={backdrop}
          width={1600}
          height={1000}
          sizes="(min-width: 1024px) 58vw, 100vw"
          eager
          className="transition-colors duration-(--dur-fast) group-hover:border-line-strong"
          imageClassName="transition-transform duration-(--dur-reveal) ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </Link>

      <div className={cn("lg:col-span-5", isReversed && "lg:order-1 lg:col-start-1")}>
        <Eyebrow index={`01.${index + 1}`}>{project.kind}</Eyebrow>
        <h3 className="mt-5 text-h3 font-semibold sm:text-[1.75rem]">
          <Link href={href} className="transition-colors duration-(--dur-fast) hover:text-copper">
            {title}
          </Link>
        </h3>
        <p className="mt-3 max-w-[48ch] text-ink-muted">{summary}</p>

        <SpecTable rows={getProjectSpecRows(project, { stack: true })} className="mt-8" />

        <Button href={href} variant="ghost" className="group mt-8">
          Open case study
          <span
            aria-hidden="true"
            className="transition-transform duration-(--dur-fast) ease-out group-hover:translate-x-1"
          >
            →
          </span>
        </Button>
      </div>
    </article>
  );
}
