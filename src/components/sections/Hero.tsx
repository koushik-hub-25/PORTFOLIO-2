import { motion } from 'motion/react';
import { Download, Mail, ArrowRight, Video, Sparkles, CodeXml } from 'lucide-react';
import { useState, useEffect } from 'react';

const ROLES = ["Innovative Engineer", "Video Editor & VFX", "Web Developer", "Full Stack Developer"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-[75vh] flex flex-col justify-center pt-16 md:pt-0 relative">
      {/* Absolute floating technical visual assets */}
      <div className="absolute right-0 top-1/4 opacity-10 pointer-events-none hidden lg:block">
        <pre className="text-[11px] font-mono text-sidebar dark:text-accent select-none">
{`const engineer = {
  name: "Koushik N",
  status: "BUILDING_THE_FUTURE",
  skills: [
    "VFX", "Graphics", "Dev"
  ],
  interests: {
    smartAgri: true,
    selfDriving: true
  }
};`}
        </pre>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="max-w-2xl relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sidebar/10 dark:bg-accent/15 border border-sidebar/20 dark:border-accent/30 text-sidebar dark:text-accent font-mono text-xs uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
          SYSTEM_ONLINE // CORE_ACTIVE
        </div>

        <h1 className="text-5xl md:text-8xl font-serif font-black text-charcoal dark:text-white leading-[1.05] tracking-tight mb-4">
          KOUSHIK N
        </h1>

        {/* Dynamic Role Rotator */}
        <div className="h-10 md:h-12 overflow-hidden mb-6 flex items-center">
          <span className="text-gray-500 dark:text-gray-400 font-mono text-lg md:text-xl mr-2.5">❯</span>
          <motion.div
            key={roleIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="text-xl md:text-3xl font-bold font-mono text-sidebar dark:text-accent tracking-wide"
          >
            {ROLES[roleIndex]}
          </motion.div>
        </div>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light mb-10 max-w-xl leading-relaxed">
          Crafting high-efficiency software solutions, advanced VFX assets, web application systems, and responsive user experiences.
        </p>
        
        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-sidebar hover:bg-sidebar/90 dark:bg-accent dark:hover:bg-accent/90 text-white dark:text-charcoal font-semibold rounded-2xl transition-all shadow-lg hover:shadow-accent/20 hover:scale-[1.02] flex items-center gap-2.5 group"
          >
            <Mail className="w-5 h-5 group-hover:rotate-6 transition-transform" />
            Contact Me
            <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            className="px-8 py-4 bg-white dark:bg-gray-800/40 text-charcoal dark:text-white border border-gray-200 dark:border-gray-700 hover:border-sidebar dark:hover:border-accent rounded-2xl font-medium transition-all hover:scale-[1.02] flex items-center gap-2.5 group backdrop-blur-sm shadow-sm"
          >
            <Download className="w-5 h-5 text-gray-400 group-hover:text-sidebar dark:group-hover:text-accent transition-colors" />
            Download Resume
          </button>
        </div>
      </motion.div>

      {/* Decorative cyber line bar */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center text-[10px] font-mono text-gray-400/60 dark:text-gray-500/50">
        <div className="flex items-center gap-2">
          <CodeXml className="w-3.5 h-3.5" />
          <span>REACT_APP.TSX</span>
        </div>
        <div className="flex items-center gap-2">
          <Video className="w-3.5 h-3.5" />
          <span>AE_COMPOSITION_VFX</span>
        </div>
      </div>
    </section>
  );
}
