import { Fragment } from "react";
import { ArrowRight } from "@/components/ui/icons";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { TagList } from "@/components/ui/Tag";
import { experience } from "@/data/experience";
import type { Experience as ExperienceItem, Role } from "@/data/types";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 pt-20 md:px-6 md:pt-40 lg:flex-row lg:gap-16"
    >
      <div className="flex flex-col gap-4 lg:w-[300px] lg:shrink-0">
        <SectionHeading id="experience-title" index="02" label="experience">
          Where I&apos;ve <Accent>worked</Accent>
        </SectionHeading>
        <p className="max-w-[320px] text-muted">From university labs to production systems.</p>
      </div>

      <ol className="flex min-w-0 flex-1 flex-col gap-4">
        {experience.map((item) =>
          item.current ? (
            <CurrentRole key={item.id} item={item} />
          ) : (
            <PastRole key={item.id} item={item} />
          ),
        )}
      </ol>
    </section>
  );
}

function CurrentRole({ item }: { item: ExperienceItem }) {
  return (
    <li className="rounded-[22px] p-px gradient-frame">
      <article className="flex flex-col gap-4 rounded-[21px] bg-panel p-5 md:p-8">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-[19px] font-semibold text-ink md:text-2xl">
            {item.title} · <span className="text-accent">{item.company}</span>
          </h3>
          <span className="inline-flex items-center gap-2 rounded-full glow-soft px-3 py-1 font-mono text-[11px] text-accent md:text-xs">
            <span className="size-1.75 animate-pulse-ring rounded-full bg-accent" />
            {item.period}
          </span>
        </header>

        {item.roles && <Promotion roles={item.roles} />}
        {item.summary && <p className="text-sm text-muted md:text-base">{item.summary}</p>}
        {item.tech && <TagList items={item.tech} className="gap-2" />}
      </article>
    </li>
  );
}

/** Shows the role progression, e.g. Software Engineer → Senior Software Engineer. */
function Promotion({ roles }: { roles: Role[] }) {
  const first = roles[0];
  const last = roles[roles.length - 1];
  if (!first || !last || roles.length < 2) return null;

  return (
    <div
      aria-label={`Promoted from ${first.title} to ${last.title}`}
      className="flex flex-col items-start gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5"
    >
      {roles.map((role, index) => {
        const isLatest = index === roles.length - 1;
        return (
          <Fragment key={role.title}>
            {index > 0 && (
              <span className="inline-flex items-center gap-1 px-0.5 font-mono text-[11px] text-accent sm:flex-col md:text-xs">
                <ArrowRight size={17} strokeWidth={2.2} className="rotate-90 sm:rotate-0" />
                promoted
              </span>
            )}
            <span
              className={
                isLatest
                  ? "flex flex-col gap-0.5 rounded-xl border border-accent glow-soft px-3 py-2 md:px-4 md:py-2.5"
                  : "flex flex-col gap-0.5 rounded-xl border border-line-strong bg-white/2 px-3 py-2 md:px-4 md:py-2.5"
              }
            >
              <span
                className={
                  isLatest
                    ? "text-sm font-semibold text-ink md:text-[15px]"
                    : "text-sm font-medium text-soft md:text-[15px]"
                }
              >
                {role.title}
              </span>
              <span
                className={`font-mono text-[11px] md:text-xs ${isLatest ? "text-accent" : "text-subtle"}`}
              >
                {role.period}
              </span>
            </span>
          </Fragment>
        );
      })}
    </div>
  );
}

function PastRole({ item }: { item: ExperienceItem }) {
  return (
    <li className="flex lift flex-col gap-3 rounded-[22px] border border-line bg-card p-5 md:gap-4 md:p-8">
      <header className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <h3 className="font-display text-[19px] font-semibold text-ink md:text-2xl">
          {item.title} · <span className="text-accent">{item.company}</span>
        </h3>
        <span className="font-mono text-[11px] text-subtle md:text-xs">{item.period}</span>
      </header>
      {item.summary && <p className="text-sm text-muted md:text-base">{item.summary}</p>}
      {item.highlights && (
        <ul className="flex list-disc flex-col gap-2 pl-4.5 text-sm text-muted md:text-base">
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
      {item.tech && <TagList items={item.tech} className="gap-2" />}
    </li>
  );
}
