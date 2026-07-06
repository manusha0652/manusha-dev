import { Project } from "../../types";
import { project as ferrisTheLibrarian } from "./ferris-the-librarian";
import { project as busmateLk } from "./busmate-lk";
import { project as servesmart } from "./servesmart";
import { project as soulgift } from "./soulgift";
import { project as eCare } from "./e-care";

// Order here controls display order. Projects.tsx features the first three
// and lists the rest under "More work on GitHub".
export const projects: Project[] = [
  ferrisTheLibrarian,
  busmateLk,
  servesmart,
  soulgift,
  eCare,
];