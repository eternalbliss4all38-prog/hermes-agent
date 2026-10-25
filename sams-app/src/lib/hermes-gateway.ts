// Thin client for Hermes Agent's JSON-RPC gateway (/hermes/api/ws), the same
// protocol its Electron Desktop app uses -- session.create, prompt.submit,
// and image.attach_bytes over one newline-delimited JSON-RPC 2.0 socket,
// with server-pushed {method:"event"} frames carrying streamed response
// tokens. Deliberately bypasses /hermes/api/pty: that's raw terminal bytes
// for the embedded xterm.js dashboard, not something a custom UI should
// depend on (see tui_gateway/methods_prompt.py + apps/desktop/src/store/gateway.ts
// for the reference implementation this mirrors).

export interface GatewayEvent {
  type: string;
  session_id?: string;
  payload?: Record<string, unknown>;
  timestamp?: number;
}

interface RpcPending {
  resolve: (value: unknown) => void;
  reject: (reason: Error) => void;
}

type EventListener = (event: GatewayEvent) => void;

export class HermesGatewayError extends Error {}

export class HermesGateway {
  private ws: WebSocket | null = null;
  private nextId = 1;
  private pending = new Map<number, RpcPending>();
  private listeners = new Set<EventListener>();
  private closeListeners = new Set<() => void>();
  private intentionalClose = false;
  private closedNotified = false;
  // Liveness probes: a probe resolves as soon as ANY frame with its id comes
  // back (result OR JSON-RPC error), because "the server answered something"
  // is precisely what tells us the socket is still alive.
  private probes = new Map<number, () => void>();

  connect(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const proto = window.location.protocol === "https:" ? "wss:" : "ws:";
      const url = `${proto}//${window.location.host}/hermes/api/ws?token=${encodeURIComponent(token)}`;
      const ws = new WebSocket(url);
      this.ws = ws;

      const onOpen = () => {
        ws.removeEventListener("error", onError);
        resolve();
      };
      const onError = () => {
        ws.removeEventListener("open", onOpen);
        reject(new HermesGatewayError("Could not connect to Hermes gateway"));
      };
      ws.addEventListener("open", onOpen, { once: true });
      ws.addEventListener("error", onError, { once: true });

      ws.addEventListener("close", () => {
        if (this.ws === ws) this.ws = null;
        if (!this.intentionalClose) this.notifyClosed();
      });
      ws.addEventListener("message", (ev) => this.handleMessage(String(ev.data)));
    });
  }

  /** True while the underlying socket is open and ready for RPC. */
  isOpen(): boolean {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
  }

  /**
   * Liveness probe. Sends a JSON-RPC frame with an intentionally unknown
   * method: the server replies `-32601 unknown method`, which is a real frame
   * coming back over the wire — exactly what we need to distinguish "quiet but
   * healthy" from "silently dead" (a suspended iOS socket, a dropped NAT
   * entry, a half-open TCP link). Resolves true if any reply arrived before
   * the timeout, false otherwise. Costs the server nothing (no session lookup,
   * no DB read).
   */
  probe(timeoutMs = 8000): Promise<boolean> {
    const ws = this.ws;
    if (!ws || ws.readyState !== WebSocket.OPEN) return Promise.resolve(false);
    const id = this.nextId++;
    return new Promise<boolean>((resolve) => {
      let settled = false;
      const finish = (alive: boolean) => {
        if (settled) return;
        settled = true;
        this.probes.delete(id);
        clearTimeout(timer);
        resolve(alive);
      };
      const timer = setTimeout(() => finish(false), timeoutMs);
      this.probes.set(id, () => finish(true));
      try {
        ws.send(JSON.stringify({ jsonrpc: "2.0", method: "ping", params: {}, id }) + "\n");
      } catch {
        finish(false);
      }
    });
  }

  /**
   * Hard-drop a socket that stopped answering (probe timed out) but never
   * emitted `close` — a half-open link looks "OPEN" to readyState forever.
   * Fires the close listeners so the owner runs its reconnect path.
   */
  kill(): void {
    const ws = this.ws;
    this.ws = null;
    try {
      ws?.close();
    } catch {
      /* ignore */
    }
    if (!this.intentionalClose) this.notifyClosed();
  }

  private notifyClosed(): void {
    if (this.closedNotified) return;
    this.closedNotified = true;
    const err = new HermesGatewayError("Hermes gateway connection closed");
    this.pending.forEach((p) => p.reject(err));
    this.pending.clear();
    this.probes.clear();
    this.closeListeners.forEach((l) => l());
  }

  // The server's "newline-delimited JSON-RPC" wire format description
  // applies to its stdio transport; over WebSocket each send_text() call
  // (tui_gateway/ws.py) is already one complete, framed message with no
  // trailing newline, so each onmessage event is exactly one JSON object.
  private handleMessage(line: string) {
    let msg: {
      method?: string;
      params?: GatewayEvent;
      id?: number;
      result?: unknown;
      error?: { code: number; message: string };
    };
    try {
      msg = JSON.parse(line);
    } catch {
      return;
    }

    if (msg.method === "event" && msg.params) {
      this.listeners.forEach((l) => l(msg.params as GatewayEvent));
      return;
    }
    if (typeof msg.id === "number") {
      const probe = this.probes.get(msg.id);
      if (probe) {
        probe();
        return;
      }
      if (this.pending.has(msg.id)) {
        const pending = this.pending.get(msg.id)!;
        this.pending.delete(msg.id);
        if (msg.error) pending.reject(new HermesGatewayError(msg.error.message || "Hermes RPC error"));
        else pending.resolve(msg.result);
      }
    }
  }

  /** Subscribe to server-pushed events (streamed message/tool/status frames). */
  onEvent(listener: EventListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /** Fires when the socket drops out from under us -- not on deliberate close(). */
  onClose(listener: () => void): () => void {
    this.closeListeners.add(listener);
    return () => this.closeListeners.delete(listener);
  }

  call<T = unknown>(method: string, params: Record<string, unknown>): Promise<T> {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      return Promise.reject(new HermesGatewayError("Hermes gateway is not connected"));
    }
    const id = this.nextId++;
    const frame = JSON.stringify({ jsonrpc: "2.0", method, params, id }) + "\n";
    return new Promise<T>((resolve, reject) => {
      this.pending.set(id, { resolve: resolve as (v: unknown) => void, reject });
      this.ws!.send(frame);
    });
  }

  close() {
    this.intentionalClose = true;
    this.ws?.close();
    this.ws = null;
    this.pending.clear();
    this.probes.clear();
    this.listeners.clear();
    this.closeListeners.clear();
  }
}
