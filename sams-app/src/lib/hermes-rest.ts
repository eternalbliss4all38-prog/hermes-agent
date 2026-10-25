// Plain REST helpers for Hermes's session-management endpoints (list/detail/
// delete/messages). These don't need the JSON-RPC gateway socket at all --
// browsing past sessions shouldn't require opening a live agent connection.
// Same auth model as hermes-gateway.ts: a loopback session token fetched
// from our own /api/hermes/token route, sent as X-Hermes-Session-Token.

export interface HermesSessionInfo {
  id: string;
  source: string | null;
  model: string | null;
  title: string | null;
  started_at: number;
  ended_at: number | null;
  last_active: number;
  is_active: boolean;
  message_count: number;
  tool_call_count: number;
  input_tokens: number;
  output_tokens: number;
  preview: string | null;
  parent_session_id?: string | null;
}

export interface HermesSessionMessage {
  role: "user" | "assistant" | "system" | "tool";
  content: string | null;
  tool_calls?: Array<{ id: string; function: { name: string; arguments: string } }>;
  tool_name?: string;
  tool_call_id?: string;
  timestamp?: number;
}

async function getHermesToken(): Promise<string> {
  const res = await fetch("/api/hermes/token");
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || "Could not get a Hermes session token");
  return body.token as string;
}

async function hermesFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = await getHermesToken();
  const headers = new Headers(init?.headers);
  headers.set("X-Hermes-Session-Token", token);
  const res = await fetch(`/hermes${path}`, { ...init, headers });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}) as { error?: string });
    throw new Error(body.error || `Hermes request failed (${res.status})`);
  }
  return res.json() as Promise<T>;
}

export function listSessions(limit = 50, offset = 0) {
  return hermesFetch<{ sessions: HermesSessionInfo[]; total: number }>(
    `/api/sessions?limit=${limit}&offset=${offset}&order=recent`,
  );
}

export function getSessionMessages(id: string) {
  return hermesFetch<{ session_id: string; messages: HermesSessionMessage[] }>(
    `/api/sessions/${encodeURIComponent(id)}/messages?limit=500&order=latest`,
  );
}

export function deleteSession(id: string) {
  return hermesFetch<{ ok: boolean }>(`/api/sessions/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export interface HermesFileEntry {
  name: string;
  path: string;
  is_directory: boolean;
  size: number | null;
  mtime: number;
  mime_type: string | null;
}

export interface HermesFilesResponse {
  root: string | null;
  path: string;
  parent: string | null;
  locked_root: string | null;
  can_change_path: boolean;
  entries: HermesFileEntry[];
}

export interface HermesFileReadResponse {
  name: string;
  path: string;
  size: number;
  mime_type: string;
  data_url: string;
}

export function listFiles(path?: string) {
  const query = path ? `?path=${encodeURIComponent(path)}` : "";
  return hermesFetch<HermesFilesResponse>(`/api/files${query}`);
}

export function readFile(path: string) {
  return hermesFetch<HermesFileReadResponse>(`/api/files/read?path=${encodeURIComponent(path)}`);
}

export function deleteFile(path: string, recursive = false) {
  return hermesFetch<{ ok: boolean; path: string }>("/api/files", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path, recursive }),
  });
}
