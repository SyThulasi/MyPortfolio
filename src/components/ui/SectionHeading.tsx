import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  index: string;
  label: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

/** "// 01 — about" eyebrow plus the section's h2. */
export function SectionHeading({ index, label, id, children, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <span className="font-mono text-xs text-accent md:text-[13px]">
        {"// "}
        {index} — {label}
      </span>
      <h2
        id={id}
        className="font-display text-[34px] leading-[1.05] font-bold tracking-[-0.035em] text-ink md:text-[52px]"
      >
        {children}
      </h2>
    </div>
  );
}

/** Italic serif accent word used inside headings. */
export function Accent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("font-accent font-normal tracking-[-0.02em] italic", className)}>
      {children}
    </span>
  );
}
