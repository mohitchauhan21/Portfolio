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
        "border-line border-b",
        isHero ? "pt-12 pb-16 md:pt-20 md:pb-24" : "py-16 md:py-24",
        // scroll-margin-top = navbar height + 16px buffer
        "scroll-mt-[calc(3.5rem+1rem)] md:scroll-mt-[calc(4rem+1rem)]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
