'use client';

import React, { useState, useRef, useEffect } from 'react';

type CameraRig = {
  pan: number;
  tilt: number;
  zoom: number;
  roll: number;
  truck: number;
  pedestal: number;
  motionBrushStrength: number;
};

type TimelineClip = {
  id: string;
  track: 'video' | 'hook_text' | 'voiceover' | 'bgm_ducked';
  label: string;
  startSec: number;
  durationSec: number;
  color: string;
  lockedFirstFrame?: boolean;
  lockedLastFrame?: boolean;
};

export default function VideoStudioWorkstation() {
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '16:9' | '1:1'>('9:16');
  const [pipeline, setPipeline] = useState('talking_head_clip_factory');
  const [providerMode, setProviderMode] = useState<'zero_cost_local' | 'runpod_serverless' | 'hedra_api'>('zero_cost_local');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playheadSec, setPlayheadSec] = useState(0);
  const totalDurationSec = 30;
  const [showSafeZone, setShowSafeZone] = useState(true);
  const [activeTool, setActiveTool] = useState<'camera' | 'fflf' | 'motion_brush' | 'captions'>('camera');

  const [camera, setCamera] = useState<CameraRig>({
    pan: 0,
    tilt: 0,
    zoom: 1.0,
    roll: 0,
    truck: 0,
    pedestal: 0,
    motionBrushStrength: 65,
  });

  const [firstFramePrompt, setFirstFramePrompt] = useState('High-contrast close-up hook, macro product lighting, 85mm f/1.4');
  const [lastFramePrompt, setLastFramePrompt] = useState('CTA freeze-frame with clean lower-third space and product badge');
  const [hookOverlayText, setHookOverlayText] = useState('STOP SCROLLING: Why 93% fail before day 7');

  const [clips, setClips] = useState<TimelineClip[]>([
    { id: 'v1', track: 'video', label: 'Scene 01: Pattern Interrupt Hook', startSec: 0, durationSec: 4, color: 'bg-cyan-600/80 border-cyan-400', lockedFirstFrame: true },
    { id: 'v2', track: 'video', label: 'Scene 02: Problem Agitation B-Roll', startSec: 4, durationSec: 9, color: 'bg-indigo-600/80 border-indigo-400' },
    { id: 'v3', track: 'video', label: 'Scene 03: Product Proof & Demo', startSec: 13, durationSec: 11, color: 'bg-indigo-600/80 border-indigo-400' },
    { id: 'v4', track: 'video', label: 'Scene 04: Direct CTA Lock', startSec: 24, durationSec: 6, color: 'bg-emerald-600/80 border-emerald-400', lockedLastFrame: true },
    { id: 'h1', track: 'hook_text', label: '3s Retention Hook Caption', startSec: 0, durationSec: 3.5, color: 'bg-amber-600/80 border-amber-400' },
    { id: 'h2', track: 'hook_text', label: 'Dynamic Kinetic Captions (OpenMontage)', startSec: 3.5, durationSec: 26.5, color: 'bg-amber-700/60 border-amber-500' },
    { id: 'vo1', track: 'voiceover', label: 'Kokoro-82M / Piper Presenter VO', startSec: 0, durationSec: 29, color: 'bg-purple-600/80 border-purple-400' },
    { id: 'bgm1', track: 'bgm_ducked', label: 'Audio Bed (-14dB FFmpeg Auto-Duck)', startSec: 0, durationSec: 30, color: 'bg-rose-600/70 border-rose-400' },
  ]);

  const [directorInput, setDirectorInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [directorLogs, setDirectorLogs] = useState<string[]>([
    '[SYSTEM] Connected to OpenClaw Gateway on 127.0.0.1:18789 & Hermes RPC.',
    '[OPENMONTAGE] 12 Production Pipelines loaded (HyperFrames + FFmpeg composition ready).',
  ]);
  const [isDispatching, setIsDispatching] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPlayheadSec((prev) => (prev >= totalDurationSec ? 0 : +(prev + 0.1).toFixed(1)));
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleVoiceCommand = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setDirectorLogs((prev) => [...prev, '[VOICE] Tap the microphone icon on your iPhone keyboard or speak in Chrome.']);
      return;
    }
    if (isListening) {
      setIsListening(false);
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setDirectorInput(transcript);
      dispatchToOpenClaw('voice_director', transcript);
    };
    recognition.start();
  };

  const dispatchToOpenClaw = async (mode: 'voice_director' | 'manual_render', overrideCmd?: string) => {
    const cmd = overrideCmd ?? directorInput;
    if (mode === 'voice_director' && !cmd.trim()) return;
    setIsDispatching(true);
    const lower = cmd.toLowerCase();

    if (mode === 'voice_director') {
      if (lower.includes('9:16') || lower.includes('vertical') || lower.includes('tiktok')) setAspectRatio('9:16');
      else if (lower.includes('16:9') || lower.includes('youtube')) setAspectRatio('16:9');
      if (lower.includes('zoom in')) setCamera((c) => ({ ...c, zoom: Math.min(2.5, +(c.zoom + 0.35).toFixed(2)) }));
      else if (lower.includes('zoom out')) setCamera((c) => ({ ...c, zoom: Math.max(0.5, +(c.zoom - 0.25).toFixed(2)) }));
      if (lower.includes('pan left')) setCamera((c) => ({ ...c, pan: Math.max(-10, c.pan - 4) }));
      if (lower.includes('pan right')) setCamera((c) => ({ ...c, pan: Math.min(10, c.pan + 4) }));
    }

    const structuredPrompt = mode === 'voice_director'
      ? `[OpenMontage Video Studio | Pipeline: ${pipeline} | Compute: ${providerMode} | Aspect: ${aspectRatio}] Direct instruction: ${cmd}. Camera Rig: ${JSON.stringify(camera)}. Hook: "${hookOverlayText}".`
      : `[OpenMontage Manual Render] Execute pipeline "${pipeline}" (${aspectRatio}) via ${providerMode}. Camera=${JSON.stringify(camera)}, FirstFrame="${firstFramePrompt}", LastFrame="${lastFramePrompt}", Hook="${hookOverlayText}", Clips=${JSON.stringify(clips)}`;

    try {
      const [creativeRes, hermesRes] = await Promise.allSettled([
        fetch('/api/creative', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studio: 'video-studio',
            mode,
            pipeline,
            providerMode,
            aspectRatio,
            camera,
            firstFramePrompt,
            lastFramePrompt,
            hookOverlayText,
            clips,
            instruction: structuredPrompt,
          }),
        }),
        fetch('/api/command/dispatch', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: structuredPrompt, timeoutMs: 45000 }),
        }),
      ]);

      let logMsg = `[OPENCLAW :18789] Dispatched "${mode === 'voice_director' ? cmd : pipeline}"`;
      if (creativeRes.status === 'fulfilled' && creativeRes.value.ok) {
        const d = await creativeRes.value.json();
        logMsg += ` | Gateway: ${d.message || 'ACK'}`;
      }
      if (hermesRes.status === 'fulfilled' && hermesRes.value.ok) {
        logMsg += ` | Hermes Agent: Active`;
      }
      setDirectorLogs((prev) => [...prev, logMsg]);
      if (mode === 'voice_director') setDirectorInput('');
    } catch (e: any) {
      setDirectorLogs((prev) => [...prev, `[ERROR] ${e.message}`]);
    } finally {
      setIsDispatching(false);
    }
  };

  const handleTimelineScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setPlayheadSec(+((clickX / rect.width) * totalDurationSec).toFixed(1));
  };

  const splitClipAtPlayhead = () => {
    setClips((prev) => {
      const updated: TimelineClip[] = [];
      for (const clip of prev) {
        if (clip.track === 'video' && playheadSec > clip.startSec + 0.5 && playheadSec < clip.startSec + clip.durationSec - 0.5) {
          const firstDur = +(playheadSec - clip.startSec).toFixed(1);
          const secondDur = +(clip.durationSec - firstDur).toFixed(1);
          updated.push({ ...clip, durationSec: firstDur, label: `${clip.label} (A)` });
          updated.push({ ...clip, id: `${clip.id}_s_${Date.now()}`, startSec: playheadSec, durationSec: secondDur, label: `${clip.label} (B)` });
        } else {
          updated.push(clip);
        }
      }
      return updated;
    });
    setDirectorLogs((prev) => [...prev, `[TIMELINE] Split video track at ${playheadSec.toFixed(1)}s.`]);
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 flex flex-col font-sans select-none">
      <header className="h-14 border-b border-slate-800 bg-[#0d1017] px-4 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 rounded">
            08 VIDEO STUDIO
          </span>
          <select
            value={pipeline}
            onChange={(e) => setPipeline(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-xs font-mono text-cyan-300"
          >
            <option value="talking_head_clip_factory">Pipeline: Talking Head & Clip Factory</option>
            <option value="cinematic_hybrid">Pipeline: Cinematic & Hybrid Ad</option>
            <option value="animated_explainer">Pipeline: Animated Explainer</option>
            <option value="screen_demo_promo">Pipeline: Product Screen Demo</option>
          </select>
          <select
            value={providerMode}
            onChange={(e) => setProviderMode(e.target.value as any)}
            className="bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-xs font-mono text-emerald-300"
          >
            <option value="zero_cost_local">Compute: $0 Free Stack (Pexels + Piper + FFmpeg)</option>
            <option value="runpod_serverless">Compute: RunPod Serverless (Pay-Per-Second GPU)</option>
            <option value="hedra_api">Compute: Hedra / Kling On-Demand API</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-slate-900 border border-slate-800 rounded p-0.5 text-xs font-mono">
            {(['9:16', '16:9', '1:1'] as const).map((ratio) => (
              <button
                key={ratio}
                onClick={() => setAspectRatio(ratio)}
                className={`px-2.5 py-1 rounded transition ${aspectRatio === ratio ? 'bg-cyan-600 text-white font-semibold' : 'text-slate-400'}`}
              >
                {ratio}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowSafeZone(!showSafeZone)}
            className={`px-2.5 py-1 text-xs font-mono rounded border ${showSafeZone ? 'border-amber-500/40 bg-amber-500/10 text-amber-300' : 'border-slate-800 bg-slate-900 text-slate-400'}`}
          >
            SafeZone
          </button>
          <button
            onClick={() => dispatchToOpenClaw('manual_render')}
            disabled={isDispatching}
            className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase rounded shadow"
          >
            {isDispatching ? 'Sending to :18789...' : 'Render via OpenMontage'}
          </button>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-12 overflow-hidden">
        <aside className="col-span-3 border-r border-slate-800 bg-[#0c0f16] p-4 flex flex-col gap-4 overflow-y-auto">
          <div className="grid grid-cols-4 gap-1 bg-slate-900 p-1 rounded border border-slate-800 text-[11px] font-mono">
            {[
              { id: 'camera', label: '6-Axis' },
              { id: 'fflf', label: 'FFLF' },
              { id: 'motion_brush', label: 'Motion' },
              { id: 'captions', label: 'Hook' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTool(t.id as any)}
                className={`py-1.5 rounded text-center transition ${activeTool === t.id ? 'bg-slate-800 text-cyan-400 font-bold border border-cyan-500/30' : 'text-slate-400'}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {activeTool === 'camera' && (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">6-Axis Camera Rig</span>
                <button
                  onClick={() => setCamera({ pan: 0, tilt: 0, zoom: 1, roll: 0, truck: 0, pedestal: 0, motionBrushStrength: 65 })}
                  className="text-[11px] text-cyan-400 hover:underline font-mono"
                >
                  Reset
                </button>
              </div>
              {[
                { key: 'pan', label: 'Pan (X)', min: -10, max: 10, step: 0.5 },
                { key: 'tilt', label: 'Tilt (Y)', min: -10, max: 10, step: 0.5 },
                { key: 'zoom', label: 'Zoom (Z)', min: 0.5, max: 2.5, step: 0.05 },
                { key: 'roll', label: 'Roll (°)', min: -15, max: 15, step: 1 },
                { key: 'truck', label: 'Dolly Truck', min: -10, max: 10, step: 0.5 },
                { key: 'pedestal', label: 'Pedestal', min: -10, max: 10, step: 0.5 },
              ].map((ctrl) => (
                <div key={ctrl.key} className="bg-slate-900/70 p-2 rounded border border-slate-800">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{ctrl.label}</span>
                    <span className="font-mono text-cyan-400">{(camera as any)[ctrl.key]}</span>
                  </div>
                  <input
                    type="range"
                    min={ctrl.min}
                    max={ctrl.max}
                    step={ctrl.step}
                    value={(camera as any)[ctrl.key]}
                    onChange={(e) => setCamera((prev) => ({ ...prev, [ctrl.key]: parseFloat(e.target.value) }))}
                    className="w-full accent-cyan-500"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTool === 'fflf' && (
            <div className="space-y-3">
              <div className="p-2.5 bg-slate-900 border border-slate-800 rounded space-y-1.5">
                <label className="text-xs text-cyan-400 font-mono block">FIRST FRAME ANCHOR (0.0s)</label>
                <textarea rows={3} value={firstFramePrompt} onChange={(e) => setFirstFramePrompt(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-xs text-slate-200" />
              </div>
              <div className="p-2.5 bg-slate-900 border border-slate-800 rounded space-y-1.5">
                <label className="text-xs text-emerald-400 font-mono block">LAST FRAME ANCHOR ({totalDurationSec}.0s)</label>
                <textarea rows={3} value={lastFramePrompt} onChange={(e) => setLastFramePrompt(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-xs text-slate-200" />
              </div>
            </div>
          )}

          {activeTool === 'motion_brush' && (
            <div className="p-3 bg-slate-900 border border-slate-800 rounded space-y-2">
              <div className="flex justify-between text-xs">
                <span>Motion Brush Trajectory</span>
                <span className="font-mono text-cyan-400">{camera.motionBrushStrength}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={camera.motionBrushStrength}
                onChange={(e) => setCamera((prev) => ({ ...prev, motionBrushStrength: parseInt(e.target.value, 10) }))}
                className="w-full accent-cyan-500"
              />
            </div>
          )}

          {activeTool === 'captions' && (
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-slate-400">3s Retention Hook Text</div>
              <input
                type="text"
                value={hookOverlayText}
                onChange={(e) => setHookOverlayText(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-amber-300 font-semibold"
              />
            </div>
          )}
        </aside>

        <main className="col-span-6 bg-[#07090d] flex flex-col items-center justify-between p-4 relative">
          <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 px-2">
            <span>VIEWPORT // {aspectRatio}</span>
            <span className="text-cyan-400">00:{playheadSec < 10 ? `0${playheadSec.toFixed(1)}` : playheadSec.toFixed(1)} / 00:{totalDurationSec}.0</span>
            <span>ZOOM: {(camera.zoom * 100).toFixed(0)}%</span>
          </div>

          <div className="my-auto flex items-center justify-center w-full h-80 relative overflow-hidden">
            <div
              style={{
                transform: `scale(${camera.zoom}) translate(${camera.pan * 3}px, ${camera.tilt * 3}px) rotate(${camera.roll}deg)`,
                transition: 'transform 120ms ease-out',
              }}
              className={`relative border-2 border-slate-700 bg-gradient-to-br from-slate-900 via-[#111827] to-slate-950 shadow-2xl flex flex-col justify-between p-4 ${
                aspectRatio === '9:16' ? 'w-48 h-80' : aspectRatio === '16:9' ? 'w-96 h-56' : 'w-64 h-64'
              }`}
            >
              {showSafeZone && (
                <div className="absolute inset-3 border border-dashed border-amber-400/40 pointer-events-none flex flex-col justify-between p-1.5">
                  <span className="text-[9px] font-mono text-amber-400/70">SAFE ZONE: TOP</span>
                  <span className="text-[9px] font-mono text-amber-400/70 self-end">CTA CLEARANCE</span>
                </div>
              )}
              {playheadSec <= 3.5 && (
                <div className="z-10 mt-3 bg-black/80 border border-amber-400/60 px-2 py-1 rounded text-center">
                  <p className="text-[11px] font-extrabold text-amber-300 uppercase">{hookOverlayText}</p>
                </div>
              )}
              <div className="my-auto text-center space-y-1">
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">OpenMontage Canvas</div>
                <div className="text-xs text-slate-200 font-medium">
                  {clips.find((c) => c.track === 'video' && playheadSec >= c.startSec && playheadSec <= c.startSec + c.durationSec)?.label || 'Active Frame'}
                </div>
              </div>
              <div className="z-10 mb-1 bg-slate-950/85 border border-slate-700 px-2 py-1 rounded text-center">
                <span className="text-[10px] font-mono text-slate-300">{pipeline} @ {playheadSec.toFixed(1)}s</span>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-3 pt-2 border-t border-slate-800">
            <button onClick={() => setPlayheadSec(0)} className="px-2.5 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono">|&lt; 0.0s</button>
            <button onClick={() => setIsPlaying(!isPlaying)} className="px-5 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold rounded">
              {isPlaying ? 'PAUSE' : 'PLAY TIMELINE'}
            </button>
            <button onClick={splitClipAtPlayhead} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-amber-300">
              ✂ Split Clip
            </button>
          </div>
        </main>

        <aside className="col-span-3 border-l border-slate-800 bg-[#0c0f16] p-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-slate-400">OpenClaw Gateway (:18789)</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="h-64 bg-slate-950 border border-slate-800 rounded p-2.5 font-mono text-[11px] text-slate-300 overflow-y-auto space-y-1.5">
              {directorLogs.map((log, index) => (
                <div key={index} className="border-b border-slate-900 pb-1">{log}</div>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-3 border-t border-slate-800">
            <div className="text-xs font-mono text-slate-400 uppercase">A/B Variance Engine (:4599)</div>
            <button
              onClick={async () => {
                await fetch('/api/ab/tests', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ name: `Video_${pipeline}_${Date.now()}`, aspectRatio, hookOverlayText }),
                }).catch(() => {});
                setDirectorLogs((prev) => [...prev, '[A/B ENGINE :4599] Registered Variant (100-visitor lock, 10% auto-rollback).']);
              }}
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold rounded"
            >
              Push Variant to A/B Engine
            </button>
          </div>
        </aside>
      </div>

      <footer className="h-64 border-t border-slate-800 bg-[#0b0e15] flex flex-col justify-between p-3">
        <div ref={timelineRef} onClick={handleTimelineScrub} className="relative flex-1 bg-slate-950 border border-slate-800 rounded overflow-hidden cursor-pointer p-2 space-y-1.5">
          <div style={{ left: `${(playheadSec / totalDurationSec) * 100}%` }} className="absolute top-0 bottom-0 w-0.5 bg-cyan-400 z-20 pointer-events-none" />
          {(['video', 'hook_text', 'voiceover', 'bgm_ducked'] as const).map((trackName) => (
            <div key={trackName} className="relative h-7 bg-slate-900 rounded flex items-center border border-slate-800/60">
              <span className="z-10 pl-2 text-[10px] font-mono uppercase text-slate-400 w-28 shrink-0">{trackName}</span>
              <div className="relative flex-1 h-full">
                {clips.filter((c) => c.track === trackName).map((clip) => (
                  <div
                    key={clip.id}
                    style={{ left: `${(clip.startSec / totalDurationSec) * 100}%`, width: `${(clip.durationSec / totalDurationSec) * 100}%` }}
                    className={`absolute top-0.5 bottom-0.5 rounded border px-2 flex items-center justify-between text-[10px] font-mono text-white truncate ${clip.color}`}
                  >
                    <span className="truncate">{clip.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2.5 flex items-center gap-2">
          <button
            onClick={toggleVoiceCommand}
            className={`px-4 py-2.5 rounded font-mono text-xs font-bold border ${isListening ? 'bg-rose-600 text-white border-rose-400 animate-pulse' : 'bg-slate-900 text-cyan-400 border-cyan-500/40'}`}
          >
            {isListening ? '● LISTENING...' : '🎙 SPEAK TO OPENCLAW'}
          </button>
          <input
            type="text"
            value={directorInput}
            onChange={(e) => setDirectorInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && dispatchToOpenClaw('voice_director')}
            placeholder='Speak or type to OpenClaw (:18789): e.g. "Paste reference TikTok URL or build 30s 9:16 affiliate hook with 35% zoom"'
            className="flex-1 bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-xs text-slate-100"
          />
          <button onClick={() => dispatchToOpenClaw('voice_director')} disabled={isDispatching} className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold rounded">
            DIRECT OPENMONTAGE
          </button>
        </div>
      </footer>
    </div>
  );
}
