import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Topology Background will go behind this */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="mb-6 inline-flex items-center gap-2 border border-tactical-primary/30 bg-tactical-primary/5 px-3 py-1 font-mono text-xs tracking-widest text-tactical-primary">
            <div className="w-1.5 h-1.5 bg-tactical-primary animate-pulse" />
            NODE ID: {profileData.nodeId}
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-widest mb-2 text-shadow-tactical">
            {profileData.name.split('-')[0]}<span className="text-tactical-primary">-</span>{profileData.name.split('-')[1]}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-300 tracking-[0.2em] mb-8">
            // {profileData.title}
          </h2>
          
          <p className="font-mono text-slate-400 max-w-xl mb-12 leading-relaxed border-l-2 border-tactical-primary/50 pl-4 text-sm md:text-base bg-gradient-to-r from-tactical-primary/5 to-transparent py-2">
            {profileData.description}
          </p>
          
          <div className="flex flex-wrap gap-4 font-mono text-sm tracking-widest">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-tactical-primary text-tactical-bg font-bold px-8 py-3 clip-tactical-edge hover:bg-tactical-primary-hover transition-colors relative overflow-hidden group shadow-[0_0_15px_rgba(6,182,212,0.5)]"
            >
              <span className="relative z-10">EXPLORE SYSTEM</span>
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-tactical-primary text-tactical-primary font-bold px-8 py-3 clip-tactical-edge-reverse hover:bg-tactical-primary/10 transition-colors"
            >
              CONTACT OPERATOR
            </button>
          </div>
        </motion.div>
        
        {/* Right side - decorative tactical elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:flex flex-1 justify-end"
        >
          <div className="w-96 h-96 relative flex items-center justify-center">
            {/* Radar / Core UI */}
            <div className="absolute inset-0 rounded-full border border-tactical-primary/10 bg-tactical-bg/40 backdrop-blur-sm" />
            <div className="absolute inset-4 rounded-full border border-tactical-primary/20 border-dashed animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-12 rounded-full border-t-2 border-r-2 border-tactical-accent/40 animate-[spin_15s_linear_infinite_reverse]" />
            
            <div className="absolute w-[120%] h-[1px] bg-tactical-primary/20 rotate-45" />
            <div className="absolute w-[120%] h-[1px] bg-tactical-primary/20 -rotate-45" />
            
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-tactical-bg/80 backdrop-blur-md p-6 rounded-full border border-tactical-primary/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <div className="font-mono text-xs text-tactical-primary mb-1 tracking-widest opacity-80">SYS.STATUS</div>
              <div className="font-display text-3xl tracking-widest text-shadow-tactical text-tactical-primary font-bold">{profileData.systemStatus}</div>
              <div className="mt-2 flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-6 bg-tactical-primary ${i === 4 ? 'opacity-20 animate-pulse' : 'opacity-80'}`} />
                ))}
              </div>
            </div>
            
            {/* Radar scanner sweep */}
            <div 
              className="absolute top-1/2 left-1/2 w-[50%] h-[2px] bg-gradient-to-r from-transparent via-tactical-primary/50 to-tactical-primary origin-left animate-[spin_4s_linear_infinite]" 
              style={{ filter: 'drop-shadow(0 0 5px rgba(6,182,212,0.8))' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
