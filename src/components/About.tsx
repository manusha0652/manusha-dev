import { motion } from "motion/react";
import { Award, GraduationCap, Users, Sparkles, MessageSquare } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16 border-b border-slate-900/60 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-3">ABOUT</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            A full-stack engineer who ships, documents, and follows through.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-6">
            I’m a Computer Science graduate who focuses on building production-ready software across frontend interfaces, REST APIs, and AI-integrated workflows. My strongest proof point is an AI-powered chat assistant I built for my company's website during my software engineering internship, using ASP.NET Core, React, SQL Server, and the Gemini LLM API — alongside project work that covers microservices, React Native, Node.js, and Laravel.
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mb-10">
            Outside the technical work, I volunteered at the UCSC Career Fair 2025, served as Co-director of Sports and Recreation at Rotaract Club of UCSC, and took part in team events at Zebra Technologies. Those experiences matter because they shaped how I collaborate, communicate, and keep ownership of the work I ship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-slate-900 bg-slate-950 p-4">
              <GraduationCap className="h-5 w-5 text-blue-400 mb-3" />
              <div className="text-white font-semibold mb-1">B.Sc. Computer Science</div>
              <div className="text-xs text-slate-500">UCSC, 2023 – 2026 · Second Lower Division</div>
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
            <div className="rounded-2xl border border-slate-900 bg-slate-950 p-4">
              <MessageSquare className="h-5 w-5 text-blue-400 mb-3" />
              <div className="text-white font-semibold mb-1">Beyond Code</div>
              <div className="text-xs text-slate-500">Direct communicator, detail-focused</div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-900 bg-slate-950 p-4 flex items-start gap-3">
            <Award className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-400 leading-relaxed">
              Open to full-time Full-Stack Software Engineering roles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
