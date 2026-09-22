export interface Project {
  id: string;
  title: string;
  status: 'COMPLETED' | 'IN PROGRESS' | 'PLANNED';
  description: string;
  tech: string[];
}

export const projectsData: Project[] = [
  {
    id: "MISSION 001",
    title: "MIKROTIK NETWORK LAB",
    status: "COMPLETED",
    description: "Configured and tested a physical MikroTik router for hands-on networking practice. Implemented basic routing and local area networks.",
    tech: ["MikroTik", "RouterOS", "IPv4", "DHCP", "Firewall", "Routing"]
  },
  {
    id: "MISSION 002",
    title: "LINUX NETWORK ADMINISTRATION",
    status: "COMPLETED",
    description: "Deployed Debian servers to handle core network services. Configured secure SSH access and monitored system performance.",
    tech: ["Debian", "SSH", "Bash", "Systemd", "Networking"]
  },
  {
    id: "MISSION 003",
    title: "NETWORK TROUBLESHOOTING LAB",
    status: "COMPLETED",
    description: "Simulated network outages in a virtualized environment to practice diagnostic skills using Wireshark and standard CLI tools.",
    tech: ["Wireshark", "Ping", "Traceroute", "TCP/IP", "Analysis"]
  },
  {
    id: "MISSION 004",
    title: "VIRTUAL NETWORK LABORATORY",
    status: "COMPLETED",
    description: "Designed a multi-VLAN topology within VMware to isolate traffic and test inter-VLAN routing protocols.",
    tech: ["VMware", "VLAN", "Virtualization", "Switching"]
  },
  {
    id: "MISSION 005",
    title: "TAHFIDZ MANAGEMENT WEB APPLICATION",
    status: "IN PROGRESS",
    description: "A specialized web application for managing Tahfidz data, focusing on secure access and reliable backend connectivity.",
    tech: ["Web Tech", "Networking", "Database", "Security"]
  }
];
