import { motion } from "motion/react";
import { BrainCircuit, Boxes, Cloud, Code2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { learningTopics } from "../content/learning";

const iconMap = {
  brain: BrainCircuit,
  boxes: Boxes,
  cloud: Cloud,
  code: Code2,
};

export default function LearningCards() {
  return (
    <section id="learning" className="py-24 px-6 lg:px-16 border-b border-slate-900/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)]" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-900 pb-8"
        >
          <div>
            <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-3">CURRENTLY LEARNING</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Building toward AI, ML, and cloud-native work
            </h2>
          </div>
          <p className="text-slate-400 font-sans max-w-sm font-light text-sm md:text-base mt-4 md:mt-0 leading-relaxed">
            Click a card to open a dedicated page for each learning area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {learningTopics.map((topic, index) => {
            const Icon = iconMap[topic.iconKey];

            return (
              <motion.div
                key={topic.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-900 bg-linear-to-br from-slate-950 via-slate-950 to-slate-900/80 p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.3)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.10),transparent_30%)]" />
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-xl font-bold text-white">{topic.title}</div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-1">
                        Learning track {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-blue-200 font-mono">
                    In progress
                  </div>
                </div>

                <p className="relative text-sm sm:text-base text-slate-400 leading-relaxed mb-5">
                  {topic.subtitle}
                </p>

                <div className="relative flex flex-wrap gap-2 mb-5">
                  {topic.currentFocus.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-[11px] text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/learning/${topic.slug}`}
                  className="relative inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950 px-4 py-2 text-xs font-semibold text-slate-100 transition-colors hover:border-blue-500/30 hover:text-white"
                >
                  Open page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}