'use client';

import React from 'react';

export default function CreativeStudioHub() {
  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 p-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase">S.A.M.S. Sovereign Production Suite</span>
            <h1 className="text-2xl font-bold mt-1">OpenMontage & OpenClaw Creative Studios</h1>
          </div>
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded">
            OpenClaw Gateway :18789 ONLINE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/video-studio" className="block p-6 bg-[#0d111a] border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 bg-cyan-500/15 text-cyan-400 font-mono text-xs font-bold rounded">08 VIDEO STUDIO</span>
              <span className="text-xs font-mono text-slate-400">Runway-Grade Workstation →</span>
            </div>
            <h2 className="text-lg font-bold">OpenMontage Pixel Viewport & Timeline</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              6-Axis Camera Rig, First-Frame/Last-Frame Keyframe Locks, Multi-Track Timeline Scrubber, 12 OpenMontage Production Pipelines, and live OpenClaw Voice Director.
            </p>
          </a>

          <a href="/audio-studio" className="block p-6 bg-[#0d111a] border border-purple-500/30 hover:border-purple-400 rounded-lg transition space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 bg-purple-500/15 text-purple-400 font-mono text-xs font-bold rounded">09 AUDIO STUDIO</span>
              <span className="text-xs font-mono text-slate-400">Suno/DAW Stem Deck →</span>
            </div>
            <h2 className="text-lg font-bold">Kokoro/Piper Voice & 4-Stem Mastering Deck</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              4-Track Demucs Stem Isolation, Local Neural Voice Synthesis, FFmpeg Sidechain Auto-Ducking (-14dB), and 1-Click Export to Video Studio.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
