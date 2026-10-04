import { projects } from "@/content";
import type { SectionProps } from "@/lib/sections";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectItem } from "@/components/ui/ProjectItem";

export function Work({ id, title = "Selected Work" }: SectionProps) {
  const visibleProjects = projects.filter((project) => !project.hidden);

  return (
    <Section id={id}>
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Left 4 columns: sticky heading */}
        <div className="lg:col-span-4">
          <SectionHeading id={id}>{title}</SectionHeading>
        </div>

        {/* Right 8 columns: content */}
        <div className="lg:col-span-8">
          {visibleProjects.length > 0 && (
            <div className="flex flex-col">
              {visibleProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
