"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";

export default function WorkflowsPage() {
  const [activeTab, setActiveTab] = useState<"build" | "run" | "manage">("build");
  const [prompt, setPrompt] = useState("");
  const [selectedRun, setSelectedRun] = useState<number | null>(1);

  return (
    <div className="flex flex-col h-full w-full min-h-screen bg-slate-950 text-slate-100 p-3 md:p-6 pb-24 space-y-4">
      {/* Top OpenClaw Director Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <h2 className="text-xs md:text-sm font-bold tracking-wide uppercase text-slate-200">
              OpenClaw Autonomous Workflow Architect
            </h2>
          </div>
          <span className="text-[10px] md:text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
            OpenRouter: DeepSeek V4.1 Flash
          </span>
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Instruct OpenClaw: 'Build an AI workflow routing bridge opt-ins to Listmonk with email triage'..."
            className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <button className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
            🎙 Speak
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
            ⚡ AI Build
          </button>
        </div>
      </div>

      {/* Main Content Area based on Tab */}
      {activeTab === "build" && (
        <div className="flex-1 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl relative overflow-hidden min-h-[550px] flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase">Active Pipeline</span>
              <h3 className="text-base font-bold text-slate-100">AI Lead Triage & Autonomous Nurture Flow</h3>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/80 font-medium flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Live Execution</span>
              </span>
            </div>
          </div>

          {/* Visual Node Graph */}
          <div className="my-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Trigger Node */}
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl shadow-md space-y-2 relative">
              <div className="flex items-center space-x-2 text-cyan-400">
                <span className="text-xs font-bold uppercase tracking-wider">⚡ Trigger</span>
              </div>
              <p className="text-sm font-semibold text-slate-200">Bridge Page Opt-in</p>
              <span className="text-[10px] font-mono text-slate-500">POST /api/webhooks/lead</span>
            </div>

            {/* AI Agent Node */}
            <div className="bg-gradient-to-br from-purple-950/60 to-slate-950 border border-purple-800/60 p-4 rounded-xl shadow-lg space-y-2 relative md:col-span-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-purple-400">
                  <span className="text-xs font-bold uppercase tracking-wider">🤖 AI Agent (Central Hub)</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-900/60 text-purple-300">OpenRouter</span>
              </div>
              <p className="text-sm font-semibold text-purple-200">DeepSeek-V4.1-Flash Evaluator</p>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-purple-900/40 text-[11px] text-slate-300">
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Tool: Intent Parser</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Tool: Lead Scorer</span>
                </div>
              </div>
            </div>

            {/* Output Node */}
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl shadow-md space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400">
                <span className="text-xs font-bold uppercase tracking-wider">📦 Action</span>
              </div>
              <p className="text-sm font-semibold text-slate-200">Listmonk Drip Sync</p>
              <span className="text-[10px] font-mono text-slate-500">200 OK • Immediate Trigger</span>
            </div>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 flex items-center justify-between text-xs text-slate-400">
            <span>Visual builder synchronized with Hermes Orchestrator</span>
            <button className="text-cyan-400 hover:text-cyan-300 font-medium">Test Run Sequence →</button>
          </div>
        </div>
      )}

      {/* RUN TAB (Telemetry & Execution Inspector) */}
      {activeTab === "run" && (
        <div className="flex-1 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase">Live Activity</span>
              <h3 className="text-base font-bold text-slate-100">Workflow Execution Logs & Traces</h3>
            </div>
            <div className="flex space-x-4 text-xs font-mono">
              <span className="text-emerald-400">Success: 99.4%</span>
              <span className="text-slate-400">Avg Run: 1.4s</span>
            </div>
          </div>

          <div className="space-y-2">
            {[
              { id: 1, name: "Webhook Ingestion -> Lead Scoring", time: "Just now", status: "success", tokens: "1,240 tokens", dur: "840ms" },
              { id: 2, name: "Viral Forge Media Review Trigger", time: "12m ago", status: "success", tokens: "2,890 tokens", dur: "1.8s" },
              { id: 3, name: "Email Triage -> Listmonk Campaign Sync", time: "34m ago", status: "success", tokens: "980 tokens", dur: "620ms" },
            ].map((run) => (
              <div 
                key={run.id}
                onClick={() => setSelectedRun(run.id)}
                className={`p-3 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                  selectedRun === run.id 
                    ? "bg-slate-800/80 border-cyan-500/80 text-white" 
                    : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <div>
                    <p className="text-xs font-semibold">{run.name}</p>
                    <span className="text-[10px] text-slate-500 font-mono">{run.time} • {run.tokens}</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  {run.dur}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MANAGE TAB (Versions & Deployment Control) */}
      {activeTab === "manage" && (
        <div className="flex-1 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-mono text-purple-400 tracking-wider uppercase">Governance</span>
              <h3 className="text-base font-bold text-slate-100">Version Management & Rollback</h3>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800">
              v2.32.7 Engine
            </span>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-950 border border-emerald-800/60 p-4 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase">Current Production (Published)</span>
                <h4 className="text-sm font-bold text-slate-100">DeepSeek-V4.1-Flash Unified Schema</h4>
                <p className="text-xs text-slate-400">Deployed Oct 22, 2026 • Verified zero dropouts</p>
              </div>
              <span className="text-xs px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold">Active</span>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">Previous Version (Archived)</span>
                <h4 className="text-sm font-semibold text-slate-300">Legacy Stateless Endpoint</h4>
                <p className="text-xs text-slate-500">Pre-MemPalace snapshot</p>
              </div>
              <button className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition">
                Rollback
              </button>
            </div>
          </div>
        </div>
      )}

      {/* The Bottom Floating Pill Navigation (BUILD | RUN | MANAGE) */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-full p-1.5 shadow-2xl flex items-center space-x-1 pointer-events-auto">
          <button
            onClick={() => setActiveTab("build")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
              activeTab === "build" 
                ? "bg-slate-100 text-slate-950 shadow-md" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            Build
          </button>
          <button
            onClick={() => setActiveTab("run")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
              activeTab === "run" 
                ? "bg-slate-100 text-slate-950 shadow-md" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            Run
          </button>
          <button
            onClick={() => setActiveTab("manage")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
              activeTab === "manage" 
                ? "bg-slate-100 text-slate-950 shadow-md" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );
}
