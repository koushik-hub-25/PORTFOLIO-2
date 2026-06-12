import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { Mail, Send, Copy, CheckCircle2, Linkedin, Instagram, Phone } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
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
          <h3 className="text-3xl font-serif font-bold mb-6 text-charcoal dark:text-white leading-tight">Let's build something <br/> <span className="text-sidebar dark:text-accent">together</span></h3>
          <p className="text-gray-600 dark:text-gray-400 font-light mb-8 max-w-md">
            I'm currently available for freelance projects and full-time opportunities. If you think we'd be a good fit, I'd love to hear from you.
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
              <SocialLink href="https://instagram.com/_koushik_25" icon={Instagram} />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sidebar dark:focus:ring-accent transition-all text-gray-800 dark:text-gray-200" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="emailForm" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
              <input type="email" id="emailForm" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sidebar dark:focus:ring-accent transition-all text-gray-800 dark:text-gray-200" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sidebar dark:focus:ring-accent transition-all text-gray-800 dark:text-gray-200 resize-none" placeholder="How can I help you?"></textarea>
            </div>
            <button type="button" className="w-full py-4 bg-sidebar hover:bg-sidebar/90 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function ContactInfoCard({ icon: Icon, label, value, type, copied, onCopy }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 group hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-sidebar/10 dark:bg-accent/10 flex items-center justify-center group-hover:bg-sidebar group-hover:text-white dark:group-hover:bg-accent transition-colors">
          <Icon className="w-5 h-5 text-sidebar dark:text-accent group-hover:text-white transition-colors" />
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</p>
          <p className="font-medium text-gray-800 dark:text-gray-200">{value}</p>
        </div>
      </div>
      <button 
        onClick={() => onCopy(value, type)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-400 group-hover:text-sidebar dark:group-hover:text-accent"
        aria-label={`Copy ${label}`}
      >
        {copied === type ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
      </button>
    </div>
  )
}

function SocialLink({ href, icon: Icon }: any) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:bg-sidebar dark:hover:bg-accent hover:border-transparent transition-all shadow-sm hover:shadow-md">
      <Icon className="w-5 h-5" />
    </a>
  );
}
