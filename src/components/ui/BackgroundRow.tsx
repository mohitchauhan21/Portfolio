import type { BackgroundEntry } from "@/content";

interface BackgroundRowProps {
  entry: BackgroundEntry;
}

export function BackgroundRow({ entry }: BackgroundRowProps) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-7">
      {/* Date */}
      <span className="text-muted shrink-0 font-sans text-sm leading-5 sm:w-28">
        {entry.dateLabel}
      </span>

      {/* Title + subtitle */}
      <div className="min-w-0 flex-1">
        {entry.href ? (
          <a
            href={entry.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground decoration-line hover:text-accent hover:decoration-accent focus-visible:ring-accent font-sans text-[15px] leading-6 underline decoration-1 underline-offset-[3px] transition-colors focus:outline-none focus-visible:ring-2"
          >
            {entry.title}
          </a>
        ) : (
          <p className="text-foreground font-sans text-[15px] leading-6">
            {entry.title}
          </p>
        )}
        {entry.subtitle && (
          <p className="text-muted mt-0.5 font-sans text-sm leading-5">
            {entry.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
