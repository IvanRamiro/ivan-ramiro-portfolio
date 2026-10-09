import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { CONTAINER_CLASS } from "@/components/ui/Section";
import { cn } from "@/lib/css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className={cn(CONTAINER_CLASS, "flex min-h-[70vh] flex-col justify-center py-24")}>
      <Eyebrow index="404">Not found</Eyebrow>
      <h1 className="mt-6 max-w-[14ch] text-display font-semibold">This page isn&apos;t wired up.</h1>
      <p className="mt-6 max-w-[50ch] text-lede text-ink-muted">
        The address may have changed or never existed. Everything that does exist is one step
        back.
      </p>
      <div className="mt-10">
        <Button href="/" size="lg">
          Back to the portfolio
        </Button>
      </div>
    </div>
  );
}
