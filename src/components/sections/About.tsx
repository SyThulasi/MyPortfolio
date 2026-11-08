import { ArrowUpRight, GraduationCap } from "@/components/ui/icons";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { TagList } from "@/components/ui/Tag";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-[1200px] px-4 pt-20 md:px-6 md:pt-35"
    >
      <SectionHeading id="about-title" index="01" label="about" className="mb-8 md:mb-12">
        A little <Accent>about</Accent> me
      </SectionHeading>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <IntroCard />
        <EducationCard />
      </div>

      <SkillsCard />
    </section>
  );
}

function IntroCard() {
  return (
    <div className="flex lift flex-col gap-4.5 rounded-3xl border border-line bg-linear-to-b from-[#111418] to-card p-6 text-muted md:p-10">
      <p className="font-display text-[22px] leading-[1.3] font-medium text-ink md:text-[26px]">
        I turn messy requirements into systems that are simple to reason about.
      </p>
      <p>
        I&apos;m a {profile.role} at <span className="text-fg">{profile.company}</span>, building
        back-end services for an institutional risk, margin and digital-asset platform — from Java
        and Spring Boot APIs to multi-chain staking and AWS infrastructure. I also shape system
        design and run releases.
      </p>
      <p>
        I studied Computer Engineering at the{" "}
        <span className="text-fg">University of Peradeniya</span> and interned at{" "}
        <span className="text-fg">ISA</span>, building microservices with Spring Boot and Kafka.
      </p>
    </div>
  );
}

function EducationCard() {
  const { research } = education;

  return (
    <div className="relative flex lift flex-col gap-4.5 overflow-hidden rounded-3xl border border-line bg-[#0F1215] bg-[image:radial-gradient(ellipse_80%_60%_at_100%_0%,color-mix(in_srgb,var(--accent)_10%,transparent),transparent_70%)] p-5 md:p-7">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-1.5 -bottom-3.5 font-display text-[110px] leading-none font-bold tracking-[-0.06em] outlined-text md:text-[150px]"
      >
        {education.yearMark}
      </span>

      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-3">
          <span className="inline-flex size-11 items-center justify-center rounded-xl glow-strong text-accent">
            <GraduationCap size={22} />
          </span>
          <span className="font-mono text-xs text-subtle">education</span>
        </span>
        <span className="rounded-full border border-accent px-3 py-1 font-mono text-[11px] text-accent">
          {education.period}
        </span>
      </div>

      <div className="relative flex flex-col gap-1.5">
        <h3 className="font-display text-xl leading-[1.15] font-semibold tracking-[-0.02em] text-ink md:text-[22px]">
          {education.degree}
        </h3>
        <span className="text-sm text-muted">{education.school}</span>
      </div>

      <div className="relative flex flex-auto flex-col justify-between gap-3.5 rounded-2xl border border-[#1F242B] bg-[rgb(8_9_11/0.55)] px-5 py-4.5 backdrop-blur-sm">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] text-accent">
          <span className="size-1.5 rounded-full bg-accent" />
          final-year research
        </span>
        <div className="flex flex-col gap-1.5">
          <span className="font-display text-base leading-[1.25] font-semibold text-ink md:text-[17px]">
            {research.title}
          </span>
          <span className="text-sm text-muted">{research.summary}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <TagList items={research.tags} size="sm" />
          <ExternalLink
            href={research.href}
            className="inline-flex min-h-10 items-center gap-1.5 px-1 text-[13px] font-medium text-accent hover:brightness-125"
          >
            View project
            <ArrowUpRight size={13} strokeWidth={2.2} />
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}

function SkillsCard() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5 rounded-3xl border border-line bg-white/[0.015] p-5 sm:grid-cols-3 md:gap-7 md:px-9 md:py-8 lg:grid-cols-5">
      <h3 className="sr-only">Tech stack</h3>
      {skillGroups.map((group) => (
        <div key={group.label} className="flex flex-col gap-3">
          <span className="font-mono text-xs text-accent">{group.label}</span>
          <TagList items={group.items} />
        </div>
      ))}
    </div>
  );
}
