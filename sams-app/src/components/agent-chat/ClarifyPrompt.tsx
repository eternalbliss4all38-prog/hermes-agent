"use client";

import { useState } from "react";
import clsx from "clsx";
import { CheckCircle2, HelpCircle, Send } from "lucide-react";
import { useHermesChatStore } from "@/store/useHermesChatStore";

/**
 * Renders the agent's blocking question (the `clarify` tool) as an actionable
 * card. This is the piece Mission Control was missing entirely: without it the
 * `clarify.request` event was dropped on the floor, the agent stayed blocked,
 * and anything the user typed went down the prompt.submit path as an unrelated
 * next turn. Answering here calls `clarify.respond` with the request_id.
 */
export function ClarifyPrompt() {
  const clarify = useHermesChatStore((s) => s.clarify);
  const respondToClarify = useHermesChatStore((s) => s.respondToClarify);
  const dismissClarify = useHermesChatStore((s) => s.dismissClarify);
  const [selected, setSelected] = useState<string[]>([]);
  const [other, setOther] = useState("");
  const [busy, setBusy] = useState(false);

  if (!clarify) return null;

  const { question, choices, multiSelect, expired } = clarify;

  async function answer(value: string | string[]) {
    setBusy(true);
    try {
      await respondToClarify(value);
      setSelected([]);
      setOther("");
    } finally {
      setBusy(false);
    }
  }

  function toggle(choice: string) {
    setSelected((prev) =>
      prev.includes(choice) ? prev.filter((c) => c !== choice) : [...prev, choice],
    );
  }

  return (
    <div
      className={clsx(
        "rounded-xl border p-3",
        expired
          ? "border-panel-border bg-panel/60 opacity-70"
          : "border-accent-amber/40 bg-accent-amber/10",
      )}
    >
      <div className="mb-2 flex items-start gap-2">
        <HelpCircle
          size={15}
          className={clsx("mt-0.5 shrink-0", expired ? "text-muted" : "text-accent-amber")}
        />
        <div className="flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
            {expired ? "Question timed out" : "Hermes is waiting on your answer"}
          </p>
          <p className="mt-0.5 text-sm text-foreground whitespace-pre-wrap">{question}</p>
        </div>
      </div>

      {expired ? (
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs text-muted">
            No answer arrived in time. Reply in the box below and it will be treated as a new message.
          </p>
          <button
            type="button"
            onClick={dismissClarify}
            className="shrink-0 rounded border border-panel-border px-2.5 py-1 text-xs text-muted hover:text-foreground"
          >
            Dismiss
          </button>
        </div>
      ) : choices && choices.length > 0 ? (
        <div className="flex flex-col gap-2">
          {multiSelect ? (
            <>
              <div className="flex flex-wrap gap-1.5">
                {choices.map((c) => {
                  const on = selected.includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      disabled={busy}
                      onClick={() => toggle(c)}
                      className={clsx(
                        "rounded-lg border px-3 py-1.5 text-xs transition-colors disabled:opacity-50",
                        on
                          ? "border-accent-emerald/50 bg-accent-emerald/15 text-foreground"
                          : "border-panel-border bg-panel text-muted hover:text-foreground",
                      )}
                    >
                      {on ? "✓ " : ""}
                      {c}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                disabled={busy || selected.length === 0}
                onClick={() => answer(selected)}
                className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-gradient-to-br from-accent-emerald via-accent-cyan to-accent-violet px-3 py-1.5 text-xs font-medium text-slate-950 disabled:opacity-40"
              >
                <Send size={12} />
                Send {selected.length > 0 ? `${selected.length} ` : ""}selection
                {selected.length === 1 ? "" : "s"}
              </button>
            </>
          ) : (
            <>
              <div className="grid gap-1.5">
                {choices.map((c) => (
                  <button
                    key={c}
                    type="button"
                    disabled={busy}
                    onClick={() => answer(c)}
                    className="flex items-center gap-2 rounded-lg border border-panel-border bg-panel px-3 py-2 text-left text-xs text-foreground transition-colors hover:border-accent-emerald/50 hover:bg-panel-hover disabled:opacity-50"
                  >
                    <CheckCircle2 size={13} className="shrink-0 text-accent-emerald" />
                    {c}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && other.trim()) {
                      e.preventDefault();
                      void answer(other.trim());
                    }
                  }}
                  disabled={busy}
                  placeholder="Or type your own answer…"
                  className="flex-1 rounded-lg border border-panel-border bg-panel-hover px-3 py-1.5 text-xs text-foreground outline-none placeholder:text-muted disabled:opacity-60"
                />
                <button
                  type="button"
                  disabled={busy || !other.trim()}
                  onClick={() => answer(other.trim())}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-panel-border px-3 py-1.5 text-xs text-muted hover:text-foreground disabled:opacity-40"
                >
                  <Send size={12} />
                  Send
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <p className="text-xs text-muted">
          Type your answer in the box below and send it — it will go straight to this question.
        </p>
      )}
    </div>
  );
}
