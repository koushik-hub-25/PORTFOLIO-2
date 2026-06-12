import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { Ear, RefreshCcw, Clock, MessagesSquare, Puzzle, Users } from 'lucide-react';

const softSkills = [
  { name: "Active Listening", icon: Ear },
  { name: "Flexibility", icon: RefreshCcw },
  { name: "Time Management", icon: Clock },
  { name: "Communication", icon: MessagesSquare },
  { name: "Problem Solving", icon: Puzzle },
  { name: "Team Collaboration", icon: Users },
];

export function SoftSkills() {
  return (
    <section id="soft-skills" className="scroll-mt-24">
      <SectionHeader title="Soft Skills" />
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        {softSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-sidebar/30 dark:hover:border-accent/30 transition-all text-center"
            >
              <div className="w-12 h-12 rounded-full bg-sidebar/5 dark:bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-sidebar group-hover:text-white dark:group-hover:bg-accent transition-colors">
                <Icon className="w-6 h-6 text-sidebar dark:text-accent group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm md:text-base">{skill.name}</h4>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
