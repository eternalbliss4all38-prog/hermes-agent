"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Paperclip, Send, Square } from "lucide-react";
import clsx from "clsx";
import { useHermesChatStore } from "@/store/useHermesChatStore";

// Non-standard; only Chromium/Safari expose it, feature-detected below.
interface SpeechRecognitionResultLike {
  0: { transcript: string };
}
interface SpeechRecognitionEventLike {
  results: ArrayLike<SpeechRecognitionResultLike>;
}
interface SpeechRecognitionLike {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((ev: SpeechRecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}

function getSpeechRecognition(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function ChatComposer() {
  const { status, pendingImages, sendMessage, attachImage, clarify } = useHermesChatStore();
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [busy, setBusy] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  // Feature-detected after mount, not during render: window/SpeechRecognition
  // don't exist during SSR, so checking this directly in the render body
  // makes the server-rendered markup (no mic button) disagree with the
  // client's first render (mic button present) and trips a hydration error.
  const [speechSupported, setSpeechSupported] = useState(false);

  useEffect(() => {
    setSpeechSupported(getSpeechRecognition() !== null);
  }, []);

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight, 200)}px`;
  }, [text]);

  // Never hard-lock the box. A dropped socket (iOS suspending the tab, a proxy
  // idle timeout) used to disable this textarea entirely, so there was nowhere
  // to type the answer to a question the agent was waiting on. Anything sent
  // while disconnected is queued and delivered on reconnect.
  const disabled = busy;
  const awaitingAnswer = !!clarify && !clarify.expired;
  const placeholder = awaitingAnswer
    ? "Type your answer…"
    : status === "connected"
      ? "Message Hermes…"
      : status === "error"
        ? "Reconnecting — type now, it'll send when back…"
        : "Connecting to Hermes…";

  async function handleSend() {
    if (!text.trim() && pendingImages.length === 0) return;
    setBusy(true);
    const toSend = text;
    setText("");
    try {
      await sendMessage(toSend);
    } finally {
      setBusy(false);
      textareaRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";
    for (const file of files) {
      try {
        await attachImage(file);
      } catch (err) {
        console.error("attachImage failed", err);
      }
    }
  }

  function toggleListening() {
    const SpeechRecognitionCtor = getSpeechRecognition();
    if (!SpeechRecognitionCtor) return;

    if (listening) {
      recognitionRef.current?.stop();
      return;
    }

    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = navigator.language || "en-US";
    recognition.onresult = (ev) => {
      let transcript = "";
      for (let i = 0; i < ev.results.length; i++) transcript += ev.results[i][0].transcript;
      setText((prev) => (prev ? `${prev} ${transcript}` : transcript));
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  }

  return (
    <div className="border-t border-panel-border bg-panel p-3">
      {pendingImages.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {pendingImages.map((img, i) => (
            <span
              key={`${img.path}-${i}`}
              className="flex items-center gap-1.5 rounded-full border border-panel-border bg-panel-hover px-2.5 py-1 text-xs text-muted"
            >
              <Paperclip size={12} />
              {img.name}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-end gap-2">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled}
          aria-label="Attach photo"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-panel-border text-muted transition-colors hover:bg-panel-hover hover:text-foreground disabled:opacity-40"
        >
          <Paperclip size={18} />
        </button>

        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          rows={1}
          placeholder={placeholder}
          className="max-h-[200px] min-h-10 flex-1 resize-none rounded-xl border border-panel-border bg-panel-hover px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted disabled:opacity-60"
        />

        {speechSupported && (
          <button
            type="button"
            onClick={toggleListening}
            disabled={disabled}
            aria-label={listening ? "Stop dictation" : "Start dictation"}
            className={clsx(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors disabled:opacity-40",
              listening
                ? "border-accent-red/40 bg-accent-red/10 text-accent-red"
                : "border-panel-border text-muted hover:bg-panel-hover hover:text-foreground",
            )}
          >
            {listening ? <Square size={16} /> : <Mic size={18} />}
          </button>
        )}

        <button
          type="button"
          onClick={handleSend}
          disabled={disabled || (!text.trim() && pendingImages.length === 0)}
          aria-label="Send"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-emerald via-accent-cyan to-accent-violet text-slate-950 transition-opacity disabled:opacity-40"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
