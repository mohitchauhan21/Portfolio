import { profile, skillGroups, skillsHeading } from "@/content";
import { iconRegistry } from "@/lib/icons";
import type { SectionProps } from "@/lib/sections";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About({ id, title = "About" }: SectionProps) {
  const visibleSkillGroups = skillGroups.filter((group) => !group.hidden);

  return (
    <Section id={id}>
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Left 4 columns: sticky heading */}
        <div className="lg:col-span-4">
          <SectionHeading id={id}>{title}</SectionHeading>
        </div>

        {/* Right 8 columns: content */}
        <div className="lg:col-span-8">
          {/* About paragraphs (max 65ch measure) */}
          <div className="mb-10 max-w-[65ch] space-y-4 md:mb-12">
            {profile.about.map((paragraph, index) => (
              <p
                key={index}
                className="text-foreground font-sans text-[15px] leading-6 md:text-[16px] md:leading-[1.65]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Skills subsection: 2 cols at 640px, 3 cols at 1024px */}
          {visibleSkillGroups.length > 0 && (
            <div className="pt-2">
              <h3 className="text-foreground mb-4 font-serif text-[20px] leading-7 font-normal">
                {skillsHeading}
              </h3>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {visibleSkillGroups.map((group) => (
                  <div key={group.id} className="flex flex-col">
                    <h4 className="text-muted mb-3 font-sans text-[12px] font-medium tracking-[0.08em] uppercase">
                      {group.label}
                    </h4>
                    <ul className="flex flex-wrap gap-2.5" aria-label={group.label}>
                      {group.items.map((item) => {
                        const iconObj = item.icon ? iconRegistry[item.icon] : null;
                        const IconComp = iconObj?.component;
                        return (
                          <li
                            key={item.name}
                            tabIndex={0}
                            className="group inline-flex items-center gap-2 rounded-sm border border-line bg-transparent px-2.5 py-1.5 font-sans text-sm text-foreground transition-all duration-150 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            {IconComp && (
                              <span
                                className="text-muted transition-colors duration-150 group-hover:text-[var(--hover-color,var(--color-accent))] group-focus:text-[var(--hover-color,var(--color-accent))]"
                                style={{
                                  // @ts-expect-error CSS variable for brand color
                                  "--hover-color": iconObj.color,
                                }}
                              >
                                <IconComp
                                  size={16}
                                  aria-hidden="true"
                                  className="shrink-0"
                                />
                              </span>
                            )}
                            <span className="leading-none">{item.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
