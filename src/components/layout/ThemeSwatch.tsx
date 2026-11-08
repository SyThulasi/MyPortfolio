import { cn } from "@/lib/cn";

interface ThemeSwatchProps {
  accent: string;
  accent2: string;
  selected?: boolean;
  size?: number;
  className?: string;
}

/** Two-colour dot previewing a theme's accent pair. */
export function ThemeSwatch({ accent, accent2, selected, size = 22, className }: ThemeSwatchProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block shrink-0 rounded-full", className)}
      style={{
        width: size,
        height: size,
        background: `conic-gradient(${accent} 0 50%, ${accent2} 50% 100%)`,
        boxShadow: `0 0 0 2px #111418, 0 0 0 3px ${selected ? "#F3F4F6" : "transparent"}`,
      }}
    />
  );
}
