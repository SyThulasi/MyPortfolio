"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "@/components/ui/icons";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked; the mailto link is still available.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email address copied" : "Copy email address"}
      className="inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-full border border-white/12 px-3.5 font-mono text-xs text-muted hover:border-white/25 hover:text-white"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      <span aria-live="polite">{copied ? "copied!" : "copy"}</span>
    </button>
  );
}
