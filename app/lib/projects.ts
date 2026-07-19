export interface Project {
  name: string;
  description: string;
  role: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    name: "Trading Journal",
    description:
      "A full-stack platform for tracking, analyzing, and improving trading performance. Features real-time price data via Finnhub WebSocket, interactive charts, portfolio analytics, risk management rules, backtesting, and a multi-space architecture for isolated trading contexts.",
    role: "Full-stack Developer",
    tech: [
      "React",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "Recharts",
    ],
    githubUrl: "https://github.com/khavoudom/Trading-journal",
  },
  {
    name: "Glamour",
    description:
      "A direct-to-consumer cosmetic e-commerce store with product catalog, cart and checkout, loyalty tiers (Bronze to Diamond), Subscribe & Save program, and an AI-powered beauty advisor using the Vercel AI SDK.",
    role: "Full-stack Developer",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle",
      "Zustand",
      "AI SDK",
    ],
    githubUrl: "https://github.com/khavoudom/uc_glamour",
  },
  {
    name: "e-shelter",
    description:
      "A hotel booking platform built with Laravel, featuring reservation management, role-based permissions, email notifications, and background job processing for deferred tasks.",
    role: "Backend Developer",
    tech: ["Laravel", "PHP", "PostgreSQL"],
    githubUrl: "https://github.com/khavoudom/e-shelter",
  },
];
