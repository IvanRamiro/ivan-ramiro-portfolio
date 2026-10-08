import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectStaticParams } from "@/data/projects";
import { OG_IMAGE_CONTENT_TYPE, OG_IMAGE_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Project case study preview";
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export const generateStaticParams = getProjectStaticParams;

type ProjectImageProps = Pick<PageProps<"/projects/[slug]">, "params">;

export default async function Image({ params }: ProjectImageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return renderOgImage({
    eyebrow: project.role,
    title: project.title,
    subtitle: project.stack.join(" · "),
  });
}
