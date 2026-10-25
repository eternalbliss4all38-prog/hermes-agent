"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, Eye, EyeOff } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password.trim() }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body.error ?? "Login failed");
        setSubmitting(false);
        return;
      }
      router.push(params.get("next") || "/mission-control");
      router.refresh();
    } catch {
      setError("Network error");
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-xl border border-panel-border bg-panel p-8 shadow-2xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-emerald via-accent-cyan to-accent-violet text-lg font-bold text-slate-950">
          OS
        </div>
        <h1 className="mb-1 text-center text-lg font-semibold tracking-tight">S.A.M.S. OS</h1>
        <p className="mb-6 text-center text-xs text-muted">Agent OS Mission Control</p>

        <label className="mb-1.5 block text-[11px] uppercase tracking-wide text-muted">Password</label>
        <div className="mb-4 flex items-center gap-2 rounded-md border border-panel-border bg-panel-hover px-3 py-2">
          <Lock size={14} className="text-muted" />
          <input
            type={showPassword ? "text" : "password"}
            autoFocus
            autoComplete="current-password"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground outline-none"
            placeholder="••••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="shrink-0 text-muted hover:text-foreground"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        </div>

        {error && <p className="mb-3 text-xs text-accent-red">{error}</p>}

        <button
          type="submit"
          disabled={submitting || !password}
          className="w-full rounded-md bg-gradient-to-r from-accent-emerald to-accent-cyan py-2 text-sm font-medium text-slate-950 disabled:opacity-50"
        >
          {submitting ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
