export interface LearningTopic {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  currentFocus: string[];
  whatImDoing: string[];
  nextSteps: string[];
  iconKey: "brain" | "boxes" | "cloud" | "code";
}

export const learningTopics: LearningTopic[] = [
  {
    slug: "ai-ml",
    title: "AI / ML",
    subtitle: "Building the foundation in model workflows and practical AI product use.",
    description:
      "I want this page to show the progress I’m making in machine learning, prompt-driven workflows, and practical AI applications.",
    currentFocus: ["Supervised learning", "Model evaluation", "Prompting + RAG", "ML project basics"],
    whatImDoing: [
      "Learning the core ML vocabulary and workflows first.",
      "Connecting AI concepts to real product use cases instead of only theory.",
      "Experimenting with retrieval-augmented patterns and small prototype projects.",
    ],
    nextSteps: ["Python for ML", "scikit-learn basics", "RAG demos", "simple portfolio experiments"],
    iconKey: "brain",
  },
  {
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
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Strengthening delivery skills with infrastructure, deployment, and monitoring concepts.",
    description:
      "This page is for the infrastructure side of my growth: delivery pipelines, cloud deployment, and reliable operations.",
    currentFocus: ["CI/CD", "Docker", "AWS fundamentals", "Observability"],
    whatImDoing: [
      "Learning how release pipelines fit into a modern product workflow.",
      "Using cloud terminology in the context of actual deployments.",
      "Connecting this with the projects I already built in the portfolio.",
    ],
    nextSteps: ["Pipeline design", "AWS services", "Monitoring basics", "deployment automation"],
    iconKey: "cloud",
  },
  {
    slug: "system-thinking",
    title: "System Thinking",
    subtitle: "Improving the way I design APIs, features, and reliable software.",
    description:
      "This page keeps the architecture and engineering mindset visible alongside the newer technologies I’m learning.",
    currentFocus: ["System design", "API architecture", "Performance", "Maintainability"],
    whatImDoing: [
      "Refining how I structure applications so they stay easy to extend.",
      "Thinking about tradeoffs across frontend, backend, and infrastructure.",
      "Keeping documentation and maintainability part of the design process.",
    ],
    nextSteps: ["Scalability patterns", "API boundaries", "Resilience", "design review notes"],
    iconKey: "code",
  },
];

export function getLearningTopic(slug: string) {
  return learningTopics.find((topic) => topic.slug === slug);
}