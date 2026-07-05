import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Play, HelpCircle, TerminalSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface LogEntry {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
}

export function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<LogEntry[]>([
    { text: 'SYSTEM INTERFACE V4.2 ACTIVE // COGNITIVE LABS', type: 'success' },
    { text: 'Type "help" to view list of secure commands, or click the chips below.', type: 'output' }
  ]);
  const [matrixActive, setMatrixActive] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (commandStr: string) => {
    const trimmed = commandStr.trim().toLowerCase();
    if (!trimmed) return;

    const newLogs: LogEntry[] = [...history, { text: `koushik_terminal$ ${commandStr}`, type: 'input' }];

    switch (trimmed) {
      case 'help':
        newLogs.push({
          text: 'AVAILABLE MODULES:\n  help      - Display core interface directories\n  profile   - Print biological intelligence summary\n  skills    - List parsed specialized credentials\n  edu       - Extract educational chronologies\n  projects  - Inspect advanced engineering prototypes\n  matrix    - Initialize cascading data cascade\n  clear     - Wipe console buffer',
          type: 'output'
        });
        break;
      case 'profile':
      case 'bio':
        newLogs.push({
          text: 'BIOLOGICAL DOSSIER // KOUSHIK N\n-------------------------------\nROLE: Innovative Engineer & Creator\nPASSION: Software Development, Video Editing, VFX, UI/UX\nSTATUS: Actively learning and building digital interfaces.',
          type: 'output'
        });
        break;
      case 'skills':
        newLogs.push({
          text: 'TECHNICAL COMPETENCIES:\n  [||||||||||] Video Editing (Advanced - 90%)\n  [||||||||| ] Web Development (Advanced - 85%)\n  [||||      ] Photo Editing (Beginner - 40%)\n\nPROGRAMMING KERNEL:\n  C, C++, Python, Java, HTML, CSS, JavaScript, FlutterFlow',
          type: 'output'
        });
        break;
      case 'edu':
      case 'education':
        newLogs.push({
          text: 'EDUCATION SCHEMATICS:\n  * SNS College of Engineering (BE - 2024 to 2028)\n  * Velammal Bodhi Campus (HSC - 74.2%)\n  * Amrita Vidyalayam (SSLC - 72.8%)',
          type: 'output'
        });
        break;
      case 'projects':
        newLogs.push({
          text: 'PROJECT PROFILE // [WERIDE]\n-----------------------------\nDESCRIPTION: High-efficiency application centered on self-driving vehicle technologies.\nARCHITECTURE: Built utilizing FlutterFlow.\nSTATUS: Active Prototype',
          type: 'success'
        });
        break;
      case 'matrix':
        setMatrixActive(true);
        newLogs.push({ text: 'MATRIX FLOW INITIALIZED. COLLAPSING CONSOLE STREAM...', type: 'success' });
        setTimeout(() => setMatrixActive(false), 8000);
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newLogs.push({
          text: `Command not recognized: "${trimmed}". Type "help" for support.`,
          type: 'error'
        });
    }

    setHistory(newLogs);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="relative rounded-2xl bg-black/95 dark:bg-black border border-sidebar/30 dark:border-accent/30 overflow-hidden shadow-2xl font-mono text-sm text-green-400">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-sidebar/20 dark:border-accent/20">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs text-gray-400 ml-2 flex items-center gap-1.5 font-sans">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            koushik_v4_shell.sh
          </span>
        </div>
        <div className="text-xs text-gray-500 flex items-center gap-1">
          <Shield className="w-3 h-3 text-green-500" /> Secure Node
        </div>
      </div>

      {/* Matrix Overlay screen */}
      {matrixActive ? (
        <div className="h-64 p-4 overflow-y-hidden relative bg-black select-none text-[10px] leading-3 text-green-500/90">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <motion.div
            initial={{ y: -300 }}
            animate={{ y: 50 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="whitespace-pre overflow-hidden"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="flex gap-4 filter blur-[0.3px]" style={{ opacity: 1 - i * 0.05 }}>
                {Array.from({ length: 8 }).map((_, j) => (
                  <span key={j} style={{ color: Math.random() > 0.5 ? '#B79E97' : '#496A6A' }}>
                    {Math.random().toString(36).substring(2, 10).toUpperCase()}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
          <div className="absolute top-4 right-4 bg-black/80 px-2 py-1 border border-green-500/30 text-xs rounded animate-pulse">
            DATA CASCADE FLOWING
          </div>
        </div>
      ) : (
        /* Standard Screen */
        <div className="h-64 p-4 overflow-y-auto space-y-2 select-text scrollbar-thin scrollbar-thumb-sidebar/30">
          {history.map((log, idx) => (
            <div key={idx} className="whitespace-pre-wrap leading-relaxed">
              {log.type === 'input' && (
                <span className="text-accent font-semibold">{log.text}</span>
              )}
              {log.type === 'output' && (
                <span className="text-gray-300">{log.text}</span>
              )}
              {log.type === 'success' && (
                <span className="text-green-400">{log.text}</span>
              )}
              {log.type === 'error' && (
                <span className="text-red-400 font-medium">{log.text}</span>
              )}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>
      )}

      {/* Input Prompt Section */}
      <div className="flex items-center px-4 py-3 bg-gray-900/40 border-t border-sidebar/10 dark:border-accent/10">
        <span className="text-accent font-bold shrink-0 mr-2">koushik_terminal$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={matrixActive}
          className="flex-1 bg-transparent border-none outline-none text-green-300 font-mono text-sm focus:ring-0 placeholder-green-900/60"
          placeholder={matrixActive ? "Executing data stream..." : "Type help, profile, skills..."}
        />
        <button
          onClick={() => handleCommand(input)}
          disabled={matrixActive}
          className="p-1.5 bg-sidebar hover:bg-sidebar/80 dark:bg-accent/20 dark:hover:bg-accent/40 rounded-lg text-white dark:text-accent transition-colors"
          title="Run query"
        >
          <Play className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Direct Click Chip Options */}
      <div className="flex flex-wrap gap-1.5 p-3 bg-gray-900/20 border-t border-sidebar/10 dark:border-accent/10">
        {['help', 'profile', 'skills', 'edu', 'projects', 'matrix'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            disabled={matrixActive}
            className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-sidebar/10 hover:bg-sidebar/20 text-sidebar dark:text-accent dark:bg-accent/10 dark:hover:bg-accent/20 transition-all border border-sidebar/10 dark:border-accent/10"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
