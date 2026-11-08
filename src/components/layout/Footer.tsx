import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#16191E]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 px-4 pt-5 font-mono text-[11px] text-subtle md:px-6 md:pt-8 md:text-xs">
        <span>
          © {year} {profile.name}
        </span>
        <span className="hidden sm:inline">Designed &amp; built with Next.js</span>
        <a href="#top" className="text-muted hover:text-white">
          back to top ↑
        </a>
      </div>
      <div
        aria-hidden="true"
        className="translate-y-[16%] pt-2 text-center font-display text-[17vw] leading-[0.8] font-bold tracking-[-0.06em] whitespace-nowrap text-transparent [-webkit-text-stroke:1px_#20242A] xl:text-[210px]"
      >
        THULASIYAN
      </div>
    </footer>
  );
}
