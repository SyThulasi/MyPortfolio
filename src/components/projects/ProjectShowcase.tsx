"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { TagList } from "@/components/ui/Tag";
import type { Project } from "@/data/types";
import { cn } from "@/lib/cn";
import { ProjectVisual, projectNumber } from "./ProjectVisual";

interface ProjectShowcaseProps {
  projects: Project[];
  className?: string;
}

/** Desktop layout: numbered project list with a sticky preview panel. */
export function ProjectShowcase({ projects, className }: ProjectShowcaseProps) {
  const [active, setActive] = useState(0);
  const current = projects[active];
  if (!current) return null;
  const number = projectNumber(active);

  return (
    <div className={cn("items-start gap-14", className)}>
      <ol className="min-w-0 flex-1">
        {projects.map((project, index) => {
          const selected = index === active;
          return (
            <li key={project.slug} className="border-b border-line">
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={cn(
                  "grid w-full cursor-pointer grid-cols-[52px_minmax(0,1fr)_auto] items-center gap-4 py-6 text-left text-ink transition-[padding,opacity] duration-300 hover:pl-2.5",
                  !selected && "opacity-45",
                )}
              >
                <span className="font-mono text-[13px] text-accent">{projectNumber(index)}</span>
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-display text-[28px] leading-[1.15] font-semibold tracking-[-0.02em]">
                    {project.title}
                  </span>
                  <span className="font-mono text-xs text-subtle">{project.kind}</span>
                </span>
                <span className="inline-flex items-center gap-3 font-mono text-xs text-subtle">
                  {project.year}
                  <span
                    className={cn(
                      "inline-flex size-8 items-center justify-center rounded-full border",
                      selected ? "border-accent text-accent" : "border-outline text-subtle",
                    )}
                  >
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <aside
        aria-live="polite"
        aria-label="Project preview"
        className="sticky top-25 flex min-w-0 flex-1 flex-col gap-5 pt-6"
      >
        <div className="group rounded-[22px] p-px gradient-frame">
          <div className="overflow-hidden rounded-[21px] bg-card">
            <div className="flex items-center gap-1.5 border-b border-white/6 px-3.5 py-3">
              <span className="size-2.25 rounded-full bg-outline" />
              <span className="size-2.25 rounded-full bg-outline" />
              <span className="size-2.25 rounded-full bg-outline" />
              <span className="ml-2.5 font-mono text-[11px] text-subtle">
                ~/projects/{current.slug}
              </span>
            </div>
            <div className="relative aspect-4/3 overflow-hidden">
              <ProjectVisual project={current} number={number} />
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-3 font-mono text-xs text-subtle">
          <span>
            <span className="text-accent">{number}</span> — {current.kind}
          </span>
          <span>
            {current.team} · {current.year}
          </span>
        </div>
        <p className="text-muted">{current.summary}</p>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4.5">
          <TagList items={current.stack} className="gap-2" />
          <div className="flex gap-2">
            {current.website && (
              <ExternalLink
                href={current.website}
                className="inline-flex min-h-11.5 items-center gap-2 rounded-full border border-white/14 px-4.5 text-sm font-medium hover:border-white/30"
              >
                Website
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </ExternalLink>
            )}
            <ExternalLink
              href={current.repo}
              className="inline-flex min-h-11.5 items-center gap-2.5 rounded-full bg-accent px-5 text-sm font-semibold text-bg hover:brightness-110"
            >
              View source
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </ExternalLink>
          </div>
        </div>
      </aside>
    </div>
  );
}
