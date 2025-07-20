export interface Hackathon {
  title: string;
  year: string;
  date: string;
  prize: string;
  project: string;
  description: string;
  tech: string[];
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  status: string;
  website: string;
}

export const hackathons: Hackathon[] = [
  {
    title: "ETH Global Cannes",
    year: "2025",
    date: "January 2025",
    prize: "Best Walrus Tools Prize",
    project: "Walcache",
    description: "A decentralized caching solution built on Walrus Protocol for improved Web3 performance",
    tech: ["Walrus Protocol", "TypeScript", "Next.js", "Smart Contracts"],
    icon: "ri:award-line",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20",
    borderColor: "border-yellow-500/30",
    status: "Winner",
    website: "#"
  },
  {
    title: "Solana Colosseum",
    year: "2025", 
    date: "May 2025",
    prize: "x",
    project: "Unify Campass",
    description: "Unified campus management system for donation built on Solana",
    tech: ["Solana", "Rust", "Anchor", "React", "Web3.js"],
    icon: "ri:medal-line",
    color: "text-blue-400",
    bgColor: "bg-blue-400/20",
    borderColor: "border-blue-400/30",
    status: "Finalist",
    website: "#"
  },
  {
    title: "Polkadot Hackathon",
    year: "2025",
    date: "March 2025", 
    prize: "Winner - Ink Best Use Shuttle",
    project: "SOL2INK",
    description: "Smart contract tranlastion",
    tech: ["Polkadot", "Ink!", "Substrate", "Cross-chain", "DeFi"],
    icon: "ri:gamepad-line",
    color: "text-green-400",
    bgColor: "bg-green-400/20",
    borderColor: "border-green-400/30",
    status: "Winner",
    website: "#"
  },
];

export const getTotalHackathons = () => hackathons.length;
export const getTotalWins = () => hackathons.filter(h => h.status === "Winner").length;
export const getTotalPlacements = () => hackathons.filter(h => h.status !== "Finalist").length;
export const getRecentHackathons = (count: number = 3) => hackathons.slice(0, count);