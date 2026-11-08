const accentGlow = "color-mix(in srgb, var(--accent) 22%, transparent)";
const secondaryGlow = "color-mix(in srgb, var(--accent-2) 12%, transparent)";

/** Soft, blurred colour fields behind the page; purely decorative. */
export function BackgroundGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-60 left-1/2 h-175 w-[1100px] -translate-x-1/2 blur-[30px]"
        style={{ background: `radial-gradient(closest-side, ${accentGlow}, transparent)` }}
      />
      <div
        className="absolute top-[45%] -right-75 size-175 blur-[40px]"
        style={{ background: `radial-gradient(closest-side, ${secondaryGlow}, transparent)` }}
      />
      <div
        className="absolute bottom-150 -left-65 size-190 blur-[40px]"
        style={{ background: `radial-gradient(closest-side, ${secondaryGlow}, transparent)` }}
      />
    </div>
  );
}
