import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "ecotrack",
    title: "EcoTrack — Corporate Carbon Emissions Tracking Platform",
    dateLabel: "2026",
    description:
      "Full-stack platform that helps companies track, analyze and reduce their carbon footprint, with role-based access and real-time dashboards.",
    result:
      "Automated CO₂e calculations across 400+ logs, cutting manual data-processing effort by about 45%.",
    stack: ["React 19", "TypeScript", "Express.js", "MongoDB", "JWT", "Recharts"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mohitchauhan21/MERN_EcoTrack_Mohit_Chauhan.git",
      },
    ],
    highlights: [
      "Full-stack platform enabling companies to track, analyze and reduce their carbon footprint.",
      "3-tier role-based access enforced across 15+ REST API endpoints.",
      "CO₂e calculations automated across 400+ logs, cutting manual data-processing effort by about 45%.",
      "CSV uploads and Excel exports cut reporting time by about 65% versus manual workflows.",
      "Real-time Recharts dashboards track department-wise trends.",
    ],
  },
  {
    id: "scibot",
    title: "SciBot — AI Science Experiment Recommender",
    dateLabel: "2026",
    description:
      "AI web app that recommends and explains hands-on science experiments, personalized by grade level and subject.",
    result: "Streams real-time responses from Groq's Llama 3.3 70B.",
    stack: ["Python", "Flask", "Groq API", "JavaScript", "HTML5", "CSS3"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mohitchauhan21/Sci_Bot.git",
      },
    ],
    highlights: [
      "AI-powered web app that recommends and explains hands-on science experiments.",
      "Groq's llama-3.3-70b model streams personalized chatbot responses in real time.",
      "Personalization across 4 grade levels and 3 subjects improved content relevance by about 35%.",
      "Ingredient Lab generates 4 custom experiment ideas from household materials.",
      "Experiment guides and safety notes reduced preparation time by about 30%.",
    ],
  },
  {
    id: "medremind",
    title: "MedRemind — Healthcare & Medication Platform",
    dateLabel: "2026",
    description:
      "Role-based platform connecting patients, caregivers, doctors and admins, with real-time medication alerts and adherence risk scoring.",
    result: "Flags patients below 60% adherence across 3 risk tiers.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Chart.js", "Tailwind CSS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mohitchauhan21/Med_Remind.git",
      },
    ],
    highlights: [
      "Patient, caregiver, doctor and admin workflows unified in one role-based platform.",
      "Real-time alert scheduler polls every 30 seconds with automatic 10-minute snoozing.",
      "Automated risk scoring flags patients below 60% adherence across 3 tiers.",
      "JWT authentication, bcrypt hashing and strict role-based access control protect patient data.",
      "30-day adherence insights and CSV exports simplified progress tracking by about 40%.",
    ],
  },
];
