import type { BackgroundGroup } from "./types";

export const backgroundGroups: BackgroundGroup[] = [
  {
    id: "education",
    label: "Education",
    entries: [
      {
        id: "lpu",
        dateLabel: "2024 – Present",
        title: "Lovely Professional University",
        subtitle: "B.Tech Computer Science and Engineering, CGPA 9.01",
      },
      {
        id: "senior-secondary",
        dateLabel: "2022 – 2023",
        title: "Govt. Senior Secondary Smart School, Sri Muktsar Sahib",
        subtitle: "Intermediate, 90.2%",
      },
    ],
  },
  {
    id: "training",
    label: "Training",
    entries: [
      {
        id: "cipherschools-fsd",
        dateLabel: "Aug 2026",
        title: "CipherSchools",
        subtitle: "Full-Stack Development",
        href: "https://drive.google.com/file/d/1vjPnxeMUYD-TlQMHxdKPtM1yVSmFRglm/view?usp=sharing",
      },
    ],
  },
  {
    id: "certificates",
    label: "Certificates",
    entries: [
      {
        id: "oracle-foundations",
        dateLabel: "Apr 2026",
        title: "Oracle Data Platform 2025 Certified Foundations Associate",
        href: "https://drive.google.com/file/d/1GMtBf5FgxIy-2BQn5YqkYn_e5JpeFhFz/view?usp=sharing",
      },
      {
        id: "kaggle-sql",
        dateLabel: "Mar 2026",
        title: "Intro to SQL, Kaggle",
        href: "https://www.kaggle.com/learn/intro-to-sql",
      },
      {
        id: "infosys-genai",
        dateLabel: "Aug 2025",
        title: "Build Generative AI Apps with No-Code Tools, Infosys",
        href: "https://drive.google.com/file/d/1E0CG085oBugEjp9rma_liuN-CQbOZERQ/view?usp=sharing",
      },
      {
        id: "infosys-prompt",
        dateLabel: "Aug 2025",
        title: "ChatGPT-4 Prompt Engineering: Generative AI & LLM, Infosys",
        href: "https://drive.google.com/file/d/1jcy9fg4lworjwjhgE5_EV5S1k2jlzgaj/view?usp=sharing",
      },
    ],
  },
  {
    id: "achievements",
    label: "Achievements",
    entries: [
      {
        id: "tech-synergy",
        dateLabel: "Jul 2026",
        title: "Top Performer, Tech Synergy coding contest by Cipher Schools",
      },
      {
        id: "leetcode",
        dateLabel: "Aug 2024 – Present",
        title: "150+ DSA problems solved on LeetCode",
      },
    ],
  },
];
