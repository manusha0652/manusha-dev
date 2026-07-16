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
  previewImage: string; // Path under /public/projects to the real screenshot
  previewImages?: string[]; // Optional gallery — when set, the preview cycles through these like a carousel
  previewIconKey: "bus" | "food" | "gift" | "health" | "rag"; // Used as a fallback until previewImage exists
  previewAccent: "blue" | "amber" | "violet" | "emerald" | "cyan";
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

export interface LearningAchievement {
  title: string; // Name of the lab / module completed
  image: string; // Path under /public to the solution diagram or screenshot
  description: string; // What was built/learned in this lab
  certificateLink?: string; // Optional path under /public to an earned certificate
}

export interface LearningTopic {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  currentFocus: string[];
  whatImDoing: string[];
  nextSteps: string[];
  iconKey: "brain" | "boxes" | "cloud" | "code" | "server";
  achievements?: LearningAchievement[]; // Completed labs/modules shown as an image gallery
}
