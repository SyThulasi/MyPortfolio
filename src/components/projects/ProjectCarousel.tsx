"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Code } from "@/components/ui/icons";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { Project } from "@/data/types";
import { cn } from "@/lib/cn";
import { ProjectVisual, projectNumber } from "./ProjectVisual";

interface ProjectCarouselProps {
  projects: Project[];
  className?: string;
}

/** Mobile layout: swipeable, scroll-snapping cards with dots and arrow controls. */
export function ProjectCarousel({ projects, className }: ProjectCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const last = projects.length - 1;

  const slideWidth = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return 0;
    return first.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0");
  };

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(last, index));
    trackRef.current?.scrollTo({ left: clamped * slideWidth(), behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    const width = slideWidth();
    if (!width || !track) return;
    // On wide screens the last cards can't reach the snap edge, so treat "scrolled to the end" as the last slide.
    const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
    const index = atEnd ? last : Math.min(last, Math.round(track.scrollLeft / width));
    if (index !== active) setActive(index);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected projects"
      className={cn("flex flex-col gap-3", className)}
    >
      <p className="px-4 text-right font-mono text-[13px] text-subtle md:px-6" aria-live="polite">
        <span className="text-ink">{projectNumber(active)}</span> / {projectNumber(last)}
      </p>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pt-1 pb-2 md:scroll-px-6 md:px-6"
      >
        {projects.map((project, index) => (
          <article
            key={project.slug}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
            className={cn(
              "flex w-[min(300px,82vw)] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border bg-linear-160 from-[#111418] to-[#0B0D10] transition-[opacity,border-color] duration-300",
              index === active
                ? "border-[color-mix(in_srgb,var(--accent)_45%,transparent)]"
                : "border-line opacity-45",
            )}
          >
            <div className="relative h-45 overflow-hidden border-b border-line">
              {project.image ? (
                <ProjectVisual project={project} number={projectNumber(index)} sizes="300px" />
              ) : (
                <div className="flex h-full flex-col justify-between bg-[radial-gradient(ellipse_at_20%_0%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_70%),#0B0D10] p-4.5">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl glow-soft text-accent">
                    <Code size={18} />
                  </span>
                  <span className="font-mono text-xs text-subtle">
                    ~/projects/<span className="text-ink">{project.slug}</span>
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-4.5">
              <div className="flex justify-between font-mono text-[11px] text-subtle">
                <span className="text-accent">{projectNumber(index)}</span>
                <span>
                  {project.kind} · {project.year}
                </span>
              </div>
              <h3 className="font-display text-[21px] leading-[1.15] font-bold tracking-[-0.01em] text-ink">
                {project.title}
              </h3>
              <p className="text-sm text-muted">{project.summary}</p>
              <span className="font-mono text-[11px] text-subtle">{project.stack.join(" · ")}</span>
              <ExternalLink
                href={project.repo}
                tabIndex={index === active ? 0 : -1}
                className="mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-white/14 px-4 text-[13px] font-medium"
              >
                View source ↗
              </ExternalLink>
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-1.5">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to project ${index + 1}`}
              aria-current={index === active}
              className="inline-flex h-11 w-6 cursor-pointer items-center justify-center"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-[width] duration-300",
                  index === active ? "w-5.5 bg-accent" : "w-1.5 bg-outline",
                )}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Previous project"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/14 text-ink disabled:cursor-default disabled:opacity-40"
          >
            <ChevronLeft strokeWidth={2.2} />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === last}
            aria-label="Next project"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-accent text-bg disabled:cursor-default disabled:opacity-40"
          >
            <ChevronRight strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </div>
  );
}
