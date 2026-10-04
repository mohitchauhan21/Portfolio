import type { Project } from "@/content";
import { LinkList } from "./LinkList";

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="border-line flex flex-col border-b py-10 last:border-b-0 md:flex-row md:items-start md:gap-7">
      {/* Date column */}
      <span className="text-muted mb-2 shrink-0 pt-0.5 font-sans text-sm leading-5 md:mb-0 md:w-28">
        {project.dateLabel}
      </span>

      {/* Content column */}
      <div className="min-w-0 flex-1 space-y-3">
        {/* Title */}
        <h3 className="text-foreground font-serif text-[20px] leading-[28px] font-normal tracking-[-0.005em] md:text-[22px] md:leading-[30px]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-foreground font-sans text-[15px] leading-6">
          {project.description}
        </p>

        {/* Result */}
        {project.result && (
          <p className="text-muted font-sans text-[15px] leading-6 italic">
            {project.result}
          </p>
        )}

        {/* Stack */}
        <p className="text-muted font-sans text-sm leading-5">
          <span className="sr-only">Tech stack: </span>
          {project.stack.join(", ")}
        </p>

        {/* Links */}
        {project.links.length > 0 && (
          <LinkList links={project.links} ariaLabelPrefix={project.title} />
        )}
      </div>
    </article>
  );
}
