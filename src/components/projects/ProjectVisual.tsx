import type { Project } from "@/data/types";
import { ProjectCover, hasCover } from "./ProjectCover";

interface ProjectVisualProps {
  project: Project;
  number: string;
}

/** Illustrated cover on a dotted, accent-lit backdrop; falls back to an outlined number. */
export function ProjectVisual({ project, number }: ProjectVisualProps) {
  return (
    <div className="absolute inset-0 bg-[#0B0D10] bg-[image:radial-gradient(ellipse_at_30%_20%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_65%)]">
      <div aria-hidden="true" className="absolute inset-0 dot-grid" />
      {hasCover(project.slug) ? (
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
          <ProjectCover slug={project.slug} />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col justify-end gap-1.5 p-6 md:p-8"
        >
          <span className="font-display text-[88px] leading-[0.9] font-bold tracking-[-0.05em] outlined-text-accent md:text-[120px]">
            {number}
          </span>
          <span className="font-display text-xl font-semibold text-ink md:text-[26px]">
            {project.title}
          </span>
        </div>
      )}
    </div>
  );
}

export const projectNumber = (index: number) => String(index + 1).padStart(2, "0");
