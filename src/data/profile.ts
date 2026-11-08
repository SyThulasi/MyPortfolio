import type { SocialLink } from "./types";

export const profile = {
  name: "Thulasiyan Yogeswaran",
  handle: "thulasiyan",
  initials: "TY",
  role: "Senior Software Engineer",
  company: "ZeroBeta",
  location: "Jaffna, Sri Lanka",
  coordinates: "9.66°N, 80.02°E",
  email: "sythulasi.6@gmail.com",
  cvPath: "/Thulasiyan_Yogeswaran_CV.pdf",
  description:
    "Senior Software Engineer building back-end services, APIs and cloud infrastructure with Java, Spring Boot, Node.js, React and AWS.",
} as const;

export const headline = {
  lead: "From first idea to ",
  accent: "production",
  middle: " — clean code, ",
  accentEnd: "end to end",
  tail: ".",
} as const;

export const socials = {
  github: { label: "GitHub", href: "https://github.com/SyThulasi" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/thulasiyan-yogeswaran/" },
  hackerrank: { label: "HackerRank", href: "https://www.hackerrank.com/Sy_Thulasi" },
} satisfies Record<string, SocialLink>;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#achievements" },
] as const;
