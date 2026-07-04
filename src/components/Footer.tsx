import { Github, Linkedin, Mail, Phone, Download, MapPin } from "lucide-react";

export default function Footer() {
  const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=kawshanmanusha7@gmail.com";

  return (
    <footer className="bg-[#05060a] border-t border-slate-950 py-16 px-6 lg:px-16 text-slate-500 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-900 pb-12 mb-8">
        
        {/* Left col: Identity */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center font-display font-black text-md text-blue-400">
              M
            </div>
            <span className="font-display font-bold text-white text-md">
              Manusha Ranaweera
            </span>
          </div>
          <p className="text-xs sm:text-sm font-light text-slate-400 max-w-sm leading-relaxed">
            Full-Stack Software Engineer focused on production systems, enterprise integration, and clean delivery across frontend and backend workflows.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <MapPin className="h-3.5 w-3.5 text-slate-600" />
            Colombo, Sri Lanka
          </div>
        </div>

        {/* Middle col: Channels */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">CHANNELS</h4>
          <div className="space-y-2.5 text-xs font-mono">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 text-slate-600" />
              kawshanmanusha7@gmail.com
            </a>
            <a
              href="tel:+94775730063"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4 text-slate-600" />
              +94-77-573-0063
            </a>
            <a
              href="https://www.linkedin.com/in/manusha-ranaweera-200b06254"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4 text-slate-600" />
              linkedin.com/manusha-ranaweera
            </a>
            <a
              href="https://github.com/manusha0652"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github className="h-4 w-4 text-slate-600" />
              github.com/manusha0652
            </a>
          </div>
        </div>

        {/* Right col: Assets */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">ARTIFACTS</h4>
          <p className="text-xs font-light text-slate-500 leading-relaxed">
            Need a printer-friendly version? Request the resume or download the PDF if you already have a copy from LinkedIn.
          </p>
          
          <a
            href="/cv/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-white font-mono transition-all"
          >
            <Download className="h-3.5 w-3.5" /> Download CV
          </a>
        </div>

      </div>

      {/* Grid Coordinates & Credit line */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-600 gap-4">
        <div>
          © {new Date().getFullYear()} Manusha Ranaweera. All rights reserved.
        </div>
        <div className="flex gap-4">
          <span>Lat: 6.9271° N, Lon: 79.8612° E</span>
          <span>•</span>
          <span>UCSC CS Standard</span>
        </div>
      </div>
    </footer>
  );
}
