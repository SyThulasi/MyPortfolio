import { cn } from "@/lib/cn";

interface TagProps {
  children: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
}

/** Small monospace pill used for tech stacks and labels. */
export function Tag({ children, size = "md", className }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-line-strong font-mono text-soft",
        size === "md" ? "px-3 py-1 text-xs" : "px-2.5 py-0.5 text-[11px]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({
  items,
  size,
  className,
}: { items: readonly string[] } & Omit<TagProps, "children">) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex">
          <Tag size={size}>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
