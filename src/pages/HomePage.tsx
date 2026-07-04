import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import LearningCards from "../components/LearningCards";
import About from "../components/About";
import AIChat from "../components/AIChat";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    const timer = window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <LearningCards />
      <About />
      <AIChat />
    </>
  );
}