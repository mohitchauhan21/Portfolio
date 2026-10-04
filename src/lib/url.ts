export function isExternalUrl(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function formatDisplayUrl(href: string): string {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function createMailtoUrl(email: string): string {
  return `mailto:${email}`;
}
