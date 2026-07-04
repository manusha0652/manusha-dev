import { motion } from "motion/react";
import { Award, GraduationCap, Users, Sparkles } from "lucide-react";

export default function About() {
  const profilePic = new URL("../../assets/profile pic.png", import.meta.url).href;

  return (
    <section id="about" className="py-24 px-6 lg:px-16 border-b border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
            <img src={profilePic} alt="Manusha Ranaweera" className="w-full h-105 object-cover object-center" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 backdrop-blur-sm">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-blue-300 mb-2">Beyond code</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                I work best in teams, keep communication direct, and value the details that make software easier to maintain.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-3">ABOUT</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            A full-stack engineer who ships, documents, and follows through.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-6">
            I’m a Computer Science graduate who focuses on building production-ready software across frontend interfaces, REST APIs, and AI-integrated workflows. My strongest proof points are real delivery at Zebra Technologies and project work that covers microservices, React Native, Node.js, and Laravel.
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            Outside the technical work, I volunteered at the UCSC Career Fair 2025, served as Co-director of Sports and Recreation at Rotaract Club of UCSC, and took part in team events at Zebra Technologies. Those experiences matter because they shaped how I collaborate, communicate, and keep ownership of the work I ship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-900 bg-slate-950 p-4">
              <GraduationCap className="h-5 w-5 text-blue-400 mb-3" />
              <div className="text-white font-semibold mb-1">UCSC CS</div>
              <div className="text-xs text-slate-500">2023 - 2026</div>
            </div>
            <div className="rounded-2xl border border-slate-900 bg-slate-950 p-4">
              <Sparkles className="h-5 w-5 text-blue-400 mb-3" />
              <div className="text-white font-semibold mb-1">Enterprise AI</div>
              <div className="text-xs text-slate-500">Gemini assistant shipped</div>
            </div>
            <div className="rounded-2xl border border-slate-900 bg-slate-950 p-4">
              <Users className="h-5 w-5 text-blue-400 mb-3" />
              <div className="text-white font-semibold mb-1">Teamwork</div>
              <div className="text-xs text-slate-500">Agile and cross-functional</div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-900 bg-slate-950 p-4 flex items-start gap-3">
            <Award className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-400 leading-relaxed">
              Open to full-time Full-Stack Software Engineering roles after graduation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}