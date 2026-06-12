import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';

const techSkills = [
  { name: "Video Editing", level: "Advanced", percentage: 90 },
  { name: "Graphics Designing", level: "Advanced", percentage: 85 },
  { name: "Photo Editing", level: "Beginner", percentage: 40 },
];

const progSkills = [
  "C", "C++", "Python", "Java", "HTML", "CSS", "JavaScript", "FlutterFlow"
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeader title="Technical Skills" />
      
      <div className="mb-10">
        <div className="space-y-6">
          {techSkills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">{skill.level}</span>
              </div>
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 * index }}
                  className="h-full bg-sidebar dark:bg-accent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-serif font-bold text-charcoal dark:text-white mb-6">Programming</h3>
        <div className="flex flex-wrap gap-2">
          {progSkills.map((skill, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:border-sidebar dark:hover:border-accent hover:text-sidebar dark:hover:text-accent transition-colors shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
