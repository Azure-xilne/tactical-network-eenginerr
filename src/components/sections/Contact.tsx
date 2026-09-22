import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';
import { Terminal, Send, Code, Briefcase, Mail } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 min-h-screen bg-[#050B14] flex items-center overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-around opacity-5">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-px h-full bg-tactical-primary" />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="font-mono text-sm tracking-widest text-tactical-primary border border-tactical-primary/30 px-3 py-1 bg-tactical-primary/5">
            06 // SECURE COMMUNICATION TERMINAL
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-tactical-primary/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-widest text-slate-200 mb-6">
              ESTABLISH <br/>
              <span className="text-tactical-primary text-shadow-tactical">CONNECTION</span>
            </h2>
            <p className="font-mono text-slate-400 mb-12 leading-relaxed">
              System is ready to receive incoming transmissions. Open a secure channel for collaborations, inquiries, or network operations.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 border border-slate-700 bg-tactical-surface group-hover:border-tactical-primary group-hover:bg-tactical-primary/10 transition-colors">
                  <Code className="text-slate-400 group-hover:text-tactical-primary transition-colors" size={20} />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-500 tracking-widest">GITHUB_REPO</div>
                  <div className="font-display tracking-widest text-slate-200 group-hover:text-white transition-colors">github.com/{profileData.name.toLowerCase()}</div>
                </div>
              </a>
              
              <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 border border-slate-700 bg-tactical-surface group-hover:border-tactical-primary group-hover:bg-tactical-primary/10 transition-colors">
                  <Briefcase className="text-slate-400 group-hover:text-tactical-primary transition-colors" size={20} />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-500 tracking-widest">PROFESSIONAL_NETWORK</div>
                  <div className="font-display tracking-widest text-slate-200 group-hover:text-white transition-colors">linkedin.com/in/{profileData.name.toLowerCase()}</div>
                </div>
              </a>
              
              <a href={`mailto:${profileData.contact.email}`} className="flex items-center gap-4 group">
                <div className="p-3 border border-slate-700 bg-tactical-surface group-hover:border-tactical-primary group-hover:bg-tactical-primary/10 transition-colors">
                  <Mail className="text-slate-400 group-hover:text-tactical-primary transition-colors" size={20} />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-500 tracking-widest">DIRECT_COMMS</div>
                  <div className="font-display tracking-widest text-slate-200 group-hover:text-white transition-colors">{profileData.contact.email}</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Terminal Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#020617] border border-tactical-primary/30 p-1 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative"
          >
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-tactical-primary opacity-50" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-tactical-primary opacity-50" />
            
            <div className="bg-tactical-bg border border-slate-800 p-8 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-8 border-b border-slate-800 pb-4">
                <Terminal className="text-tactical-primary" size={16} />
                <span className="font-mono text-sm tracking-widest text-slate-300">CONNECTION REQUEST</span>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-grow">
                <div>
                  <label className="block font-mono text-xs tracking-widest text-tactical-primary/70 mb-2">NAME</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 p-3 font-mono text-sm text-slate-200 focus:outline-none focus:border-tactical-primary focus:bg-tactical-primary/5 transition-colors placeholder-slate-600"
                    placeholder="[________________]"
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-xs tracking-widest text-tactical-primary/70 mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 p-3 font-mono text-sm text-slate-200 focus:outline-none focus:border-tactical-primary focus:bg-tactical-primary/5 transition-colors placeholder-slate-600"
                    placeholder="[________________]"
                  />
                </div>
                
                <div className="flex-grow">
                  <label className="block font-mono text-xs tracking-widest text-tactical-primary/70 mb-2">MESSAGE</label>
                  <textarea 
                    required
                    className="w-full h-32 resize-none bg-slate-900/50 border border-slate-700 p-3 font-mono text-sm text-slate-200 focus:outline-none focus:border-tactical-primary focus:bg-tactical-primary/5 transition-colors placeholder-slate-600"
                    placeholder="[________________]"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={formState !== 'idle'}
                  className="mt-4 bg-tactical-primary/10 border border-tactical-primary text-tactical-primary font-bold tracking-widest py-4 hover:bg-tactical-primary hover:text-tactical-bg transition-colors flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group clip-tactical-edge"
                >
                  {formState === 'idle' && (
                    <>
                      [ TRANSMIT MESSAGE ]
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  {formState === 'submitting' && (
                    <span className="animate-pulse">ENCRYPTING AND TRANSMITTING...</span>
                  )}
                  {formState === 'success' && (
                    <span className="text-tactical-primary group-hover:text-tactical-bg">TRANSMISSION SUCCESSFUL</span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
