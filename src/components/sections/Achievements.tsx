import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";
import type { Achievement } from "@/data/types";
import { cn } from "@/lib/cn";

const badgeStyles: Record<Achievement["emphasis"], string> = {
  solid: "bg-accent text-bg",
  outline: "border border-accent text-accent",
  muted: "border border-outline text-soft",
};

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="mx-auto max-w-[1200px] px-4 pt-20 md:px-6 md:pt-40"
    >
      <SectionHeading id="achievements-title" index="04" label="awards" className="mb-8 md:mb-12">
        Wins &amp; <Accent>recognition</Accent>
      </SectionHeading>

      <ul className="grid gap-3 md:grid-cols-3 md:gap-4">
        {achievements.map((item) => (
          <li
            key={item.title}
            className="relative flex lift flex-col justify-end gap-1.5 overflow-hidden rounded-[20px] border border-line bg-card p-5 md:min-h-65 md:gap-2 md:rounded-3xl md:p-8"
          >
            <span
              aria-hidden="true"
              className="absolute -top-2.5 right-2 font-display text-[96px] leading-none font-bold outlined-text md:-top-4.5 md:right-2.5 md:text-[170px]"
            >
              {item.numeral}
            </span>
            <span
              className={cn(
                "relative self-start rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold md:px-3 md:py-1 md:text-xs",
                badgeStyles[item.emphasis],
              )}
            >
              {item.badge}
            </span>
            <h3 className="relative mt-1 font-display text-xl font-bold text-ink md:mt-2 md:text-[26px]">
              {item.title}
            </h3>
            <span className="relative font-mono text-[11px] text-subtle md:text-xs">
              {item.detail}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
