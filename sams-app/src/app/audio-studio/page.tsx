'use client';

import React, { useState } from 'react';

type StemTrack = {
  id: string;
  name: string;
  engine: string;
  gainDb: number;
  muted: boolean;
  solo: boolean;
  color: string;
  bars: number[];
};

export default function AudioStudioWorkstation() {
  const [bpm, setBpm] = useState(124);
  const [musicalKey, setMusicalKey] = useState('C Minor');
  const [voiceModel, setVoiceModel] = useState('Kokoro-82M_Authority_Male');
  const [autoDuckingDb, setAutoDuckingDb] = useState(-14);
  const [scriptLyrics, setScriptLyrics] = useState(
    `[00:00 - HOOK: PUNCHY & URGENT]\nStop scrolling. Most affiliate campaigns burn out before hitting 100 clicks.\n\n[00:04 - BODY: CONFIDENT AUTHORITY]\nHere is how automated variance testing locks in profitable hooks without manual guesswork.\n\n[00:24 - CTA: DIRECT]\nTap the link below before this batch closes.`
  );
  const [openClawAudioCmd, setOpenClawAudioCmd] = useState('');
  const [statusLog, setStatusLog] = useState<string[]>([
    '[AUDIO CORE] Connected to OpenClaw Gateway (:18789) + Local Piper/Kokoro TTS + Demucs 4-Stem + FFmpeg Auto-Ducker.',
  ]);
  const [isListening, setIsListening] = useState(false);

  const [stems, setStems] = useState<StemTrack[]>([
    { id: 'stem_vo', name: '01 Lead Voiceover (Kokoro-82M / Piper)', engine: 'Local Neural TTS', gainDb: 0, muted: false, solo: false, color: 'bg-purple-500', bars: [35, 80, 92, 68, 85, 95, 60, 75, 88, 94, 70, 40, 88, 96, 82, 74, 90, 65, 80, 92, 85, 78, 91, 60] },
    { id: 'stem_synth', name: '02 Instrumental Hook Bed (MusicGen)', engine: 'MusicGen Stereo', gainDb: -14, muted: false, solo: false, color: 'bg-cyan-500', bars: [50, 55, 60, 58, 62, 65, 60, 58, 64, 68, 62, 55, 60, 66, 63, 59, 61, 64, 60, 58, 62, 65, 55, 45] },
    { id: 'stem_bass', name: '03 Sub-Bass & 808 Drive (Demucs Stem)', engine: 'Demucs v4', gainDb: -6, muted: false, solo: false, color: 'bg-amber-500', bars: [70, 40, 75, 45, 80, 40, 78, 50, 82, 45, 75, 40, 85, 50, 76, 45, 80, 40, 78, 48, 82, 42, 70, 30] },
    { id: 'stem_drums', name: '04 Transient Percussion (Demucs Stem)', engine: 'Demucs v4', gainDb: -4, muted: false, solo: false, color: 'bg-emerald-500', bars: [90, 25, 85, 30, 92, 28, 88, 35, 95, 30, 85, 25, 90, 32, 88, 28, 92, 30, 86, 35, 90, 28, 85, 20] },
  ]);

  const updateStem = (id: string, patch: Partial<StemTrack>) => {
    setStems((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  };

  const triggerAudioDirector = async (mode: 'voice_director' | 'manual_render', overrideText?: string) => {
    const cmd = overrideText ?? openClawAudioCmd;
    const prompt = `[OpenMontage Audio Studio] Mode=${mode} | Command="${cmd}" | Voice=${voiceModel} | BPM=${bpm} | Key=${musicalKey} | AutoDuck=${autoDuckingDb}dB | Script="${scriptLyrics}"`;

    await Promise.allSettled([
      fetch('/api/creative', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studio: 'audio-studio', mode, bpm, musicalKey, voiceModel, autoDuckingDb, scriptLyrics, stems, instruction: prompt }),
      }),
      fetch('/api/command/dispatch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, timeoutMs: 45000 }),
      }),
    ]);

    setStatusLog((prev) => [...prev, `[OPENCLAW :18789] Dispatched Audio Master (${voiceModel}, ${bpm} BPM, Auto-Duck ${autoDuckingDb}dB)`]);
    if (mode === 'voice_director') setOpenClawAudioCmd('');
  };

  const toggleVoiceMic = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    if (isListening) { setIsListening(false); return; }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setOpenClawAudioCmd(transcript);
      triggerAudioDirector('voice_director', transcript);
    };
    recognition.start();
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 flex flex-col font-sans select-none">
      <header className="h-14 border-b border-slate-800 bg-[#0d1017] px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30 rounded">09 AUDIO STUDIO</span>
          <h1 className="text-sm font-semibold tracking-wide">OPENCLAW SOUND & VOICE MASTERING DECK</h1>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => triggerAudioDirector('manual_render')} className="px-4 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold rounded">
            Synthesize & Separate Stems
          </button>
          <a href="/video-studio" className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold rounded">
            Send Master to Video Studio →
          </a>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-12 overflow-hidden">
        <aside className="col-span-4 border-r border-slate-800 bg-[#0c0f16] p-4 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <label className="text-[11px] font-mono text-slate-400 block">TEMPO (BPM)</label>
              <input type="number" value={bpm} onChange={(e) => setBpm(parseInt(e.target.value || '120', 10))} className="w-full bg-transparent text-lg font-mono font-bold text-cyan-400 focus:outline-none" />
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <label className="text-[11px] font-mono text-slate-400 block">KEY SIGNATURE</label>
              <select value={musicalKey} onChange={(e) => setMusicalKey(e.target.value)} className="w-full bg-slate-900 text-sm font-mono font-bold text-purple-400 focus:outline-none pt-1">
                <option>C Minor</option>
                <option>F# Minor</option>
                <option>A Minor</option>
                <option>D Minor</option>
              </select>
            </div>
          </div>

          <div className="bg-slate-900 p-3 rounded border border-slate-800 space-y-1.5">
            <label className="text-xs font-mono text-slate-400 block">VOICE ENGINE PROFILE</label>
            <select value={voiceModel} onChange={(e) => setVoiceModel(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-xs font-mono text-slate-200">
              <option value="Kokoro-82M_Authority_Male">Kokoro-82M // Direct Response Authority (Male)</option>
              <option value="Piper_Offline_Fast">Piper Neural TTS // $0 Local Instant Voice</option>
              <option value="Custom_Cloned_Voice">S.A.M.S. Custom Sovereign Voice Clone</option>
            </select>
          </div>

          <div className="bg-slate-900 p-3 rounded border border-slate-800 space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">FFMPEG SIDECHAIN AUTO-DUCKING</span>
              <span className="text-amber-400">{autoDuckingDb} dB</span>
            </div>
            <input type="range" min={-24} max={0} step={1} value={autoDuckingDb} onChange={(e) => setAutoDuckingDb(parseInt(e.target.value, 10))} className="w-full accent-purple-500" />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="text-xs font-mono text-slate-400 mb-1.5 block">VOICEOVER SCRIPT & LYRIC STRUCTURE</label>
            <textarea value={scriptLyrics} onChange={(e) => setScriptLyrics(e.target.value)} className="flex-1 bg-slate-950 border border-slate-800 rounded p-3 text-xs font-mono text-slate-200 leading-relaxed" />
          </div>
        </aside>

        <main className="col-span-8 bg-[#07090d] p-5 flex flex-col justify-between">
          <div className="space-y-3">
            {stems.map((stem) => (
              <div key={stem.id} className={`p-3.5 rounded border ${stem.muted ? 'bg-slate-950/50 border-slate-900 opacity-50' : 'bg-slate-900/80 border-slate-800'}`}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-bold text-slate-200">{stem.name}</span>
                    <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 bg-slate-800 text-slate-400 rounded">{stem.engine}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateStem(stem.id, { muted: !stem.muted })} className={`px-2 py-0.5 text-[10px] font-mono rounded border ${stem.muted ? 'bg-rose-600 text-white' : 'bg-slate-950 text-slate-400 border-slate-800'}`}>MUTE</button>
                    <button onClick={() => updateStem(stem.id, { solo: !stem.solo })} className={`px-2 py-0.5 text-[10px] font-mono rounded border ${stem.solo ? 'bg-amber-500 text-black font-bold' : 'bg-slate-950 text-slate-400 border-slate-800'}`}>SOLO</button>
                    <span className="text-xs font-mono text-cyan-400 w-12 text-right">{stem.gainDb} dB</span>
                    <input type="range" min={-30} max={6} value={stem.gainDb} onChange={(e) => updateStem(stem.id, { gainDb: parseInt(e.target.value, 10) })} className="w-24 accent-cyan-500" />
                  </div>
                </div>
                <div className="h-12 bg-slate-950 rounded border border-slate-800 px-3 flex items-center gap-1">
                  {stem.bars.map((height, idx) => (
                    <div key={idx} style={{ height: `${Math.max(12, Math.min(100, height + stem.gainDb * 1.5))}%` }} className={`flex-1 rounded-sm ${stem.color}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded p-3 font-mono text-[11px] text-slate-300 h-28 overflow-y-auto space-y-1">
            {statusLog.map((item, i) => (<div key={i}>{item}</div>))}
          </div>
        </main>
      </div>

      <footer className="h-16 border-t border-slate-800 bg-[#0b0e15] px-4 flex items-center gap-2">
        <button onClick={toggleVoiceMic} className={`px-4 py-2.5 rounded font-mono text-xs font-bold border ${isListening ? 'bg-rose-600 text-white animate-pulse' : 'bg-slate-900 text-purple-400 border-purple-500/40'}`}>
          {isListening ? '● LISTENING...' : '🎙 SPEAK TO SOUND ENGINEER'}
        </button>
        <input
          type="text"
          value={openClawAudioCmd}
          onChange={(e) => setOpenClawAudioCmd(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && triggerAudioDirector('voice_director')}
          placeholder='Speak or type to OpenClaw (:18789): e.g. "Synthesize voiceover, remove vocal hiss, auto-duck music -14dB"'
          className="flex-1 bg-slate-950 border border-slate-800 rounded px-3.5 py-2.5 text-xs text-slate-100"
        />
        <button onClick={() => triggerAudioDirector('voice_director')} className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold rounded">
          DIRECT AUDIO
        </button>
      </footer>
    </div>
  );
}
