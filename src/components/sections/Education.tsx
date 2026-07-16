import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Star, Milestone, Award } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

const educationData = [
  {
    institution: "SNS College of Engineering",
    degree: "Bachelor of Engineering",
    period: "2024 \u2013 2028",
    description: "Actively pursuing B.E. with a primary focus on deep tech, intelligent systems, hardware telemetry circuits, digital design workflows, and modern full-stack web software engineering.",
    score: "Active Node // CGPA OK"
  },
  {
    institution: "Velammal Bodhi Campus",
    degree: "Higher Secondary Course (HSC)",
    period: "Completed",
    description: "Completion of secondary coursework with focused studies on physics, calculus, computer science fundamentals, and visual layouts.",
    score: "Percentage: 74.2%"
  },
  {
    institution: "Amrita Vidyalayam",
    degree: "Secondary School Leaving Certificate (SSLC)",
    period: "Completed",
    description: "Comprehensive secondary program focusing on honors mathematics, scientific inquiry, and computational graphics appreciation.",
    score: "Percentage: 72.8%"
  }
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-28 py-10">
      <SectionHeader title="Academic Nodes" />
      
      <div className="relative border-l border-white/10 ml-4 sm:ml-8 mt-12 space-y-12 pb-4">
        {educationData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-8 sm:pl-12"
          >
            {/* Holographic Glowing Timeline Node */}
            <div className="absolute -left-[17px] sm:-left-[19px] top-1 z-10">
              <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
              <div className="relative bg-black border border-accent/40 w-9 h-9 rounded-full flex items-center justify-center shadow-lg shadow-accent/5">
                <GraduationCap className="w-4 h-4 text-accent" />
              </div>
            </div>
            
            {/* Elegant glass container */}
            <div className="glass-panel border border-white/5 p-6 sm:p-8 rounded-[32px] hover:border-accent/20 transition-all duration-300 relative overflow-hidden group">
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-white tracking-wide">{item.institution}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-accent text-xs font-semibold">{item.degree}</span>
                  </div>
                </div>
                
                <span className="inline-flex self-start sm:self-center items-center gap-1.5 px-3 py-1 bg-accent/15 border border-accent/25 text-accent font-mono text-[9px] rounded-full uppercase tracking-wider font-extrabold">
                  <Star className="w-3 h-3" />
                  {item.score}
                </span>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">{item.description}</p>
              
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-gray-500 mt-4 border-t border-white/5 pt-3">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                <span>PERIOD NODE // {item.period.toUpperCase()}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
