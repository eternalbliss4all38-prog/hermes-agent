"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { KeyRound, Lock, ShieldCheck, X } from "lucide-react";
import { useServerRequestStore } from "@/store/useServerRequestStore";

/**
 * Renders the gateway's server->client vault prompts as masked cards -- the
 * surface side of browser_vault's "save this login" / "enter the code" /
 * "unlock the password manager" asks. The secret is typed here, travels only
 * in the JSON-RPC response frame, and is never logged. This is the dashboard
 * parity piece for the Desktop/Ink vault cards.
 *
 * Methods (tui_gateway/contracts/server_requests.py):
 *   vault.save_login  params {origin, site}   -> {value: JSON({identifier,password})}
 *   vault.code        params {site, hint}     -> {value: "<code>"}
 *   vault.unlock_prompt params {backend, display_name} -> {value: "<master pw>"}
 */

const TITLES: Record<string, string> = {
  "vault.save_login": "Save this login",
  "vault.code": "Enter the code",
  "vault.unlock_prompt": "Unlock your password manager",
};

export function VaultPrompt() {
  const request = useServerRequestStore((s) => s.request);
  const answer = useServerRequestStore((s) => s.answer);
  const dismiss = useServerRequestStore((s) => s.dismiss);

  const [identifier, setIdentifier] = useState("");
  const [secret, setSecret] = useState("");

  // Reset the fields whenever a new request arrives.
  useEffect(() => {
    setIdentifier("");
    setSecret("");
  }, [request?.id]);

  if (!request) return null;
  const method = request.method;
  if (!(method in TITLES)) return null; // not a vault prompt we render

  const site = String(request.params.site ?? request.params.display_name ?? "");
  const hint = String(request.params.hint ?? "");
  const origin = String(request.params.origin ?? "");

  function submit() {
    if (method === "vault.save_login") {
      if (!secret) return;
      answer({ value: JSON.stringify({ identifier, password: secret }) });
    } else {
      if (!secret) return;
      answer({ value: secret });
    }
  }

  return (
    <div className="rounded-xl border border-accent-emerald/40 bg-accent-emerald/10 p-3">
      <div className="mb-2 flex items-start gap-2">
        <Lock size={15} className="mt-0.5 shrink-0 text-accent-emerald" />
        <div className="flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
            {TITLES[method]}
          </p>
          <p className="mt-0.5 text-sm text-foreground">
            {site ? <span className="font-medium">{site}</span> : null}
            {origin && method === "vault.save_login" ? (
              <span className="text-muted"> · {origin}</span>
            ) : null}
          </p>
          {hint ? <p className="mt-0.5 text-xs text-muted">{hint}</p> : null}
          <p className="mt-1 text-[10.5px] text-muted">
            Hermes never sees this — it goes straight into your vault.
          </p>
        </div>
      </div>

      <div className="space-y-1.5">
        {method === "vault.save_login" ? (
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Username or email"
            className="w-full rounded-lg border border-panel-border bg-black/40 px-2.5 py-1.5 text-sm text-foreground outline-none placeholder:text-muted"
          />
        ) : null}
        <input
          type="password"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
          }}
          placeholder={
            method === "vault.save_login"
              ? "Password"
              : method === "vault.code"
                ? "One-time code"
                : "Master password"
          }
          autoComplete="off"
          className="w-full rounded-lg border border-panel-border bg-black/40 px-2.5 py-1.5 text-sm text-foreground outline-none placeholder:text-muted"
        />
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        <button
          type="button"
          disabled={!secret}
          onClick={submit}
          className="inline-flex items-center gap-1.5 rounded-lg border border-accent-emerald/50 bg-panel px-3 py-1.5 text-xs font-medium text-accent-emerald transition-colors hover:bg-accent-emerald/10 disabled:opacity-50"
        >
          {method === "vault.save_login" ? <ShieldCheck size={13} /> : <KeyRound size={13} />}
          {method === "vault.save_login" ? "Save & fill" : "Submit"}
        </button>
        <button
          type="button"
          onClick={dismiss}
          className={clsx(
            "inline-flex items-center gap-1.5 rounded-lg border border-panel-border bg-panel px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-white/5",
          )}
        >
          <X size={13} />
          Not now
        </button>
      </div>
    </div>
  );
}
