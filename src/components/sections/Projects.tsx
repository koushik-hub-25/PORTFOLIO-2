import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { Github, ExternalLink, Car } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeader title="Projects" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow"
      >
        <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-24 h-24 shrink-0 rounded-2xl bg-sidebar/10 dark:bg-accent/10 flex flex-col items-center justify-center text-sidebar dark:text-accent">
            <Car className="w-10 h-10 mb-1" />
            <span className="text-[10px] font-bold tracking-widest uppercase">App</span>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-serif font-bold text-charcoal dark:text-white mb-2 group-hover:text-sidebar dark:group-hover:text-accent transition-colors">WERIDE</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 font-light leading-relaxed">
              An online application based on self-driving cars developed using FlutterFlow. It aims to revolutionize ride-hailing and transportation by integrating autonomous vehicle concepts, focusing on user experience, reliability, and modern UI design.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['FlutterFlow', 'Mobile Development', 'UI/UX'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-50 dark:bg-gray-900 text-xs font-medium text-gray-600 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-800">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex justify-center items-center gap-2 px-5 py-2.5 bg-sidebar hover:bg-sidebar/90 text-white rounded-xl text-sm font-medium transition-colors">
                <ExternalLink className="w-4 h-4" />
                View Project
              </button>
              <button className="flex justify-center items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white text-gray-800 dark:text-gray-200 rounded-xl text-sm font-medium transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
