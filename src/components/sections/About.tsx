import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { Quote, Cpu, Palette, Film, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeader title="Profile" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="cyber-card relative bg-white/70 dark:bg-[#111926]/60 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gray-200/50 dark:border-gray-800/50 hover:shadow-xl dark:hover:shadow-[#496a6a]/5 transition-all duration-300 group overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent pointer-events-none rounded-tr-3xl" />
        
        <Quote className="absolute top-6 left-6 w-12 h-12 text-sidebar/10 dark:text-accent/10 rotate-180 pointer-events-none transition-transform group-hover:scale-105 duration-300" />
        
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light relative z-10 pl-4 md:pl-8 font-sans">
          An engineering student passionate about technology, innovation, video editing, VFX, graphics designing, and software development. I enjoy building creative and impactful digital solutions while continuously learning new technologies.
        </p>

        {/* Dynamic focus domains layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100 dark:border-gray-800/80">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/50 dark:bg-gray-950/20 border border-gray-100 dark:border-gray-900">
            <div className="p-2.5 rounded-xl bg-sidebar/10 dark:bg-sidebar/20 text-sidebar dark:text-accent">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-mono">01 // VISUALS</p>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Video & VFX</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/50 dark:bg-gray-950/20 border border-gray-100 dark:border-gray-900">
            <div className="p-2.5 rounded-xl bg-accent/10 dark:bg-accent/20 text-accent">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-mono">02 // DESIGN</p>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Graphic Style</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/50 dark:bg-gray-950/20 border border-gray-100 dark:border-gray-900">
            <div className="p-2.5 rounded-xl bg-sidebar/10 dark:bg-accent/10 text-sidebar dark:text-accent">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-mono">03 // DEVELOP</p>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Core Software</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
