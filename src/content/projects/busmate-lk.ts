import { Project } from "../../types";

export const project: Project = {
  id: "busmate-lk",
  title: "Busmate LK",
  subtitle: "Smart Public Bus Transportation System",
  description: "A team-built transportation platform for real-time booking and trip coordination across passengers, conductors, bus owners, and transport authorities.",
  problem: "Public bus travel is still fragmented by manual coordination, limited seat visibility, and poor communication between passengers and operators.",
  solution: "Built the conductor mobile app in React Native and contributed to the ticket management microservice in Spring Boot so teams could manage fares, seat availability, and trip assignment from a shared system.",
  oneHardThing: "Implemented inter-service communication across four microservices with isolated databases, keeping the ticketing workflow consistent while the platform scaled on AWS EC2.",
  techStack: ["Spring Boot", "React Native", "TypeScript", "Next.js", "Supabase (PostgreSQL)", "AWS EC2", "Tailwind CSS", "Docker"],
  tags: ["Microservices", "React Native", "AWS EC2"],
  previewImage: "/projects/busmate-lk.jpg",
  previewIconKey: "bus",
  previewAccent: "blue",
  metrics: [
    "Four microservices with isolated databases",
    "Real-time booking and trip coordination",
    "Conductor app and ticketing service ownership"
  ],
  links: {
    github: "https://github.com/manusha0652",
  },
  designNotes: "Positioned as a practical system for a real transportation workflow: fast booking flows, clear operator screens, and service boundaries that keep distributed state manageable."
};