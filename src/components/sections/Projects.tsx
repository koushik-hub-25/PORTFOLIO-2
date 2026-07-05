import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { Github, ExternalLink, Car, ShieldCheck, Cpu, RefreshCw } from 'lucide-react';
import { useState } from 'react';

type DriveMode = 'autopilot' | 'manual' | 'safety';

export function Projects() {
  const [driveMode, setDriveMode] = useState<DriveMode>('autopilot');

  const getTelemetryMessage = () => {
    switch (driveMode) {
      case 'autopilot':
        return "AUTOPILOT_ONLINE // LIDAR SWEEP: 360m // AI CONGRUENCE: 99.8%";
      case 'manual':
        return "DRIVER_OVERRIDE // ACCELERATION: STANDBY // TELEMETRY: DIRECT";
      case 'safety':
        return "SECURE_LOCKDOWN // BRK_STIFF: MAX // ACTUATORS: PARKING_SECURE";
    }
  };

  const getDiagnosticsClass = () => {
    switch (driveMode) {
      case 'autopilot':
        return "text-green-400 border-green-500/20 bg-green-500/5";
      case 'manual':
        return "text-yellow-400 border-yellow-500/20 bg-yellow-500/5";
      case 'safety':
        return "text-red-400 border-red-500/20 bg-red-500/5";
    }
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeader title="Projects" />
      
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="cyber-card group relative bg-white/70 dark:bg-[#111926]/55 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 hover:shadow-2xl hover:shadow-accent/5 dark:hover:shadow-[#496a6a]/5 transition-all duration-300"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-sidebar/5 to-transparent pointer-events-none rounded-tr-3xl" />
        
        <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Main info card */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sidebar/10 dark:bg-accent/15 flex items-center justify-center text-sidebar dark:text-accent">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-black text-charcoal dark:text-white group-hover:text-sidebar dark:group-hover:text-accent transition-colors">WERIDE</h3>
                  <p className="text-xs font-mono text-gray-400 dark:text-gray-500 tracking-wider">SECURE AUTO-VEHICLE SYSTEM</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 font-light leading-relaxed text-sm md:text-base font-sans">
                An online application based on self-driving cars developed using FlutterFlow. It aims to revolutionize ride-hailing and transportation by integrating autonomous vehicle concepts, focusing on user experience, reliability, and modern UI design.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['FlutterFlow', 'Self-Driving API', 'Visual Mockups', 'UI/UX Design'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-sidebar/5 dark:bg-accent/10 text-xs font-medium text-sidebar dark:text-accent rounded-full border border-sidebar/10 dark:border-accent/10 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex justify-center items-center gap-2 px-6 py-3 bg-sidebar hover:bg-sidebar/95 dark:bg-accent dark:hover:bg-accent/90 text-white dark:text-charcoal rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]">
                <ExternalLink className="w-4 h-4" />
                View Project
              </button>
              <button className="flex justify-center items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white text-gray-800 dark:text-gray-200 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]">
                <Github className="w-4 h-4" />
                GitHub Code
              </button>
            </div>
          </div>

          {/* Interactive Car Telemetry UI Component */}
          <div className="w-full lg:w-80 shrink-0 bg-gray-950 dark:bg-black/80 rounded-2xl border border-gray-800/80 p-5 flex flex-col justify-between font-mono text-xs text-gray-400 space-y-6 relative overflow-hidden">
            {/* Absolute vector details */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-accent/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 border border-accent/5 rounded-full pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                <span className="text-[10px] text-accent font-bold tracking-widest uppercase">Telemetry Stream</span>
                <span className="flex items-center gap-1 text-[9px] text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  ACTIVE
                </span>
              </div>

              {/* Dynamic simulated visual screen */}
              <div className="h-20 bg-gray-900 rounded-lg p-3 border border-gray-800/60 flex flex-col justify-between relative overflow-hidden">
                {/* Horizontal scanner light */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/30 animate-bounce pointer-events-none" style={{ animationDuration: '3s' }} />
                
                <div className="flex items-center justify-between text-[10px]">
                  <span>LAT: 11.018° N</span>
                  <span>LNG: 76.955° E</span>
                </div>
                <div className="text-center font-bold text-lg tracking-widest text-white mt-1 select-none">
                  {driveMode === 'autopilot' && "88 KM/H"}
                  {driveMode === 'manual' && "00 KM/H"}
                  {driveMode === 'safety' && "LOCKED"}
                </div>
                <div className="text-[8px] text-gray-500 text-right">COIMBATORE_SNS</div>
              </div>

              {/* Dynamic diagnostic telemetry message */}
              <div className={`p-2.5 rounded-lg border text-[9px] leading-relaxed transition-all duration-300 ${getDiagnosticsClass()}`}>
                {getTelemetryMessage()}
              </div>
            </div>

            {/* Simulated Interactive buttons */}
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-wider text-gray-500 block mb-1 font-bold">Override System Control</span>
              <div className="grid grid-cols-3 gap-1">
                {(['autopilot', 'manual', 'safety'] as DriveMode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setDriveMode(mode)}
                    className={`py-1.5 rounded text-[9px] uppercase font-bold tracking-wider transition-all border ${
                      driveMode === mode
                        ? 'bg-sidebar/20 border-sidebar text-sidebar dark:bg-accent/20 dark:border-accent dark:text-accent font-black'
                        : 'bg-transparent border-gray-800 text-gray-600 hover:border-gray-700 hover:text-gray-400'
                    }`}
                  >
                    {mode === 'autopilot' ? 'Pilot' : mode === 'manual' ? 'Manual' : 'Safe'}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
