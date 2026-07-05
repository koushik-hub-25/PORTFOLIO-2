import { SectionHeader } from '../SectionHeader';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Copy, CheckCircle2, Linkedin, Code, Phone, Wifi } from 'lucide-react';
import React, { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate high-tech data transmit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="scroll-mt-24 pb-24">
      <SectionHeader title="Get In Touch" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl md:text-4xl font-serif font-black mb-6 text-charcoal dark:text-white leading-tight">
            Let's build something <br/> 
            <span className="text-sidebar dark:text-accent relative inline-block">
              together
              <span className="absolute bottom-1 left-0 w-full h-1 bg-accent/30 dark:bg-accent/40" />
            </span>
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 font-light mb-8 max-w-md font-sans">
            I'm currently available for innovative engineering projects, VFX development, and creative digital designs. If you think we'd be a good fit, launch a contact signal below.
          </p>

          <div className="space-y-4">
            <ContactInfoCard 
              icon={Mail} 
              label="Email" 
              value="Rns.koushik@gmail.com" 
              type="email"
              copied={copied}
              onCopy={copyToClipboard}
            />
            <ContactInfoCard 
              icon={Phone} 
              label="Phone" 
              value="9360575932" 
              type="phone"
              copied={copied}
              onCopy={copyToClipboard}
            />
          </div>

          <div className="mt-8 flex gap-4">
            <SocialLink href="https://linkedin.com/in/koushik--n" icon={Linkedin} />
            <SocialLink href="https://leetcode.com/u/_koushik_25/" icon={Code} />
          </div>
        </motion.div>

        {/* High Tech Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="cyber-card bg-white/70 dark:bg-[#111926]/55 backdrop-blur-md p-8 rounded-3xl border border-gray-200/50 dark:border-gray-800/40 hover:shadow-2xl hover:shadow-[#496a6a]/5 dark:hover:shadow-[#496a6a]/5 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sidebar/5 to-transparent pointer-events-none rounded-tr-3xl" />
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                01 // Your Name
              </label>
              <input 
                type="text" 
                id="name" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting || isSuccess}
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-sidebar dark:focus:ring-accent transition-all text-gray-800 dark:text-gray-200 font-sans" 
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label htmlFor="emailForm" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                02 // Email Node
              </label>
              <input 
                type="email" 
                id="emailForm" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || isSuccess}
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-sidebar dark:focus:ring-accent transition-all text-gray-800 dark:text-gray-200 font-sans" 
                placeholder="john@example.com" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                03 // Query Payload
              </label>
              <textarea 
                id="message" 
                rows={4} 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting || isSuccess}
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-sidebar dark:focus:ring-accent transition-all text-gray-800 dark:text-gray-200 resize-none font-sans" 
                placeholder="How can I help you?"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess || !name || !email || !message}
              className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 select-none relative overflow-hidden ${
                isSuccess 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-sidebar dark:bg-accent text-white dark:text-charcoal hover:shadow-lg dark:hover:shadow-accent/15 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div 
                    key="submitting" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
                  >
                    <Wifi className="w-4 h-4 animate-pulse" />
                    Transmitting Payload...
                  </motion.div>
                ) : isSuccess ? (
                  <motion.div 
                    key="success" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Transmission Received!
                  </motion.div>
                ) : (
                  <motion.div 
                    key="idle" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Transmit Signal
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfoCard({ icon: Icon, label, value, type, copied, onCopy }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/40 dark:bg-[#111926]/40 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-900 group hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-sidebar/10 dark:bg-accent/15 flex items-center justify-center group-hover:bg-sidebar group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-charcoal transition-all duration-300">
          <Icon className="w-5 h-5 text-sidebar dark:text-accent group-hover:text-white dark:group-hover:text-charcoal transition-colors" />
        </div>
        <div>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-mono uppercase tracking-widest mb-0.5">{label}</p>
          <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{value}</p>
        </div>
      </div>
      <button 
        onClick={() => onCopy(value, type)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-400 group-hover:text-sidebar dark:group-hover:text-accent cursor-pointer"
        aria-label={`Copy ${label}`}
      >
        {copied === type ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  )
}

function SocialLink({ href, icon: Icon }: any) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-12 h-12 rounded-2xl bg-white/50 dark:bg-[#111926]/50 backdrop-blur-sm border border-gray-100 dark:border-gray-900 flex items-center justify-center text-gray-500 hover:text-white hover:bg-sidebar dark:hover:bg-accent dark:hover:text-charcoal hover:border-transparent transition-all shadow-sm hover:scale-105 duration-300"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
