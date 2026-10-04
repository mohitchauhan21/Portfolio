import type { NavItem, SectionConfig, SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Mohit Chauhan",
  title: "Mohit Chauhan | Full-Stack Developer",
  description:
    "Portfolio of Mohit Chauhan, a full-stack developer building secure, data-driven web apps with React, Node.js and AI APIs.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL
      : "http://localhost:3000"),
  locale: "en_IN",
  ui: {
    menuOpen: "Menu",
    menuClose: "Close",
    themeToggle: "Toggle theme",
    skipToContent: "Skip to content",
    emailLabel: "Email",
  },
};

export const sections: SectionConfig[] = [
  { id: "hero", enabled: true },
  { id: "work", enabled: true, title: "Selected Work" },
  { id: "about", enabled: true, title: "About" },
  { id: "background", enabled: true, title: "Background" },
  { id: "contact", enabled: true, title: "Get in touch" },
];

export const navItems: NavItem[] = [
  { label: "Work", target: { type: "section", id: "work" } },
  { label: "About", target: { type: "section", id: "about" } },
  {
    label: "Resume",
    target: { type: "external", href: "/resume.pdf", newTab: true },
  },
  { label: "Contact", target: { type: "section", id: "contact" } },
];
