"use client";

import { useEffect, useId, useState } from "react";
import { Close, Menu } from "@/components/ui/icons";
import { navLinks } from "@/data/profile";
import { ThemeSwatchRow } from "./ThemePicker";

/** Hamburger button and drop-down panel shown below the md breakpoint. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-ink text-bg"
      >
        {open ? <Close size={18} strokeWidth={2.2} /> : <Menu size={18} strokeWidth={2.2} />}
      </button>

      {open && (
        <nav
          id={panelId}
          aria-label="Mobile"
          className="absolute inset-x-4 top-full mt-2 flex flex-col rounded-3xl border border-white/8 bg-[rgb(17_20_24/0.95)] p-2 font-display text-[22px] font-semibold backdrop-blur-xl"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="flex min-h-13 items-center justify-between rounded-2xl px-4 hover:bg-white/6"
            >
              {link.label}
              <span className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
          <div className="mx-2 mt-2 mb-1 border-t border-white/8 pt-3">
            <ThemeSwatchRow />
          </div>
          <a
            href="#contact"
            onClick={close}
            className="mt-1.5 flex min-h-13 items-center justify-center rounded-full bg-accent text-base text-bg"
          >
            Let&apos;s talk ↗
          </a>
        </nav>
      )}
    </div>
  );
}
