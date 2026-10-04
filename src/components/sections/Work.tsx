import { projects } from "@/content";
import type { SectionProps } from "@/lib/sections";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectItem } from "@/components/ui/ProjectItem";

export function Work({ id, title = "Selected Work" }: SectionProps) {
  const visibleProjects = projects.filter((project) => !project.hidden);

  return (
    <Section id={id}>
      <SectionHeading id={id}>{title}</SectionHeading>
      {visibleProjects.length > 0 && (
        <div className="flex flex-col">
          {visibleProjects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
}
