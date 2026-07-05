import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { SoftSkills } from './components/sections/SoftSkills';
import { Publications } from './components/sections/Publications';
import { Contact } from './components/sections/Contact';
import { ThemeToggle } from './components/ThemeToggle';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { TechBackground } from './components/TechBackground';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative z-10 select-none">
      <TechBackground />
      <ScrollProgress />
      <Sidebar />
      <main className="flex-1 md:ml-80 lg:ml-96 p-6 md:p-12 lg:p-24 overflow-x-hidden relative z-10 select-text">
        <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
        
        <div className="max-w-4xl mx-auto space-y-24">
          <Hero />
          
          {/* Futuristic Interactive Hub */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-sidebar dark:text-accent font-semibold">
                Interactive Security Shell // Direct Access
              </h3>
            </div>
            <InteractiveTerminal />
          </div>

          <About />
          <Education />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <Skills />
             <SoftSkills />
          </div>
          <Projects />
          <Publications />
          <Contact />
        </div>
      </main>
      <BackToTop />
    </div>
  );
}
