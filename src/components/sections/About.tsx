import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, MapPin, Code, Star, GraduationCap, Globe, Shield, Calendar } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function About() {
  const [imgError, setImgError] = useState(false);

  const contactItems = [
    { icon: Phone, label: "COMMUNICATION", value: "9360575932", href: "tel:9360575932", color: "text-accent" },
    { icon: Mail, label: "EMAIL GATEWAY", value: "Rns.koushik@gmail.com", href: "mailto:Rns.koushik@gmail.com", color: "text-accent" },
    { icon: Linkedin, label: "LINKEDIN PORTAL", value: "koushik--n", href: "https://linkedin.com/in/koushik--n", color: "text-accent" },
    { icon: Code, label: "LEETCODE PROTOCOL", value: "_koushik_25", href: "https://leetcode.com/u/_koushik_25/", color: "text-accent" },
  ];

  const languages = [
    { name: "English", level: "Fluent", percentage: 95, color: "bg-accent" },
    { name: "Tamil", level: "Fluent", percentage: 95, color: "bg-accent" },
    { name: "Telugu", level: "Fluent", percentage: 85, color: "bg-accent" },
    { name: "Hindi", level: "Intermediate", percentage: 60, color: "bg-zylo-purple" },
  ];

  return (
    <section id="about" className="scroll-mt-28 py-10">
      <SectionHeader title="System Profile" />
      
      {/* 2x2 Bento Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
        
        {/* Cell 1: Master Profile Avatar & Slogan Card (md:span-5) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 glass-panel border border-white/5 rounded-[32px] p-8 flex flex-col justify-between hover:border-accent/30 transition-all duration-300 relative overflow-hidden group min-h-[400px]"
        >
          {/* Subtle grid light behind avatar */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Holographic Avatar Border with Fail-safe Check */}
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-12px] rounded-full border border-dotted border-accent/40"
              />
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-accent shadow-lg shadow-accent/20">
                {!imgError ? (
                  <img 
                    src="https://single-rose-27r6w3d3.edgeone.app/IMG_20260612_190205.png" 
                    alt="Koushik N" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    onError={() => {
                      console.log("Edgeone avatar failed to load. Displaying high-tech vector fallback.");
                      setImgError(true);
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-black via-zylo-card to-[#161625] flex flex-col items-center justify-center text-accent">
                    <span className="text-4xl font-serif font-black tracking-widest">KN</span>
                    <span className="text-[8px] font-mono tracking-widest text-gray-500 mt-1 uppercase">HOLO_AVATAR</span>
                  </div>
                )}
                {/* Visual glass sheen */}
                <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-serif font-extrabold text-white tracking-wide">KOUSHIK N</h3>
              <p className="text-xs font-mono text-accent uppercase tracking-widest">Coimbatore, India</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm font-light leading-relaxed text-center mt-6">
            "An engineering pioneer passionate about merging high-efficiency system architecture with advanced visual aesthetics. Adapting rapid heuristic strategies to bridge the physical and virtual digital spectrum."
          </p>
        </motion.div>

        {/* Cell 2: Contact Nodes Directory (md:span-7) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 flex flex-col gap-6"
        >
          {/* Sub-Card: Profile Description Core */}
          <div className="glass-panel border border-white/5 rounded-[32px] p-6 sm:p-8 flex-1 flex flex-col justify-between hover:border-accent/20 transition-all duration-300">
            <div>
              <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" /> CORE OBJECTIVE
              </h4>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                An engineering scholar actively building robust software products and interactive VFX layouts. I specialize in developing custom responsive applications using React/TS & FlutterFlow, and conducting research on internet of things (IoT) networks in smart ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/5">
              <div className="space-y-1">
                <p className="text-[9px] font-mono text-gray-500 uppercase">ACADEMIC LOCATION</p>
                <p className="text-xs font-bold text-white uppercase">SNS College of Eng.</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-mono text-gray-500 uppercase">DEGREE NODE</p>
                <p className="text-xs font-bold text-white uppercase">B.E. Student (2024-2028)</p>
              </div>
            </div>
          </div>

          {/* Sub-Card: High-Tech Contact Channels Grid */}
          <div className="glass-panel border border-white/5 rounded-[32px] p-6 flex flex-col justify-between hover:border-accent/20 transition-all duration-300">
            <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-4">
              CHANNEL DIRECTORIES //
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 bg-black/40 border border-white/5 rounded-2xl hover:border-accent/30 hover:bg-black/60 transition-all duration-300 group/link"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover/link:bg-accent group-hover/link:text-black transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-xs font-bold text-white truncate">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Cell 3: Language Matrices Grid (md:span-7) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 glass-panel border border-white/5 rounded-[32px] p-8 hover:border-accent/20 transition-all duration-300"
        >
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-widest flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" /> LANGUAGE DECODING MATRICES
            </h4>
            <span className="text-[9px] font-mono text-gray-500 uppercase">SYS_LANG // ACTIVE</span>
          </div>

          <div className="space-y-5">
            {languages.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-semibold">
                  <span className="text-white uppercase tracking-wider">{lang.name}</span>
                  <span className="text-accent">{lang.level.toUpperCase()} // {lang.percentage}%</span>
                </div>
                
                {/* Modern segments bar */}
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1 * index }}
                    className={`h-full rounded-full ${lang.color}`}
                  />
                  {/* Grid visual lines */}
                  <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="w-[1px] h-full bg-black" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cell 4: Academic Progress Block (md:span-5) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-5 glass-panel border border-white/5 rounded-[32px] p-8 hover:border-accent/20 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-widest flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" /> CURRENT NODE EDUCATION
            </h4>
            
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-black text-white leading-tight">SNS COLLEGE OF ENGINEERING</h3>
              <p className="text-xs font-mono text-gray-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> B.E. IN PROGRESS (2024 - 2028)
              </p>
            </div>
            
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Consistently researching advanced algorithms, micro-controllers, system programming constructs (C/C++), and artificial intelligence recommendations.
            </p>
          </div>

          <div className="mt-6 p-4 bg-accent/5 border border-accent/15 rounded-2xl flex items-center justify-between">
            <span className="text-xs font-mono text-gray-400">CGPA STATUS</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-accent text-black text-[10px] font-mono font-bold rounded-full uppercase tracking-wider">
              ACTIVE NODE
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
