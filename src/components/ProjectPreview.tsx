import { Bus, Gift, HeartPulse, UtensilsCrossed } from "lucide-react";
import { Project } from "../types";

const iconMap = {
  bus: Bus,
  food: UtensilsCrossed,
  gift: Gift,
  health: HeartPulse,
};

const accentMap = {
  blue: { glow: "bg-blue-500/20", text: "text-blue-300", prompt: "text-blue-400" },
  amber: { glow: "bg-amber-500/20", text: "text-amber-300", prompt: "text-amber-400" },
  violet: { glow: "bg-violet-500/20", text: "text-violet-300", prompt: "text-violet-400" },
  emerald: { glow: "bg-emerald-500/20", text: "text-emerald-300", prompt: "text-emerald-400" },
};

interface ProjectPreviewProps {
  project: Project;
  className?: string;
}

export default function ProjectPreview({ project, className = "" }: ProjectPreviewProps) {
  const Icon = iconMap[project.previewIconKey];
  const accent = accentMap[project.previewAccent];

  return (
    <div className={`relative h-full w-full flex flex-col bg-slate-950 ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-800/60 bg-slate-900/50 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
        </div>
        <div className="flex-1 truncate rounded-full bg-slate-950/80 border border-slate-800/70 px-3 py-1 text-[10px] font-mono text-slate-500">
          {project.previewDomain}
        </div>
      </div>

      <div className="relative flex-1 flex flex-col justify-between p-5 sm:p-6 overflow-hidden">
        <div className={`pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full blur-3xl ${accent.glow}`}></div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "16px 16px" }}
        ></div>

        <Icon className={`relative h-10 w-10 sm:h-12 sm:w-12 ${accent.text} opacity-90`} strokeWidth={1.5} />

        <div className="relative font-mono text-[11px] sm:text-xs space-y-1.5">
          <div className={accent.prompt}>$ tech --stack</div>
          <div className="text-slate-400 leading-relaxed">
            [{project.techStack.slice(0, 4).join(", ")}]
          </div>
        </div>
      </div>
    </div>
  );
}