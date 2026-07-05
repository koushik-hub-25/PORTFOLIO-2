import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { Video, Palette, Image, Code, Layers } from 'lucide-react';

const techSkills = [
  { name: "Video Editing", level: "Advanced", percentage: 90, icon: Video, color: "from-sidebar to-sidebar/75 dark:from-accent dark:to-accent/75" },
  { name: "Web Development", level: "Advanced", percentage: 85, icon: Code, color: "from-accent to-accent/70" },
  { name: "Photo Editing", level: "Beginner", percentage: 40, icon: Image, color: "from-sidebar/70 to-accent/50" },
];

const progSkills = [
  { name: "C", category: "System" },
  { name: "C++", category: "Core" },
  { name: "Python", category: "AI & Script" },
  { name: "Java", category: "OOP" },
  { name: "HTML", category: "Markup" },
  { name: "CSS", category: "Style" },
  { name: "JavaScript", category: "Logic" },
  { name: "FlutterFlow", category: "Visual Dev" }
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeader title="Technical Skills" />
      
      {/* Segmented Loading Meters */}
      <div className="space-y-6 mb-10">
        {techSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="p-4 bg-white/50 dark:bg-[#111926]/30 rounded-2xl border border-gray-100 dark:border-gray-900">
              <div className="flex justify-between items-center text-sm font-medium mb-3">
                <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                  <div className="p-1.5 rounded-lg bg-sidebar/10 dark:bg-accent/15 text-sidebar dark:text-accent">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{skill.name}</span>
                </div>
                <span className="text-gray-400 font-mono text-xs uppercase tracking-widest">{skill.level}</span>
              </div>
              
              {/* Segmented Sci-Fi Progress row */}
              <div className="relative">
                <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-800/80 rounded-full overflow-hidden flex">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1 * index }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                  />
                </div>
                {/* Visual grid lines over progress bar */}
                <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="w-[1px] h-full bg-gray-950 dark:bg-white" />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Programming Section with Modern Tech Chips */}
      <div className="mt-10">
        <h3 className="text-lg font-mono font-bold tracking-wider uppercase text-sidebar dark:text-accent mb-6 flex items-center gap-2">
          <Code className="w-4 h-4" /> Programming Matrix
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {progSkills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col justify-between p-3 bg-white/70 dark:bg-[#111926]/40 border border-gray-100 dark:border-gray-900 rounded-xl hover:border-sidebar/40 dark:hover:border-accent/40 hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle tech dot accent */}
              <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-sidebar/20 dark:bg-accent/40 group-hover:bg-accent group-hover:animate-ping transition-colors" />
              
              <span className="font-bold text-gray-800 dark:text-gray-100 text-sm">{skill.name}</span>
              <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-widest">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
