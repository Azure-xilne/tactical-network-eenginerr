import { NetworkTopology as NetworkMap } from '../background/NetworkTopology';

export const NetworkArchitecture = () => {
  return (
    <section id="network" className="relative min-h-[120vh] py-24 bg-[#010308] overflow-hidden flex flex-col">
      {/* Interactive Background Map */}
      <div className="absolute inset-0 z-0">
        <NetworkMap interactive={true} />
        
        {/* Gradients to blend edges */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-tactical-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-tactical-bg to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pointer-events-none">
        <div className="flex items-center gap-4 mb-8">
          <div className="font-mono text-sm tracking-widest text-tactical-primary border border-tactical-primary/30 px-3 py-1 bg-tactical-primary/10 backdrop-blur-sm pointer-events-auto">
            04 // NETWORK OPERATIONS CENTER
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-tactical-primary/50 to-transparent" />
        </div>
        
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-widest text-shadow-tactical mb-4">
            INFRASTRUCTURE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">TOPOLOGY</span>
          </h2>
          <p className="font-mono text-slate-400 text-sm leading-relaxed border-l-2 border-tactical-primary/50 pl-4 bg-tactical-bg/40 backdrop-blur-sm py-2 pr-2">
            Interactive visualization of the core network architecture. Hover over nodes to inspect system status and active protocols.
          </p>
        </div>
      </div>
      
      {/* Decorative HUD overlay for the network section */}
      <div className="absolute bottom-8 right-8 z-10 pointer-events-none hidden md:block">
        <div className="bg-tactical-bg/80 backdrop-blur-md border border-tactical-primary/30 p-4 font-mono text-xs w-64">
          <div className="text-tactical-primary mb-2 border-b border-tactical-primary/30 pb-1">GLOBAL_STATS</div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-400">ACTIVE_NODES</span>
            <span className="text-slate-200">09</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-400">PACKET_LOSS</span>
            <span className="text-slate-200">0.00%</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-400">THROUGHPUT</span>
            <span className="text-slate-200">4.2 Gbps</span>
          </div>
          <div className="flex justify-between mt-3 pt-2 border-t border-slate-700">
            <span className="text-slate-400">NET_STATUS</span>
            <span className="text-tactical-primary animate-pulse">STABLE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
