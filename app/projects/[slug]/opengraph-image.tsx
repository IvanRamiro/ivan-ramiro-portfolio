import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { renderOgImage } from "@/lib/og";

export const alt = "Project case study preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return renderOgImage({
    eyebrow: project.role,
    title: project.title,
    subtitle: project.stack.join(" · "),
  });
}