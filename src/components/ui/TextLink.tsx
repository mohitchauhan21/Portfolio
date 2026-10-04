import { cn } from "@/lib/cn";
import { isExternalUrl } from "@/lib/url";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
  newTab?: boolean;
}

export function TextLink({
  href,
  children,
  className,
  "aria-label": ariaLabel,
  newTab,
}: TextLinkProps) {
  const isExternal = isExternalUrl(href);
  const opensNewTab = newTab ?? isExternal;

  return (
    <a
      href={href}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={cn(
        "text-foreground text-link-animated",
        "hover:text-accent transition-colors duration-200",
        "focus-visible:ring-accent focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </a>
  );
}
