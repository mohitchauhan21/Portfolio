import type { ExternalLink } from "@/content";
import { TextLink } from "./TextLink";

interface LinkListProps {
  links: ExternalLink[];
  ariaLabelPrefix?: string;
}

export function LinkList({ links, ariaLabelPrefix }: LinkListProps) {
  if (links.length === 0) return null;

  return (
    <div className="flex items-center gap-3">
      {links.map((link, index) => (
        <span key={link.label} className="flex items-center gap-3">
          {index > 0 && (
            <span
              aria-hidden="true"
              className="text-line text-[12px] select-none"
            >
              /
            </span>
          )}
          <TextLink
            href={link.href}
            aria-label={
              ariaLabelPrefix ? `${link.label}: ${ariaLabelPrefix}` : undefined
            }
            className="text-accent text-sm"
          >
            {link.label}
          </TextLink>
        </span>
      ))}
    </div>
  );
}
