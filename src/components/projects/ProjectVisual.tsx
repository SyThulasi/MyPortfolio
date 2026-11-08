import Image from "next/image";
import type { Project } from "@/data/types";

interface ProjectVisualProps {
  project: Project;
  number: string;
  sizes: string;
}

/** Screenshot when the project has one, otherwise an outlined-number placeholder. */
export function ProjectVisual({ project, number, sizes }: ProjectVisualProps) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        placeholder="blur"
        sizes={sizes}
        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute inset-0 flex flex-col justify-end gap-1.5 bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_65%)] p-6 md:p-8">
        <span className="font-display text-[88px] leading-[0.9] font-bold tracking-[-0.05em] outlined-text-accent md:text-[120px]">
          {number}
        </span>
        <span className="font-display text-xl font-semibold text-ink md:text-[26px]">
          {project.title}
        </span>
      </div>
    </div>
  );
}

export const projectNumber = (index: number) => String(index + 1).padStart(2, "0");
