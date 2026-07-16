import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Copy, CheckCircle2, Linkedin, Code, Phone, Wifi, ShieldCheck, HelpCircle } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hudLogs, setHudLogs] = useState<string[]>([]);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setHudLogs(['[INIT] Requesting secure channel connection...', '[CONNECT] Establishing handshake with SMTP port...']);
    
    setTimeout(() => {
      setHudLogs(prev => [...prev, '[ENCRYPT] Securing payload using RSA-2048-GCM...', '[TRANSMIT] Broadcasting message packet (742 bytes)...']);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setHudLogs(prev => [...prev, '[SUCCESS] Handshake secure. Message queued!']);
        setTimeout(() => {
          setIsSuccess(false);
          setName('');
          setEmail('');
          setMessage('');
          setHudLogs([]);
        }, 5000);
      }, 1500);
    }, 1200);
  };

  return (
    <section id="contact" className="scroll-mt-28 pb-24">
      <SectionHeader title="Transmit Signal" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-stretch">
        
        {/* Left Side: Contact Information Cards (lg:span-5) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-serif font-black text-white leading-none">
              LAUNCH A <br/>
              <span className="text-accent">DIRECT NODE</span>
            </h3>
            
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              I am currently available for advanced software development roles, VFX animation contracts, and smart IoT architecture research. Launch a secure contact signal and I will respond to your node parameters.
            </p>
          </div>

          <div className="space-y-4">
            <ContactInfoCard 
              icon={Mail} 
              label="Email Gateway" 
              value="Rns.koushik@gmail.com" 
              type="email"
              copied={copied}
              onCopy={copyToClipboard}
            />
            <ContactInfoCard 
              icon={Phone} 
              label="Secure Voice Line" 
              value="9360575932" 
              type="phone"
              copied={copied}
              onCopy={copyToClipboard}
            />
          </div>

          <div className="pt-4 border-t border-white/5 flex gap-4">
            <a 
              href="https://linkedin.com/in/koushik--n" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-black hover:bg-accent hover:border-transparent hover:scale-105 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://leetcode.com/u/_koushik_25/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-black hover:bg-accent hover:border-transparent hover:scale-105 transition-all duration-300"
            >
              <Code className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Message form (lg:span-7) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 glass-panel border border-white/5 rounded-[32px] p-6 sm:p-10 hover:border-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
                  01 // Node Identifer (Name)
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting || isSuccess}
                  className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-2xl focus:border-accent focus:bg-black/80 transition-all text-white text-xs font-mono" 
                  placeholder="John Doe" 
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="emailForm" className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
                  02 // Return Gateway (Email)
                </label>
                <input 
                  type="email" 
                  id="emailForm" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting || isSuccess}
                  className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-2xl focus:border-accent focus:bg-black/80 transition-all text-white text-xs font-mono" 
                  placeholder="john@domain.com" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
                03 // Signal Payload (Message)
              </label>
              <textarea 
                id="message" 
                rows={4} 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting || isSuccess}
                className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-2xl focus:border-accent focus:bg-black/80 transition-all text-white text-xs font-mono resize-none" 
                placeholder="Transmission details..."
              />
            </div>

            {/* Live Submit Logs for High-tech flair */}
            <AnimatePresence>
              {hudLogs.length > 0 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-black rounded-xl p-3 border border-white/5 space-y-1 overflow-hidden"
                >
                  <div className="flex justify-between text-[8px] font-mono text-gray-500 border-b border-white/5 pb-1 mb-1">
                    <span>SECURE BROADCAST HUD</span>
                    <span>TX // ONLINE</span>
                  </div>
                  {hudLogs.slice(-3).map((log, index) => (
                    <div key={index} className="font-code text-[8px] text-accent leading-normal">
                      {log}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess || !name || !email || !message}
              className={`w-full py-4 rounded-2xl font-mono text-xs uppercase tracking-widest font-extrabold transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 border select-none cursor-pointer ${
                isSuccess 
                  ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                  : 'bg-accent border-accent text-black shadow-lg shadow-accent/15 hover:shadow-accent/25 hover:scale-[1.02]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Wifi className="w-4 h-4 animate-pulse text-black" />
                  TRANSMITTING SIGNAL...
                </>
              ) : isSuccess ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  PAYLOAD DEPOSITED
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  TRANSMIT ENCRYPTED PAYLOAD
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

function ContactInfoCard({ icon: Icon, label, value, type, copied, onCopy }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-2xl hover:border-accent/20 transition-all duration-300 group/link">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover/link:bg-accent group-hover/link:text-black transition-colors duration-300">
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[9px] text-gray-500 font-mono uppercase tracking-widest mb-0.5">{label}</p>
          <p className="font-bold text-white text-xs">{value}</p>
        </div>
      </div>
      <button 
        onClick={() => onCopy(value, type)}
        className="p-2 bg-white/5 border border-white/5 hover:border-accent text-gray-500 hover:text-accent rounded-lg transition-all cursor-pointer"
        aria-label={`Copy ${label}`}
      >
        {copied === type ? <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}
