import React from 'react';
import { motion } from 'motion/react';
import { Ear, RefreshCcw, Clock, MessagesSquare, Puzzle, Users, Zap } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

const softSkills = [
  { name: "Active Listening", icon: Ear, desc: "Amniotic absorption of core project specifications and deep user requests.", num: "01" },
  { name: "Agile Flexibility", icon: RefreshCcw, desc: "Rapid adaptivity to feedback and visual pipelines with zero lag.", num: "02" },
  { name: "Task Management", icon: Clock, desc: "Microsecond scheduling and delivery of high-efficiency visual prototypes.", num: "03" },
  { name: "Communication", icon: MessagesSquare, desc: "Pristine logical information transfer with team modules and stakeholders.", num: "04" },
  { name: "Problem Solving", icon: Puzzle, desc: "Heuristic sorting of complex blocks to find fast, optimized outcomes.", num: "05" },
  { name: "Collaboration", icon: Users, desc: "Symphonic group synchronization across design and back-end divisions.", num: "06" },
];

export function SoftSkills() {
  return (
    <section id="soft-skills" className="scroll-mt-28 py-10">
      <SectionHeader title="Operational Methods" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {softSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel group relative flex flex-col justify-between p-6 rounded-3xl border border-white/5 hover:border-accent/30 hover:bg-black/60 transition-all duration-300 h-44 overflow-hidden"
            >
              {/* Dynamic hover glows */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/5 rounded-full blur-xl pointer-events-none group-hover:bg-accent/15 transition-all" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[9px] text-gray-500 font-bold group-hover:text-accent transition-colors">SYS_METHOD // {skill.num}</span>
                </div>
                
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-sm sm:text-base tracking-wide uppercase">{skill.name}</h4>
                  <p className="text-gray-400 text-xs font-light leading-relaxed truncate group-hover:text-gray-300 transition-colors">{skill.desc}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-[8px] font-mono text-gray-600 border-t border-white/5 pt-2 mt-2">
                <span className="flex items-center gap-1">
                  <Zap className="w-2.5 h-2.5 text-accent" /> OPERATIONAL STATUS
                </span>
                <span className="text-accent">OPTIMIZED</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
