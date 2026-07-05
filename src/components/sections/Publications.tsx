import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { BookOpen, ExternalLink, Cpu, FileText, Globe } from 'lucide-react';

export function Publications() {
  return (
    <section id="publications" className="scroll-mt-24">
      <SectionHeader title="Publications" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="cyber-card relative p-8 md:p-10 bg-white/70 dark:bg-[#111926]/50 backdrop-blur-md rounded-3xl border border-gray-200/50 dark:border-gray-800/40 hover:shadow-2xl hover:shadow-[#496a6a]/5 dark:hover:shadow-[#496a6a]/5 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/15 to-transparent pointer-events-none rounded-tr-3xl" />

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center border border-accent/25">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-[10px] font-mono font-bold rounded-full border border-accent/25 uppercase tracking-wider">
                  Featured Publication
                </span>
                <span className="text-gray-400 dark:text-gray-500 font-mono text-[10px] uppercase">
                  NODE // SMART_AGRI
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif font-black text-charcoal dark:text-white leading-snug mb-4">
                IoT-Driven AI Model for Fertilizer Recommendations and Smart Agriculture
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base font-sans mb-6">
                A comprehensive study proposing an integrated approach using Internet of Things (IoT) sensors and Artificial Intelligence to optimize agricultural practices, specifically focusing on precise fertilizer recommendations to maximize yield and minimize environmental impact.
              </p>
              
              {/* Authors & citation line */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> IEEE format paper</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-800" />
                <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> IoT & AI domain</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-max flex flex-row lg:flex-col gap-3 shrink-0 self-stretch justify-end lg:justify-start">
            <button className="flex-1 lg:flex-initial flex items-center justify-center gap-2 px-5 py-3 bg-sidebar dark:bg-accent/10 text-white dark:text-accent dark:hover:bg-accent/20 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors border border-transparent dark:border-accent/20">
              <ExternalLink className="w-4 h-4" />
              Cite Paper
            </button>
            <button className="flex-1 lg:flex-initial flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white text-gray-800 dark:text-gray-200 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors">
              <Cpu className="w-4 h-4 text-accent" />
              Dataset
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
