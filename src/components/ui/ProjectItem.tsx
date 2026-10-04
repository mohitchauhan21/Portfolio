import type { Project } from "@/content";
import { iconRegistry } from "@/lib/icons";
import { LinkList } from "./LinkList";

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="group border-line flex flex-col border-b py-10 last:border-b-0 md:flex-row md:items-start md:gap-7">
      {/* Date column */}
      <span className="text-muted mb-2 shrink-0 pt-0.5 font-sans text-sm leading-5 md:mb-0 md:w-28">
        {project.dateLabel}
      </span>

      {/* Content column */}
      <div className="min-w-0 flex-1 space-y-3">
        {/* Title: moves 4px to right, turns accent, arrow fades in */}
        <h3 className="text-foreground inline-flex items-center gap-2 font-serif text-[20px] leading-[28px] font-normal tracking-[-0.005em] transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:text-accent group-focus-within:translate-x-1 group-focus-within:text-accent md:text-[22px] md:leading-[30px]">
          <span>{project.title}</span>
          <svg
            aria-hidden="true"
            className="h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
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
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm leading-5 text-muted font-sans">
          <span className="sr-only">Tech stack: </span>
          {project.stack.map((tech) => {
            const iconObj = tech.icon ? iconRegistry[tech.icon] : null;
            const IconComp = iconObj?.component;
            return (
              <span key={tech.name} className="inline-flex items-center gap-1.5">
                {IconComp && (
                  <IconComp
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-muted"
                  />
                )}
                <span>{tech.name}</span>
              </span>
            );
          })}
        </div>

        {/* Links */}
        {project.links.length > 0 && (
          <LinkList links={project.links} ariaLabelPrefix={project.title} />
        )}
      </div>
    </article>
  );
}
