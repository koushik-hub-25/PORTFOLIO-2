import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

export function Publications() {
  return (
    <section id="publications" className="scroll-mt-24">
      <SectionHeader title="Publications" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative p-6 md:p-10 bg-accent/10 dark:bg-accent/5 rounded-3xl border border-accent/20 dark:border-accent/10 hover:shadow-md transition-shadow"
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-14 h-14 shrink-0 rounded-full bg-accent/20 flex items-center justify-center mt-1">
            <BookOpen className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-charcoal dark:text-white mb-3">
              IoT-Driven AI Model for Fertilizer Recommendations and Smart Agriculture
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-6">
              A comprehensive study proposing an integrated approach using Internet of Things (IoT) sensors and Artificial Intelligence to optimize agricultural practices, specifically focusing on precise fertilizer recommendations to maximize yield and minimize environmental impact.
            </p>
            <span className="inline-block px-4 py-1.5 bg-accent text-white text-xs font-semibold rounded-full uppercase tracking-wider">
              Featured Publication
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
