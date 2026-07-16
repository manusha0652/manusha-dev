import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { projects } from "../data";
import { ArrowUpRight, Github, ChevronRight, Layers, FileText } from "lucide-react";
import ProjectImage from "./ProjectImage";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.slice(0, 3);
  const moreProjects = projects.slice(3);

  return (
    <section id="projects" className="py-24 px-6 lg:px-16 border-b border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-900 pb-8">
          <div>
            <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-3">CURATED WORK</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Selected Projects
            </h2>
          </div>
          <p className="text-slate-400 font-sans max-w-sm font-light text-sm md:text-base mt-4 md:mt-0 leading-relaxed">
            Three projects that show production delivery across agentic AI, microservices, and full-stack product work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-slate-950 border border-slate-900/80 hover:border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative h-56 w-full rounded-xl overflow-hidden mb-6 bg-slate-900 border border-slate-800/40">
                <ProjectImage
                  project={project}
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent"></div>
              </div>

              <div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-blue-400/90 font-mono tracking-wide uppercase mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-200">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-[10px] text-slate-400 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="border-t border-slate-900 pt-4 mb-4">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono block mb-2">Key Metric / Milestone</span>
                  <ul className="space-y-1.5">
                    {project.metrics?.slice(0, 2).map((metric, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-2 font-mono">
                        <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 text-xs font-mono text-slate-500 group-hover:text-blue-400 transition-colors">
                <span>View Full Case Study</span>
                <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-card border border-slate-800/80 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Hero Header & Preview Panel */}
                <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-64 bg-slate-900">
                  <ProjectImage project={selectedProject} className="absolute inset-0" />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-card via-brand-card/40 to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-brand-card"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-2.5 py-0.5 rounded bg-blue-600/90 border border-blue-500 text-[10px] text-white font-mono tracking-widest uppercase inline-block mb-3">
                      {selectedProject.tags[0]}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-blue-400 font-mono tracking-wide uppercase">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>

                {/* Case Study Details Panel */}
                <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
                  
                  {/* Brief overview */}
                  <div>
                    <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-2">OVERVIEW</h4>
                    <p className="text-slate-300 text-sm font-light leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Problem & Solution Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-red-950/10 border border-red-900/20">
                      <h5 className="text-[10px] text-red-400 uppercase tracking-widest font-mono mb-1.5">The Core Friction</h5>
                      <p className="text-slate-400 text-xs leading-relaxed font-light">
                        {selectedProject.problem}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-950/10 border border-emerald-900/20">
                      <h5 className="text-[10px] text-emerald-400 uppercase tracking-widest font-mono mb-1.5">The Solution Engine</h5>
                      <p className="text-slate-400 text-xs leading-relaxed font-light">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* The One Hard Thing / Architectural Centerpiece */}
                  <div className="p-5 rounded-xl bg-blue-950/10 border border-blue-900/20 space-y-2">
                    <div className="flex items-center gap-2 text-blue-400">
                      <Layers className="h-4 w-4" />
                      <h5 className="text-[10px] uppercase tracking-widest font-mono">The One Hard Thing / Core Engineering Challenge</h5>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed font-light">
                      {selectedProject.oneHardThing}
                    </p>
                  </div>

                  {/* UI/UX Design Sensibilities */}
                  <div className="border-l-2 border-blue-500 pl-4 space-y-1">
                    <h5 className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">UI/UX Craft & Sensibilities</h5>
                    <p className="text-slate-300 text-xs leading-relaxed font-light">
                      {selectedProject.designNotes}
                    </p>
                  </div>

                  {/* Tech Stack badging */}
                  <div>
                    <h5 className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-2.5">Technologies Employed</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800 text-[11px] font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-900/80 items-center justify-between">
                    <div className="flex gap-3">
                      {selectedProject.links.github && (
                        <a
                          href={selectedProject.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-2"
                        >
                          <Github className="h-3.5 w-3.5" /> Code Repository
                        </a>
                      )}
                      {selectedProject.links.report && (
                        <a
                          href={selectedProject.links.report}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-2"
                        >
                          <FileText className="h-3.5 w-3.5" /> Project Report
                        </a>
                      )}
                    </div>
                    
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-xs text-slate-500 hover:text-slate-300 font-mono transition-colors"
                    >
                      Close Case Study
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {moreProjects.length > 0 && (
        <div className="max-w-7xl mx-auto mt-10">
          <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">More work on GitHub</h3>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                Additional shipped projects include {moreProjects.map((project) => project.title).join(", ")}.
              </p>
            </div>
            <a
              href="https://github.com/manusha0652"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-white font-mono transition-all"
            >
              <Github className="h-3.5 w-3.5" /> View GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
