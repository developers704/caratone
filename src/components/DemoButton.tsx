"use client";

import { useState } from "react";
import { ArrowRight, Mail, Check } from "lucide-react";

const EMAIL = "demo@caratone.ai";
const SUBJECT = "Demo request — CaratOne";

const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
  SUBJECT
)}`;

export default function DemoButton() {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard unavailable — Gmail compose link still handles the click
    }
  };

  return (
    <div className="flex flex-col items-center gap-2.5">
      <a
        href={GMAIL_COMPOSE}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-10px_rgba(15,23,42,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-10px_rgba(15,23,42,0.45)] active:translate-y-0 active:scale-[0.98]"
      >
        {copied ? <Check className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
        {copied ? "Opening Gmail…" : "Request a Demo"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
      <p className="text-xs text-slate-500">
        or email us directly at{" "}
        <span className="font-mono text-slate-600">{EMAIL}</span>
      </p>
    </div>
  );
}
