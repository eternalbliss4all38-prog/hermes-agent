// Thin client for Hermes Agent's JSON-RPC gateway (/hermes/api/ws), the same
// protocol its Electron Desktop app uses -- session.create, prompt.submit,
// and image.attach_bytes over one newline-delimited JSON-RPC 2.0 socket,
// with server-pushed {method:"event"} frames carrying streamed response
// tokens.
//
// FORK ADDITION (2026-11-03): server->client REQUESTS. The gateway can ask the
// viewer a question mid-turn -- vault.unlock_prompt / vault.save_login /
// vault.code (see tui_gateway/contracts/server_requests.py). Those arrive as
// JSON-RPC requests {method, params, id} with a SERVER id, which the original
// client silently dropped (it only understood "event" frames and its own
// replies). Dropping them is why vault prompts never reached this dashboard.
// onRequest()/respond() implement the client half of that contract.

export interface GatewayEvent {
  type: string;
  session_id?: string;
  payload?: Record<string, unknown>;
  timestamp?: number;
}

/** A server->client request: the gateway is invoking a method on THIS client. */
export interface GatewayRequest {
  id: number;
  method: string;
  params: Record<string, unknown>;
}

interface RpcPending {
  resolve: (value: unknown) => void;
  reject: (reason: Error) => void;
}

type EventListener = (event: GatewayEvent) => void;
type RequestListener = (request: GatewayRequest) => void;

export class HermesGatewayError extends Error {}

export class HermesGateway {
  private ws: WebSocket | null = null;
  private nextId = 1;
  private pending = new Map<number, RpcPending>();
  private listeners = new Set<EventListener>();
  private requestListeners = new Set<RequestListener>();
  private closeListeners = new Set<() => void>();
  private intentionalClose = false;
  private closedNotified = false;
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

  isOpen(): boolean {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
  }

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

  private handleMessage(line: string) {
    let msg: {
      method?: string;
      params?: GatewayEvent & Record<string, unknown>;
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

    if (typeof msg.method === "string" && typeof msg.id === "number") {
      // A server->client request. Only treat it as one when the id is not one
      // of OUR in-flight calls/probes (those are matched below) -- the two id
      // spaces are separate, but this guards a collision.
      if (!this.pending.has(msg.id) && !this.probes.has(msg.id)) {
        const req: GatewayRequest = {
          id: msg.id,
          method: msg.method,
          params: (msg.params as Record<string, unknown>) ?? {},
        };
        this.requestListeners.forEach((l) => l(req));
        return;
      }
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

  onEvent(listener: EventListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /** Subscribe to server->client requests (vault/secret prompts, bridges). */
  onRequest(listener: RequestListener): () => void {
    this.requestListeners.add(listener);
    return () => this.requestListeners.delete(listener);
  }

  /**
   * Answer a server->client request by id. `result` is the JSON-RPC result the
   * contract expects (e.g. {value: "..."} for ValueResult). Pass `undefined`
   * value to decline a vault prompt (empty value == cancelled).
   */
  respond(id: number, result: unknown): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    try {
      this.ws.send(JSON.stringify({ jsonrpc: "2.0", id, result }) + "\n");
    } catch {
      /* ignore */
    }
  }

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
    this.requestListeners.clear();
    this.closeListeners.clear();
  }
}
