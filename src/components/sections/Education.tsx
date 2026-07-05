import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Star } from 'lucide-react';

const educationData = [
  {
    institution: "SNS College of Engineering",
    degree: "Bachelor of Engineering",
    period: "2024 \u2013 2028",
    description: "Actively pursuing B.E. with a primary focus on deep tech, intelligent systems, digital design workflows, and modern software engineering.",
    score: "Active Node"
  },
  {
    institution: "Velammal Bodhi Campus",
    degree: "HSC",
    period: "Completed",
    description: "Higher Secondary Course completion with a focus on science, mathematics, and programming fundamentals.",
    score: "Percentage: 74.2%"
  },
  {
    institution: "Amrita Vidyalayam",
    degree: "SSLC",
    period: "Completed",
    description: "Secondary School Leaving Certificate program with honors in technical subjects and graphic design appreciation.",
    score: "Percentage: 72.8%"
  }
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionHeader title="Education" />
      <div className="relative border-l-2 border-sidebar/20 dark:border-accent/20 ml-6 md:ml-8 space-y-12 pb-4">
        {educationData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Pulsing Glowing Circuit Node */}
            <div className="absolute -left-[21px] md:-left-[23px] top-1 z-10">
              <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
              <div className="relative bg-sidebar dark:bg-[#111926] border-2 border-accent w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
            </div>
            
            <div className="cyber-card bg-white/70 dark:bg-[#111926]/50 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-gray-200/50 dark:border-gray-800/40 hover:shadow-xl dark:hover:shadow-accent/5 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-charcoal dark:text-white font-serif tracking-tight">{item.institution}</h3>
                <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-sidebar/5 dark:bg-accent/10 border border-sidebar/10 dark:border-accent/20 text-sidebar dark:text-accent font-mono text-xs">
                  <Star className="w-3.5 h-3.5" />
                  {item.score}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-gray-500 dark:text-gray-300 font-medium text-sm mb-4">
                <span className="text-sidebar dark:text-accent font-semibold">{item.degree}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-400">
                  <Calendar className="w-3.5 h-3.5" /> 
                  {item.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed font-sans">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
