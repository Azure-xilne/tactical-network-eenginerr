import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '../../data/profile';

export const Footer = () => {
  const [isShuttingDown, setIsShuttingDown] = useState(false);

  // Intersection observer to detect when footer is fully visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add a subtle effect when footer is reached
        }
      },
      { threshold: 1.0 }
    );
    
    const footerElement = document.getElementById('footer');
    if (footerElement) observer.observe(footerElement);
    
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="footer" className="relative border-t border-slate-800 bg-black pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/scanline.png')] bg-repeat pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border-2 border-tactical-primary flex items-center justify-center rounded-sm">
              <div className="w-2 h-2 bg-tactical-primary animate-pulse" />
            </div>
            <div>
              <div className="font-display font-bold tracking-widest text-slate-200 text-xl">
                {profileData.name} // NETWORK ENGINEER
              </div>
              <div className="font-mono text-xs text-tactical-primary/70 mt-1">
                SYSTEM ID: {profileData.nodeId}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end font-mono text-xs tracking-widest gap-2">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">SYSTEM STATUS:</span>
              <span className="text-tactical-accent font-bold">{profileData.systemStatus}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">NETWORK STATUS:</span>
              <span className="text-tactical-accent font-bold">{profileData.networkStatus}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 font-mono text-[10px] tracking-widest text-slate-600">
          <div>&copy; {new Date().getFullYear()} {profileData.name}. ALL RIGHTS RESERVED.</div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="mt-4 md:mt-0 text-tactical-primary/50 hover:text-tactical-primary transition-colors cursor-crosshair flex items-center gap-2"
            onClick={() => {
              setIsShuttingDown(true);
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'auto' });
                setIsShuttingDown(false);
              }, 2000);
            }}
          >
            <div className="w-1.5 h-1.5 bg-tactical-primary/50" />
            END OF TRANSMISSION
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isShuttingDown && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center flex-col gap-4 font-mono text-tactical-primary"
          >
            <motion.div 
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="w-full h-1 bg-white absolute top-1/2 -translate-y-1/2"
            />
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.1, delay: 0.8 }}
            >
              SYSTEM SHUTDOWN INITIATED...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
