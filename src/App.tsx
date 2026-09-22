import { useState } from 'react';
import { BootSequence } from './components/BootSequence';
import { GlobalBackground } from './components/background/GlobalBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { NetworkArchitecture } from './components/sections/NetworkArchitecture';
import { Journey } from './components/sections/Journey';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { audioController } from './utils/audio';
import { Shield } from 'lucide-react';

function App() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [booting, setBooting] = useState(true);

  if (!hasInteracted) {
    return (
      <div className="min-h-screen w-full bg-[#010308] flex items-center justify-center flex-col gap-8 text-tactical-primary font-mono select-none relative overflow-hidden">
        {/* Background elements for intro screen */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px]" />
        
        <div className="relative z-10 flex flex-col items-center gap-6 animate-pulse">
          <Shield size={48} className="text-tactical-primary" />
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl tracking-[0.3em] font-bold mb-2">SECURE_NETWORK</h1>
            <p className="text-tactical-primary/60 text-sm tracking-widest">AUTHENTICATION REQUIRED</p>
          </div>
        </div>

        <button 
          onClick={() => {
            audioController.init();
            setHasInteracted(true);
          }}
          className="relative z-10 border border-tactical-primary/50 bg-tactical-primary/10 px-8 py-4 text-sm tracking-[0.2em] hover:bg-tactical-primary hover:text-tactical-bg transition-all duration-300 group clip-tactical-edge mt-8"
        >
          [ INITIATE CONNECTION ]
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-tactical-bg text-slate-200 relative overflow-hidden">
      <GlobalBackground />
      {booting ? (
        <BootSequence onComplete={() => setBooting(false)} />
      ) : (
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow flex flex-col">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <NetworkArchitecture />
            <Journey />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
