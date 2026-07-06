import { Certification, ExperienceItem } from "../types";

export const experience: ExperienceItem[] = [
  {
    id: "zebra-tech",
    role: "Software Engineering Intern",
    company: "Zebra Technologies",
    period: "Nov 2025 – Apr 2026",
    highlights: [
      "Developed an AI-powered chat assistant for the company's internal website using ASP.NET Core, React, SQL Server, and the Gemini LLM API.",
      "Engineered and maintained enterprise web applications with React, TypeScript, and ASP.NET Core, improving UI responsiveness and overall system stability across multiple modules.",
      "Authored technical documentation for the chat assistant, including system architecture, API usage, and onboarding notes for other developers.",
      "Worked in an Agile environment with Git and Jira, diagnosing bugs and shipping fixes that improved reliability and code quality."
    ],
    skillsUsed: ["React", "TypeScript", "ASP.NET Core", "SQL Server", "Gemini LLM API", "REST APIs", "Agile", "Jira"]
  }
];

export const certifications: Certification[] = [
  {
    title: "AWS Educate: Introduction to Cloud 101",
    issuer: "Amazon Web Services",
    year: "2025"
  },
  {
    title: "Mastering CI/CD Pipelines – Hands-On Guide",
    issuer: "Learnfi.lk",
    year: "2025"
  },
  {
    title: "The Complete Web Development Bootcamp",
    issuer: "Udemy (Dr. Angela Yu)",
    year: "2024"
  }
];