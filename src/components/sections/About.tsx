import { profile, skillGroups, skillsHeading } from "@/content";
import type { SectionProps } from "@/lib/sections";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About({ id, title = "About" }: SectionProps) {
  const visibleSkillGroups = skillGroups.filter((group) => !group.hidden);

  return (
    <Section id={id}>
      <SectionHeading id={id}>{title}</SectionHeading>

      {/* About paragraphs */}
      <div className="mb-10 max-w-[700px] space-y-4 md:mb-12">
        {profile.about.map((paragraph, index) => (
          <p
            key={index}
            className="text-foreground font-sans text-[15px] leading-6 md:text-[16px] md:leading-[1.65]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Skills subsection */}
      {visibleSkillGroups.length > 0 && (
        <div className="pt-2">
          <h3 className="text-foreground mb-4 font-serif text-[20px] leading-7 font-normal">
            {skillsHeading}
          </h3>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {visibleSkillGroups.map((group) => (
              <div key={group.id}>
                <dt className="text-muted mb-1 font-sans text-[12px] font-medium tracking-[0.08em] uppercase">
                  {group.label}
                </dt>
                <dd className="text-foreground font-sans text-[15px] leading-6">
                  {group.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </Section>
  );
}
