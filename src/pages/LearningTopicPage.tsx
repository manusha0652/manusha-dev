import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, BrainCircuit, Boxes, Cloud, Code2, Server, Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";
import { getLearningTopic } from "../content/learning";
import PageShell from "../components/PageShell";

const iconMap = {
  "ai-ml": BrainCircuit,
  kubernetes: Boxes,
  "cloud-devops": Cloud,
  "aws-cloud": Server,
  "system-thinking": Code2,
} as const;

export default function LearningTopicPage() {
  const { slug } = useParams();
  if (!slug) return <Navigate to="/" replace />;

  const topic = getLearningTopic(slug);
  if (!topic) return <Navigate to="/" replace />;

  const Icon = iconMap[topic.slug as keyof typeof iconMap];

  return (
    <PageShell>
      <section className="px-6 lg:px-16 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)]" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-300">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-2">LEARNING TRACK</span>
                <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  {topic.title}
                </h1>
              </div>
            </div>

            <p className="text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
              {topic.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="lg:col-span-7 rounded-[2rem] border border-slate-900 bg-slate-950/80 p-6 sm:p-8"
            >
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-5">
                What I’m doing in this area
              </h2>
              <div className="space-y-4">
                {topic.whatImDoing.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-900 bg-slate-950 p-4 text-sm text-slate-300 leading-relaxed">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="lg:col-span-5 rounded-[2rem] border border-slate-900 bg-slate-950/80 p-6 sm:p-8"
            >
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-5">
                Current focus
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {topic.currentFocus.map((item) => (
                  <span key={item} className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1.5 text-[11px] text-slate-200">
                    {item}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
                <div className="flex items-center gap-2 text-blue-300 mb-3">
                  <Sparkles className="h-4 w-4" />
                  <h3 className="text-xs uppercase tracking-widest font-mono">Next steps</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {topic.nextSteps.map((step) => (
                    <li key={step} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {topic.achievements && topic.achievements.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mt-6 lg:mt-8 rounded-[2rem] border border-slate-900 bg-slate-950/80 p-6 sm:p-8"
            >
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-5">
                Completed labs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {topic.achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="rounded-2xl border border-slate-900 bg-slate-950 overflow-hidden flex flex-col"
                  >
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full aspect-video object-cover object-top border-b border-slate-900"
                      loading="lazy"
                    />
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <h3 className="text-sm font-semibold text-white">{achievement.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed flex-1">{achievement.description}</p>
                      {achievement.certificateLink && (
                        <a
                          href={achievement.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-blue-300 hover:text-blue-200 transition-colors"
                        >
                          <Award className="h-3.5 w-3.5" />
                          View certificate
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </PageShell>
  );
}