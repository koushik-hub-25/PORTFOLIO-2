import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

export function TechBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-softgray dark:bg-[#0b0f17] transition-colors duration-500"
    >
      {/* Dynamic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.15]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #496A6A 1px, transparent 1px),
            linear-gradient(to bottom, #496A6A 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Cyber Diagonal Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #B79E97 0px, #B79E97 1px, transparent 0px, transparent 20px)`,
        }}
      />

      {/* Glowing Ambient Orb 1 (Muted Teal Green) */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sidebar/20 dark:bg-sidebar/10 blur-[130px]"
      />

      {/* Glowing Ambient Orb 2 (Dusty Rose / Beige) */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -70, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-45 -right-45 w-[550px] h-[550px] rounded-full bg-accent/20 dark:bg-accent/10 blur-[130px]"
      />

      {/* Mouse Spotlight / Torch light effect */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-60 dark:opacity-80"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(183, 158, 151, 0.08) 0%, rgba(73, 106, 106, 0.04) 50%, transparent 100%)`,
        }}
      />

      {/* Subtle tech horizontal scanning line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent dark:via-accent/20 animate-pulse pointer-events-none" 
           style={{ animationDuration: '4s' }} />
    </div>
  );
}
