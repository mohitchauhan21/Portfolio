import { projects } from "@/content";
import type { SectionProps } from "@/lib/sections";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectItem } from "@/components/ui/ProjectItem";
import { ScrollReveal } from "@/components/ui/MotionWrapper";

export function Work({ id, title = "Selected Work" }: SectionProps) {
  const visibleProjects = projects.filter((project) => !project.hidden);

  return (
    <Section id={id}>
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Left 4 columns: sticky heading */}
        <div className="lg:col-span-4">
          <ScrollReveal>
            <SectionHeading id={id}>{title}</SectionHeading>
          </ScrollReveal>
        </div>

        {/* Right 8 columns: content */}
        <div className="lg:col-span-8">
          {visibleProjects.length > 0 && (
            <div className="flex flex-col">
              {visibleProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.06}>
                  <ProjectItem project={project} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
