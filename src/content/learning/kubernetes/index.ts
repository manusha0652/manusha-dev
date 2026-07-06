import { LearningTopic } from "../../../types";

export const topic: LearningTopic = {
  slug: "kubernetes",
  title: "Kubernetes",
  subtitle: "Learning how apps are deployed, scaled, and managed in cloud-native systems.",
  description:
    "This page will track the way I’m learning container orchestration, deployment patterns, and service networking.",
  currentFocus: ["Pods and deployments", "Services and ingress", "ConfigMaps and secrets", "Scaling patterns"],
  whatImDoing: [
    "Understanding how containers become managed workloads.",
    "Reading deployment manifests and learning how services connect.",
    "Planning to connect this with Docker and CI/CD workflows.",
  ],
  nextSteps: ["Namespaces", "Deployments", "Ingress", "Helm basics"],
  iconKey: "boxes",
};
