import React from 'react';
import { motion } from 'motion/react';
import { Video, Code, Image, Cpu, Layers, Disc, Command, Gamepad2 } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function Skills() {
  const techSkills = [
    { 
      name: "Unreal Engine 5", 
      level: "Intermediate", 
      percentage: 70, 
      icon: Gamepad2, 
      desc: "Creating cinematic real-time 3D environments, custom landscape worldbuilding, floating structures, dynamic lighting via Lumen & Nanite, and sequence renders.",
      color: "bg-accent",
      glow: "shadow-[0_0_15px_rgba(212,255,63,0.3)]"
    },
    { 
      name: "Web Development", 
      level: "Advanced", 
      percentage: 85, 
      icon: Code, 
      desc: "Full-stack client architecture, interactive state management, custom database schemas, API connectors, and modern CSS/Tailwind layouts.",
      color: "bg-zylo-blue",
      glow: "shadow-[0_0_15px_rgba(0,240,255,0.3)]"
    },
    { 
      name: "Video Editing", 
      level: "Beginner-Intermediate", 
      percentage: 65, 
      icon: Video, 
      desc: "Timeline pacing, multi-track assembly, custom keyframe pacing, sound mixing, and exports in Premiere Pro and DaVinci Resolve.",
      color: "bg-zylo-purple",
      glow: "shadow-[0_0_15px_rgba(194,20,255,0.3)]"
    },
    { 
      name: "Photo Editing", 
      level: "Beginner-Intermediate", 
      percentage: 60, 
      icon: Image, 
      desc: "Lighting/color adjustments, visual assets cleanup, composition touchups, and graphic layouts in Photoshop and Lightroom.",
      color: "bg-white/40",
      glow: "shadow-[0_0_15px_rgba(255,255,255,0.2)]"
    },
  ];

  const progSkills = [
    { name: "C", category: "SYSTEM", desc: "Hardware register mapping" },
    { name: "C++", category: "CORE", desc: "Object-oriented structures" },
    { name: "Python", category: "AI & ML", desc: "Predictive soil models" },
    { name: "Java", category: "ENTERPRISE", desc: "Back-end logic controllers" },
    { name: "HTML", category: "MARKUP", desc: "Semantic page framing" },
    { name: "CSS", category: "STYLING", desc: "Futuristic layout designs" },
    { name: "JavaScript", category: "LOGIC", desc: "Dynamic script threads" },
    { name: "FlutterFlow", category: "VISUAL", desc: "Autonomous vehicle HUDs" }
  ];

  return (
    <section id="skills" className="scroll-mt-28 py-10">
      <SectionHeader title="Technical Core" />
      
      {/* 2x2 grid representing tech fields */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        
        {/* Left Bento: Field Specializations (lg:span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {techSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel border border-white/5 rounded-3xl p-6 hover:border-white/10 hover:bg-black/60 transition-all duration-300 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center relative overflow-hidden group"
              >
                {/* Background light gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-2xl pointer-events-none" />

                <div className="flex gap-4 items-start sm:items-center flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300 shrink-0">
                    <Icon className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-white tracking-wide">{skill.name}</h4>
                      <span className="text-[9px] font-mono text-gray-500">// {skill.level.toUpperCase()}</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1 max-w-sm leading-relaxed">{skill.desc}</p>
                  </div>
                </div>

                {/* Progress parameters */}
                <div className="w-full sm:w-44 space-y-1.5 shrink-0">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-gray-500">OPERATING VECTOR</span>
                    <span className="text-white font-bold">{skill.percentage}%</span>
                  </div>
                  
                  {/* Segmented bar */}
                  <div className="h-2 w-full bg-white/5 rounded-full relative overflow-hidden flex">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      className={`h-full rounded-full ${skill.color} ${skill.glow}`}
                    />
                    {/* Visual Segment lines to look highly futuristic */}
                    <div className="absolute inset-0 flex justify-between pointer-events-none opacity-25">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="w-[1px] h-full bg-black" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Bento: Programming Microchips Grid (lg:span-5) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 glass-panel border border-white/5 rounded-[32px] p-8 hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" /> CODE COMPONENT MATRIX
              </h4>
              <span className="text-[8px] font-mono text-gray-500 uppercase">CORE_DEV // PASSIVE</span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {progSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="group relative p-3 bg-black/40 border border-white/5 rounded-2xl hover:border-accent/40 hover:bg-black/80 transition-all duration-300 flex flex-col justify-between h-20 overflow-hidden cursor-pointer"
                >
                  {/* Light accent lines for microprocessor appearance */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-accent/5 to-transparent rounded-tr-2xl group-hover:from-accent/20 transition-all" />
                  
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-extrabold text-white group-hover:text-accent transition-colors">{skill.name}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent group-hover:animate-ping" />
                  </div>
                  
                  <div>
                    <span className="text-[8px] font-mono text-gray-500 block uppercase tracking-wider">{skill.category}</span>
                    <span className="text-[7.5px] font-mono text-gray-600 group-hover:text-gray-400 block truncate transition-colors uppercase">{skill.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
            <span className="flex items-center gap-1">
              <Disc className="w-3 h-3 text-accent animate-spin" /> RUNTIME STATUS: STABLE
            </span>
            <span>SYSTEM MATRIX OK</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
