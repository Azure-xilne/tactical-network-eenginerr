import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';
import { Database, Shield, Terminal, Cpu } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="relative py-24 min-h-screen flex items-center bg-tactical-bg/80">
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNiwxODIsMjEyLDAuMSkiLz48L3N2Zz4=')] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="font-mono text-sm tracking-widest text-tactical-primary border border-tactical-primary/30 px-3 py-1 bg-tactical-primary/5">
            01 // PROFILE
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-tactical-primary/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left panel - Main text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-tactical-surface/50 border border-slate-800 p-8 clip-tactical-edge relative group"
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-tactical-primary opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <h2 className="text-3xl font-display font-bold tracking-widest mb-6 text-slate-200">
              {profileData.about.title}
            </h2>
            <p className="font-body text-slate-400 leading-relaxed text-lg mb-8">
              {profileData.about.content}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 font-mono text-sm">
              {profileData.about.attributes.map((attr, idx) => (
                <div key={idx} className="border border-slate-800 p-3 bg-slate-900/50 flex flex-col gap-1">
                  <span className="text-tactical-primary/70 text-xs">{attr.label}</span>
                  <span className="text-slate-300 tracking-wider">{attr.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right panel - Stats/HUD */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="bg-tactical-surface/40 border border-tactical-primary/20 p-6 flex gap-6 items-center group hover:bg-tactical-primary/5 transition-colors">
              <div className="p-4 bg-tactical-bg border border-tactical-primary/30 text-tactical-primary shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-shadow">
                <Database size={24} />
              </div>
              <div>
                <div className="font-mono text-xs text-tactical-primary/70 mb-1">CORE SPECIALTY</div>
                <div className="font-display tracking-widest text-xl text-slate-200">ROUTING & SWITCHING</div>
              </div>
            </div>

            <div className="bg-tactical-surface/40 border border-tactical-primary/20 p-6 flex gap-6 items-center group hover:bg-tactical-primary/5 transition-colors">
              <div className="p-4 bg-tactical-bg border border-tactical-primary/30 text-tactical-primary shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-shadow">
                <Shield size={24} />
              </div>
              <div>
                <div className="font-mono text-xs text-tactical-primary/70 mb-1">SECONDARY FOCUS</div>
                <div className="font-display tracking-widest text-xl text-slate-200">NETWORK SECURITY</div>
              </div>
            </div>

            {/* Decorative logs */}
            <div className="flex-grow bg-slate-900/50 border border-slate-800 p-4 font-mono text-xs text-slate-500 overflow-hidden relative">
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none" />
              <div className="animate-[scroll_20s_linear_infinite]">
                <div className="opacity-50 hover:opacity-100 hover:text-tactical-primary transition-colors cursor-default">
                  [SYS] Loading profile data... OK
                </div>
                <div className="opacity-50 hover:opacity-100 hover:text-tactical-primary transition-colors cursor-default">
                  [SYS] Verifying credentials... AUTHENTICATED
                </div>
                <div className="opacity-50 hover:opacity-100 hover:text-tactical-primary transition-colors cursor-default">
                  [SYS] Accessing core network nodes... ESTABLISHED
                </div>
                <div className="opacity-50 hover:opacity-100 hover:text-tactical-primary transition-colors cursor-default">
                  [NET] Interface eth0: link up, 10Gbps, full-duplex
                </div>
                <div className="opacity-50 hover:opacity-100 hover:text-tactical-primary transition-colors cursor-default mt-2">
                  <span className="text-tactical-warning">_</span> AWAITING FURTHER COMMANDS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
