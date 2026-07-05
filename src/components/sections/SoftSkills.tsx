import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { Ear, RefreshCcw, Clock, MessagesSquare, Puzzle, Users } from 'lucide-react';

const softSkills = [
  { name: "Active Listening", icon: Ear, desc: "Amniotic absorption of core requirements." },
  { name: "Flexibility", icon: RefreshCcw, desc: "Rapid adaptivity to agile frameworks." },
  { name: "Time Management", icon: Clock, desc: "Microsecond task scheduling execution." },
  { name: "Communication", icon: MessagesSquare, desc: "Pristine logical information transfer." },
  { name: "Problem Solving", icon: Puzzle, desc: "Heuristic sorting of complex blocks." },
  { name: "Team Collaboration", icon: Users, desc: "Symphonic group synchronization." },
];

export function SoftSkills() {
  return (
    <section id="soft-skills" className="scroll-mt-24">
      <SectionHeader title="Soft Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {softSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="cyber-card group flex flex-col p-5 bg-white/70 dark:bg-[#111926]/40 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-900 shadow-sm hover:shadow-xl hover:border-sidebar/30 dark:hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-sidebar/5 dark:bg-accent/10 flex items-center justify-center group-hover:bg-sidebar group-hover:text-white dark:group-hover:bg-accent transition-colors duration-300">
                  <Icon className="w-5 h-5 text-sidebar dark:text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm md:text-base tracking-tight font-sans">{skill.name}</h4>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed font-sans">{skill.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
