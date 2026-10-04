import { cn } from "@/lib/cn";
import type { SectionId } from "@/content";

interface SectionHeadingProps {
  id: SectionId;
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  id,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      id={`${id}-heading`}
      className={cn(
        "text-foreground font-serif text-[28px] leading-[1.15] font-normal tracking-[-0.01em] md:text-[36px]",
        "mb-10 md:mb-12",
        className
      )}
    >
      {children}
    </h2>
  );
}
