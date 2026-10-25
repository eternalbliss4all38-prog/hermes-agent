"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useHermesChatStore } from "@/store/useHermesChatStore";
import { ChatMessageList } from "@/components/agent-chat/ChatMessageList";
import { ChatComposer } from "@/components/agent-chat/ChatComposer";

function AgentChatInner() {
  const connect = useHermesChatStore((s) => s.connect);
  const storedSessionId = useHermesChatStore((s) => s.storedSessionId);
  const searchParams = useSearchParams();
  const resume = searchParams.get("resume") ?? undefined;
  const isNew = searchParams.get("new") === "1";

  useEffect(() => {
    // Next.js reuses this component across client-side navigations within
    // the same route (clicking a different session in /sessions, or "New
    // chat", doesn't remount the page) — re-running this whenever `resume`
    // changes is what makes switching chats actually switch. connect()
    // itself no-ops if we're already on this exact target.
    // An EXPLICIT new chat (?new=1) always forces a fresh session.
    // Otherwise (?resume=<id>, or a bare mount / refresh / tab restore) fall
    // back to the last session we persisted so the thread is not abandoned.
    if (isNew) {
      connect(undefined, { forceNew: true });
      return;
    }
    const saved =
      resume ||
      (typeof window !== "undefined"
        ? localStorage.getItem("sams_last_session")
        : null);
    connect(saved || undefined);
  }, [resume, isNew, connect]);

  useEffect(() => {
    // Persist the RESUMABLE stored key (DB row id), never the ephemeral live id.
    if (storedSessionId && typeof window !== "undefined") {
      localStorage.setItem("sams_last_session", storedSessionId);
    }
  }, [storedSessionId]);

  return (
    <div className="flex h-full flex-col">
      <ChatMessageList />
      <ChatComposer />
    </div>
  );
}

export default function AgentChatPage() {
  return (
    <Suspense fallback={<div className="flex h-full flex-col" />}>
      <AgentChatInner />
    </Suspense>
  );
}
