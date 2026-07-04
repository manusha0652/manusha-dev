import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "busmate-lk",
    title: "Busmate LK",
    subtitle: "Smart Public Bus Transportation System",
    description: "A team-built transportation platform for real-time booking and trip coordination across passengers, conductors, bus owners, and transport authorities.",
    problem: "Public bus travel is still fragmented by manual coordination, limited seat visibility, and poor communication between passengers and operators.",
    solution: "Built the conductor mobile app in React Native and contributed to the ticket management microservice in Spring Boot so teams could manage fares, seat availability, and trip assignment from a shared system.",
    oneHardThing: "Implemented inter-service communication across four microservices with isolated databases, keeping the ticketing workflow consistent while the platform scaled on AWS EC2.",
    techStack: ["Spring Boot", "React Native", "TypeScript", "Next.js", "Supabase (PostgreSQL)", "AWS EC2", "Tailwind CSS", "Docker"],
    tags: ["Microservices", "React Native", "AWS EC2"],
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      "Four microservices with isolated databases",
      "Real-time booking and trip coordination",
      "Conductor app and ticketing service ownership"
    ],
    links: {
      github: "https://github.com/manusha0652",
    },
    designNotes: "Positioned as a practical system for a real transportation workflow: fast booking flows, clear operator screens, and service boundaries that keep distributed state manageable."
  },
  {
    id: "servesmart",
    title: "ServeSmart",
    subtitle: "Restaurant POS System",
    description: "A full-stack point-of-sale system for managing tables, orders, and payments in real time.",
    problem: "Restaurant teams need a reliable way to manage orders quickly without losing track of table state or payment progress.",
    solution: "Built a responsive React frontend with Redux state management and paired it with REST APIs and MongoDB schemas for order handling and checkout flow.",
    oneHardThing: "Designed the application so order state stayed consistent across the UI and backend while keeping the experience fast enough for daily front-of-house use.",
    techStack: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    tags: ["POS", "Redux", "MERN Stack"],
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      "Real-time table and order tracking",
      "Redux-driven interface state",
      "MongoDB-backed order management"
    ],
    links: {
      github: "https://github.com/manusha0652",
    },
    designNotes: "Optimized for operational clarity: fast screen transitions, easy-to-scan order states, and a layout that reduces table-handling mistakes during busy service periods."
  },
  {
    id: "soulgift",
    title: "SoulGift",
    subtitle: "Full-Stack E-Commerce Platform",
    description: "An e-commerce platform for browsing products, managing carts, and placing secure orders.",
    problem: "Smaller commerce sites still need trustworthy login, cart, and admin workflows to feel usable at production scale.",
    solution: "Implemented JWT authentication, dynamic cart management, and a CRUD-based admin dashboard for product operations.",
    oneHardThing: "Separated customer and admin flows cleanly so inventory and order management could stay secure while the shopping flow stayed simple.",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "AJAX"],
    tags: ["E-Commerce", "JWT", "Admin CRUD"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      "JWT-authenticated user sessions",
      "Admin dashboard with full CRUD",
      "Cart and product management workflow"
    ],
    links: {
      github: "https://github.com/manusha0652",
    },
    designNotes: "A cleaner commerce interface with enough hierarchy to support browsing, cart actions, and admin changes without overwhelming the user."
  },
  {
    id: "e-care",
    title: "E-care",
    subtitle: "Digital Health Management System",
    description: "A healthcare platform for appointments, records, laboratory reports, and online payments.",
    problem: "Patients need a reliable digital path for booking and managing health-related tasks without relying on manual follow-up.",
    solution: "Built a web system that supports appointments, record access, payment handling, and SMTP-based notifications.",
    oneHardThing: "Integrated booking, payments, and notification workflows so the user journey stayed connected across the full application flow.",
    techStack: ["JavaScript", "PHP", "MVC", "MySQL", "HTML", "CSS", "Git"],
    tags: ["Health Tech", "MVC", "Payments"],
    imageUrl: "https://images.unsplash.com/photo-1580281657527-47f249e8f1f4?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      "Appointment booking workflow",
      "SMTP notifications and payments",
      "MySQL-backed health records"
    ],
    links: {
      github: "https://github.com/manusha0652",
    },
    designNotes: "Built around task completion and clarity, with the booking flow and reporting flow kept visually separate to reduce user confusion."
  }
];