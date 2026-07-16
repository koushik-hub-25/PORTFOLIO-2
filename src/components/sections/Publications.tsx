import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ExternalLink, Cpu, FileText, Globe, Copy, Check, Info } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function Publications() {
  const [copied, setCopied] = useState(false);

  const ieeeCitation = `K. N. S. Narayanasamy, "IoT-Driven AI Model for Fertilizer Recommendations and Smart Agriculture," IEEE Transactions on Sustainable Computing & Agri-IoT Core, vol. 11, no. 4, pp. 102-114, 2026.`;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(ieeeCitation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="publications" className="scroll-mt-28 py-10">
      <SectionHeader title="Research Publications" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel border border-white/5 rounded-[32px] p-6 sm:p-10 hover:border-accent/20 transition-all duration-300 relative overflow-hidden group"
      >
        {/* Subtle grid background light */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-between">
          
          {/* Left Block: Description */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-accent/10 border border-accent/20 text-accent text-[9px] font-mono font-bold rounded-full uppercase tracking-widest">
                Featured IEEE Publication
              </span>
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">NODE // SMART_AGRI_AI</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-3xl font-serif font-black text-white leading-tight">
                IoT-Driven AI Model for Fertilizer Recommendations and Smart Agriculture
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed font-sans">
                A comprehensive study proposing an integrated approach using custom Internet of Things (IoT) sensors and Artificial Intelligence to optimize agricultural practices, specifically focusing on precise N-P-K mineral fertilizer recommendations to maximize yield and minimize chemical environmental impact.
              </p>
            </div>

            {/* Academic Tags */}
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-gray-500">
              <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-accent" /> IEEE format paper</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-accent" /> IoT & AI domain</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span className="flex items-center gap-1.5"><Info className="w-3.5 h-3.5 text-accent" /> Active dataset</span>
            </div>
          </div>

          {/* Right Block: Citation copying and links */}
          <div className="w-full lg:w-[320px] flex flex-col justify-between p-6 bg-black/40 border border-white/5 rounded-2xl shrink-0 space-y-6">
            
            {/* Live Copy Panel */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[9px] font-mono text-gray-500">
                <span>IEEE CITATION PARSER</span>
                <span>g++ compile ok</span>
              </div>
              
              <div className="p-3 bg-black border border-white/5 rounded-xl font-code text-[9px] leading-relaxed text-gray-400 select-text break-words relative group/citation">
                {ieeeCitation}
              </div>

              <button
                onClick={handleCopyCitation}
                className="w-full py-2.5 bg-accent/10 hover:bg-accent/20 border border-accent/25 text-accent font-mono text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    CITATION COPIED!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                    COPY IEEE CITATION
                  </>
                )}
              </button>
            </div>

            {/* External Redirects */}
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => window.open('https://single-rose-27r6w3d3.edgeone.app/IMG_20260612_190205.png', '_blank')}
                className="py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-white font-mono text-[9px] font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" /> View Paper
              </button>
              <button 
                onClick={() => console.log("Loading agricultural Soil-AI parameters dataset...")}
                className="py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-white font-mono text-[9px] font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5 text-accent" /> ML Dataset
              </button>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
