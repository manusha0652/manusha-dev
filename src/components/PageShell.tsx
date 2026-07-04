import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 flex flex-col relative selection:bg-blue-600 selection:text-white">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}