export interface SocialLink {
  label: string;
  href: string;
}

export interface Role {
  title: string;
  period: string;
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  period: string;
  current?: boolean;
  /** Promotion history, oldest first. */
  roles?: Role[];
  summary?: string;
  tech?: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  kind: string;
  team: "Solo" | "Team";
  year: string;
  summary: string;
  stack: string[];
  repo: string;
  website?: string;
}

export interface Achievement {
  badge: string;
  emphasis: "solid" | "outline" | "muted";
  title: string;
  detail: string;
  numeral: string;
}
