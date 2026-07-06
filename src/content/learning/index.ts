import { LearningTopic } from "../../types";
import { topic as aiMl } from "./ai-ml";
import { topic as kubernetes } from "./kubernetes";
import { topic as cloudDevops } from "./cloud-devops";
import { topic as systemThinking } from "./system-thinking";

// Order here controls display order in the Learning cards grid.
export const learningTopics: LearningTopic[] = [
  aiMl,
  kubernetes,
  cloudDevops,
  systemThinking,
];

export function getLearningTopic(slug: string) {
  return learningTopics.find((topic) => topic.slug === slug);
}
