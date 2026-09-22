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

function App() {
  const [booting, setBooting] = useState(true);

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
