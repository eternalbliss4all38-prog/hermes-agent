"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";

export default function AudioStudioPage() {
  const [prompt, setPrompt] = useState("");
  const [bpm, setBpm] = useState(120);
  const [lyrics, setLyrics] = useState("[Verse 1]\nNeon lights in the rain...\n\n[Chorus]\nSovereign systems rising high...");

  return (
    <div className="flex flex-col h-full w-full min-h-screen bg-slate-950 text-slate-100 p-3 md:p-6 space-y-4 pb-20">
      {/* OpenClaw Sound Director Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <h2 className="text-xs md:text-sm font-bold tracking-wide uppercase text-slate-200">
              Suno Studio 2.0 & OpenClaw Sound Engineer
            </h2>
          </div>
          <span className="text-[10px] md:text-xs font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800">
            Kokoro-82M + Demucs Active
          </span>
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Sound prompt: 'Dark Cyberpunk 808 with gritty sub-bass and ethereal female vocal chops'..."
            className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <button className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
            🎙 Speak
          </button>
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
            ⚡ Generate Music
          </button>
        </div>
      </div>

      {/* Audio Studio DAW Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Lyrics & Structure */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3 md:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Structured Lyrics & Song Form</h3>
            <span className="text-[10px] font-mono text-cyan-400">Tagged Format</span>
          </div>
          <textarea
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
            rows={8}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-cyan-500"
          />
          <div className="flex flex-wrap gap-1.5 text-[10px]">
            {["[Intro]", "[Verse]", "[Chorus]", "[Hook]", "[Drop]", "[Outro]"].map((tag) => (
              <button 
                key={tag}
                onClick={() => setLyrics(prev => prev + "\n" + tag + "\n")}
                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-mono"
              >
                + {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Master Controls & Stem Splitter */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Tempo & Sonic Profile</h3>
          
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Tempo</span>
              <span className="font-mono text-cyan-400 font-bold">{bpm} BPM</span>
            </div>
            <input
              type="range"
              min="60"
              max="180"
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h4 className="text-[11px] font-semibold text-slate-400 uppercase">Stem Isolation (Demucs v4)</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button className="p-2 rounded bg-slate-950 border border-slate-800 hover:border-cyan-500 text-slate-300 text-center font-medium">
                Vocals Only
              </button>
              <button className="p-2 rounded bg-slate-950 border border-slate-800 hover:border-cyan-500 text-slate-300 text-center font-medium">
                Instrumental
              </button>
              <button className="p-2 rounded bg-slate-950 border border-slate-800 hover:border-cyan-500 text-slate-300 text-center font-medium">
                Drums Stem
              </button>
              <button className="p-2 rounded bg-slate-950 border border-slate-800 hover:border-cyan-500 text-slate-300 text-center font-medium">
                Bassline Stem
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <button className="w-full py-2.5 px-3 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-semibold flex items-center justify-center space-x-2 hover:bg-emerald-900/80 transition">
              <span>🔊 Trigger Auto-Duck Sidechain</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
