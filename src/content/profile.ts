import type { Profile } from "./types";

export const profile: Profile = {
  name: "Mohit Chauhan",
  role: "Full-Stack Developer",
  location: "Punjab, India",
  intro:
    "I build secure, data-driven web apps with React, Node.js and AI APIs. Currently studying Computer Science and Engineering at Lovely Professional University.",
  avatar: {
    src: "/images/mohit-chauhan.jpg",
    alt: "Portrait of Mohit Chauhan",
    objectPosition: "center 20%",
  },
  about: [
    "I am a Computer Science undergraduate at Lovely Professional University (CGPA 9.01) with a deep interest in turning practical, complex challenges across sustainability, healthcare, and education into resilient full-stack web applications.",
    "Having solved over 150 algorithmic problems on LeetCode, I combine disciplined data structures and algorithmic thinking with modern AI APIs (OpenAI, Gemini, Groq) to build clean, helpful, and dependable software.",
  ],
  email: "mohitchauhan8237@gmail.com",
  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/mohitchauhan21",
      displayText: "github.com/mohitchauhan21",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohit-chauhan21",
      displayText: "linkedin.com/in/mohit-chauhan21",
    },
  ],
  heroLinks: ["github", "linkedin", "email"],
  resume: { label: "Resume", href: "/resume.pdf" },
};
