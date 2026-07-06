import { useState } from "react";
import { BookOpen, Bus, Gift, HeartPulse, UtensilsCrossed } from "lucide-react";
import { Project } from "../types";

const iconMap = {
  bus: Bus,
  food: UtensilsCrossed,
  gift: Gift,
  health: HeartPulse,
  rag: BookOpen,
};

const accentMap = {
  blue: "from-blue-500/15 text-blue-300",
  amber: "from-amber-500/15 text-amber-300",
  violet: "from-violet-500/15 text-violet-300",
  emerald: "from-emerald-500/15 text-emerald-300",
  cyan: "from-cyan-500/15 text-cyan-300",
};

interface ProjectImageProps {
  project: Project;
  className?: string;
}

export default function ProjectImage({ project, className = "" }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);
  const Icon = iconMap[project.previewIconKey];
  const accent = accentMap[project.previewAccent];

  if (failed) {
    return (
      <div className={`relative h-full w-full flex items-center justify-center bg-linear-to-br ${accent} to-slate-950 ${className}`}>
        <Icon className="h-10 w-10 opacity-70" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <img
      src={project.previewImage}
      alt={`${project.title} screenshot`}
      className={`h-full w-full object-cover object-top ${className}`}
      onError={() => setFailed(true)}
    />
  );
}