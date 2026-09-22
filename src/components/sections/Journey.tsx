import React from 'react';
import { motion } from 'framer-motion';
import { journeyData, certificationsData } from '../../data/journey';
import { ChevronDown, Award } from 'lucide-react';

export const Journey = () => {
  return (
    <section id="journey" className="relative py-24 min-h-screen bg-tactical-bg">
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTUsMjMsNDIsMC41KSIvPjwvc3ZnPg==')] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="font-mono text-sm tracking-widest text-tactical-primary border border-tactical-primary/30 px-3 py-1 bg-tactical-primary/5">
            05 // SYSTEM DEVELOPMENT LOG
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-tactical-primary/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Journey Timeline */}
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-800" />
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-tactical-primary via-tactical-accent to-transparent origin-top scale-y-100" />

            <div className="space-y-12">
              {journeyData.map((step, idx) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-16 group"
                >
                  {/* Timeline node */}
                  <div className="absolute left-[21px] top-1.5 w-3 h-3 bg-tactical-bg border border-tactical-primary rounded-full group-hover:bg-tactical-primary transition-colors shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                  
                  <div className="font-mono text-xl text-tactical-primary/50 mb-2 group-hover:text-tactical-primary transition-colors">
                    {step.id}
                  </div>
                  <h3 className="text-2xl font-display font-bold tracking-widest text-slate-200 mb-3 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-body text-slate-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Certifications */}
          <div>
            <h3 className="text-2xl font-display tracking-widest mb-8 text-slate-300 flex items-center gap-3">
              VERIFICATION DATABASE
              <Award className="text-tactical-primary/50" size={20} />
            </h3>

            {certificationsData.length === 0 ? (
              <div className="border border-slate-800 border-dashed bg-slate-900/30 p-12 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center mb-4 opacity-50">
                  <div className="w-1 h-8 bg-slate-700 rotate-45 absolute" />
                  <div className="w-1 h-8 bg-slate-700 -rotate-45 absolute" />
                </div>
                <div className="font-mono text-sm tracking-widest text-slate-500">
                  NO VERIFIED CERTIFICATIONS REGISTERED
                </div>
                <div className="font-mono text-[10px] tracking-widest text-slate-600 mt-2">
                  AWAITING DATA INPUT
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {certificationsData.map((cert: any, idx: number) => (
                  <div key={idx} className="border border-slate-700 bg-tactical-surface p-6 clip-tactical-edge hover:border-tactical-primary/50 transition-colors">
                    <div className="font-display font-bold text-lg text-slate-200">{cert.title}</div>
                    <div className="font-mono text-xs text-tactical-primary mt-1">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-12 bg-tactical-surface/50 border border-slate-800 p-6">
              <div className="font-mono text-xs text-tactical-primary/50 mb-4">SYSTEM_LOG_ANALYSIS</div>
              <div className="flex flex-col gap-2 font-mono text-[10px] text-slate-500">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span>LEARNING_RATE</span>
                  <span className="text-tactical-accent">OPTIMAL</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span>KNOWLEDGE_RETENTION</span>
                  <span className="text-tactical-accent">98.5%</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span>SKILL_ACQUISITION</span>
                  <span className="text-tactical-accent">ACCELERATING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
