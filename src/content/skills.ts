import { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "The programming languages I use most often across product work.",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Java", level: 88 },
      { name: "PHP", level: 84 },
      { name: "C", level: 76 }
    ]
  },
  {
    title: "Frontend",
    description: "The UI stack I use to build fast, responsive interfaces.",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "React Native", level: 86 },
      { name: "Tailwind CSS", level: 96 },
      { name: "Redux", level: 88 },
      { name: "HTML5 / CSS3", level: 94 }
    ]
  },
  {
    title: "Backend",
    description: "Server-side frameworks and API layers I have shipped with.",
    skills: [
      { name: "ASP.NET Core", level: 90 },
      { name: "Spring Boot", level: 88 },
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Laravel", level: 82 },
      { name: "RESTful API Design", level: 94 }
    ]
  },
  {
    title: "Databases",
    description: "Relational and non-relational stores I have worked with.",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 86 },
      { name: "Supabase", level: 84 },
      { name: "SQL Server", level: 82 }
    ]
  },
  {
    title: "AI, Cloud & Tools",
    description: "The platforms and delivery tools I use to ship production work.",
    skills: [
      { name: "Gemini API", level: 92 },
      { name: "RAG Architecture", level: 84 },
      { name: "AWS EC2", level: 82 },
      { name: "Docker", level: 80 },
      { name: "Git", level: 94 },
      { name: "Jira", level: 88 }
    ]
  },
  {
    title: "Concepts & Collaboration",
    description: "The engineering habits I lean on when working in teams.",
    skills: [
      { name: "Microservices Architecture", level: 88 },
      { name: "OOP", level: 90 },
      { name: "Agile Delivery", level: 90 },
      { name: "Technical Documentation", level: 92 },
      { name: "Cross-functional Collaboration", level: 88 },
      { name: "Problem Solving", level: 95 }
    ]
  }
];