import React from 'react';
import { Command } from 'lucide-react';

export function MarqueeTicker() {
  const words = [
    "WEB DEVELOPMENT",
    "UNREAL ENGINE 3D",
    "VIDEO & PHOTO EDITING",
    "SMART AGRI IoT",
    "FLUTTERFLOW",
    "SYSTEM C/C++ DEVS",
    "AI MODEL RESEARCH",
    "PREMIUM DESIGN",
  ];

  return (
    <div className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] overflow-hidden bg-black/60 border-y border-white/5 py-6 md:py-8 z-20 backdrop-blur-md">
      {/* Scroll forward marquee */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex whitespace-nowrap gap-10 sm:gap-16">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10 sm:gap-16 whitespace-nowrap">
              {words.map((word, index) => (
                <div key={index} className="flex items-center gap-4 sm:gap-6">
                  <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-black uppercase tracking-wider text-white">
                    {word}
                  </span>
                  <Command className="w-4 h-4 sm:w-6 sm:h-6 text-accent animate-spin" style={{ animationDuration: '8s' }} />
                  <span className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-outline uppercase tracking-wider">
                    {word}
                  </span>
                  <span className="text-accent text-lg sm:text-2xl">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
