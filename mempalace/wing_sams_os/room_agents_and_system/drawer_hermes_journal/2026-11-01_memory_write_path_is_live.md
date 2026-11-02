# Session Memory — Mem Palace forensics + product handoff

- **Wing**: wing_sams_os | **Room**: room_agents_and_system | **Drawer**: drawer_hermes_journal
- **Date**: 2026-11-01 | **Source**: live session, forensics verified against the running system

## 1. THE MEMORY JOURNAL WAS BEING WIPED NIGHTLY (verified in source)

`/opt/agent-os/scripts/mempalace_janitor.py` (the previous version, 2,997 bytes) did this on
**every** run:

    shutil.rmtree(J, ignore_errors=True)     # J = drawer_hermes_journal
    os.makedirs(J, exist_ok=True)
    # then wrote 8 hardcoded ~200-byte placeholder files

and stamped the index `generatedAt: 2026-10-23` regardless of the real date.

It ran nightly at 04:00 via the host crontab entry:

    0 4 * * * /bin/bash /opt/agent-os/scripts/daily_sync_and_guardrails.sh

**Consequence:** any real memory written to the journal was destroyed by morning, and the
same 8 empty "dream" placeholders reappeared every night. That is why the Memory Galaxy
showed old files and never anything new.

**Fix applied 2026-11-01:** janitor replaced with a non-destructive rebuild (rebuilds
`galaxy_index.json` from current palace contents; never deletes, never overwrites;
creates the journal drawer only if entirely absent; stamps the real current date and each
node carries its own file mtime). Backup: `mempalace_janitor.py.bak-20261101T150455Z`.

## 2. THERE IS NO WRITE PATH FROM CONVERSATION INTO THE PALACE

Nothing links a Hermes session to the palace. The only routine writer was the janitor's
hardcoded placeholders. Manual scripts (`reload_galaxy.py`, `make_palace_rooms.py`) are the
only real writers and nothing schedules them. **This entry is the first real memory note
written deliberately.**

## 3. ARCHITECTURE FACTS ESTABLISHED (all verified, several corrected mid-investigation)

- Mission Control runs as a **host process** (`next-server v14.2.35`, PID 781, pm2-managed),
  listening 127.0.0.1:3211. **Not** in a container — so its `/opt/agent-os/...` paths are correct.
- The Hermes containers mount host `/opt` at `/host/opt`; `/opt/data` is the host's
  `/opt/agent-os/memory/hermes`. So `/opt/agent-os/...` does NOT resolve inside them.
- The palace lives at host `/opt/agent-os/memory/palace`. Index: `galaxy_index.json`.
- Palace = 70 wing nodes + 8 journal placeholders; plus `audit_archive/`.
- `comfyui` page iframes port 8188 — **nothing is listening there** (dead panel).
- Dashboard nav has **no page file** for `/video-studio` or `/audio-studio` (dead links),
  and the working studio at `/studio` (port 4700, sams-studio container) is **not linked**
  from the dashboard at all.
- `n8n` routes fine (`next.config.mjs` redirects `/n8n` → `/home/workflows`; rewrites proxy
  to 127.0.0.1:5678). n8n healthy on :5678.

## 4. MEDIA / STRATEGY DECISIONS MADE THIS SESSION

- **MEDIA-DNA.md** (verified, 26KB): top 3 in the niche = Nate Herk, Greg Isenberg, Liam
  Ottley. Each wins by **giving away a working artifact**. The gap ALL are missing:
  **nobody shows the closing loop** (real beginner, real first paying client, dated proof;
  no retention/failure content).
- Shawn's read (adopted as the thesis): *they've never done it — their business is selling
  ideas.* That makes the closing-loop lane a moat, not a gap.
- The 73-second render (`/opt/data/sams/studio/out/portfolio-01-missed-calls.mp4`,
  5,296,284 bytes, 72.67s, h264 1920x1080 + aac) is a **pipeline proof, not a winning asset**
  — Shawn's verdict: "nothing but words on the screen... not a video." Winners have a face
  and real screens. Demoted to a graphic insert / ad.
- **The plan Shawn specified:** affiliate (Runway, **$15 one-time** per new paid subscriber,
  25% off for his audience, free Max plan for active partners, manual approval + 3-month
  pilot, apply at runway.com/affiliate-program) **AND** a SaaS wrapping his own Agent OS
  pipeline with Runway's MCP inside (`mcp.runwayml.com/mcp`), charged monthly. Both, not
  either: **affiliate pays for the media, SaaS pays the bills.**
- Architecture decision made: **MCP-first** (users bring their own Runway account → $0
  capital), API-wrapped later when subscription revenue funds it.
- **Nothing enters the pipeline before the media is proven professional.** Callback Pro is
  phase 2 and its gate holds.
- Three real gaps between "pipeline that runs for Shawn" and "product he can sell":
  (1) Runway wiring — none exists; (2) the unattended orchestrator — Temporal is running
  but nothing connects the stages; (3) **multi-tenancy** (Listmonk/Postiz are single-instance)
  — the largest piece of work.
- SAAS-LANDSCAPE.md finding: of 26 products reviewed, **0 verified** run the full loop
  unattended; the field is sparse because it is technically hard + previously attempted and
  failed (Icon AI, Grownomic, Relay, Rilo all shut down) + AI-video unit cost exceeding
  low-tier pricing. Viable band is **$299/mo+**, not $29–99.

## 5. OUTSTANDING (not done)

- Write path automation: sessions still do not auto-record here.
- One shared session across all tabs (cross-tab amnesia) — root-caused, not built.
- `/video-studio` + `/audio-studio` pages — do not exist.
- Studio has no generation engine wired (no Runway, no GPU).
