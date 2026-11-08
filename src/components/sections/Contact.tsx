import { ContactForm } from "@/components/contact/ContactForm";
import { CopyEmailButton } from "@/components/contact/CopyEmailButton";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Accent } from "@/components/ui/SectionHeading";
import { profile, socials } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-[1200px] px-4 pt-20 pb-12 md:px-6 md:pt-40 md:pb-30"
    >
      <div className="relative flex flex-col gap-10 overflow-hidden rounded-[28px] border border-line bg-card px-5.5 py-7 md:rounded-[32px] md:p-12 lg:flex-row lg:gap-16 lg:p-18">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-50 -left-30 size-155 bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_22%,transparent),transparent)]"
        />

        <div className="relative flex min-w-0 flex-1 flex-col gap-4 md:gap-6">
          <span className="font-mono text-xs text-accent md:text-[13px]">{"// 05 — contact"}</span>
          <h2
            id="contact-title"
            className="font-display text-[44px] leading-[0.98] font-bold tracking-[-0.045em] text-ink md:text-[76px]"
          >
            Let&apos;s build
            <br />
            <Accent className="text-accent">something</Accent> great.
          </h2>
          <p className="max-w-[420px] text-sm text-muted md:text-base">
            A role, a collaboration, or a question about one of my projects — my inbox is always
            open.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="border-b-2 border-accent pb-0.5 font-display text-[19px] font-medium text-ink hover:text-white md:text-[26px]"
            >
              {profile.email}
            </a>
            <CopyEmailButton email={profile.email} />
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {Object.values(socials).map((link) => (
              <li key={link.href}>
                <ExternalLink
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-white/12 px-4.5 text-sm text-fg hover:border-white/30 hover:text-white"
                >
                  {link.label} ↗
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm email={profile.email} />
      </div>
    </section>
  );
}
