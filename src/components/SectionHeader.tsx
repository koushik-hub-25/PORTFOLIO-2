import { motion } from 'motion/react';

export function SectionHeader({ title }: { title: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal dark:text-gray-100 flex items-center">
        {title}
        <span className="ml-4 h-px flex-1 bg-gradient-to-r from-accent to-transparent"></span>
      </h2>
    </motion.div>
  );
}
