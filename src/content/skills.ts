import type { SkillGroup } from "./types";

export const skillsHeading = "Skills";

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: [
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL", icon: "sql" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
    ],
  },
  {
    id: "frameworks-tools",
    label: "Frameworks & Tools",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Flask", icon: "flask" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "OpenAI API", icon: "openai" },
      { name: "Gemini API", icon: "gemini" },
      { name: "Hugging Face", icon: "huggingface" },
    ],
  },
];
