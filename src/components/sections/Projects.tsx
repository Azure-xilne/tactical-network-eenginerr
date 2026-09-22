import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projects';
import { Terminal, Crosshair, ChevronRight } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 min-h-screen bg-tactical-bg">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-tactical-bg to-tactical-surface/50" />
        <div className="absolute right-0 top-0 w-1/3 h-full border-l border-tactical-primary/10 bg-tactical-primary/5 transform -skew-x-12 translate-x-32" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="font-mono text-sm tracking-widest text-tactical-primary border border-tactical-primary/30 px-3 py-1 bg-tactical-primary/5">
            03 // ACTIVE OPERATIONS
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-tactical-primary/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-tactical-primary to-tactical-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm clip-tactical-edge" />
              <div className="relative bg-tactical-surface border border-slate-700 p-8 h-full flex flex-col clip-tactical-edge group-hover:border-tactical-primary/50 transition-colors">
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2 text-tactical-primary">
                    <Crosshair size={16} className="group-hover:animate-[spin_3s_linear_infinite]" />
                    <span className="font-mono text-sm tracking-widest">{project.id}</span>
                  </div>
                  <div className={`font-mono text-[10px] tracking-widest px-2 py-1 border ${
                    project.status === 'COMPLETED' ? 'border-tactical-primary/50 text-tactical-primary' :
                    project.status === 'IN PROGRESS' ? 'border-tactical-warning/50 text-tactical-warning' :
                    'border-slate-500 text-slate-500'
                  }`}>
                    {project.status}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold tracking-widest text-slate-200 mb-4 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="font-body text-slate-400 mb-8 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="font-mono text-xs text-slate-500 mb-2 flex items-center gap-2">
                    <Terminal size={12} /> TECH.STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="font-mono text-[10px] tracking-wider text-slate-300 bg-slate-800/50 px-2 py-1 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Decorative UI line */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-tactical-primary/0 group-hover:border-tactical-primary/50 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
