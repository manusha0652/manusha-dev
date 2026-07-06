import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const profilePic = new URL("../../assets/profile pic.png", import.meta.url).href;
  const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=kawshanmanusha7@gmail.com";

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-16 pt-28 pb-16 border-b border-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.9),transparent_45%)] pointer-events-none"></div>
      <div className="absolute top-24 right-10 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-300 text-xs font-mono mb-6 self-start"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            SOFTWARE ENGINEER | UCSC CS 2023 - 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            I build production software <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 via-cyan-300 to-slate-100">
              across React, ASP.NET Core,Springboot and microservices.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8 font-sans font-light"
          >
            Fresh Computer Science graduate and Full-Stack Software Engineer with enterprise experience at Zebra Technologies. I ship React, TypeScript, ASP.NET Core, and Spring Boot systems that handle real users, real data, and real delivery pressure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors duration-200 text-white font-medium flex items-center gap-2 group shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20"
            >
              View Projects
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
            </a>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-950/40 hover:bg-slate-900/60 text-slate-300 hover:text-white transition-all duration-200 font-medium flex items-center gap-2"
            >
              Contact
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 mt-12 border-t border-slate-900/80"
          >
            <div className="rounded-2xl border border-slate-900 bg-slate-950/50 p-4">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">Zebra</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1">Enterprise internship</div>
            </div>
            <div className="rounded-2xl border border-slate-900 bg-slate-950/50 p-4">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">Gemini</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1">AI assistant shipped</div>
            </div>
            <div className="rounded-2xl border border-slate-900 bg-slate-950/50 p-4">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">React</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1">Full-stack delivery</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="w-full bg-slate-950/90 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl relative z-10 backdrop-blur-sm">
            <div className="p-4 border-b border-slate-800/70 flex items-center justify-between bg-slate-900/30">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">Profile</span>
            </div>

            <div className="p-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/5] max-w-md mx-auto">
                <img
                  src={profilePic}
                  alt="Manusha Ranaweera"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[10px] font-mono uppercase tracking-[0.25em] text-blue-300 mb-3">
                    Open to full-time SWE roles
                  </div>
                  <div className="text-white font-display text-2xl font-bold">Manusha Ranaweera</div>
                  <div className="text-slate-300 text-sm mt-1">Full-Stack Software Engineer</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
                  <div className="text-white font-bold text-lg">React</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Frontend</div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
                  <div className="text-white font-bold text-lg">ASP.NET</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Backend</div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
                  <div className="text-white font-bold text-lg">Gemini</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">AI</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-400">
                <a href="https://github.com/manusha0652" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:text-white transition-colors">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/manusha-ranaweera-200b06254" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:text-white transition-colors">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
                <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:text-white transition-colors">
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
