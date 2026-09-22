import { motion } from 'framer-motion';
import { Network, Server, Monitor, Router, Shield, Cloud } from 'lucide-react';

const nodes = [
  { id: 'internet', type: 'cloud', x: 50, y: 15, label: 'INTERNET' },
  { id: 'fw1', type: 'shield', x: 50, y: 35, label: 'FIREWALL' },
  { id: 'r1', type: 'router', x: 50, y: 55, label: 'CORE_ROUTER' },
  { id: 'sw1', type: 'switch', x: 30, y: 75, label: 'SW_DMZ' },
  { id: 'sw2', type: 'switch', x: 70, y: 75, label: 'SW_LAN' },
  { id: 'srv1', type: 'server', x: 20, y: 90, label: 'WEB_SRV' },
  { id: 'srv2', type: 'server', x: 40, y: 90, label: 'DB_SRV' },
  { id: 'pc1', type: 'monitor', x: 60, y: 90, label: 'OP_TERM_1' },
  { id: 'pc2', type: 'monitor', x: 80, y: 90, label: 'OP_TERM_2' },
];

const links = [
  { source: 'internet', target: 'fw1' },
  { source: 'fw1', target: 'r1' },
  { source: 'r1', target: 'sw1' },
  { source: 'r1', target: 'sw2' },
  { source: 'sw1', target: 'srv1' },
  { source: 'sw1', target: 'srv2' },
  { source: 'sw2', target: 'pc1' },
  { source: 'sw2', target: 'pc2' },
];

const getIcon = (type: string) => {
  switch(type) {
    case 'cloud': return <Cloud size={16} />;
    case 'shield': return <Shield size={16} />;
    case 'router': return <Router size={16} />;
    case 'switch': return <Network size={16} />;
    case 'server': return <Server size={16} />;
    case 'monitor': return <Monitor size={16} />;
    default: return <div className="w-2 h-2 rounded-full bg-tactical-primary" />;
  }
};

export const NetworkTopology = ({ interactive = false }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 lg:opacity-30">
      <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.2)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.8)" />
          </linearGradient>
        </defs>
        
        {links.map((link, i) => {
          const sourceNode = nodes.find(n => n.id === link.source);
          const targetNode = nodes.find(n => n.id === link.target);
          if (!sourceNode || !targetNode) return null;
          
          return (
            <g key={i}>
              <line 
                x1={`${sourceNode.x}%`} y1={`${sourceNode.y}%`}
                x2={`${targetNode.x}%`} y2={`${targetNode.y}%`}
                stroke="rgba(6, 182, 212, 0.2)"
                strokeWidth="1"
              />
              {/* Animated packet */}
              <circle r="2" fill="#06b6d4" filter="drop-shadow(0 0 4px #06b6d4)">
                <animateMotion 
                  dur={`${2 + Math.random() * 3}s`} 
                  repeatCount="indefinite"
                  path={`M ${sourceNode.x * window.innerWidth/100} ${sourceNode.y * window.innerHeight/100} L ${targetNode.x * window.innerWidth/100} ${targetNode.y * window.innerHeight/100}`}
                />
              </circle>
            </g>
          );
        })}
      </svg>
      
      {nodes.map(node => (
        <motion.div
          key={node.id}
          className={`absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 ${interactive ? 'pointer-events-auto cursor-pointer group' : ''}`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          whileHover={interactive ? { scale: 1.2 } : {}}
        >
          <div className="relative flex items-center justify-center w-10 h-10 bg-tactical-surface border border-tactical-primary/50 text-tactical-primary rounded clip-tactical-edge transition-colors group-hover:bg-tactical-primary/20 group-hover:border-tactical-primary">
            {getIcon(node.type)}
            <div className="absolute inset-0 bg-tactical-primary/20 animate-ping rounded opacity-20" style={{ animationDuration: '3s' }} />
          </div>
          <div className="mt-2 font-mono text-[10px] tracking-widest text-tactical-primary/70 bg-tactical-bg/80 px-1 border border-tactical-primary/30">
            {node.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
