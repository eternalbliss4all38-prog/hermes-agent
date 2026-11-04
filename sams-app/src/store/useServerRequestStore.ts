"use client";

import { create } from "zustand";
import type { GatewayRequest } from "@/lib/hermes-gateway";

/**
 * Holds the server->client request the gateway is CURRENTLY waiting on and the
 * one-shot responder for it. The gateway blocks the agent thread until we
 * answer (or it times out), so at most one is meaningfully live at a time.
 *
 * The gateway is module-private inside useHermesChatStore, so that store wires
 * `gw.onRequest` and hands us `receive(request, respond)`; the vault card calls
 * `answer(...)` which invokes the captured responder.
 */
type Responder = (result: unknown) => void;

interface ServerRequestState {
  request: GatewayRequest | null;
  respond: Responder | null;
  receive: (request: GatewayRequest, respond: Responder) => void;
  answer: (result: unknown) => void;
  dismiss: () => void;
}

export const useServerRequestStore = create<ServerRequestState>((set, get) => ({
  request: null,
  respond: null,
  receive: (request, respond) => set({ request, respond }),
  answer: (result) => {
    const { respond, request } = get();
    if (respond && request) respond(result);
    set({ request: null, respond: null });
  },
  dismiss: () => {
    const { respond, request } = get();
    // Decline: an empty {value} is the contract's "user cancelled" (never a
    // null result -- the server expects the ValueResult shape).
    if (respond && request) respond({ value: "" });
    set({ request: null, respond: null });
  },
}));
