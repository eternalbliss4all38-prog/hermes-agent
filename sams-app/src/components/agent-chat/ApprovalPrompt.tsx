"use client";

import { useState } from "react";
import clsx from "clsx";
import { CheckCircle2, ShieldAlert, X } from "lucide-react";
import { useHermesChatStore } from "@/store/useHermesChatStore";

/**
 * Renders the agent's blocking PERMISSION request (the `approval` gate) as an
 * actionable card. The Hermes gateway emits `approval.request` with the command,
 * a description, and the choices the server will accept; the chat store holds
 * them (FIFO, oldest first — the server resolves one at a time with no
 * request_id). Until this card existed the request was stored and then silently
 * timed out — the operator never saw it. Picking a choice calls
 * `respondToApproval` -> the `approval.respond` RPC.
 */

const CHOICE_LABEL: Record<string, string> = {
  once: "Allow once",
  session: "Allow this session",
  always: "Always allow",
  deny: "Deny",
};

function choiceTone(choice: string): string {
  if (choice === "deny") return "border-accent-red/50 text-accent-red hover:bg-accent-red/10";
  if (choice === "always") return "border-accent-violet/50 text-accent-violet hover:bg-accent-violet/10";
  return "border-accent-emerald/50 text-accent-emerald hover:bg-accent-emerald/10";
}

export function ApprovalPrompt() {
  const approvals = useHermesChatStore((s) => s.approvals);
  const respondToApproval = useHermesChatStore((s) => s.respondToApproval);
  const [busy, setBusy] = useState(false);

  if (!approvals || approvals.length === 0) return null;
  const head = approvals[0]; // only the OLDEST is answerable; server is FIFO
  const more = approvals.length - 1;

  async function answer(choice: string) {
    setBusy(true);
    try {
      await respondToApproval(head.id, choice);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-xl border border-accent-amber/40 bg-accent-amber/10 p-3">
      <div className="mb-2 flex items-start gap-2">
        <ShieldAlert size={15} className="mt-0.5 shrink-0 text-accent-amber" />
        <div className="flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
            Hermes needs your approval{more > 0 ? ` · ${more} more waiting` : ""}
          </p>
          {head.description ? (
            <p className="mt-0.5 text-sm text-foreground whitespace-pre-wrap">{head.description}</p>
          ) : null}
        </div>
      </div>

      {head.command ? (
        <pre className="mb-2 max-h-40 overflow-auto whitespace-pre-wrap break-words rounded border border-panel-border bg-black/40 p-2 text-[10.5px] text-muted">
          {head.command}
        </pre>
      ) : null}

      <div className="flex flex-wrap gap-1.5">
        {head.choices.map((choice) => (
          <button
            key={choice}
            type="button"
            disabled={busy}
            onClick={() => answer(choice)}
            className={clsx(
              "inline-flex items-center gap-1.5 rounded-lg border bg-panel px-3 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
              choiceTone(choice),
            )}
          >
            {choice === "deny" ? <X size={13} /> : <CheckCircle2 size={13} />}
            {CHOICE_LABEL[choice] ?? choice}
          </button>
        ))}
      </div>
    </div>
  );
}
