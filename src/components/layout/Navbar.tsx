import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const navItems = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'network', label: 'NETWORK' },
  { id: 'journey', label: 'JOURNEY' },
  { id: 'contact', label: 'CONTACT' },
];

export const Navbar = () => {
  const [activeId, setActiveId] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Scroll spy logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-tactical-bg/90 backdrop-blur-md border-tactical-primary/20 py-4 shadow-[0_4px_30px_rgba(6,182,212,0.1)]" 
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-2 h-2 bg-tactical-primary rounded-full animate-pulse shadow-[0_0_8px_#06b6d4]" />
            <span className="font-display font-bold tracking-widest text-tactical-primary hidden sm:block">AZURE-XILNE</span>
          </div>
          
          <div className="hidden md:flex gap-6 lg:gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "font-mono text-xs lg:text-sm tracking-widest transition-all relative group",
                  activeId === item.id ? "text-tactical-primary" : "text-slate-400 hover:text-slate-200"
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {activeId === item.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-tactical-primary shadow-[0_0_8px_#06b6d4]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-tactical-accent/70">
            <div className="hidden lg:flex flex-col items-end">
              <span>SYS: ONLINE</span>
              <span>NET: CONNECTED</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden border border-tactical-primary/50 text-tactical-primary px-3 py-1 hover:bg-tactical-primary/10 transition-colors"
            >
              [ MENU ]
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-tactical-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "font-display text-2xl tracking-widest transition-all",
                activeId === item.id ? "text-tactical-primary" : "text-slate-400"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
