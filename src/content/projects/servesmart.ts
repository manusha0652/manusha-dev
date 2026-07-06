import { Project } from "../../types";

export const project: Project = {
  id: "servesmart",
  title: "ServeSmart",
  subtitle: "Restaurant POS System",
  description: "A full-stack point-of-sale system for managing tables, orders, and payments in real time.",
  problem: "Restaurant teams need a reliable way to manage orders quickly without losing track of table state or payment progress.",
  solution: "Built a responsive React frontend with Redux state management and paired it with REST APIs and MongoDB schemas for order handling and checkout flow.",
  oneHardThing: "Designed the application so order state stayed consistent across the UI and backend while keeping the experience fast enough for daily front-of-house use.",
  techStack: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  tags: ["POS", "Redux", "MERN Stack"],
  previewImage: "/projects/servesmart.jpg",
  previewIconKey: "food",
  previewAccent: "amber",
  metrics: [
    "Real-time table and order tracking",
    "Redux-driven interface state",
    "MongoDB-backed order management"
  ],
  links: {
    github: "https://github.com/manusha0652",
  },
  designNotes: "Optimized for operational clarity: fast screen transitions, easy-to-scan order states, and a layout that reduces table-handling mistakes during busy service periods."
};