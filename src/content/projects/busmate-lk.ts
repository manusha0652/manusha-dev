import { Project } from "../../types";

export const project: Project = {
  id: "busmate-lk",
  title: "Busmate LK",
  subtitle: "Smart Public Bus Transport Management System",
  description: "A 6-person university team project (UCSC Group Project II) building a microservices platform for Sri Lanka's long-distance and expressway bus network — connecting passengers, conductors, fleet operators, time keepers, and Ministry of Transport officials through dedicated web and mobile apps for live GPS tracking, QR-code digital ticketing, and route/schedule management.",
  problem: "A survey the team ran found that over 75% of Sri Lankan bus passengers struggle with public transport: no centralized way to look up routes, no real-time tracking so arrival times are a guess, and a cash-only, walk-up ticketing process that rules out advance booking. Operators had no digital tools for fleet, staff, or revenue management, and the Ministry of Transport had no unified view of ridership across operators.",
  solution: "Owned the Conductor mobile app end to end in React Native — shift check-in, live GPS broadcast, and QR ticket issuing/validation — integrating it with the shared Spring Boot ticketing and location-tracking services that also power the Passenger app, Fleet Operator dashboards, Ministry of Transport portal, and Time Keeper portal.",
  oneHardThing: "Kept the Conductor app's live GPS broadcast and QR ticket validation reliable against a backend split into independent Spring Boot microservices (ticketing, routing, scheduling, location tracking, analytics) communicating over REST, each containerized separately and deployed through GitHub Actions CI/CD.",
  techStack: ["Spring Boot", "React Native", "TypeScript", "Next.js", "PostgreSQL", "Supabase", "AWS EC2", "Docker", "Tailwind CSS"],
  tags: ["Microservices", "React Native", "AWS EC2"],
  previewImage: "/projects/busmate-lk/1.jpeg",
  previewImages: [
    "/projects/busmate-lk/1.jpeg",
    "/projects/busmate-lk/2.jpeg",
    "/projects/busmate-lk/3.jpeg",
    "/projects/busmate-lk/4.jpeg",
    "/projects/busmate-lk/5.jpeg",
    "/projects/busmate-lk/6.jpeg",
    "/projects/busmate-lk/7.jpeg",
  ],
  previewIconKey: "bus",
  previewAccent: "blue",
  metrics: [
    "6 role-based apps: passengers, conductors, fleet operators, time keepers, MoT, admins",
    "Microservices backend (ticketing, routing, scheduling, tracking, analytics) on Docker + CI/CD",
    "Conductor app owned end to end: UI and backend service integration"
  ],
  links: {
    github: "https://github.com/manusha0652",
    report: "/projects/busmate-lk/final-report.pdf",
  },
  designNotes: "Positioned as a practical system for a real transportation workflow: fast booking flows, clear operator screens, and service boundaries that keep distributed state manageable across six distinct role-based interfaces."
};