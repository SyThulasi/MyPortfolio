import Image from "next/image";
import portrait from "@/assets/images/portrait.webp";
import { ArrowRight, Download, GitHub, LinkedIn, Trophy } from "@/components/ui/icons";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Accent } from "@/components/ui/SectionHeading";
import { headline, profile, socials } from "@/data/profile";
import { asset } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-grid" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-12 px-4 pt-12 pb-10 md:px-6 md:pt-28 md:pb-24 lg:flex-row lg:items-center lg:gap-18">
        <div className="flex min-w-0 flex-1 flex-col gap-5 md:gap-7">
          <span className="inline-flex items-center gap-2.5 self-start rounded-full border border-white/10 bg-white/3 py-1.5 pr-3.5 pl-2.5 text-xs text-soft md:text-[13px]">
            <span className="size-2 animate-pulse-ring rounded-full bg-accent text-accent" />
            {profile.role} at <span className="text-ink">{profile.company}</span>
          </span>

          <h1
            id="hero-title"
            className="font-display text-5xl leading-[0.98] font-bold tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl xl:text-[84px]"
          >
            {headline.lead}
            <Accent className="text-accent">{headline.accent}</Accent>
            {headline.middle}
            <Accent className="text-accent">{headline.accentEnd}</Accent>
            {headline.tail}
          </h1>

          <p className="max-w-[540px] text-base text-muted md:text-lg">
            Hi, I&apos;m <span className="font-medium text-ink">{profile.name}</span> — a full-stack
            engineer from Sri Lanka working with Java, Spring Boot, Node.js and React.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex min-h-13 items-center gap-2.5 rounded-full bg-accent px-6.5 font-semibold text-bg shadow-[0_10px_40px_color-mix(in_srgb,var(--accent)_22%,transparent)] hover:brightness-110"
            >
              See my work
              <ArrowRight />
            </a>
            <a
              href={asset(profile.cvPath)}
              download
              className="inline-flex min-h-13 items-center gap-2.5 rounded-full border border-white/14 px-6 font-medium hover:border-white/30 hover:text-white"
            >
              Download CV
              <Download size={15} />
            </a>
            <div className="ml-1 flex gap-1">
              <ExternalLink
                href={socials.github.href}
                aria-label="GitHub"
                className="inline-flex size-11 items-center justify-center rounded-full text-muted hover:bg-white/6 hover:text-white"
              >
                <GitHub size={20} />
              </ExternalLink>
              <ExternalLink
                href={socials.linkedin.href}
                aria-label="LinkedIn"
                className="inline-flex size-11 items-center justify-center rounded-full text-muted hover:bg-white/6 hover:text-white"
              >
                <LinkedIn size={20} />
              </ExternalLink>
            </div>
          </div>
        </div>

        <Portrait />
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] min-w-0 py-6 lg:mx-0 lg:shrink-0">
      <div className="relative rounded-[28px] p-px gradient-frame">
        <div className="relative aspect-4/5 overflow-hidden rounded-[27px] bg-[#DCDFE3]">
          <Image
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 420px, 90vw"
            className="size-full object-cover object-[center_20%] contrast-[1.08] grayscale"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-[rgb(8_9_11/0.92)] to-transparent to-50%"
          />
          <div className="absolute inset-x-5 bottom-4.5 flex items-end justify-between font-mono text-xs text-soft">
            <span>
              {profile.coordinates}
              <br />
              <span className="text-ink">{profile.location}</span>
            </span>
            <span className="text-accent">● online</span>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-14 -left-4 hidden animate-float rounded-[14px] border border-white/10 bg-[rgb(17_20_24/0.75)] px-4 py-3 font-mono text-xs leading-[1.7] shadow-[0_20px_50px_rgb(0_0_0/0.45)] backdrop-blur-md sm:block xl:-left-14"
      >
        <span className="text-accent-2">@Service</span>
        <br />
        <span className="text-fg">class</span> <span className="text-accent">Reservation</span>
        {"{…}"}
      </div>

      <div className="absolute -right-2 bottom-23 hidden animate-float-slow items-center gap-3 rounded-[14px] border border-white/10 bg-[rgb(17_20_24/0.75)] px-4 py-3 shadow-[0_20px_50px_rgb(0_0_0/0.45)] backdrop-blur-md sm:flex xl:-right-10">
        <span className="inline-flex size-8.5 items-center justify-center rounded-[10px] glow-strong text-accent">
          <Trophy size={18} />
        </span>
        <span className="flex flex-col leading-[1.3]">
          <span className="text-[13px] font-semibold text-ink">HackFest winner</span>
          <span className="font-mono text-[11px] text-subtle">ACES · 2022</span>
        </span>
      </div>
    </div>
  );
}
