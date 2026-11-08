"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check } from "@/components/ui/icons";
import { themes } from "@/lib/themes";
import { useTheme } from "@/lib/use-theme";
import { ThemeSwatch } from "./ThemeSwatch";

/** Desktop nav button that opens a popover listing the colour themes. */
export function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const popoverId = useId();
  const current = themes.find((t) => t.id === theme) ?? themes[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={`Colour theme: ${current.name}`}
        aria-expanded={open}
        aria-controls={popoverId}
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/12 transition-colors hover:bg-white/6"
      >
        <span
          aria-hidden="true"
          className="size-5 rounded-full"
          style={{
            background: "conic-gradient(var(--accent) 0 50%, var(--accent-2) 50% 100%)",
            boxShadow: "0 0 14px color-mix(in srgb, var(--accent) 22%, transparent)",
          }}
        />
      </button>

      {open && (
        <div
          id={popoverId}
          role="radiogroup"
          aria-label="Colour theme"
          className="absolute top-14 right-0 flex w-60 flex-col gap-0.5 rounded-[20px] border border-white/10 bg-[rgb(17_20_24/0.94)] p-2 shadow-[0_24px_60px_rgb(0_0_0/0.55)] backdrop-blur-xl"
        >
          <span className="px-2.5 pt-1.5 pb-2 font-mono text-[11px] text-subtle">
            {"// colour theme"}
          </span>
          {themes.map((option) => {
            const selected = option.id === theme;
            return (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => {
                  setTheme(option.id);
                  setOpen(false);
                }}
                className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-2.5 text-left text-sm text-fg transition-colors hover:bg-white/6"
              >
                <ThemeSwatch accent={option.accent} accent2={option.accent2} selected={selected} />
                <span className="flex-1">{option.name}</span>
                {selected && <Check size={14} strokeWidth={2.4} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/** Inline row of theme swatches, used inside the mobile menu. */
export function ThemeSwatchRow() {
  const { theme, setTheme } = useTheme();
  const current = themes.find((t) => t.id === theme) ?? themes[0];

  return (
    <div>
      <span className="block px-2 pb-1.5 font-mono text-[11px] font-normal text-subtle">
        {"// colour theme · "}
        {current.name}
      </span>
      <div role="radiogroup" aria-label="Colour theme" className="flex gap-3">
        {themes.map((option) => (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={option.id === theme}
            aria-label={option.name}
            onClick={() => setTheme(option.id)}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full"
          >
            <ThemeSwatch
              accent={option.accent}
              accent2={option.accent2}
              selected={option.id === theme}
              size={26}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
