import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeader title="Profile" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
      >
        <Quote className="absolute top-6 left-6 w-12 h-12 text-sidebar/10 dark:text-gray-600 rotate-180 pointer-events-none" />
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light relative z-10 pl-4 md:pl-8">
          An engineering student passionate about technology, innovation, video editing, VFX, graphics designing, and software development. I enjoy building creative and impactful digital solutions while continuously learning new technologies.
        </p>
      </motion.div>
    </section>
  );
}
