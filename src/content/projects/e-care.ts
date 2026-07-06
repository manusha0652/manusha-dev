import { Project } from "../../types";

export const project: Project = {
  id: "e-care",
  title: "E-care",
  subtitle: "Digital Health Management System",
  description: "A healthcare platform for appointments, records, laboratory reports, and online payments.",
  problem: "Patients need a reliable digital path for booking and managing health-related tasks without relying on manual follow-up.",
  solution: "Built a web system that supports appointments, record access, payment handling, and SMTP-based notifications.",
  oneHardThing: "Integrated booking, payments, and notification workflows so the user journey stayed connected across the full application flow.",
  techStack: ["JavaScript", "PHP", "MVC", "MySQL", "HTML", "CSS", "Git"],
  tags: ["Health Tech", "MVC", "Payments"],
  previewImage: "/projects/e-care.jpg",
  previewIconKey: "health",
  previewAccent: "emerald",
  metrics: [
    "Appointment booking workflow",
    "SMTP notifications and payments",
    "MySQL-backed health records"
  ],
  links: {
    github: "https://github.com/manusha0652",
  },
  designNotes: "Built around task completion and clarity, with the booking flow and reporting flow kept visually separate to reduce user confusion."
};