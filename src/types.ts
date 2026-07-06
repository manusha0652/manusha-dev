export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  oneHardThing: string;
  techStack: string[];
  tags: string[];
  previewIconKey: "bus" | "food" | "gift" | "health";
  previewAccent: "blue" | "amber" | "violet" | "emerald";
  previewDomain: string; // Fake address-bar text shown in the project preview mockup
  metrics?: string[];
  links: {
    github?: string;
    live?: string;
  };
  designNotes: string; // Detail highlighting the UI/UX design choices and layout transitions
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number }[]; // Level out of 100 for visual bars
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}
