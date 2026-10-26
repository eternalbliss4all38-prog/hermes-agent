"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";
import { ChevronRight, Clock, Wrench } from "lucide-react";
import { useHermesChatStore, type ChatMessage, type ToolCall } from "@/store/useHermesChatStore";
import { ClarifyPrompt } from "@/components/agent-chat/ClarifyPrompt";

function ToolCallCard({ tool }: { tool: ToolCall }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-panel-border bg-panel-hover px-2.5 py-1.5 text-xs text-muted">
      <Wrench size={12} className={tool.status === "running" ? "animate-pulse text-accent-cyan" : "text-accent-emerald"} />
      <span className="font-mono">{tool.name}</span>
      <ChevronRight size={12} className="text-muted/50" />
      <span>{tool.status === "running" ? "running…" : tool.error ? "failed" : "done"}</span>
    </div>
  );
}

function MessageCard({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div className={clsx("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={clsx(
          "flex max-w-[85%] flex-col gap-2 rounded-2xl border px-3.5 py-2.5 text-sm leading-relaxed select-text",
          isUser
            ? "border-accent-cyan/25 bg-accent-cyan/10 text-foreground"
            : "border-panel-border bg-panel text-foreground",
        )}
      >
        {message.tools.length > 0 && (
          <div className="flex flex-col gap-1.5">
            {message.tools.map((tool) => (
              <ToolCallCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
        {message.text && (<div><p className="whitespace-pre-wrap select-text">{message.text}</p>{!isUser && (<button type="button" onClick={() => navigator.clipboard.writeText(message.text || "")} className="mt-2 inline-flex items-center gap-1 rounded bg-panel-border/50 px-2.5 py-1 text-xs text-muted hover:text-foreground active:scale-95 transition-all">Copy</button>)}</div>)}
        {message.streaming && !message.text && (
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.2s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.1s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" />
          </span>
        )}
        {message.error && <p className="text-xs text-accent-red">{message.error}</p>}
        {message.queued && (
          <span className="inline-flex items-center gap-1 text-[10px] text-accent-amber">
            <Clock size={10} /> waiting for reconnect — sends automatically
          </span>
        )}
      </div>
    </div>
  );
}

export function ChatMessageList() {
  const { messages, status, error } = useHermesChatStore();
  const listRef = useRef<HTMLDivElement>(null);
  // Parked at the bottom of THIS list? While true, output follows. The moment it
  // is false (the reader scrolled up) we never move the view until they return.
  const pinnedRef = useRef(true);
  const lastCountRef = useRef(0);

  const jumpToBottom = () => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  };

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const atBottom = () => {
      const gap = el.scrollHeight - el.scrollTop - el.clientHeight;
      pinnedRef.current = gap < 48; // ~1 line
    };
    el.addEventListener("scroll", atBottom, { passive: true });
    el.addEventListener("wheel", atBottom, { passive: true });
    el.addEventListener("touchmove", atBottom, { passive: true });
    atBottom();
    return () => {
      el.removeEventListener("scroll", atBottom);
      el.removeEventListener("wheel", atBottom);
      el.removeEventListener("touchmove", atBottom);
    };
  }, []);

  // ON LOAD / REMOUNT: jump straight to the newest message. Without this the pane
  // opens at the TOP of a long history and you have to scroll for minutes to get
  // back to where you were. Twice via rAF (before + after first layout) plus a
  // delayed pass, because restoring history is async and height settles late.
  useEffect(() => {
    pinnedRef.current = true;
    let raf1 = 0;
    let raf2 = 0;
    const t1 = setTimeout(jumpToBottom, 50);
    const t2 = setTimeout(jumpToBottom, 300);
    const t3 = setTimeout(jumpToBottom, 900);
    raf1 = requestAnimationFrame(() => {
      jumpToBottom();
      raf2 = requestAnimationFrame(jumpToBottom);
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // While pinned, keep the view at the bottom as content grows — this catches
  // late reflow (long messages, tool cards, images) that lands after the effect.
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      if (pinnedRef.current) jumpToBottom();
    });
    for (const child of Array.from(el.children)) observer.observe(child);
    return () => observer.disconnect();
  });

  // Follow the stream ONLY while pinned, and scroll ONLY this container.
  // Never scrollIntoView(): it walks up every ancestor scroller, which is what
  // dragged the whole page (chat + sandbox) to the bottom on every token.
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const grew = messages.length !== lastCountRef.current;
    lastCountRef.current = messages.length;
    if (!pinnedRef.current && !grew) return;
    pinnedRef.current = true;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  return (
    <div ref={listRef} className="h-full space-y-3 overflow-y-auto overscroll-contain p-4">
      {status === "connecting" && <p className="text-center text-xs text-muted">Connecting to Hermes…</p>}
      {status === "error" && (
        <p className="text-center text-xs text-accent-red">{error ?? "Could not connect to Hermes."}</p>
      )}
      {messages.length === 0 && status === "connected" && (
        <p className="text-center text-xs text-muted">Say something to get started.</p>
      )}
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
      <ClarifyPrompt />
    </div>
  );
}
