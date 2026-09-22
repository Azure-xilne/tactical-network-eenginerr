import { Network, Server, Terminal, Shield, HardDrive, Cpu, Activity } from 'lucide-react';

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "NETWORKING",
    skills: ["TCP/IP", "IPv4", "IPv6", "Subnetting", "VLAN", "DHCP", "DNS", "NAT", "Routing", "Switching"]
  },
  {
    title: "MIKROTIK",
    skills: ["RouterOS", "Winbox", "Firewall", "NAT", "DHCP", "Routing", "Interface Configuration", "Troubleshooting"]
  },
  {
    title: "LINUX",
    skills: ["Debian", "Ubuntu", "SSH", "Linux Networking", "Bash", "System Administration"]
  },
  {
    title: "INFRASTRUCTURE",
    skills: ["Virtualization", "VMware", "Network Topology", "LAN Configuration", "Troubleshooting", "Basic Network Security"]
  }
];

export interface ArsenalItem {
  name: string;
  category: string;
  icon: any; // using any for Lucide icon to simplify for now
}

export const technicalArsenal: ArsenalItem[] = [
  { name: "MIKROTIK", category: "ROUTEROS", icon: Network },
  { name: "DEBIAN", category: "LINUX", icon: Terminal },
  { name: "WINDOWS", category: "NETWORKING", icon: HardDrive },
  { name: "VMWARE", category: "VIRTUALIZATION", icon: Server },
  { name: "WIRESHARK", category: "ANALYSIS", icon: Activity },
  { name: "SSH", category: "REMOTE ACCESS", icon: Shield },
  { name: "GIT", category: "VERSION CONTROL", icon: Cpu }
];
