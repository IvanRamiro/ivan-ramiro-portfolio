import SpecTable from "@/components/ui/SpecTable";
import { specSheet } from "@/data/hero";

export default function SpecSheet() {
  return (
    <div data-hero="spec">
      <SpecTable rows={specSheet} columns={4} />
    </div>
  );
}
