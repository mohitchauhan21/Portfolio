export type SectionId = "hero" | "work" | "about" | "background" | "contact";

export interface ImageAsset {
  src: string; // path under /public, starts with "/"
  alt: string;
  objectPosition?: string; // CSS object-position, for example "center 20%"
}

export interface ExternalLink {
  label: string; // visible text, for example "GitHub"
  href: string; // absolute https URL
}

export interface SocialLink {
  id: string; // unique, for example "github"
  label: string; // "GitHub"
  href: string; // absolute https URL
  displayText?: string; // "github.com/mohitchauhan21"
}

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  title?: string; // heading text, when the section has one
}

export type NavTarget =
  | { type: "section"; id: SectionId }
  | { type: "external"; href: string; newTab?: boolean };

export interface NavItem {
  label: string;
  target: NavTarget;
}

export interface UiLabels {
  menuOpen: string;
  menuClose: string;
  themeToggle: string;
  skipToContent: string;
  emailLabel: string; // text of the email link, "Email"
}

export interface SiteConfig {
  name: string;
  title: string; // default document title
  description: string; // meta description, 160 characters or fewer
  url: string; // canonical origin, no trailing slash
  locale: string; // for example "en_IN"
  ui: UiLabels;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  intro: string;
  avatar?: ImageAsset;
  about: string[]; // one string per paragraph
  email: string;
  socials: SocialLink[];
  heroLinks: string[]; // ids from socials, plus the reserved id "email"
  resume?: ExternalLink;
}

export interface Project {
  id: string; // unique slug, reserved for future detail pages
  title: string;
  dateLabel: string; // displayed as written, for example "2026"
  description: string;
  result?: string; // one-line outcome shown in italics
  stack: string[];
  links: ExternalLink[]; // rendered in order; empty array renders nothing
  highlights?: string[]; // reserved for future detail pages, not rendered
  image?: ImageAsset; // reserved, not rendered in this version
  hidden?: boolean;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
  hidden?: boolean;
}

export interface BackgroundEntry {
  id: string;
  dateLabel: string; // displayed as written, for example "Aug 2026"
  title: string;
  subtitle?: string;
  href?: string; // makes the title a link, for example a credential
  hidden?: boolean;
}

export interface BackgroundGroup {
  id: string;
  label: string; // "Education", "Training", ...
  entries: BackgroundEntry[];
  hidden?: boolean;
}

export interface ContactConfig {
  message: string;
  linkIds: string[]; // ids from profile.socials
}
