import type { ReactNode } from "react";
import { cn } from "@/lib/css";

export const CONTAINER_CLASS = "mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-24 md:py-32 lg:py-40", className)}>
      <div className={cn(CONTAINER_CLASS, containerClassName)}>{children}</div>
    </section>
  );
}
