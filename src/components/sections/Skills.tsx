import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories, technicalArsenal } from '../../data/skills';
import { Network, Terminal, Shield, Cpu, Activity, Server, HardDrive } from 'lucide-react';

// Custom skill grid background for the Skills section
const GridBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.05] pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#smallGrid)" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" className="text-tactical-primary" />
    </svg>
  </div>
);

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 min-h-screen bg-slate-950 overflow-hidden">
      <GridBackground />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="font-mono text-sm tracking-widest text-tactical-primary border border-tactical-primary/30 px-3 py-1 bg-tactical-primary/5">
            02 // CAPABILITIES
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-tactical-primary/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Skill Categories */}
          <div>
            <h3 className="text-2xl font-display tracking-widest mb-8 text-slate-300">
              NETWORK INFRASTRUCTURE LAB
            </h3>
            
            <div className="space-y-6">
              {skillCategories.map((category, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border border-slate-800 bg-tactical-surface/30 p-6 group hover:border-tactical-primary/40 transition-colors relative"
                >
                  <div className="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 rounded-full bg-tactical-primary shadow-[0_0_8px_#06b6d4]" />
                  </div>
                  
                  <h4 className="font-mono text-tactical-primary tracking-widest mb-4 flex items-center gap-2">
                    <span className="text-slate-600">[{String(idx + 1).padStart(2, '0')}]</span>
                    {category.title}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="font-mono text-xs text-slate-400 bg-slate-900/80 border border-slate-800 px-2 py-1 group-hover:text-slate-300 group-hover:border-slate-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Technical Arsenal */}
          <div>
            <h3 className="text-2xl font-display tracking-widest mb-8 text-slate-300 flex items-center justify-between">
              <span>TECHNICAL ARSENAL</span>
              <span className="font-mono text-xs text-tactical-primary/50">SYS.TOOLKIT</span>
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {technicalArsenal.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="border border-slate-800 bg-slate-900/50 p-4 flex flex-col items-center justify-center text-center gap-3 group hover:border-tactical-primary/50 hover:bg-tactical-primary/5 transition-all clip-tactical-edge"
                >
                  <div className="text-slate-500 group-hover:text-tactical-primary transition-colors duration-300 group-hover:-translate-y-1 transform">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-display font-bold tracking-wider text-slate-200 group-hover:text-white">{item.name}</div>
                    <div className="font-mono text-[10px] tracking-widest text-tactical-primary/60">{item.category}</div>
                  </div>
                </motion.div>
              ))}
              
              {/* Empty placeholder card to complete the grid if odd */}
              {technicalArsenal.length % 2 !== 0 && (
                <div className="border border-slate-800 border-dashed bg-transparent p-4 flex flex-col items-center justify-center opacity-20">
                  <div className="w-8 h-8 border border-slate-600 rounded-full flex items-center justify-center font-mono text-xs">+</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
