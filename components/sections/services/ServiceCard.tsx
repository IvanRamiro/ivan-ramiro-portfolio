import { FiCheck } from "react-icons/fi";
import Eyebrow from "@/components/ui/Eyebrow";
import Media from "@/components/ui/Media";
import Tile from "@/components/ui/Tile";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  index: number;
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { title, description, features, art } = service;

  return (
    <Tile as="article" className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-start lg:flex-col">
      {art && (
        <Media
          asset={art}
          width={800}
          height={800}
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 25vw, 100vw"
          className="aspect-square w-full md:w-40 md:shrink-0 lg:w-full"
        />
      )}

      <div className="flex-1">
        <Eyebrow index={`03.${index + 1}`}>Service</Eyebrow>
        <h3 className="mt-4 text-h3 font-semibold">{title}</h3>
        <p className="mt-3 text-ink-muted">{description}</p>

        <ul className="mt-6 space-y-3 border-t border-line pt-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <FiCheck aria-hidden="true" className="mt-0.5 shrink-0 text-copper" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Tile>
  );
}
