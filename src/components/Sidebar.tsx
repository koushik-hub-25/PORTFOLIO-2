import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Code, Github } from 'lucide-react';
import { motion } from 'motion/react';

export function Sidebar() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-auto w-full md:w-80 lg:w-96 shrink-0 bg-sidebar/95 dark:bg-[#0c121e]/90 text-white p-8 md:p-10 flex flex-col justify-between shadow-2xl z-20 border-r border-white/5 transition-all duration-500"
    >
      <div className="flex flex-col items-center md:items-start space-y-6">
        {/* Futuristic Scanning Profile Circle */}
        <div className="relative self-center md:self-start my-4">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-8px] rounded-full border border-dashed border-accent/60 dark:border-accent/80"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-14px] rounded-full border border-dotted border-white/30"
          />
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-accent shadow-lg shadow-accent/20">
            {!imgError ? (
              <img 
                src="https://single-rose-27r6w3d3.edgeone.app/IMG_20260612_190205.png" 
                alt="Koushik N" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-sidebar to-[#111926] flex items-center justify-center text-accent text-3xl font-bold font-serif">
                KN
              </div>
            )}
            <div className="absolute inset-0 bg-sidebar/15 mix-blend-overlay pointer-events-none"></div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
            KOUSHIK N
          </h1>
          <p className="text-accent font-mono tracking-widest uppercase text-xs mt-2 flex items-center justify-center md:justify-start gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Innovative Engineer
          </p>
        </div>

        <div className="w-full h-px bg-white/10 my-2" />

        <div className="space-y-4 w-full">
          <ContactItem icon={Phone} text="9360575932" href="tel:9360575932" />
          <ContactItem icon={Mail} text="Rns.koushik@gmail.com" href="mailto:Rns.koushik@gmail.com" />
          <ContactItem icon={Linkedin} text="koushik--n" href="https://linkedin.com/in/koushik--n" />
          <ContactItem icon={Code} text="_koushik_25" href="https://leetcode.com/u/_koushik_25/" />
          <ContactItem icon={Github} text="koushik-hub-25" href="https://github.com/koushik-hub-25" />
          <ContactItem icon={MapPin} text="India" />
        </div>

        <div className="w-full h-px bg-white/10 my-2" />
        
        <div className="w-full">
            <h3 className="text-sm font-mono font-bold tracking-wider uppercase mb-4 text-accent">Languages</h3>
            <div className="space-y-4 text-sm">
                <LanguageItem name="English" level="Fluent" percentage={95} />
                <LanguageItem name="Tamil" level="Fluent" percentage={95} />
                <LanguageItem name="Telugu" level="Fluent" percentage={85} />
                <LanguageItem name="Hindi" level="Intermediate" percentage={60} />
            </div>
        </div>
      </div>

      <div className="hidden md:block pt-6">
        <p className="text-[10px] font-mono text-gray-400 tracking-wider">
          © {new Date().getFullYear()} KOUSHIK N. ALL RIGHTS RESERVED.
        </p>
      </div>
    </motion.aside>
  );
}

function ContactItem({ icon: Icon, text, href }: { icon: any, text: string, href?: string }) {
  const content = (
    <>
      <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
      <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{text}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group w-max">
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center space-x-3 group w-max">
      {content}
    </div>
  );
}

function LanguageItem({ name, level, percentage }: { name: string, level: string, percentage: number }) {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-gray-200">{name}</span>
                <span className="text-gray-400 text-xs">{level}</span>
            </div>
            <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-accent"
                />
            </div>
        </div>
    )
}
