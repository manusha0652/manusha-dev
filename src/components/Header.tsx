import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Github, Linkedin,Download } from "lucide-react";
import cvFile from "../../assets/cv.pdf";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=kawshanmanusha7@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/85 backdrop-blur-md border-b border-slate-900 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center font-display font-black text-lg text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-all">
            M
          </div>
          <div>
            <span className="font-display font-bold text-sm tracking-tight text-white block group-hover:text-blue-400 transition-colors">
              Manusha Ranaweera
            </span>
            <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block -mt-0.5">
              Software Engineer | Full-Stack
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono">
          <Link to="/#projects" className="text-slate-400 hover:text-white transition-colors">
            WORK
          </Link>
          <Link to="/#skills" className="text-slate-400 hover:text-white transition-colors">
            SKILLS
          </Link>
          <Link to="/#learning" className="text-slate-400 hover:text-white transition-colors">
            LEARNING
          </Link>
          <Link to="/#experience" className="text-slate-400 hover:text-white transition-colors">
            EXPERIENCE
          </Link>
          <Link to="/#about" className="text-slate-400 hover:text-white transition-colors">
            ABOUT
          </Link>
         <a
  href={cvFile}
  download="Manusha_Ranaweera_CV.pdf"
  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
>
  RESUME
  <Download className="h-4 w-4" />
  <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/manusha0652"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-white transition-all"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/manusha-ranaweera-200b06254"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-white transition-all"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs tracking-tight transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-18 bg-brand-bg/95 backdrop-blur-lg border-b border-slate-900 p-6 space-y-6 z-30 font-mono text-sm">
          <div className="flex flex-col gap-4">
            <Link
              to="/#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white py-2 border-b border-slate-900/40"
            >
              WORK (Case Studies)
            </Link>
            <Link
              to="/#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white py-2 border-b border-slate-900/40"
            >
              SKILLS
            </Link>
            <Link
              to="/#learning"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white py-2 border-b border-slate-900/40"
            >
              LEARNING
            </Link>
            <Link
              to="/#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white py-2 border-b border-slate-900/40"
            >
              EXPERIENCE
            </Link>
            <Link
              to="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-white py-2 border-b border-slate-900/40"
            >
              ABOUT
            </Link>
              <a
  href={cvFile}
  download="Manusha_Ranaweera_CV.pdf"
  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
>
  RESUME
  <Download className="h-4 w-4" />
  <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
</a>
          </div>

          <div className="flex gap-4 pt-4 border-t border-slate-900">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noreferrer"
              className="grow text-center px-4 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold"
            >
              Email Direct
            </a>
            <a
              href="https://www.linkedin.com/in/manusha-ranaweera-200b06254"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-900 text-slate-300 text-xs text-center font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
