import { experience, certifications } from "../data";
import { motion } from "motion/react";
import { Briefcase, Calendar, GraduationCap, Award, MapPin, CheckCircle2, Sparkles, Users } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-16 border-b border-slate-900/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-900 pb-8">
          <div>
            <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-3">PROFESSIONAL PATH</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Experience & Foundations
            </h2>
          </div>
          <p className="text-slate-400 font-sans max-w-sm font-light text-sm md:text-base mt-4 md:mt-0 leading-relaxed">
            Enterprise delivery experience, formal computer science training, and enough shipped work to discuss tradeoffs in detail.
          </p>
        </div>

        {/* 2-Column Split: Left for Work Timeline, Right for Edu & Certs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-7 space-y-10">
            <h3 className="text-xs uppercase tracking-widest font-mono text-slate-500 flex items-center gap-2 mb-6">
              <Briefcase className="h-4 w-4 text-blue-500" />
              Work History
            </h3>

            <div className="relative border-l border-slate-900 ml-3 pl-6 sm:pl-8 space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-8 sm:-left-10 top-1.5 w-3.5 h-3.5 rounded-full border border-slate-950 bg-slate-900 group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-300"></span>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-1">
                    <div>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-sm text-slate-300 font-medium">{item.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <Calendar className="h-3.5 w-3.5 text-slate-600" />
                      {item.period}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {item.highlights.map((bullet, i) => (
                      <li key={i} className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 mt-1.5 shrink-0"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Skills badges utilized */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-900/60">
                    {item.skillsUsed.map(skill => (
                      <span key={skill} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-900 text-[10px] font-mono text-slate-500">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 space-y-3">
              <div className="flex items-center gap-2 text-blue-300">
                <Sparkles className="h-4 w-4" />
                <h4 className="text-xs uppercase tracking-widest font-mono">Right Now</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Recently graduated with a B.Sc. in Computer Science from UCSC, shipping AI-integrated side projects like Ferris the Librarian, and going deeper into cloud and DevOps. Actively looking for full-time Full-Stack Software Engineer roles.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-900 bg-slate-950 p-6 space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-mono text-slate-500 flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-500" />
                References
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-white">Dinusha Thilakarathna</p>
                  <p className="text-xs text-slate-500">Technical Lead, Zebra Technologies</p>
                  <p className="text-xs text-slate-500 mt-1">My mentor during the internship</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Viraj Amarasekera</p>
                  <p className="text-xs text-slate-500">Senior Manager – Software Engineering, Zebra Technologies</p>
                  <p className="text-xs text-slate-500 mt-1">My manager during the internship</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Contact details available on request.
              </p>
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Education Subblock */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest font-mono text-slate-500 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-blue-500" />
                Education
              </h3>

              <div className="bg-slate-950 border border-slate-900/80 rounded-2xl p-6 space-y-6">
                
                {/* University of Colombo */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-display text-sm sm:text-base font-bold text-white">
                      B.Sc. in Computer Science
                    </h4>
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-500/5 border border-blue-500/10 px-2 py-0.5 rounded">
                      2023 – 2026
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">University of Colombo School of Computing (UCSC)</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Colombo, Sri Lanka
                  </p>
                  <p className="text-xs text-blue-400 font-medium pt-1">Second Lower Division</p>
                  <div className="pt-3">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-2">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Data Structures & Algorithms",
                        "Software Engineering",
                        "Databases",
                        "Computer Networks",
                        "Middleware Architecture",
                        "Software Quality Assurance",
                        "Software Project Management",
                        "Mobile App Development",
                        "Rapid Application Development",
                        "Machine  Learning",
                        "Group Projects"
                      ].map((course) => (
                        <span key={course} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-900 text-[10px] font-mono text-slate-500">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 font-light pt-3 leading-relaxed">
                    Balanced coursework with side projects built throughout the degree — including Busmate LK, ServeSmart, SoulGift, and Ferris the Librarian.
                  </p>
                </div>

                <hr className="border-slate-900" />

                {/* Rahula College */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-display text-xs sm:text-sm font-bold text-slate-300">
                      G.C.E. Advanced Level
                    </h4>
                    <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5">
                      2019 – 2021
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">Rahula College, Matara</p>
                  <p className="text-xs text-slate-500 font-light">Mathematics Stream</p>
                </div>

              </div>
            </div>

            {/* Certifications Subblock */}
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest font-mono text-slate-500 flex items-center gap-2">
                <Award className="h-4 w-4 text-blue-500" />
                Verifications & Certs
              </h3>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-center justify-between p-4 bg-slate-950 border border-slate-900 rounded-xl hover:border-slate-800 transition-colors duration-200"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-white mb-0.5">{cert.title}</h4>
                      <p className="text-[11px] text-slate-500 font-mono uppercase">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-slate-600 font-mono font-medium shrink-0 ml-4">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-mono text-slate-500 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-500" />
                At a Glance
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="rounded-2xl border border-slate-900 bg-slate-950 p-4 text-sm text-slate-300">
                  Built an AI-powered internal assistant using Gemini and ASP.NET Core.
                </div>
                <div className="rounded-2xl border border-slate-900 bg-slate-950 p-4 text-sm text-slate-300">
                  Contributed to Busmate LK, a microservices transportation platform with React Native and Spring Boot.
                </div>
                <div className="rounded-2xl border border-slate-900 bg-slate-950 p-4 text-sm text-slate-300">
                  Open to full-time Full-Stack Software Engineering roles.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
