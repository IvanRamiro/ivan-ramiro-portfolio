import GlassCard from "@/components/ui/GlassCard";
import TagList from "@/components/ui/TagList";
import { skillGroups } from "@/data/about";

/**
 * One glass card per skill category. Rendered as a fragment so each card is a
 * direct child of the surrounding `<Reveal stagger>` and animates in sequence.
 */
export default function SkillGroups() {
  return (
    <>
      {skillGroups.map(({ title, items }) => (
        <GlassCard key={title} className="h-full p-5">
          <h3 className="font-semibold">{title}</h3>
          <TagList
            items={items}
            className="mt-3"
            tagClassName="transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
          />
        </GlassCard>
      ))}
    </>
  );
}
