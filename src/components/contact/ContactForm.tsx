"use client";

import type { FormEvent } from "react";
import { Send } from "@/components/ui/icons";

const fieldClass =
  "min-h-12.5 rounded-xl border border-line-strong bg-card px-4 text-[15px] text-fg placeholder:text-subtle focus:border-accent focus:outline-none";

/**
 * GitHub Pages is static, so the form composes an email in the visitor's
 * mail app instead of posting to a server.
 */
export function ContactForm({ email }: { email: string }) {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n— ${name}${from ? ` (${from})` : ""}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative flex min-w-0 flex-1 flex-col gap-4 rounded-[22px] border border-white/8 bg-[rgb(8_9_11/0.6)] p-5 backdrop-blur-md md:p-7"
    >
      <label className="flex flex-col gap-2 text-[13px] font-medium text-soft">
        Name
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Jane Doe"
          className={fieldClass}
        />
      </label>
      <label className="flex flex-col gap-2 text-[13px] font-medium text-soft">
        Email
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="jane@company.com"
          className={fieldClass}
        />
      </label>
      <label className="flex flex-col gap-2 text-[13px] font-medium text-soft">
        Message
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Hi Thulasiyan, …"
          className={`${fieldClass} resize-y py-3.5`}
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-13 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-accent text-[15px] font-semibold text-bg shadow-[0_10px_40px_color-mix(in_srgb,var(--accent)_22%,transparent)] hover:brightness-110"
      >
        Send message
        <Send />
      </button>
    </form>
  );
}
