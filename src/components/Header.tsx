import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Send, Command } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link tracker on scroll
      const sections = ['home', 'about', 'projects', 'skills', 'credentials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 md:px-10 flex justify-center ${scrolled ? 'mt-2' : 'mt-4'}`}>
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full max-w-6xl glass-panel rounded-full px-6 py-3 flex items-center justify-between border border-white/5 shadow-2xl transition-all duration-300 ${scrolled ? 'py-2 bg-black/80 shadow-accent/5 shadow-lg' : 'bg-black/40'}`}
      >
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 font-serif text-lg font-extrabold tracking-wider text-white hover:text-accent group"
        >
          <Command className="w-5 h-5 text-accent group-hover:rotate-45 transition-transform" />
          <span>KOUSHIK <span className="text-accent text-[9px] font-mono">// MATRIX</span></span>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all relative ${
                activeSection === item.id 
                  ? 'text-accent font-bold' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeSection === item.id && (
                <motion.span 
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-white/5 rounded-full border border-white/10 -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Theme + Action CTAs */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme switcher integrated elegantly */}
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent hover:bg-accent/10 transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="relative px-5 py-2.5 bg-accent hover:bg-accent/90 text-black text-xs font-mono font-extrabold tracking-widest rounded-full flex items-center gap-1.5 shadow-lg hover:shadow-accent/20 transition-all overflow-hidden group hover:scale-105 duration-300"
          >
            <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            LET'S TALK
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-18 left-4 right-4 z-40 bg-black/95 border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-3 px-4 rounded-xl text-left text-xs font-mono uppercase tracking-widest border transition-all ${
                    activeSection === item.id 
                      ? 'bg-accent/15 border-accent text-accent font-extrabold' 
                      : 'border-transparent text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="py-3.5 bg-accent hover:bg-accent/95 text-black text-xs font-mono font-extrabold tracking-widest rounded-xl flex items-center justify-center gap-2 w-full mt-2"
            >
              <Send className="w-3.5 h-3.5" />
              LET'S TALK
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
