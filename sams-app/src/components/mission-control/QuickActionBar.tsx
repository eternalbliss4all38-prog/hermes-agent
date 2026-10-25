"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useHermesChatStore } from "@/store/useHermesChatStore";

// Each quick action maps to a real instruction handed to Hermes (not just its
// own label). Tunable -- edit the prompt strings to change behaviour.
const ACTIONS: { label: string; prompt: string }[] = [
  {
    label: "Trigger Mode A Affiliate Scan",
    prompt:
      "Mode A — Affiliate scan. Find and rank affiliate programs worth promoting in my niche, with commission rates and payout terms. Ask me for the niche if you don't already have it.",
  },
  {
    label: "Trigger Mode B Micro-SaaS Build",
    prompt:
      "Mode B — Micro-SaaS build. Ask me what the app should do, then produce a build plan before writing any code.",
  },
  {
    label: "Run DNS Audit",
    prompt:
      "Run a DNS audit on my domains: list the records, flag misconfigurations, and check SPF/DKIM/DMARC for deliverability problems.",
  },
];

export function QuickActionBar() {
  const sendMessage = useHermesChatStore((s) => s.sendMessage);
  const status = useHermesChatStore((s) => s.status);
  const [result, setResult] = useState<string | null>(null);
  const [pending, setPending] = useState<string | null>(null);
  const [command, setCommand] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Dispatch goes straight to the live Hermes session, so the reply streams into
  // the "Hermes Command & Chat" panel on this same page. If the socket is down
  // the store queues it and delivers on reconnect rather than dropping it.
  const dispatch = async (prompt: string, label?: string) => {
    setPending(label ?? prompt);
    setResult(null);
    try {
      await sendMessage(prompt);
      setResult(
        status === "connected"
          ? "Sent to Hermes — reply appears in the chat below."
          : "Queued — will send the moment Hermes reconnects.",
      );
    } catch (err) {
      setResult(`Could not send — ${err instanceof Error ? err.message : "unknown error"}`);
    } finally {
      setPending(null);
    }
  };

  return (
    <div className="flex flex-col gap-2.5">
      <div
        className={
          "rounded-xl p-[1px] transition-colors " +
          (focused
            ? "bg-gradient-to-r from-accent-emerald via-accent-cyan to-accent-violet"
            : "bg-panel-border")
        }
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!command.trim() || pending) return;
            dispatch(command.trim());
            setCommand("");
          }}
          className="flex items-center gap-2 rounded-[11px] bg-panel px-3 py-2.5"
        >
          <Search size={16} className="shrink-0 text-muted" />
          <input
            ref={inputRef}
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Command Hermes… e.g. “scaffold a landing page for the SME compliance tool”"
            className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
          />
          <kbd className="hidden shrink-0 rounded border border-panel-border px-1.5 py-0.5 text-[10px] text-muted sm:inline">
            ⌘K
          </kbd>
        </form>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {ACTIONS.map((a) => (
          <button
            key={a.label}
            type="button"
            disabled={pending !== null}
            onClick={() => dispatch(a.prompt, a.label)}
            className="rounded-full border border-panel-border bg-panel-hover px-3 py-1.5 text-xs text-foreground hover:border-accent-cyan/40 disabled:opacity-50"
          >
            {pending === a.label ? "Dispatching…" : a.label}
          </button>
        ))}
        {result && <span className="text-[11px] text-muted">{result}</span>}
      </div>
    </div>
  );
}
