import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Download, Mail, ArrowUpRight, Cpu, Video, Sparkles, ChevronRight, Gamepad2, Layers } from 'lucide-react';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Innovative Engineer", "Unreal Engine Designer", "Full-Stack Developer", "Video & Photo Editor"];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // 3D Tilt parameters for the centerpiece interactive card
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="min-h-screen pt-32 pb-16 flex flex-col justify-center relative overflow-hidden">
      {/* Abstract floating neon background light effects */}
      <div className="absolute top-1/4 right-[-10%] w-[450px] h-[450px] bg-accent/15 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 left-[-10%] w-[450px] h-[450px] bg-zylo-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Massive High-Impact Headlines */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 text-left">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin text-accent" style={{ animationDuration: '6s' }} />
            <span>ZYLO_SYSTEM_ONLINE // MULTI_CORE</span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-8xl font-serif font-black tracking-tight leading-[0.95] text-white"
            >
              KOUSHIK N
            </motion.h1>
            
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1"
            >
              <span className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-outline">NEXT-GEN</span>
              <span className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-accent">WEB & 3D</span>
            </motion.div>
          </div>

          {/* Dynamic Role Rotator with custom indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 font-mono text-sm sm:text-lg text-gray-400 border-l-2 border-accent pl-4 h-8 overflow-hidden"
          >
            <span className="text-accent font-bold">❯</span>
            <span className="text-gray-400">ROLE // </span>
            <motion.span
              key={roleIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-white font-bold tracking-wider"
            >
              {roles[roleIndex].toUpperCase()}
            </motion.span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg font-light leading-relaxed max-w-xl"
          >
            Reconceptualizing modern digital pipelines. Architecting state-of-the-art web application environments, cinematic real-time 3D worlds (Unreal Engine 5), premium post-production editing, and smart IoT analytical systems.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a 
              href="#contact" 
              className="px-8 py-4 bg-accent hover:bg-accent/95 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-xl shadow-accent/15 hover:shadow-accent/25 hover:scale-105 duration-300 flex items-center gap-2 group"
            >
              <Mail className="w-4 h-4" />
              Launch Contact
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <button 
              onClick={() => {
                // Scroll to credentials section
                const credentialsElement = document.getElementById('credentials');
                if (credentialsElement) {
                  credentialsElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-[#11111f]/60 hover:bg-[#15152a] text-white border border-white/10 hover:border-accent font-mono text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-2 group"
            >
              <Download className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors" />
              View Credentials
            </button>
          </motion.div>
        </div>

        {/* Right Side: Interactive 3D Holographic Card Viewport */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center perspective-1000 select-none cursor-pointer"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full max-w-[380px] h-[480px] glass-panel border border-white/10 rounded-[35px] p-6 relative flex flex-col justify-between shadow-2xl transition-all duration-200 group hover:border-accent/40 hover:shadow-accent/5"
          >
            {/* Absolute internal neon lights for high-tech HUD visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-zylo-purple/5 rounded-[35px] pointer-events-none" />
            <div className="absolute top-12 left-12 right-12 bottom-12 rounded-full border border-dashed border-white/5 animate-spin pointer-events-none" style={{ animationDuration: '40s' }} />
            
            {/* Holographic Spinning Wireframe inside the card */}
            <div 
              style={{ transform: "translateZ(80px)" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none transform-style-3d"
            >
              <div className="relative w-44 h-44 flex items-center justify-center">
                {/* Neon Ring 1 */}
                <motion.div 
                  animate={{ rotate: 360, rotateY: 70 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full rounded-full border border-accent/25 shadow-[0_0_20px_rgba(212,255,63,0.1)]"
                />
                {/* Neon Ring 2 */}
                <motion.div 
                  animate={{ rotate: -360, rotateX: 70 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[80%] h-[80%] rounded-full border border-zylo-purple/35 shadow-[0_0_25px_rgba(194,20,255,0.15)]"
                />
                {/* Core Neon Sphere */}
                <motion.div 
                  animate={{ scale: [0.95, 1.1, 0.95] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-accent via-zylo-blue to-zylo-purple flex items-center justify-center opacity-85 shadow-[0_0_30px_rgba(212,255,63,0.4)]"
                >
                  <Cpu className="w-6 h-6 text-black animate-pulse" />
                </motion.div>
              </div>
            </div>

            {/* Top HUD Card Info */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase">MATRIX ENGINE V1.4</span>
              </div>
              <span className="font-mono text-[9px] text-gray-500 uppercase">COIMBATORE // IND</span>
            </div>

            {/* Dynamic floating stat values displaying core areas */}
            <div className="space-y-4 relative z-10">
              <div 
                style={{ transform: "translateZ(30px)" }}
                className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between hover:bg-black/60 transition-all group/item"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                    <Gamepad2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">UNREAL ENGINE 5</h4>
                    <p className="text-[9px] font-mono text-gray-500">REAL-TIME 3D DESIGN</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-accent font-bold">80%</span>
              </div>

              <div 
                style={{ transform: "translateZ(50px)" }}
                className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between hover:bg-black/60 transition-all group/item"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zylo-blue/15 flex items-center justify-center text-zylo-blue">
                    <Cpu className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">WEB SYSTEM</h4>
                    <p className="text-[9px] font-mono text-gray-500">REACT / VITE / TS</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-zylo-blue font-bold">85%</span>
              </div>
            </div>

            {/* Bottom Tech parameters */}
            <div 
              style={{ transform: "translateZ(20px)" }} 
              className="flex justify-between items-end"
            >
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Status Matrix</p>
                <h3 className="text-sm font-bold font-serif text-white tracking-wide flex items-center gap-1">
                  INTERACTIVE_HUD <ChevronRight className="w-3.5 h-3.5 text-accent" />
                </h3>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-mono text-gray-500">COORDINATE_DRAFT</p>
                <p className="text-[10px] font-mono text-white font-bold">X: 11.018 N // Y: 76.955 E</p>
              </div>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
