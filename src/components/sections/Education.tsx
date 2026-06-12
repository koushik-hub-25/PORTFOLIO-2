import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    institution: "SNS College of Engineering",
    degree: "Bachelor of Engineering",
    period: "2024 \u2013 2028",
    description: "Pursuing bachelor's degree with a focus on comprehensive software engineering and fundamental computer science principles."
  },
  {
    institution: "Velammal Bodhi Campus",
    degree: "HSC",
    period: "Completed",
    description: "Percentage: 74.2%"
  },
  {
    institution: "Amrita Vidyalayam",
    degree: "SSLC",
    period: "Completed",
    description: "Percentage: 72.8%"
  }
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionHeader title="Education" />
      <div className="relative border-l-2 border-accent/30 dark:border-gray-700 ml-4 md:ml-6 space-y-12 pb-4">
        {educationData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-10"
          >
            <div className="absolute -left-[21px] md:-left-[23px] top-1 bg-softgray dark:bg-gray-900 border-4 border-sidebar dark:border-accent w-10 h-10 rounded-full flex items-center justify-center shadow-md">
              <GraduationCap className="w-4 h-4 text-sidebar dark:text-accent" />
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-charcoal dark:text-white font-serif">{item.institution}</h3>
              <div className="flex items-center gap-2 text-sidebar dark:text-accent font-medium mt-1 mb-3 text-sm">
                <span>{item.degree}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-light">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
