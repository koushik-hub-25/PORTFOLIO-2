import { motion } from 'motion/react';
import { Download, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex flex-col justify-center pt-12 md:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl"
      >
        <span className="text-sidebar dark:text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
          Welcome to my portfolio
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal dark:text-white leading-tight mb-6">
          Hello, I'm <br />
          <span className="text-sidebar dark:text-accent">Koushik N</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light mb-8 max-w-xl leading-relaxed">
          An Innovative Engineer crafting impactful digital solutions through technology and creativity.
        </h2>
        
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="px-6 py-3 bg-sidebar hover:bg-sidebar/90 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
          <button className="px-6 py-3 bg-white dark:bg-gray-800 text-charcoal dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-sidebar dark:hover:border-accent rounded-full font-medium transition-all flex items-center gap-2 group">
            <Download className="w-5 h-5 text-gray-400 group-hover:text-sidebar dark:group-hover:text-accent transition-colors" />
            Download Resume
          </button>
        </div>
      </motion.div>
    </section>
  );
}
