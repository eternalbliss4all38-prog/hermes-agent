/**
 * backend-claim.ts
 *
 * Process start-marker probes used to match backend ownership records against
 * live processes.
 */

import { execFile } from 'node:child_process'
import fs from 'node:fs'

import { electronProcessStartMarker } from './parent-process-identity'
import { isPidAlive } from './update-marker'
import { hiddenWindowsChildOptions } from './windows-child-options'

export function execText(command: string, args: string[], { timeout = 3000 } = {}): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const child = execFile(command, args, hiddenWindowsChildOptions({ encoding: 'utf8', timeout }), (error, stdout) => {
      if (error) {
        reject(error)
      } else if (timeout > 0 && child.killed) {
        // A SIGTERM handler can exit zero after execFile's timeout fired.
        reject(new Error(`${command} timed out after ${timeout}ms`))
      } else {
        resolve(String(stdout || '').trim())
      }
    })

    // These probes are noninteractive; do not leave readers waiting for input.
    child.stdin?.end()
  })
}

/**
 * Probe budget for the ORPHAN-REAP path (matchesParent / matchesIdentity /
 * stopOwnedBackend). The claim path keeps the full 30s headroom — a freshly
 * spawned backend's marker is load-bearing and a slow probe must not kill a
 * healthy child (#93608). Reap only needs to tell "same process" from "gone
 * or reused" for OLD records, and the ownership file can accumulate dozens of
 * them (one per profile per launch), so a 30s budget per record would let a
 * cold PowerShell 5.1 stall boot for minutes (#87169). 5s is plenty for a
 * warm probe; a timeout degrades to "unknown" and the record is preserved for
 * the next launch instead of blocking boot.
 */
export const REAP_PROBE_TIMEOUT_MS = 5_000

/**
 * Cross-platform process start marker: a value that changes when a PID is
 * reused, so `pid + marker` identifies one specific process incarnation.
 * Throws when the probe fails — callers decide what a failure means.
 */
export async function processStartMarker(pid: number, timeoutMs: number = 30_000): Promise<string> {
  // Cheap native dead-PID gate. Windows Get-Process / macOS `ps -p` exit 1
  // on a missing PID (not ESRCH), so the identity matchers used to keep the
  // orphan and re-probe it every launch (#92875). ESRCH is the code those
  // catch blocks already map to "gone". Alive or uninspectable (EPERM) PIDs
  // still fall through to the platform probe.
  if (!isPidAlive(pid)) {
    throw Object.assign(new Error(`PID ${pid} no longer exists`), { code: 'ESRCH' })
  }

  if (process.platform === 'linux') {
    const stat = await fs.promises.readFile(`/proc/${pid}/stat`, 'utf8')

    const fields = stat
      .slice(stat.lastIndexOf(')') + 1)
      .trim()
      .split(/\s+/)

    if (!/^\d+$/.test(fields[19] || '')) {
      throw new Error(`Invalid /proc start marker for PID ${pid}`)
    }

    return `linux:${fields[19]}`
  }

  if (process.platform === 'win32') {
    const electronMarker =
      pid === process.pid ? electronProcessStartMarker(pid, process.pid, process.getCreationTime?.()) : null

    if (electronMarker) {
      return electronMarker
    }

    const ticks = await execText(
      'powershell.exe',
      [
        '-NoProfile',
        '-NonInteractive',
        '-Command',
        `$p = Get-Process -Id ${pid} -ErrorAction Stop; $p.StartTime.ToUniversalTime().Ticks`
      ],
      // PowerShell 5.1 cold starts routinely exceed the default 3s execText
      // budget (2.4-8s observed in #87169); give the marker probe headroom.
      // The claim path keeps this 30s budget; the orphan-reap path passes
      // REAP_PROBE_TIMEOUT_MS so a slow probe cannot stall boot.
      { timeout: timeoutMs }
    )

    if (!/^\d+$/.test(ticks)) {
      throw new Error(`Invalid Windows start marker for PID ${pid}`)
    }

    return `win:${ticks}`
  }

  const started = await execText('ps', ['-p', String(pid), '-o', 'lstart='])

  if (!started) {
    throw new Error(`Missing process start marker for PID ${pid}`)
  }

  return `ps:${started}`
}

const PID_ONLY_MARKER_PREFIX = 'pid-only:'

/**
 * Degraded identity marker written by the former local-spawn claim path when
 * the start-marker probe failed against a live child. Ownership records may
 * still carry it; identity matchers treat it as PID-liveness only.
 */
export function isPidOnlyStartMarker(startMarker: unknown): boolean {
  return typeof startMarker === 'string' && startMarker.startsWith(PID_ONLY_MARKER_PREFIX)
}
<<<<<<< HEAD

export type ClaimDecision =
  { action: 'claim'; startMarker: string } | { action: 'degrade'; reason: string } | { action: 'fail'; reason: string }

/**
 * Pure claim policy for a freshly spawned backend child:
 *
 * - probe succeeded            → claim with the full start marker (unchanged).
 * - probe failed, child ALIVE  → degrade to PID-only identity; NEVER kill a
 *                                healthy backend over a flaky identity probe.
 * - probe failed, child DEAD   → fail closed; the child's death is the real
 *                                story and the caller attaches its stderr tail.
 */
export function claimDecision(childAlive: boolean, probe: StartMarkerProbe): ClaimDecision {
  if (probe.ok === true) {
    return { action: 'claim', startMarker: probe.startMarker }
  }

  const { reason } = probe

  return childAlive ? { action: 'degrade', reason } : { action: 'fail', reason }
}

export interface BackendOutputTail {
  /** Attach stdout/stderr data listeners to a just-spawned child. */
  attach(child: {
    stdout?: { on: (event: 'data', listener: (chunk: unknown) => void) => unknown } | null
    stderr?: { on: (event: 'data', listener: (chunk: unknown) => void) => unknown } | null
  }): void
  append(chunk: unknown): void
  /** The buffered tail (most recent `limit` characters), or ''. */
  text(): string
  /** Human-readable suffix for error messages, or '' when nothing buffered. */
  describe(): string
}

export const DEFAULT_OUTPUT_TAIL_LIMIT = 8192

/**
 * Ring-buffered tail of a child's combined stdout+stderr, attached at SPAWN
 * time — before the claim, before the READY wait — so an early crash's real
 * stderr (traceback, missing module, bad config) survives into the ownership
 * error and the before-ready exit messages instead of a bare exit code.
 */
export function createBackendOutputTail(limit: number = DEFAULT_OUTPUT_TAIL_LIMIT): BackendOutputTail {
  let buffer = ''

  const append = (chunk: unknown) => {
    buffer += String(chunk)

    if (buffer.length > limit) {
      buffer = buffer.slice(buffer.length - limit)
    }
  }

  return {
    append,
    attach(child) {
      child.stdout?.on('data', append)
      child.stderr?.on('data', append)
    },
    text() {
      return buffer
    },
    describe() {
      const text = buffer.trim()

      return text ? `\nRecent backend output:\n${text}` : ''
    }
  }
}

/**
 * Exit line for a supervised backend child, carrying the buffered output tail
 * so the reason the child died reaches desktop.log. Every exit surface uses
 * this shape — including the "stale" classification, where the line is the
 * only evidence left: the child is gone and nothing else will say why it
 * exited. `signal` wins over `code` (null code on signal death and vice
 * versa); an empty tail keeps the line exactly as it was before.
 */
export function formatBackendExitLine(
  label: string,
  code: number | null,
  signal: string | null,
  outputTail: BackendOutputTail | null
): string {
  return `${label} (${signal || code})${outputTail?.describe() ?? ''}`
}
=======
>>>>>>> origin/main
