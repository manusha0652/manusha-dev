import { useEffect, useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "motion/react";
import { BookOpen, Bus, ChevronLeft, ChevronRight, Gift, HeartPulse, UtensilsCrossed } from "lucide-react";
import { Project } from "../types";
import { withBase } from "../lib/assetPath";

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

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? "-100%" : "100%", opacity: 0 }),
};

interface ProjectImageProps {
  project: Project;
  className?: string;
}

export default function ProjectImage({ project, className = "" }: ProjectImageProps) {
  const images = project.previewImages && project.previewImages.length > 0
    ? project.previewImages
    : [project.previewImage];
  const hasMultiple = images.length > 1;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [failed, setFailed] = useState(false);
  const Icon = iconMap[project.previewIconKey];
  const accent = accentMap[project.previewAccent];

  useEffect(() => {
    setIndex(0);
    setDirection(0);
    setFailed(false);
  }, [project.id]);

  useEffect(() => {
    if (!hasMultiple || failed) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [hasMultiple, failed, images.length]);

  if (failed) {
    return (
      <div className={`relative h-full w-full flex items-center justify-center bg-linear-to-br ${accent} to-slate-950 ${className}`}>
        <Icon className="h-10 w-10 opacity-70" strokeWidth={1.5} />
      </div>
    );
  }

  const goTo = (nextIndex: number) => {
    setDirection(nextIndex > index ? 1 : -1);
    setIndex((nextIndex + images.length) % images.length);
  };

  const handleDragEnd = (_event: unknown, info: PanInfo) => {
    if (info.offset.x < -50) goTo(index + 1);
    else if (info.offset.x > 50) goTo(index - 1);
  };

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={`${project.id}-${index}`}
          src={withBase(images[index])}
          alt={`${project.title} screenshot ${index + 1}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: "easeInOut" }}
          drag={hasMultiple ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={hasMultiple ? handleDragEnd : undefined}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goTo(index - 1); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white border border-white/10 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goTo(index + 1); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white border border-white/10 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); goTo(i); }}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
