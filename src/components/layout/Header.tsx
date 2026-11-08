import { ArrowUpRight } from "@/components/ui/icons";
import { navLinks, profile } from "@/data/profile";
import { MobileMenu } from "./MobileMenu";
import { ThemePicker } from "./ThemePicker";

export function Header() {
  return (
    <header className="sticky top-3 z-30 px-4 md:top-4 md:px-6">
      <div className="relative mx-auto flex min-h-15 max-w-[1040px] items-center justify-between gap-4 rounded-full border border-white/8 bg-glass py-2 pr-2 pl-4 shadow-[0_10px_40px_rgb(0_0_0/0.35)] backdrop-blur-lg backdrop-saturate-150 md:pl-5">
        <a href="#top" className="inline-flex items-center gap-2.5 font-mono text-sm font-semibold">
          <span className="inline-flex size-7.5 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-bg">
            {profile.initials}
          </span>
          {profile.handle}
          <span aria-hidden="true" className="-ml-2.5 animate-blink text-accent">
            _
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-muted hover:bg-white/6 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-1.5">
            <ThemePicker />
          </div>
          <a
            href="#contact"
            className="ml-1.5 inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4.5 font-semibold text-bg hover:bg-white"
          >
            Let&apos;s talk
            <ArrowUpRight size={14} strokeWidth={2.2} />
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
