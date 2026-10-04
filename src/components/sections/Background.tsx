import { backgroundGroups } from "@/content";
import type { SectionProps } from "@/lib/sections";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackgroundRow } from "@/components/ui/BackgroundRow";

export function Background({ id, title = "Background" }: SectionProps) {
  // Filter groups: not hidden and has at least one visible entry
  const visibleGroups = backgroundGroups
    .filter((group) => !group.hidden)
    .map((group) => ({
      ...group,
      entries: group.entries.filter((entry) => !entry.hidden),
    }))
    .filter((group) => group.entries.length > 0);

  return (
    <Section id={id}>
      <SectionHeading id={id}>{title}</SectionHeading>

      <div className="space-y-10">
        {visibleGroups.map((group) => (
          <div key={group.id}>
            <h3 className="text-muted mb-4 font-sans text-[12px] font-medium tracking-[0.08em] uppercase">
              {group.label}
            </h3>
            <div className="space-y-3.5">
              {group.entries.map((entry) => (
                <BackgroundRow key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
