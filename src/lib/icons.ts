import type { ComponentType } from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHuggingface,
  SiJsonwebtokens,
  SiChartdotjs,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";
import { RiOpenaiFill } from "react-icons/ri";

export interface IconItem {
  component: ComponentType<{ className?: string; size?: number | string; "aria-hidden"?: boolean | "true" | "false" }>;
  color?: string; // Brand color for hover
}

/**
 * Registry of tech stack and skill icons.
 * Keyed by unique identifier.
 */
export const iconRegistry: Record<string, IconItem> = {
  python: { component: SiPython, color: "#3776ab" },
  java: { component: FaJava, color: "#ea2d2e" },
  javascript: { component: SiJavascript, color: "#f7df1e" },
  typescript: { component: SiTypescript, color: "#3178c6" },
  sql: { component: FaDatabase, color: "#4479a1" },
  html5: { component: SiHtml5, color: "#e34f26" },
  css3: { component: DiCss3, color: "#1572b6" },
  react: { component: SiReact, color: "#61dafb" },
  nextjs: { component: SiNextdotjs, color: "var(--foreground)" },
  tailwindcss: { component: SiTailwindcss, color: "#06b6d4" },
  nodejs: { component: SiNodedotjs, color: "#5fa04e" },
  express: { component: SiExpress, color: "var(--foreground)" },
  flask: { component: SiFlask, color: "var(--foreground)" },
  mongodb: { component: SiMongodb, color: "#47a248" },
  postgresql: { component: SiPostgresql, color: "#4169e1" },
  git: { component: SiGit, color: "#f05032" },
  github: { component: SiGithub, color: "var(--foreground)" },
  openai: { component: RiOpenaiFill, color: "#10a37f" },
  gemini: { component: SiGooglegemini, color: "#8e75ff" },
  huggingface: { component: SiHuggingface, color: "#ffd21e" },
  jwt: { component: SiJsonwebtokens, color: "#d63aff" },
  chartjs: { component: SiChartdotjs, color: "#ff6384" },
  recharts: { component: SiChartdotjs, color: "#22b5bf" },
};

export type IconKey = keyof typeof iconRegistry;
