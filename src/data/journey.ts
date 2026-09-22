export interface JourneyStep {
  id: string;
  title: string;
  description: string;
}

export const journeyData: JourneyStep[] = [
  {
    id: "01",
    title: "NETWORK FUNDAMENTALS",
    description: "Understanding TCP/IP, subnetting, routing, and switching."
  },
  {
    id: "02",
    title: "MIKROTIK LAB",
    description: "Hands-on configuration and troubleshooting with RouterOS."
  },
  {
    id: "03",
    title: "LINUX",
    description: "Linux networking, SSH, and robust system administration."
  },
  {
    id: "04",
    title: "ADVANCED NETWORKING",
    description: "Continuously expanding networking knowledge and architecture design."
  }
];

export const certificationsData = []; // Editable placeholder, empty by default as requested
