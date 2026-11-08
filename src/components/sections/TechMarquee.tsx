import { marqueeTech } from "@/data/skills";

/** Infinite scrolling strip of technologies; the list is rendered twice for a seamless loop. */
export function TechMarquee() {
  return (
    <div className="group relative overflow-hidden border-y border-[#16191E] bg-white/[0.015] fade-x">
      <p className="sr-only">Technologies I use: {marqueeTech.join(", ")}.</p>
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee py-4 font-display text-lg font-medium text-subtle group-hover:[animation-play-state:paused] md:py-5.5 md:text-[22px]"
      >
        {[...marqueeTech, ...marqueeTech].map((tech, index) => (
          <span key={index} className="inline-flex items-center gap-7 pr-7 whitespace-nowrap">
            {tech}
            <span className="text-sm text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
