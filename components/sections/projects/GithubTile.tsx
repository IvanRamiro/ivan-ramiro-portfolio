import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Tile from "@/components/ui/Tile";
import { socials } from "@/data/socials";
import { EXTERNAL_LINK_PROPS } from "@/lib/site";

const github = socials.find((social) => social.label === "GitHub");

export default function GithubTile() {
  if (!github) return null;

  return (
    <Tile className="group">
      <a
        href={github.href}
        {...EXTERNAL_LINK_PROPS}
        className="flex items-center justify-between gap-6 p-6 sm:p-8"
      >
        <span className="flex items-center gap-4">
          <FiGithub aria-hidden="true" className="text-2xl text-ink-muted" />
          <span>
            <span className="block font-semibold">More on GitHub</span>
            <span className="mt-1 block font-mono text-data text-ink-muted">
              github.com/{github.handle}
            </span>
          </span>
        </span>
        <FiArrowUpRight
          aria-hidden="true"
          className="shrink-0 text-xl text-ink-muted transition-[transform,color] duration-(--dur-fast) ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-copper"
        />
      </a>
    </Tile>
  );
}
