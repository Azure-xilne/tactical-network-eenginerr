import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '../data/profile';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootLogs = [
  "INITIALIZING AZURE-XILNE SYSTEM...",
  "[ OK ] NETWORK CORE",
  "[ OK ] ROUTING ENGINE",
  "[ OK ] FIREWALL",
  "[ OK ] SECURITY PROTOCOL",
  "[ OK ] SYSTEM INTERFACE",
  "ESTABLISHING CONNECTION...",
  "CONNECTION ESTABLISHED",
];

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [currentLog, setCurrentLog] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (currentLog < bootLogs.length) {
      const timer = setTimeout(() => {
        setCurrentLog(prev => prev + 1);
        setProgress(Math.floor(((currentLog + 1) / bootLogs.length) * 100));
      }, 150 + Math.random() * 200); // random delay for realism
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setIsDone(true), 800);
      return () => clearTimeout(timer);
    }
  }, [currentLog]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isDone && (
        <motion.div
          key="boot-sequence"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-tactical-bg text-tactical-primary font-mono select-none overflow-hidden"
        >
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px]" />
          
          <div className="max-w-3xl w-full p-8 flex flex-col gap-4 relative z-10">
            <div className="flex justify-between items-end border-b border-tactical-primary/30 pb-2">
              <span className="text-xl md:text-2xl font-bold tracking-widest">{profileData.name}</span>
              <span className="text-sm opacity-70">SYSTEM ID: {profileData.nodeId}</span>
            </div>
            
            <div className="h-64 overflow-hidden flex flex-col justify-end">
              {bootLogs.slice(0, currentLog).map((log, i) => (
                <div key={i} className="mb-2 text-sm md:text-base opacity-80 text-shadow-tactical">
                  {log}
                </div>
              ))}
              {currentLog < bootLogs.length && (
                <div className="animate-pulse mb-2 text-tactical-accent">_</div>
              )}
              {currentLog >= bootLogs.length && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-tactical-accent mt-4 text-xl tracking-widest font-bold text-shadow-tactical"
                >
                  SYSTEM ONLINE
                </motion.div>
              )}
            </div>

            <div className="w-full h-1 bg-tactical-surface overflow-hidden mt-4 relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-tactical-primary shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <button 
              onClick={() => setIsDone(true)}
              className="self-end mt-8 text-xs opacity-40 hover:opacity-100 hover:text-tactical-warning transition-colors cursor-pointer"
            >
              [ SKIP INITIALIZATION ]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
