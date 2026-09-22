import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const GlobalBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only enable parallax if reduced motion is not preferred
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-tactical-bg">
      {/* Atmospheric Lighting */}
      <motion.div 
        animate={{ 
          x: mousePosition.x * -30,
          y: mousePosition.y * -30
        }}
        transition={{ type: "spring", stiffness: 40, damping: 30 }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vh] rounded-full bg-tactical-primary/10 blur-[120px]"
      />
      <motion.div 
        animate={{ 
          x: mousePosition.x * 20,
          y: mousePosition.y * 20
        }}
        transition={{ type: "spring", stiffness: 30, damping: 40 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[70vh] rounded-full bg-tactical-accent/10 blur-[150px]"
      />
      
      {/* Subtle Danger Ambient Light (Bottom Left) */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vh] rounded-full bg-tactical-warning/5 blur-[120px]" />

      {/* Perspective Grid */}
      <div className="absolute inset-0 perspective-[1000px] flex items-center justify-center opacity-30">
        <motion.div 
          animate={{ 
            rotateX: 60,
            y: mousePosition.y * -10 + 100,
            x: mousePosition.x * -10
          }}
          transition={{ type: "spring", stiffness: 30, damping: 40 }}
          className="w-[200vw] h-[200vh] absolute bottom-[-50vh]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            transformOrigin: 'top center',
          }}
        >
          {/* Fading gradient for the grid so it disappears at the top */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-tactical-bg/80 to-tactical-bg" />
        </motion.div>
      </div>
      
      {/* Scanline */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px] mix-blend-overlay pointer-events-none" />
      
      {/* Digital Noise */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" 
        }} 
      />

      {/* Floating Technical Data / Decorations */}
      <div className="absolute top-1/4 right-8 font-mono text-[10px] text-tactical-primary/30 tracking-widest leading-loose text-right hidden lg:block">
        <div>SYS.OP // ACTIVE</div>
        <div>UPLINK: SECURE</div>
        <div>LATENCY: 12ms</div>
        <div className="animate-pulse">NODE_07 [ON]</div>
      </div>
      <div className="absolute bottom-1/4 left-8 font-mono text-[10px] text-tactical-primary/30 tracking-widest leading-loose hidden lg:block">
        <div>PACKET_FLOW: OPTIMAL</div>
        <div>SECURE_CHANNEL: ENCRYPTED</div>
        <div>FIREWALL: ENGAGED</div>
      </div>
    </div>
  );
};
