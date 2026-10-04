import type { SkillGroup } from "./types";

export const skillsHeading = "Skills";

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    id: "frameworks-tools",
    label: "Frameworks & Tools",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Flask",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "GitHub",
      "OpenAI API",
      "Gemini API",
      "Hugging Face",
    ],
  },
];
