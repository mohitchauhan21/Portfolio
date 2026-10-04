import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import type { SectionId } from "@/content";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: SectionId;
  children: React.ReactNode;
  className?: string;
  ariaLabelledBy?: string;
}

export function Section({
  id,
  children,
  className,
  ariaLabelledBy,
  ...props
}: SectionProps) {
  const isHero = id === "hero";

  return (
    <section
      id={id}
      data-section={id}
      aria-labelledby={ariaLabelledBy ?? `${id}-heading`}
      className={cn(
        "border-line w-full border-b",
        isHero
          ? "flex min-h-[calc(100svh-3.5rem)] flex-col justify-center py-12 md:min-h-[calc(100svh-4rem)] md:py-16"
          : "py-16 md:py-24",
        // scroll-margin-top = navbar height + 16px buffer
        "scroll-mt-[calc(3.5rem+1rem)] md:scroll-mt-[calc(4rem+1rem)]",
        className
      )}
      {...props}
    >
      <div className="content-container">{children}</div>
    </section>
  );
}
