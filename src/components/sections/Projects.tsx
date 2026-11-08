import { ProjectCarousel } from "@/components/projects/ProjectCarousel";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  const years = projects.map((project) => Number(project.year));
  const range = `${Math.min(...years)} — ${Math.max(...years)}`;

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto max-w-[1200px] pt-20 md:pt-40 lg:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-6 px-4 md:px-6 lg:border-b lg:border-line-strong lg:px-0 lg:pb-7">
        <SectionHeading id="projects-title" index="03" label="projects">
          Selected <Accent>work</Accent>
        </SectionHeading>
        <span className="hidden font-mono text-[13px] text-subtle lg:inline">
          hover a project to preview · {range}
        </span>
      </div>

      <ProjectShowcase projects={projects} className="hidden lg:flex" />
      <ProjectCarousel projects={projects} className="lg:hidden" />
    </section>
  );
}
