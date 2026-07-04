import { skillCategories } from "../data";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-16 border-b border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-slate-900 pb-6">
          <div>
            <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-3">TOOLKIT & EXPERTISE</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills at a glance
            </h2>
          </div>
          <p className="text-slate-400 font-sans max-w-md font-light text-sm md:text-base mt-4 md:mt-0 leading-relaxed">
            A simple overview of the stack I work with most often, organized so every skill is visible at a glance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
              whileHover={{ y: -2 }}
              className="group rounded-[1.5rem] border border-slate-900 bg-slate-950/80 p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-transform duration-200"
            >
              <div className="mb-4 flex items-center justify-between gap-4 pb-4 border-b border-slate-900/70">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                  {category.description}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-slate-800 bg-slate-950 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">
                  {category.skills.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center rounded-full border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-200 transition-colors hover:border-slate-700 hover:text-white"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
