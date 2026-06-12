import { Mail, Phone, Linkedin, MapPin, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export function Sidebar() {
  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="md:fixed top-0 left-0 h-auto md:h-screen w-full md:w-80 lg:w-96 bg-sidebar text-white p-8 md:p-12 flex flex-col justify-center shadow-2xl z-20"
    >
      <div className="flex flex-col items-center md:items-start space-y-6">
        <div className="relative group w-40 h-40 rounded-full overflow-hidden border-4 border-accent shadow-lg self-center md:self-start">
          <img 
            src="https://single-rose-27r6w3d3.edgeone.app/IMG_20260612_190205.png" 
            alt="Koushik N" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-sidebar/20 mix-blend-overlay pointer-events-none"></div>
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold tracking-tight text-white">KOUSHIK N</h1>
          <p className="text-gray-300 font-medium tracking-wide uppercase text-sm mt-2">Innovative Engineer</p>
        </div>

        <div className="w-full h-px bg-white/20 my-4" />

        <div className="space-y-4 w-full">
          <ContactItem icon={Phone} text="9360575932" href="tel:9360575932" />
          <ContactItem icon={Mail} text="Rns.koushik@gmail.com" href="mailto:Rns.koushik@gmail.com" />
          <ContactItem icon={Linkedin} text="koushik--n" href="https://linkedin.com/in/koushik--n" />
          <ContactItem icon={Instagram} text="_Koushik_25" href="https://instagram.com/_koushik_25" />
          <ContactItem icon={MapPin} text="India" />
        </div>

        <div className="w-full h-px bg-white/20 my-4" />
        
        <div className="w-full">
            <h3 className="text-lg font-serif font-bold mb-4 text-accent">Languages</h3>
            <div className="space-y-3 text-sm">
                <LanguageItem name="English" level="Fluent" percentage={95} />
                <LanguageItem name="Tamil" level="Fluent" percentage={95} />
                <LanguageItem name="Telugu" level="Intermediate" percentage={60} />
            </div>
        </div>
      </div>
    </motion.aside>
  );
}

function ContactItem({ icon: Icon, text, href }: { icon: any, text: string, href?: string }) {
  const content = (
    <>
      <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
      <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{text}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group w-max">
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center space-x-3 group w-max">
      {content}
    </div>
  );
}

function LanguageItem({ name, level, percentage }: { name: string, level: string, percentage: number }) {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-gray-200">{name}</span>
                <span className="text-gray-400 text-xs">{level}</span>
            </div>
            <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-accent"
                />
            </div>
        </div>
    )
}
