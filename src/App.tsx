import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MarqueeTicker } from './components/MarqueeTicker';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Credentials } from './components/sections/Credentials';
import { SoftSkills } from './components/sections/SoftSkills';

import { Contact } from './components/sections/Contact';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { TechBackground } from './components/TechBackground';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sync classList for theme state (Zylo theme is optimised for dark aesthetics)
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen relative overflow-hidden select-none bg-zylo-bg text-white pb-12">
      <TechBackground />
      <ScrollProgress />
      
      {/* Floating glass header at top */}
      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      
      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-text space-y-24">
        {/* Hero Section */}
        <Hero />
        
        {/* Infinite scrolling keywords marquee ticker */}
        <MarqueeTicker />
        
        {/* About Bento Profile */}
        <About />
        
        {/* Interactive Shell Console */}
        <div className="space-y-4">
          <div className="flex items-center gap-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-accent animate-ping" />
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-accent font-extrabold">
              MATRIX SECURITY SHELL // ACTIVE
            </h3>
          </div>
          <InteractiveTerminal />
        </div>

        {/* Academic timeline */}
        <Education />

        {/* Tech Skills & Programming Matrix */}
        <Skills />

        {/* Soft Skills Methods */}
        <SoftSkills />

        {/* Interactive Projects Grid */}
        <Projects />

        {/* Verified Credentials Grid */}
        <Credentials />



        {/* Form contact */}
        <Contact />
      </main>
      
      <BackToTop />
    </div>
  );
}
