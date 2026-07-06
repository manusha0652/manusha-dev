import { Project } from "../../types";

export const project: Project = {
  id: "soulgift",
  title: "SoulGift",
  subtitle: "Full-Stack E-Commerce Platform",
  description: "An e-commerce platform for browsing products, managing carts, and placing secure orders.",
  problem: "Smaller commerce sites still need trustworthy login, cart, and admin workflows to feel usable at production scale.",
  solution: "Implemented JWT authentication, dynamic cart management, and a CRUD-based admin dashboard for product operations.",
  oneHardThing: "Separated customer and admin flows cleanly so inventory and order management could stay secure while the shopping flow stayed simple.",
  techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "AJAX"],
  tags: ["E-Commerce", "JWT", "Admin CRUD"],
  previewImage: "/projects/soulgift.jpg",
  previewIconKey: "gift",
  previewAccent: "violet",
  metrics: [
    "JWT-authenticated user sessions",
    "Admin dashboard with full CRUD",
    "Cart and product management workflow"
  ],
  links: {
    github: "https://github.com/manusha0652",
  },
  designNotes: "A cleaner commerce interface with enough hierarchy to support browsing, cart actions, and admin changes without overwhelming the user."
};