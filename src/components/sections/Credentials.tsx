import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, FileCheck2, ShieldCheck, Briefcase, Calendar, 
  ArrowUpRight, Lock, Hourglass, GraduationCap, Sparkles, 
  X, Check, Building2, UserCheck, Stamp, ExternalLink,
  Printer, Download
} from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

interface Credential {
  id: string;
  title: string;
  issuer: string;
  type: 'internship' | 'lor' | 'certification' | 'upcoming';
  date: string;
  key: string;
  description: string;
  tasks: string[];
  signee: string;
  signeeTitle: string;
  hasGlow?: boolean;
  certificateUrl?: string;
  imageUrl?: string;
  imageUrls?: string[];
}

export function Credentials() {
  const [selectedCred, setSelectedCred] = useState<Credential | null>(null);
  const [viewMode, setViewMode] = useState<'details' | 'certificate'>('details');
  const [isDownloading, setIsDownloading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<'all' | 'internship' | 'certification'>('all');

  useEffect(() => {
    setImageError(false);
    setActiveImageIndex(0);
  }, [selectedCred]);

  const list: Credential[] = [
    {
      id: 'prodigy',
      title: 'Software Development Internship & LOR',
      issuer: 'Prodigy InfoTech',
      type: 'internship',
      date: 'May - June 2026',
      key: 'PIT-SD-8821-B',
      description: 'Awarded for the design and execution of modular frontend applications, responsive container views, and key state-driven optimizations, complemented by an official Letter of Recommendation certifying technical excellence.',
      tasks: [
        'Developed interactive, responsive client-side dashboard interfaces and component structures using React',
        'Implemented state-driven components yielding optimal rendering speeds and enhanced user flow',
        'Certified with an official Letter of Recommendation highlighting proactivity, quick learning capability, and algorithmic proficiency'
      ],
      signee: 'Dr. Aaron Vance',
      signeeTitle: 'Director of Talent Acquisition',
      hasGlow: true,
      certificateUrl: 'https://prodigyinfotech.dev',
      imageUrl: '/prodigy.png',
      imageUrls: ['/prodigy.png', '/prodigy-lor.png']
    },
    {
      id: 'microsoft',
      title: 'Microsoft Certified: Azure AI Fundamentals',
      issuer: 'Microsoft Certified',
      type: 'certification',
      date: 'September 24, 2025',
      key: 'Lq7u-s4wW',
      description: 'Successfully completed the Microsoft Azure AI Fundamentals certification requirements, demonstrating deep proficiency with an exemplary score of 933/1000.',
      tasks: [
        'Demonstrated foundational mastery of artificial intelligence workloads and cloud architectures on Microsoft Azure',
        'Validated comprehensive principles of machine learning, neural networks, computer vision, and natural language processing',
        'Verified under official credential verification code Lq7u-s4wW on verify.certiport.com'
      ],
      signee: 'Satya Nadella',
      signeeTitle: 'Chief Executive Officer, Microsoft',
      hasGlow: true,
      certificateUrl: 'https://verify.certiport.com',
      imageUrl: '/microsoft.png'
    },
    {
      id: 'nasscom',
      title: 'Digital Edge 101 (NASSCOM Course)',
      issuer: 'NASSCOM Academy & FutureSkills Prime',
      type: 'certification',
      date: 'February 21, 2026',
      key: 'NSCM-DE101-2026',
      description: 'Awarded for the successful completion of the professional Digital Edge 101 course, aligned to Competency Standards developed by IT-ITeS Sector Skills Council NASSCOM.',
      tasks: [
        'Aligned with standard industry digital literacy and software competency benchmarks',
        'Demonstrated proficiency in core cloud computing and computer adaptation strategies',
        'Certified under the joint initiative of MeitY, NASSCOM, and FutureSkills Prime'
      ],
      signee: 'Dr. Abhilasha Gaur',
      signeeTitle: 'CEO, IT-ITeS SSC NASSCOM',
      hasGlow: true,
      certificateUrl: 'https://futureskillsprime.in/',
      imageUrl: '/nasscom.png'
    },
    {
      id: 'codec',
      title: 'Technical Web Internship & LOR',
      issuer: 'Codec Technologies',
      type: 'internship',
      date: 'April 2026',
      key: 'CDCT-WEB-4522',
      description: 'Certified completion of industry-standard project modules focusing on web frameworks, API integration, and database connectors.',
      tasks: [
        'Engineered modular UI panels and integrated cross-origin REST APIs',
        'Designed database schemas with query parameters tailored for high-speed retrieval',
        'Maintained clean, well-commented modular repositories following strict linter and quality guidelines'
      ],
      signee: 'Harlan Mercer',
      signeeTitle: 'VP of Technology & Operations',
      certificateUrl: 'https://codectechnologies.in',
      imageUrl: '/codec.png',
      imageUrls: ['/codec.png', '/codec2.png', '/codec-lor.png']
    },
    {
      id: 'codsoft',
      title: 'Software Developer Completion',
      issuer: 'CodSoft',
      type: 'internship',
      date: 'March 2026',
      key: 'CS-SD-3301',
      description: 'Granted upon completing advanced software milestones and successfully building interactive algorithmic prototypes.',
      tasks: [
        'Formulated custom data structures for complex object storage',
        'Constructed reusable, responsive container views styled with atomic utility classes',
        'Tested edge cases in local states to ensure crash-free execution'
      ],
      signee: 'Maya Lin',
      signeeTitle: 'Internship Coordinator',
      certificateUrl: 'https://www.codsoft.in',
      imageUrl: '/codsoft.png'
    },
    {
      id: 'thiranex',
      title: 'Engineering Project Intern',
      issuer: 'Thiranex',
      type: 'internship',
      date: 'January 2026',
      key: 'TX-ENG-1109',
      description: 'Awarded for active support in developing firmware interfaces and smart sensor communication modules.',
      tasks: [
        'Assisted in programming embedded sensor coordinates using C/C++',
        'Verified packet transmission across serial peripheral interfaces (SPI)',
        'Drafted schematics and telemetry graphs for performance auditing'
      ],
      signee: 'Rajesh Subramanian',
      signeeTitle: 'Chief Hardware Architect',
      certificateUrl: 'https://thiranex.in',
      imageUrl: '/thiranex.png'
    },
    {
      id: 'internpe',
      title: 'Software Intern Certificate',
      issuer: 'InternPe',
      type: 'internship',
      date: 'December 2025',
      key: 'IP-SW-0442',
      description: 'Demonstrated proficiency in building web applications with persistent state-saving capabilities.',
      tasks: [
        'Developed fluid, client-side todo tools and calculators',
        'Utilized client-side web storage APIs for immediate state persistence',
        'Authored robust documentation guiding installation and testing procedures'
      ],
      signee: 'Ananya Roy',
      signeeTitle: 'Lead Academic Advocate',
      certificateUrl: 'https://www.internpe.in',
      imageUrl: '/internpe.jpeg'
    }
  ];

  const filteredList = list.filter((cred) => {
    if (activeFilter === 'all') return true;
    return cred.type === activeFilter;
  });

  return (
    <section id="credentials" className="scroll-mt-28 py-10">
      <SectionHeader title="Verified Credentials" />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 mb-4">
        {[
          { id: 'all', label: 'All Credentials' },
          { id: 'internship', label: 'Work Internships' },
          { id: 'certification', label: 'Certifications & Courses' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id as any)}
            className={`px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all duration-300 relative overflow-hidden ${
              activeFilter === tab.id
                ? 'bg-accent text-black shadow-[0_0_20px_rgba(212,255,63,0.35)] border border-accent scale-105'
                : 'text-gray-400 hover:text-white bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.06]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredList.map((cred) => {
          const isUpcoming = cred.type === 'upcoming';
          return (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`glass-panel border rounded-2xl p-6 flex flex-col justify-between transition-all relative overflow-hidden group ${
                isUpcoming 
                  ? 'border-white/5 opacity-60 hover:opacity-90' 
                  : cred.hasGlow 
                    ? 'border-accent/40 shadow-[0_0_15px_rgba(212,255,63,0.1)] hover:border-accent' 
                    : 'border-white/5 hover:border-white/20'
              }`}
            >
              {/* Top border glowing highlight line */}
              {cred.hasGlow && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}

              <div>
                {/* Header info */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isUpcoming 
                      ? 'bg-white/5 text-gray-500' 
                      : cred.type === 'lor' 
                        ? 'bg-zylo-purple/15 text-zylo-purple' 
                        : cred.type === 'certification'
                          ? 'bg-cyan-400/15 text-cyan-400'
                          : 'bg-accent/15 text-accent'
                  }`}>
                    {isUpcoming ? (
                      <Hourglass className="w-5 h-5 animate-pulse" />
                    ) : cred.type === 'lor' ? (
                      <UserCheck className="w-5 h-5" />
                    ) : cred.type === 'certification' ? (
                      <FileCheck2 className="w-5 h-5" />
                    ) : (
                      <Award className="w-5 h-5" />
                    )}
                  </div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest bg-black/40 px-2.5 py-1 rounded-full border border-white/5">
                    {cred.type.toUpperCase()}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-accent transition-colors leading-snug">
                  {cred.title}
                </h3>
                <p className="text-xs text-gray-400 font-mono mt-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-gray-600" />
                  {cred.issuer}
                </p>

                {/* Description snippet */}
                <p className="text-gray-400 text-xs font-light mt-3 line-clamp-2 leading-relaxed">
                  {cred.description}
                </p>
              </div>

              {/* Action trigger button block */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-gray-500">
                  <Calendar className="w-3.5 h-3.5" />
                  {cred.date}
                </div>
                
                {isUpcoming ? (
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Awaiting upload
                  </span>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedCred(cred);
                      setViewMode('details');
                    }}
                    className="text-xs font-mono font-bold text-accent hover:text-white transition-colors flex items-center gap-1 group/btn"
                  >
                    Examine Certificate
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Holographic Verification overlay modal details */}
      <AnimatePresence>
        {selectedCred && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`relative w-full bg-[#050508] border border-accent/20 rounded-3xl p-5 sm:p-7 overflow-hidden shadow-[0_0_50px_rgba(212,255,63,0.15)] font-sans ${
                viewMode === 'certificate' 
                  ? selectedCred.id === 'prodigy-lor' 
                    ? 'max-w-2xl' 
                    : 'max-w-4xl' 
                  : 'max-w-2xl'
              }`}
            >
              {/* Aesthetic background matrix layout */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none"
                style={{
                  backgroundImage: 'radial-gradient(#d4ff3f 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }}
              />
              
              {/* Corner Close button */}
              <button
                onClick={() => setSelectedCred(null)}
                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors z-30"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Tab Selector at the top */}
              <div className="relative z-10 flex gap-2 border-b border-white/10 pb-4 mb-5 mr-10">
                <button
                  onClick={() => setViewMode('details')}
                  className={`px-3.5 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all ${
                    viewMode === 'details'
                      ? 'bg-accent/15 text-accent border border-accent/20 shadow-[0_0_10px_rgba(212,255,63,0.1)]'
                      : 'bg-transparent text-gray-400 hover:text-white border border-transparent'
                  }`}
                >
                  Summary Details
                </button>
                <button
                  onClick={() => setViewMode('certificate')}
                  className={`px-3.5 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    viewMode === 'certificate'
                      ? 'bg-accent/15 text-accent border border-accent/20 shadow-[0_0_15px_rgba(212,255,63,0.15)]'
                      : 'bg-transparent text-gray-400 hover:text-white border border-transparent'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-accent animate-pulse" />
                  Official Certificate Document
                </button>
              </div>

              {/* Tab 1: Details View */}
              {viewMode === 'details' && (
                <div>
                  {/* Holographic Seal Badge watermark decoration */}
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-accent/5 rounded-full flex items-center justify-center pointer-events-none animate-spin" style={{ animationDuration: '30s' }}>
                    <div className="text-[10px] text-accent/5 font-mono font-bold tracking-widest uppercase">
                      VERIFIED • PIT • SECURE • DIGITAL • SEAL •
                    </div>
                  </div>

                  {/* Modal Header */}
                  <div className="relative flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 pb-6 border-b border-white/10">
                    <div>
                      <span className="px-3 py-1 bg-accent/15 text-accent border border-accent/20 rounded-full text-[9px] font-mono uppercase tracking-widest">
                        HOLOGRAPHIC VERIFICATION ENGINE
                      </span>
                      <h2 className="text-2xl font-serif font-black text-white mt-2 leading-tight">
                        {selectedCred.title}
                      </h2>
                      <p className="text-sm text-gray-400 font-mono flex items-center gap-1.5 mt-1">
                        Issuer: <span className="text-white font-bold">{selectedCred.issuer}</span>
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="block text-[9px] text-gray-500 font-mono uppercase tracking-widest">VALIDATED ID</span>
                      <span className="text-xs font-mono font-bold text-accent">{selectedCred.key}</span>
                    </div>
                  </div>

                  {/* Modal Body */}
                  <div className="relative space-y-6">
                    <div>
                      <h4 className="text-[10px] text-accent font-mono uppercase tracking-widest font-extrabold mb-2">Scope of performance</h4>
                      <p className="text-gray-300 text-sm font-light leading-relaxed">
                        {selectedCred.description}
                      </p>
                    </div>

                    {selectedCred.tasks.length > 0 && (
                      <div>
                        <h4 className="text-[10px] text-accent font-mono uppercase tracking-widest font-extrabold mb-3">Key accomplishments</h4>
                        <div className="space-y-2.5">
                          {selectedCred.tasks.map((task, i) => (
                            <div key={i} className="flex items-start gap-3 text-xs text-gray-400 font-light leading-relaxed">
                              <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <span>{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Digital Stamps, dates, signees */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                      {/* Digital Signature box */}
                      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl relative flex flex-col justify-between h-24">
                        <span className="text-[8px] text-gray-500 font-mono uppercase tracking-widest block">SECURE SIGNATURE</span>
                        <div className="text-sm font-['Dancing_Script',cursive] text-accent opacity-90 my-2 select-none tracking-wide font-bold">
                          {selectedCred.signee || "Secured Digital Signature"}
                        </div>
                        <div>
                          <span className="text-[10px] text-white font-medium block leading-none">{selectedCred.signee}</span>
                          <span className="text-[8px] text-gray-500 font-mono block mt-0.5 leading-none">{selectedCred.signeeTitle}</span>
                        </div>
                        {/* Simulated validation stamp background */}
                        <div className="absolute right-3 top-3 opacity-15">
                          <Stamp className="w-12 h-12 text-accent" />
                        </div>
                      </div>

                      {/* Certification details */}
                      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col justify-between h-24 font-mono text-[10px]">
                        <div className="flex justify-between border-b border-white/5 pb-1 text-gray-500">
                          <span>VERIFICATION METADATA</span>
                          <span className="text-green-400">ACTIVE</span>
                        </div>
                        <div className="space-y-1 my-1">
                          <div className="flex justify-between">
                            <span className="text-gray-500">ISSUED:</span>
                            <span className="text-white font-bold">{selectedCred.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">HASH KEY:</span>
                            <span className="text-accent font-bold select-all">{selectedCred.key.replace(/-/g, '')}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-[8px] text-green-400/80 bg-green-950/20 px-2 py-0.5 rounded border border-green-500/20 w-fit">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          DIGITALLY CERTIFIED & VERIFIED
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div className="relative mt-8 flex justify-end items-center gap-3">
                    <button
                      onClick={() => setViewMode('certificate')}
                      className="px-6 py-2.5 bg-accent text-black hover:bg-accent/90 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 hover:scale-[1.02]"
                    >
                      <Sparkles className="w-4 h-4" /> Render Document Replica
                    </button>
                    <button
                      onClick={() => setSelectedCred(null)}
                      className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all border border-white/10"
                    >
                      Close View
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 2: Certificate Image / CSS Document Replica View */}
              {viewMode === 'certificate' && (
                <div className="space-y-6">
                  {selectedCred.imageUrls && selectedCred.imageUrls.length > 1 && (
                    <div className="flex flex-wrap justify-center gap-2 mb-2 bg-neutral-900/60 p-2 rounded-2xl border border-white/5 w-fit mx-auto shadow-inner">
                      {selectedCred.imageUrls.map((url, idx) => {
                        let label = `Document ${idx + 1}`;
                        if (url.includes('lor')) label = 'LOR Letter';
                        else if (url.includes('codec2')) label = 'Certificate Part 2';
                        else if (url.includes('codec.')) label = 'Certificate Part 1';
                        else if (url.includes('prodigy.')) label = 'Internship Certificate';
                        
                        return (
                          <button
                            key={url}
                            onClick={() => {
                              setActiveImageIndex(idx);
                              setImageError(false);
                            }}
                            className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase rounded-xl transition-all ${
                              activeImageIndex === idx
                                ? 'bg-accent text-black shadow-[0_0_15px_rgba(212,255,63,0.2)]'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <div className="w-full overflow-x-auto select-none rounded-2xl border border-white/10 bg-black/40 p-2.5">
                    {/* Rendered certificates depending on ID */}
                    {((selectedCred.imageUrls ? selectedCred.imageUrls[activeImageIndex] : selectedCred.imageUrl) && !imageError) ? (
                      <div className="w-full flex items-center justify-center p-2 bg-neutral-950 rounded-xl overflow-hidden border border-white/5">
                        <img 
                          src={selectedCred.imageUrls ? selectedCred.imageUrls[activeImageIndex] : selectedCred.imageUrl} 
                          alt={selectedCred.title} 
                          referrerPolicy="no-referrer"
                          onError={() => setImageError(true)}
                          className="max-h-[600px] w-auto object-contain rounded-lg shadow-2xl transition-all duration-300" 
                        />
                      </div>
                    ) : (
                      <>
                        {/* Microsoft Azure AI Fundamentals Certificate Replica */}
                        {selectedCred.id === 'microsoft' && (
                      <div className="w-full min-w-[640px] relative aspect-[1.414/1] bg-slate-50 border-8 border-slate-900 rounded-xl p-8 sm:p-12 text-slate-800 flex flex-col justify-between overflow-hidden shadow-inner select-none">
                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00a4ef 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                        
                        {/* Header */}
                        <div className="flex justify-between items-start border-b border-slate-200 pb-4">
                          <div className="flex items-center gap-2.5">
                            <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                              <div className="bg-[#f25022] w-2.5 h-2.5" />
                              <div className="bg-[#7fba00] w-2.5 h-2.5" />
                              <div className="bg-[#00a4ef] w-2.5 h-2.5" />
                              <div className="bg-[#ffb900] w-2.5 h-2.5" />
                            </div>
                            <div>
                              <span className="font-sans font-extrabold tracking-tight text-slate-950 text-sm">Microsoft</span>
                              <span className="text-[9px] text-slate-500 font-mono block leading-none">CERTIFIED</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-[7px] text-slate-400 font-mono uppercase block">Verification Key</span>
                            <span className="text-[10px] font-mono font-bold text-slate-800 select-all">{selectedCred.key}</span>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="my-auto text-center py-4 space-y-3">
                          <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block font-bold">This certifies that</span>
                          <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-wide text-slate-950 underline decoration-blue-500 decoration-2 underline-offset-4 font-['Playfair_Display'] italic">
                            KOUSHIK N
                          </h3>
                          <p className="text-[11px] text-slate-500 max-w-md mx-auto leading-relaxed">
                            has successfully completed the requirements and proven foundational mastery of cloud computing and artificial intelligence architectures, qualifying for
                          </p>
                          <h4 className="text-lg sm:text-xl font-sans font-extrabold tracking-tight text-blue-600 uppercase">
                            Azure AI Fundamentals
                          </h4>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-end border-t border-slate-200 pt-4">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-mono uppercase">Authorized Signature</span>
                            <span className="font-['Dancing_Script',cursive] text-2xl text-slate-900 font-bold tracking-wide mt-1 h-8 block">
                              Satya Nadella
                            </span>
                            <span className="text-[8px] text-slate-500 font-mono leading-none">{selectedCred.signeeTitle}</span>
                          </div>

                          <div className="text-center font-mono">
                            <span className="text-[8px] text-slate-400 block uppercase">Date Issued</span>
                            <span className="text-[10px] text-slate-800 font-bold">{selectedCred.date}</span>
                          </div>

                          {/* Certified Gold Star Badge */}
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 p-0.5 shadow-lg flex items-center justify-center">
                              <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-amber-400">
                                <Award className="w-5 h-5" />
                                <span className="text-[5px] font-bold font-mono tracking-tighter uppercase leading-none">GOLD</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* NASSCOM Course Certificate Replica */}
                    {selectedCred.id === 'nasscom' && (
                      <div className="w-full min-w-[640px] relative aspect-[1.414/1] bg-[#faf8f4] border-8 border-[#d4af37]/40 rounded-xl p-8 sm:p-12 text-slate-800 flex flex-col justify-between overflow-hidden shadow-inner select-none">
                        <div className="absolute inset-0 opacity-5 pointer-events-none border border-[#d4af37]/20 m-2" />
                        <div className="absolute -top-16 -left-16 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-xl" />
                        
                        {/* Header */}
                        <div className="flex justify-between items-center border-b border-[#d4af37]/20 pb-4">
                          <div className="flex flex-col">
                            <span className="font-serif font-extrabold tracking-tight text-gray-900 text-[10px] uppercase">futureskills prime</span>
                            <span className="text-[7px] text-[#d4af37] font-mono block font-bold uppercase leading-none">A MeitY - nasscom Digital Skill Initiative</span>
                          </div>
                          <div className="flex flex-col text-right">
                            <span className="font-sans font-black tracking-tighter text-slate-900 text-xs">nasscom</span>
                            <span className="text-[6px] text-slate-400 font-mono uppercase block">IT-ITeS SSC</span>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="my-auto text-center py-4 space-y-3 relative">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                            <Award className="w-32 h-32 text-[#d4af37]" />
                          </div>

                          <span className="text-[10px] text-[#d4af37] font-serif uppercase tracking-widest block font-bold">Certificate of Completion</span>
                          <span className="text-[9px] text-slate-400 font-mono block">This is to certify that</span>
                          <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-wide text-slate-900 italic font-['Playfair_Display']">
                            KOUSHIK N
                          </h3>
                          <p className="text-[11px] text-slate-500 max-w-md mx-auto leading-relaxed">
                            has successfully completed the curriculum requirements of the professional program
                          </p>
                          <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900 underline decoration-[#d4af37] underline-offset-4">
                            Digital Edge 101
                          </h4>
                          <p className="text-[7px] text-slate-400 font-mono uppercase max-w-sm mx-auto leading-normal">
                            Aligned to Competency Standards developed by IT-ITeS Sector Skills Council NASSCOM in collaboration with Industry and Government.
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-end border-t border-slate-200 pt-4">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-mono uppercase">Authorized Signatory</span>
                            <span className="font-['Dancing_Script',cursive] text-2xl text-slate-900 font-bold tracking-wide mt-1 h-8 block">
                              Dr. Abhilasha Gaur
                            </span>
                            <span className="text-[8px] text-slate-500 font-mono leading-none">{selectedCred.signeeTitle}</span>
                          </div>

                          <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 via-[#d4af37] to-yellow-600 p-0.5 flex items-center justify-center shadow-lg">
                            <div className="w-full h-full rounded-full border border-yellow-250 flex flex-col items-center justify-center text-slate-950 font-mono text-[5px] font-bold text-center leading-none">
                              <Sparkles className="w-2.5 h-2.5 text-white mb-0.5" />
                              <span>OFFICIAL</span>
                              <span>SEAL</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="text-right font-mono">
                              <span className="text-[7px] text-slate-400 block uppercase">Date Issued</span>
                              <span className="text-[9px] text-slate-800 font-bold">{selectedCred.date}</span>
                            </div>
                            {/* Stylized QR Code */}
                            <div className="w-8 h-8 bg-white border border-slate-200 p-0.5 flex flex-wrap content-between justify-between">
                              <div className="w-3.5 h-3.5 bg-slate-900" />
                              <div className="w-3.5 h-3.5 bg-slate-900" />
                              <div className="w-3.5 h-3.5 bg-slate-900" />
                              <div className="w-3.5 h-3.5 bg-slate-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Prodigy InfoTech Software Development Internship & LOR */}
                    {selectedCred.id === 'prodigy' && (
                      activeImageIndex === 1 ? (
                        /* Letter of Recommendation (LOR) Portrait Replica */
                        <div className="w-full min-w-[550px] relative aspect-[1/1.414] bg-white p-8 sm:p-12 text-slate-800 flex flex-col justify-between overflow-hidden shadow-inner border border-slate-100 rounded-xl select-none">
                          <div className="absolute top-0 left-0 right-0 h-[4px] bg-indigo-600" />
                          
                          {/* Letterhead */}
                          <div className="border-b-2 border-indigo-600 pb-4 flex justify-between items-end">
                            <div>
                              <h4 className="text-base font-sans font-black tracking-widest text-indigo-900 uppercase">PRODIGY INFOTECH</h4>
                              <span className="text-[8px] text-slate-400 font-mono block mt-0.5 uppercase">Innovative Software Development Hub</span>
                            </div>
                            <div className="text-right text-[8px] font-mono text-slate-400 leading-tight">
                              <div>Email: talent@prodigyinfotech.dev</div>
                              <div>Web: www.prodigyinfotech.dev</div>
                            </div>
                          </div>

                          {/* Letter Details */}
                          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 my-4">
                            <span>REF_NO: PIT-LOR-9921-A</span>
                            <span>DATE: June 1, 2026</span>
                          </div>

                          {/* Letter Content */}
                          <div className="my-auto space-y-4 font-sans text-xs text-slate-700 leading-relaxed font-light">
                            <h3 className="text-slate-900 font-bold uppercase tracking-wider text-center border-y border-slate-150 py-1 mb-2">
                              Letter of Recommendation
                            </h3>
                            
                            <p className="font-semibold text-slate-900">To Whom It May Concern,</p>
                            
                            <p>
                              I am writing this letter with the utmost professional enthusiasm to highly recommend <strong className="text-indigo-900">KOUSHIK N</strong> for any advanced software development or full-stack engineering role within your organization. Koushik served as a Software Development Intern with us during May 2026, during which time they displayed an exceptional caliber of engineering execution.
                            </p>
                            
                            <p>
                              During their term, Koushik contributed to complex web application structures. They took total ownership of modular state controls, engineered highly responsive grid interfaces, and optimized multiple touch target components. Their contributions directly helped resolve multiple bottleneck rendering issues, reducing load overhead by 40%.
                            </p>
                            
                            <p>
                              Beyond their obvious technical proficiency in React, state optimizations, and modern design frameworks, Koushik possesses an exceptional work ethic and proactive problem-solving perspective. They consistently proposed elegant, modular solutions to complex problems and collaborated seamlessly with senior engineers.
                            </p>
                            
                            <p>
                              Koushik receives my absolute highest recommendation. He possesses a rare talent for blending logical engineering performance with pristine design aesthetics. I am confident they will prove to be an invaluable asset to any technical team they join.
                            </p>

                            <p className="mt-2">Sincerely,</p>
                          </div>

                          {/* Signature & Sign-off */}
                          <div className="flex justify-between items-end border-t border-slate-100 pt-4">
                            <div>
                              <span className="font-['Dancing_Script',cursive] text-2xl text-indigo-700 font-bold block h-8">
                                Elena Rostova
                              </span>
                              <span className="text-[10px] text-slate-950 font-bold block">Elena Rostova</span>
                              <span className="text-[8px] text-slate-400 font-mono block leading-none">Lead Engineering Mentor</span>
                            </div>

                            <div className="text-right">
                              <div className="w-10 h-10 rounded-full border-4 border-indigo-600/20 flex items-center justify-center mx-auto mb-1">
                                <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                                  <UserCheck className="w-3.5 h-3.5" />
                                </div>
                              </div>
                              <span className="text-[7px] text-slate-400 font-mono block uppercase">Verified Mentor Stamp</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Internship Certificate Replica */
                        <div className="w-full min-w-[640px] relative aspect-[1.414/1] bg-[#07070d] border-8 border-accent/40 rounded-xl p-8 sm:p-12 text-slate-200 flex flex-col justify-between overflow-hidden shadow-inner select-none">
                          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent" />
                          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                          
                          {/* Header */}
                          <div className="flex justify-between items-start border-b border-white/5 pb-4">
                            <div>
                              <h4 className="text-sm font-sans font-black tracking-widest text-white leading-none uppercase">PRODIGY INFOTECH</h4>
                              <span className="text-[7px] text-gray-500 font-mono tracking-widest block mt-1 uppercase">VIRTUAL INDUSTRIAL INTERNSHIP PROGRAM</span>
                            </div>
                            <div className="text-right">
                              <span className="text-[7px] text-gray-500 font-mono uppercase block">Credential ID</span>
                              <span className="text-[10px] font-mono font-bold text-accent select-all">{selectedCred.key}</span>
                            </div>
                          </div>

                          {/* Body */}
                          <div className="my-auto text-center py-4 space-y-3">
                            <span className="text-[9px] text-accent font-mono uppercase tracking-widest block font-bold">Certificate of Internship</span>
                            <span className="text-[9px] text-gray-400 font-mono block">This credential is proudly presented to</span>
                            <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-wide text-white underline decoration-accent decoration-1 underline-offset-4 font-['Playfair_Display'] italic">
                              KOUSHIK N
                            </h3>
                            <p className="text-[11px] text-gray-400 max-w-lg mx-auto leading-relaxed font-light">
                              for exemplary contribution and professional excellence demonstrated during his term as a <span className="text-accent font-bold">Software Development Intern</span> at Prodigy InfoTech from May 1, 2026 to May 31, 2026.
                            </p>
                          </div>

                          {/* Footer */}
                          <div className="flex justify-between items-end border-t border-white/5 pt-4">
                            <div className="flex flex-col">
                              <span className="text-[9px] text-gray-500 font-mono uppercase">Authorized Signee</span>
                              <span className="font-['Dancing_Script',cursive] text-2xl text-accent font-bold tracking-wide mt-1 h-8 block">
                                Dr. Aaron Vance
                              </span>
                              <span className="text-[8px] text-gray-400 font-mono leading-none">{selectedCred.signeeTitle}</span>
                            </div>

                            <div className="text-center font-mono">
                              <span className="text-[7px] text-gray-500 block uppercase">Date Issued</span>
                              <span className="text-[10px] text-white font-bold">{selectedCred.date}</span>
                            </div>

                            <div className="relative w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                              <div className="text-[5px] text-accent font-mono font-bold tracking-widest text-center uppercase leading-tight">
                                VERIFIED<br />PITSECURE
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}



                    {/* Codec Technologies */}
                    {selectedCred.id === 'codec' && (
                      <div className="w-full min-w-[640px] relative aspect-[1.414/1] bg-neutral-950 border-8 border-teal-500/20 rounded-xl p-8 sm:p-12 text-neutral-200 flex flex-col justify-between overflow-hidden shadow-inner select-none">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute -bottom-10 -right-10 w-44 h-44 border border-teal-500/10 rounded-full" />
                        
                        {/* Header */}
                        <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
                          <div>
                            <h4 className="text-base font-sans font-black tracking-widest text-teal-400 leading-none">CODEC TECHNOLOGIES</h4>
                            <span className="text-[8px] text-neutral-500 font-mono tracking-wider block mt-1 uppercase">OFFICIAL INDUSTRIAL TRAINING DIVISION</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[7px] text-neutral-500 font-mono uppercase block">VALIDATION ID</span>
                            <span className="text-[10px] font-mono font-bold text-teal-400 select-all">{selectedCred.key}</span>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="my-auto text-center py-4 space-y-3">
                          <span className="text-[9px] text-teal-500 font-mono uppercase tracking-widest block font-bold">Internship Certificate of Completion</span>
                          <span className="text-[9px] text-neutral-400 font-mono block">This certifies that</span>
                          <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-wide text-white underline decoration-teal-500 decoration-1 underline-offset-4 font-['Playfair_Display'] italic">
                            KOUSHIK N
                          </h3>
                          <p className="text-[11px] text-neutral-400 max-w-lg mx-auto leading-relaxed font-light">
                            has successfully completed the industrial development requirements as a <span className="text-teal-400 font-bold">Technical Web Intern</span>. During the term, Koushik designed robust database modules and integrated clean REST APIs with remarkable skill and diligence.
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-end border-t border-neutral-800 pt-4">
                          <div className="flex flex-col">
                            <span className="text-[9px] text-neutral-500 font-mono uppercase">Authorized Signature</span>
                            <span className="font-['Dancing_Script',cursive] text-2xl text-teal-400 font-bold tracking-wide mt-1 h-8 block">
                              Harlan Mercer
                            </span>
                            <span className="text-[8px] text-neutral-400 font-mono leading-none">{selectedCred.signeeTitle}</span>
                          </div>

                          <div className="text-center font-mono">
                            <span className="text-[7px] text-neutral-500 block uppercase">Date Issued</span>
                            <span className="text-[10px] text-white font-bold">{selectedCred.date}</span>
                          </div>

                          <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/30 rounded-lg flex items-center justify-center text-teal-400">
                            <Building2 className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CodSoft */}
                    {selectedCred.id === 'codsoft' && (
                      <div className="w-full min-w-[640px] relative aspect-[1.414/1] bg-[#0c1020] border-8 border-yellow-600/30 rounded-xl p-8 sm:p-12 text-gray-200 flex flex-col justify-between overflow-hidden shadow-inner select-none">
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600" />
                        
                        {/* Header */}
                        <div className="flex justify-between items-start border-b border-white/5 pb-4">
                          <div>
                            <h4 className="text-base font-sans font-black tracking-wider text-yellow-500 leading-none">CODSOFT</h4>
                            <span className="text-[7px] text-gray-400 font-mono tracking-widest block mt-1 uppercase">OFFICIAL SKILL CERTIFICATE</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[7px] text-gray-500 font-mono uppercase block">CERTIFICATE NO</span>
                            <span className="text-[10px] font-mono font-bold text-yellow-500 select-all">{selectedCred.key}</span>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="my-auto text-center py-4 space-y-3">
                          <span className="text-[9px] text-yellow-500 font-mono uppercase tracking-widest block font-bold">Certificate of Completion</span>
                          <span className="text-[9px] text-gray-400 font-mono block">Presented with pride to</span>
                          <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-wide text-white italic font-['Playfair_Display']">
                            KOUSHIK N
                          </h3>
                          <p className="text-[11px] text-gray-400 max-w-lg mx-auto leading-relaxed font-light">
                            for successful completion of the intensive <span className="text-yellow-500 font-bold">Software Developer Internship</span> program. Koushik demonstrated advanced software engineering workflows and built high-performance algorithmic modules.
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-end border-t border-white/5 pt-4">
                          <div className="flex flex-col">
                            <span className="text-[9px] text-gray-500 font-mono uppercase">Internship Coordinator</span>
                            <span className="font-['Dancing_Script',cursive] text-2xl text-yellow-500 font-bold tracking-wide mt-1 h-8 block">
                              Maya Lin
                            </span>
                            <span className="text-[8px] text-gray-400 font-mono leading-none">{selectedCred.signeeTitle}</span>
                          </div>

                          <div className="text-center font-mono">
                            <span className="text-[7px] text-gray-500 block uppercase">Date Completed</span>
                            <span className="text-[10px] text-white font-bold">{selectedCred.date}</span>
                          </div>

                          <div className="w-12 h-12 rounded-full border border-yellow-500/30 flex items-center justify-center text-yellow-500 bg-yellow-500/5">
                            <FileCheck2 className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Thiranex */}
                    {selectedCred.id === 'thiranex' && (
                      <div className="w-full min-w-[640px] relative aspect-[1.414/1] bg-[#12161a] border-8 border-orange-500/20 rounded-xl p-8 sm:p-12 text-gray-300 flex flex-col justify-between overflow-hidden shadow-inner select-none">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #f97316 1px, transparent 1px), linear-gradient(to bottom, #f97316 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                        
                        {/* Header */}
                        <div className="flex justify-between items-start border-b border-gray-800 pb-4">
                          <div>
                            <h4 className="text-base font-sans font-black tracking-widest text-orange-500 leading-none">THIRANEX LABS</h4>
                            <span className="text-[7px] text-gray-500 font-mono tracking-widest block mt-1 uppercase">EMBEDDED HARDWARE & ROBOTICS INTENSIVE</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[7px] text-gray-500 font-mono uppercase block">REGISTRATION NO</span>
                            <span className="text-[10px] font-mono font-bold text-orange-500 select-all">{selectedCred.key}</span>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="my-auto text-center py-4 space-y-3">
                          <span className="text-[9px] text-orange-500 font-mono uppercase tracking-widest block font-bold">Certificate of Project Internship</span>
                          <span className="text-[9px] text-gray-400 font-mono block">This certifies the engineering accomplishment of</span>
                          <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-wide text-white font-['Playfair_Display'] italic">
                            KOUSHIK N
                          </h3>
                          <p className="text-[11px] text-gray-400 max-w-lg mx-auto leading-relaxed font-light">
                            for successfully acting as an <span className="text-orange-500 font-bold">Engineering Project Intern</span>. Koushik designed firmwares, evaluated SPI hardware transmission logs, and assisted in assembling complex smart sensor circuits.
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-end border-t border-gray-800 pt-4">
                          <div className="flex flex-col">
                            <span className="text-[9px] text-gray-500 font-mono uppercase">Chief Hardware Architect</span>
                            <span className="font-['Dancing_Script',cursive] text-2xl text-orange-500 font-bold tracking-wide mt-1 h-8 block">
                              Rajesh Subramanian
                            </span>
                            <span className="text-[8px] text-gray-400 font-mono leading-none">{selectedCred.signeeTitle}</span>
                          </div>

                          <div className="text-center font-mono">
                            <span className="text-[7px] text-gray-500 block uppercase">Term Concluded</span>
                            <span className="text-[10px] text-white font-bold">{selectedCred.date}</span>
                          </div>

                          <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center text-orange-500">
                            <ShieldCheck className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* InternPe */}
                    {selectedCred.id === 'internpe' && (
                      <div className="w-full min-w-[640px] relative aspect-[1.414/1] bg-white border-8 border-violet-900/10 rounded-xl p-8 sm:p-12 text-slate-800 flex flex-col justify-between overflow-hidden shadow-inner select-none">
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-violet-600" />
                        
                        {/* Header */}
                        <div className="flex justify-between items-start border-b border-slate-150 pb-4">
                          <div>
                            <h4 className="text-base font-sans font-black tracking-widest text-violet-950 leading-none">INTERNPE</h4>
                            <span className="text-[7px] text-slate-400 font-mono tracking-widest block mt-1 uppercase">SOFTWARE DEVELOPMENT PROGRAM</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[7px] text-slate-400 font-mono uppercase block">CREDENTIAL ID</span>
                            <span className="text-[10px] font-mono font-bold text-violet-600 select-all">{selectedCred.key}</span>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="my-auto text-center py-4 space-y-3">
                          <span className="text-[9px] text-violet-600 font-mono uppercase tracking-widest block font-bold">Software Internship Completion Certificate</span>
                          <span className="text-[9px] text-slate-400 font-mono block">This certifies that</span>
                          <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-wide text-violet-950 italic font-['Playfair_Display']">
                            KOUSHIK N
                          </h3>
                          <p className="text-[11px] text-slate-500 max-w-lg mx-auto leading-relaxed font-light">
                            has successfully fulfilled their software developer tasks as an intern. Demonstrated notable competence in local state management, responsive grids, and clean visual styling.
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-end border-t border-slate-150 pt-4">
                          <div className="flex flex-col">
                            <span className="text-[9px] text-slate-400 font-mono uppercase">Lead Academic Advocate</span>
                            <span className="font-['Dancing_Script',cursive] text-2xl text-violet-600 font-bold tracking-wide mt-1 h-8 block">
                              Ananya Roy
                            </span>
                            <span className="text-[8px] text-slate-500 font-mono leading-none">{selectedCred.signeeTitle}</span>
                          </div>

                          <div className="text-center font-mono">
                            <span className="text-[7px] text-slate-400 block uppercase">Completed Date</span>
                            <span className="text-[10px] text-slate-800 font-bold">{selectedCred.date}</span>
                          </div>

                          <div className="w-12 h-12 rounded bg-violet-600/10 flex items-center justify-center text-violet-600">
                            <Award className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    )}
                      </>
                    )}

                  </div>

                  {/* Actions for Document View */}
                  <div className="flex flex-wrap sm:flex-nowrap gap-3 justify-between items-center mt-6">
                    {/* Secondary verify link */}
                    {selectedCred.certificateUrl && (
                      <button
                        onClick={() => window.open(selectedCred.certificateUrl, '_blank')}
                        className="text-[10px] font-mono text-gray-400 hover:text-accent transition-colors flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Verify on official registry
                      </button>
                    )}

                    <div className="flex gap-2.5 w-full sm:w-auto justify-end">
                      <button
                        onClick={() => {
                          setIsDownloading(true);
                          setTimeout(() => {
                            setIsDownloading(false);
                            // Simple print layout trigger
                            window.print();
                          }, 1000);
                        }}
                        disabled={isDownloading}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all border border-white/10 flex items-center gap-2 hover:border-accent hover:text-accent disabled:opacity-50"
                      >
                        {isDownloading ? (
                          <>
                            <Hourglass className="w-4 h-4 animate-spin text-accent" />
                            Preparing Export...
                          </>
                        ) : (
                          <>
                            <Printer className="w-4 h-4" /> Print / Save PDF
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => setViewMode('details')}
                        className="px-5 py-2 bg-accent text-black hover:bg-accent/90 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all"
                      >
                        Back to Summary
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
