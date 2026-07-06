import { SkillCategory } from "../../types";
import { category as languages } from "./languages";
import { category as frontend } from "./frontend";
import { category as backend } from "./backend";
import { category as databases } from "./databases";
import { category as aiAgents } from "./ai-agents";
import { category as cloudDevops } from "./cloud-devops";
import { category as toolsDelivery } from "./tools-delivery";
import { category as conceptsCollaboration } from "./concepts-collaboration";

// Order here controls display order in the Skills grid.
export const skillCategories: SkillCategory[] = [
  languages,
  frontend,
  backend,
  databases,
  aiAgents,
  cloudDevops,
  toolsDelivery,
  conceptsCollaboration,
];