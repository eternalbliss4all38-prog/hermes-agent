import { C as resolveGatewayConnectScopes, S as buildGatewayConnectAuth, T as shouldRetryGatewayWithDeviceToken, _ as GatewayProtocolClient, a as createSessionProjection, b as buildDeviceAuthPayloadV3, c as normalizeSessionProjectionRunId, d as readSessionMessageSequence, f as reconcileSessionProjectionSnapshot, g as shouldPauseGatewayReconnect, h as GatewayBrowserDeviceAuthLifecycle, i as resetGatewaySessionMessageSubscriptionCoordinator, l as projectLiveSessionMessage, m as reduceSessionProjectionRunEvent, n as getGatewaySessionMessageSubscriptionCoordinator, o as hasSessionProjectionAcceptedFinal, p as reduceSessionProjection, r as releaseGatewaySessionMessageSubscription, s as isLocallyOptimisticSessionMessage, t as GatewaySessionMessageSubscriptionCoordinator, u as readSessionMessageIdentity, v as GatewayProtocolRequestError, w as selectGatewayConnectAuth, x as normalizeDeviceMetadataForAuth, y as buildDeviceAuthPayload } from "./session-subscriptions-Dk-Xv7Rq.mjs";
import { DEFAULT_GATEWAY_REQUEST_TIMEOUT_MS, DEFAULT_PREAUTH_HANDSHAKE_TIMEOUT_MS, MAX_CONNECT_CHALLENGE_TIMEOUT_MS, MAX_SAFE_TIMEOUT_DELAY_MS, MIN_CONNECT_CHALLENGE_TIMEOUT_MS, addSafeTimeoutDelayGraceMs, clampConnectChallengeTimeoutMs, clearGatewayConnectTimeout, getConnectChallengeTimeoutMsFromEnv, resolveConnectChallengeTimeoutMs, resolveFiniteTimeoutDelayMs, resolvePreauthHandshakeTimeoutMs, resolveSafeTimeoutDelayMs, startGatewayConnectTimeout } from "./timeouts.mjs";
import { n as startGatewayClientWithReadinessWait, r as waitForEventLoopReady, t as startGatewayClientWhenEventLoopReady } from "./readiness-CnK-fyN4.mjs";
import { randomUUID } from "node:crypto";
import { GATEWAY_CLIENT_MODES, GATEWAY_CLIENT_NAMES } from "@openclaw/gateway-protocol/client-info";
import { ConnectErrorDetailCodes, formatConnectErrorMessage, readConnectErrorDetailCode } from "@openclaw/gateway-protocol/connect-error-details";
import { resolveGatewayStartupRetryAfterMs } from "@openclaw/gateway-protocol/startup-unavailable";
import { MIN_CLIENT_PROTOCOL_VERSION, PROTOCOL_VERSION } from "@openclaw/gateway-protocol/version";
import { isLoopbackIpAddress, normalizeIpAddress, parseCanonicalIpAddress } from "@openclaw/net-policy/ip";
import { WebSocket } from "ws";
import { Buffer } from "node:buffer";
//#region src/client-address-utils.ts
function normalizeLowercaseStringOrEmpty(value) {
	return typeof value === "string" ? value.trim().toLowerCase() : "";
}
function isSensitiveUrlQueryParamName(key) {
	return /(?:token|password|secret|key|auth|credential)/iu.test(key);
}
function normalizeFingerprint(fingerprint) {
	return (fingerprint ?? "").replaceAll(":", "").trim().toLowerCase();
}
function parseHostForAddressChecks(host) {
	if (!host) return null;
	const normalizedHost = host.toLowerCase().trim();
	const canonicalHost = normalizedHost.replace(/\.+$/, "");
	if (canonicalHost === "localhost") return {
		isLocalhost: true,
		unbracketedHost: canonicalHost
	};
	return {
		isLocalhost: false,
		unbracketedHost: normalizedHost.startsWith("[") && normalizedHost.endsWith("]") ? normalizedHost.slice(1, -1) : normalizedHost
	};
}
function parseGatewayIpAddress(host) {
	const normalized = normalizeIpAddress(host);
	return normalized ? parseCanonicalIpAddress(normalized) : void 0;
}
//#endregion
//#region src/websocket-data.ts
function rawDataToString(data) {
	if (Array.isArray(data)) return Buffer.concat(data).toString("utf8");
	return data instanceof ArrayBuffer ? Buffer.from(data).toString("utf8") : data.toString("utf8");
}
//#endregion
//#region src/client.ts
const DEFAULT_HOST_DEPS = {
	loadOrCreateDeviceIdentity: () => void 0,
	signDevicePayload: () => {
		throw new Error("GatewayClient device signature dependency is not configured");
	},
	publicKeyRawBase64UrlFromPem: () => {
		throw new Error("GatewayClient public key dependency is not configured");
	},
	loadDeviceAuthToken: () => null,
	storeDeviceAuthToken: () => {},
	clearDeviceAuthToken: () => {},
	beforeConnect: () => {},
	registerGatewayLoopbackBypass: () => void 0,
	logDebug: () => {},
	logError: () => {},
	redactForLog: (message) => message,
	normalizeTlsFingerprint: normalizeFingerprint
};
function resolveHostDeps(overrides) {
	return Object.fromEntries(Object.entries(DEFAULT_HOST_DEPS).map(([key, fallback]) => [key, overrides?.[key] ?? fallback]));
}
const PRIVATE_OR_LOOPBACK_IPV4_RANGES = /* @__PURE__ */ new Set([
	"loopback",
	"private",
	"linkLocal",
	"carrierGradeNat"
]);
const PRIVATE_OR_LOOPBACK_IPV6_RANGES = /* @__PURE__ */ new Set([
	"loopback",
	"linkLocal",
	"uniqueLocal",
	"deprecatedSiteLocal"
]);
function isPrivateOrLoopbackIpAddress(address) {
	return (address.kind() === "ipv4" ? PRIVATE_OR_LOOPBACK_IPV4_RANGES : PRIVATE_OR_LOOPBACK_IPV6_RANGES).has(address.range());
}
function isLoopbackHost(host) {
	const parsed = parseHostForAddressChecks(host);
	if (!parsed) return false;
	if (parsed.isLocalhost) return true;
	return isLoopbackIpAddress(parsed.unbracketedHost);
}
function isPrivateOrLoopbackHost(host) {
	const parsed = parseHostForAddressChecks(host);
	if (!parsed) return false;
	if (parsed.isLocalhost) return true;
	const address = parseGatewayIpAddress(parsed.unbracketedHost);
	if (!address) return false;
	return isPrivateOrLoopbackIpAddress(address);
}
function isTrustedPlaintextWebSocketHost(hostname) {
	if (isPrivateOrLoopbackHost(hostname)) return true;
	const normalized = hostname.toLowerCase().trim().replace(/\.+$/, "");
	return normalized.endsWith(".local") || normalized.endsWith(".ts.net");
}
function isSecureWebSocketUrl(rawUrl, options) {
	try {
		const url = new URL(rawUrl);
		const protocol = url.protocol === "https:" ? "wss:" : url.protocol === "http:" ? "ws:" : url.protocol;
		if (protocol === "wss:") return true;
		if (protocol !== "ws:") return false;
		if (isLoopbackHost(url.hostname) || isTrustedPlaintextWebSocketHost(url.hostname)) return true;
		if (options?.allowPrivateWs === true) {
			const hostForIpCheck = url.hostname.startsWith("[") && url.hostname.endsWith("]") ? url.hostname.slice(1, -1) : url.hostname;
			return isPrivateOrLoopbackHost(url.hostname) || parseGatewayIpAddress(hostForIpCheck) === void 0;
		}
		return false;
	} catch {
		return false;
	}
}
const DEFAULT_GATEWAY_CLIENT_URL = "ws://127.0.0.1:18789";
const DEFAULT_CLIENT_VERSION = "0.0.0";
var GatewayClientRequestError = class extends GatewayProtocolRequestError {
	constructor(error) {
		super({
			...error,
			message: formatConnectErrorMessage({
				message: error.message,
				details: error.details
			})
		});
		this.name = "GatewayClientRequestError";
	}
};
var GatewayClientTransientPreHelloCloseError = class extends Error {
	constructor() {
		super("gateway transient pre-hello clean close");
		this.name = "GatewayClientTransientPreHelloCloseError";
	}
};
var GatewayClientSocketFactoryConfigurationError = class extends Error {};
var GatewayClientTransportPolicyError = class extends GatewayClientSocketFactoryConfigurationError {};
const GATEWAY_CONNECT_ASSEMBLY_ERROR = Symbol("gateway.connectAssemblyError");
function markGatewayConnectAssemblyError(error) {
	Object.defineProperty(error, GATEWAY_CONNECT_ASSEMBLY_ERROR, {
		configurable: true,
		value: true
	});
	return error;
}
function isGatewayConnectAssemblyError(value) {
	return value instanceof Error && value[GATEWAY_CONNECT_ASSEMBLY_ERROR] === true;
}
function isGatewayClientStoppedError(err) {
	const message = err instanceof Error ? err.message : String(err);
	return message === "gateway client stopped" || message === "Error: gateway client stopped";
}
function formatGatewayClientErrorForLog(err) {
	return String(err).replace(/\/\/([^@/?#\s]+)@/g, "//***:***@").replace(/(Authorization:\s*Bearer\s+)[^\s]+/giu, "$1***").replace(/([?&])([^=&\s]+)=([^&#\s"'<>)]*)/g, (match, prefix, key) => isSensitiveUrlQueryParamName(key) ? `${prefix}${key}=***` : match);
}
const FORCE_STOP_TERMINATE_GRACE_MS = 250;
const STOP_AND_WAIT_TIMEOUT_MS = 1e3;
const MAX_SUPPRESSED_TRANSIENT_PRE_HELLO_CLEAN_CLOSES = 1;
var GatewayClient = class {
	constructor(opts) {
		this.ws = null;
		this.stopped = false;
		this.pendingDeviceTokenRetry = false;
		this.deviceTokenRetryBudgetUsed = false;
		this.approvalRuntimeTokenCompatibilityDisabled = false;
		this.approvalRuntimeTokenRetryBudgetUsed = false;
		this.lastTick = null;
		this.tickIntervalMs = 3e4;
		this.tickTimer = null;
		this.pendingStop = null;
		this.transportValidated = false;
		this.suppressedTransientPreHelloCleanCloses = 0;
		this.deps = resolveHostDeps(opts.hostDeps);
		this.opts = {
			...opts,
			deviceIdentity: opts.deviceIdentity === null ? void 0 : opts.deviceIdentity ?? this.deps.loadOrCreateDeviceIdentity()
		};
		this.requestTimeoutMs = typeof opts.requestTimeoutMs === "number" && Number.isFinite(opts.requestTimeoutMs) ? resolveSafeTimeoutDelayMs(opts.requestTimeoutMs, { minMs: 0 }) : DEFAULT_GATEWAY_REQUEST_TIMEOUT_MS;
		const connectChallengeTimeoutMs = resolveConnectChallengeTimeoutMs(this.opts.connectChallengeTimeoutMs, {
			env: this.opts.env,
			configuredTimeoutMs: this.opts.preauthHandshakeTimeoutMs
		});
		this.protocol = new GatewayProtocolClient({
			createSocket: (handlers) => this.createSocket(handlers),
			createRequestId: randomUUID,
			createRequestError: (error) => new GatewayClientRequestError(error),
			createRequestTimeoutError: (method) => /* @__PURE__ */ new Error(`gateway request timeout for ${method}`),
			createRequestAbortError: createGatewayRequestAbortError,
			buildConnectPlan: ({ nonce }) => {
				if (!nonce) throw new Error("gateway connect challenge missing nonce");
				return this.assembleConnectParams({
					role: this.opts.role ?? "operator",
					nonce
				});
			},
			buildConnectParams: (assembled) => assembled.params,
			onConnectPlanError: (error) => {
				this.stopped = true;
				const marked = markGatewayConnectAssemblyError(error);
				const msg = `gateway connect failed: ${formatGatewayClientErrorForLog(error)}`;
				if (this.opts.mode === GATEWAY_CLIENT_MODES.PROBE || isGatewayClientStoppedError(error)) this.logDebug(msg);
				else this.logError(msg);
				return {
					closeCode: 1008,
					closeReason: "connect failed",
					stop: true,
					error: marked
				};
			},
			onConnectHello: (hello, context) => this.handleConnectHello(hello, context.plan),
			onHello: (hello) => this.opts.onHelloOk?.(hello),
			onConnectFailure: (error, context) => this.handleConnectRequestFailure(error, context.plan),
			resolveClose: (context) => this.resolveClose(context),
			onClose: (context, decision) => {
				if (this.tickTimer) {
					clearInterval(this.tickTimer);
					this.tickTimer = null;
				}
				if (decision.notify) this.opts.onClose?.(context.code, context.reason, this.closeInfo(context));
			},
			notifyStoppedClose: true,
			onConnectError: (error) => this.notifyConnectError(error),
			onParseError: (error) => this.logDebug(`gateway client parse error: ${formatGatewayClientErrorForLog(error)}`),
			onEvent: (event) => this.opts.onEvent?.(event),
			onGap: (info) => this.opts.onGap?.(info),
			onActivity: () => {
				this.lastTick = Date.now();
			},
			onCallbackError: (label, error) => this.logDebug(`gateway client ${label === "hello" ? "hello-ok" : label === "gap" ? "event" : label} handler error: ${formatGatewayClientErrorForLog(error)}`),
			handshake: {
				mode: "require-challenge",
				timeoutMs: connectChallengeTimeoutMs,
				timeoutMessage: (elapsedMs) => `gateway connect challenge timeout (waited ${elapsedMs}ms, limit ${connectChallengeTimeoutMs}ms)`
			},
			reconnect: {
				initialMs: 1e3,
				multiplier: 2,
				maxMs: 3e4
			},
			requestTimeoutMs: this.requestTimeoutMs,
			shouldRetrySocketFactoryError: (error) => !(error instanceof GatewayClientSocketFactoryConfigurationError) && !(error instanceof SyntaxError) && !(error instanceof TypeError) && !(error instanceof RangeError),
			rethrowSocketFactoryError: (error) => error instanceof GatewayClientTransportPolicyError
		});
	}
	getConnectionMetadata() {
		return {
			clientName: this.opts.clientName,
			hasDeviceIdentity: Boolean(this.opts.deviceIdentity),
			mode: this.opts.mode,
			preauthHandshakeTimeoutMs: this.opts.preauthHandshakeTimeoutMs
		};
	}
	updateNodeManifest(manifest) {
		this.opts = {
			...this.opts,
			caps: [...manifest.caps],
			commands: [...manifest.commands]
		};
		if (!this.stopped) this.protocol.closeSocket(1012, "node manifest changed");
	}
	start() {
		if (this.stopped) return;
		this.protocol.start();
	}
	createSocket(handlers) {
		const url = this.opts.url ?? DEFAULT_GATEWAY_CLIENT_URL;
		if (this.opts.tlsFingerprint && !url.startsWith("wss://")) throw new GatewayClientSocketFactoryConfigurationError("gateway tls fingerprint requires wss:// gateway url");
		const allowPrivateWs = (this.opts.env ?? process.env).OPENCLAW_ALLOW_INSECURE_PRIVATE_WS === "1";
		if (!isSecureWebSocketUrl(url, { allowPrivateWs })) {
			let displayHost = url;
			try {
				displayHost = new URL(url).hostname || url;
			} catch {}
			throw new GatewayClientSocketFactoryConfigurationError(`SECURITY ERROR: Cannot connect to "${displayHost}" over plaintext ws://. Both credentials and chat data would be exposed to network interception. Use wss:// for remote URLs. Safe defaults: keep gateway.bind=loopback and connect via SSH tunnel (ssh -N -L 18789:127.0.0.1:18789 user@gateway-host), or use Tailscale Serve/Funnel. ` + (allowPrivateWs ? "" : "Break-glass (trusted private networks only): set OPENCLAW_ALLOW_INSECURE_PRIVATE_WS=1. ") + "Run `openclaw doctor --fix` for guidance.");
		}
		this.deps.beforeConnect();
		const wsOptions = {
			maxPayload: 26214400,
			handshakeTimeout: resolvePreauthHandshakeTimeoutMs({
				env: this.opts.env,
				configuredTimeoutMs: this.opts.preauthHandshakeTimeoutMs
			}),
			...this.opts.origin ? { origin: this.opts.origin } : {}
		};
		if (url.startsWith("wss://") && this.opts.tlsFingerprint) {
			wsOptions.rejectUnauthorized = false;
			wsOptions.checkServerIdentity = (_hostValue, cert) => {
				const fingerprintValue = typeof cert === "object" && cert && "fingerprint256" in cert ? cert.fingerprint256 ?? "" : "";
				const fingerprint = this.deps.normalizeTlsFingerprint(typeof fingerprintValue === "string" ? fingerprintValue : "");
				const expected = this.deps.normalizeTlsFingerprint(this.opts.tlsFingerprint ?? "");
				if (!expected) return;
				if (!fingerprint) return /* @__PURE__ */ new Error("Missing server TLS fingerprint");
				if (fingerprint !== expected) return /* @__PURE__ */ new Error("Server TLS fingerprint mismatch");
			};
		}
		let ws;
		let unregisterGatewayLoopbackBypass;
		try {
			unregisterGatewayLoopbackBypass = this.deps.registerGatewayLoopbackBypass(url);
		} catch (error) {
			throw new GatewayClientTransportPolicyError(error instanceof Error ? error.message : String(error));
		}
		try {
			ws = new WebSocket(url, wsOptions);
			ws.binaryType = "nodebuffer";
		} catch (error) {
			throw error instanceof Error ? error : new Error(String(error));
		} finally {
			unregisterGatewayLoopbackBypass?.();
		}
		this.ws = ws;
		this.transportValidated = false;
		ws.on("open", () => {
			handlers.open();
			if (url.startsWith("wss://") && this.opts.tlsFingerprint) {
				const tlsError = this.validateTlsFingerprint();
				if (tlsError) {
					handlers.error(tlsError);
					ws.close(1008, tlsError.message);
					return;
				}
			}
			this.transportValidated = true;
		});
		ws.on("message", (data) => handlers.message(rawDataToString(data)));
		ws.on("close", (code, reason) => {
			const reasonText = reason.toString();
			if (this.ws === ws) this.ws = null;
			this.resolvePendingStop(ws);
			handlers.close(code, reasonText);
		});
		ws.on("error", (err) => {
			this.logDebug(`gateway client error: ${formatGatewayClientErrorForLog(err)}`);
			handlers.error(err instanceof Error ? err : new Error(String(err)));
		});
		return {
			isOpen: () => ws.readyState === WebSocket.OPEN,
			send: (data) => ws.send(data),
			close: (code, reason) => ws.close(code, reason)
		};
	}
	stop() {
		this.beginStop();
	}
	async stopAndWait(opts) {
		const stopPromise = this.beginStop();
		if (!stopPromise) return;
		const timeoutMs = opts?.timeoutMs === void 0 ? STOP_AND_WAIT_TIMEOUT_MS : resolveSafeTimeoutDelayMs(opts.timeoutMs);
		let timeout = null;
		try {
			await Promise.race([stopPromise, new Promise((_, reject) => {
				timeout = setTimeout(() => {
					reject(/* @__PURE__ */ new Error(`gateway client stop timed out after ${timeoutMs}ms`));
				}, timeoutMs);
				timeout.unref?.();
			})]);
		} finally {
			if (timeout) clearTimeout(timeout);
		}
	}
	beginStop() {
		this.stopped = true;
		this.pendingDeviceTokenRetry = false;
		this.deviceTokenRetryBudgetUsed = false;
		if (this.tickTimer) {
			clearInterval(this.tickTimer);
			this.tickTimer = null;
		}
		if (this.pendingStop) return this.pendingStop.promise;
		const ws = this.ws;
		this.ws = null;
		if (ws) {
			const pendingStop = this.createPendingStop(ws);
			const forceTerminateTimer = setTimeout(() => {
				try {
					ws.terminate();
				} finally {
					this.resolvePendingStop(ws);
				}
			}, FORCE_STOP_TERMINATE_GRACE_MS);
			forceTerminateTimer.unref?.();
			pendingStop.terminateTimer = forceTerminateTimer;
			if (this.protocol.connecting) {
				const error = /* @__PURE__ */ new Error("gateway client stopped");
				this.notifyConnectError(error);
				this.logDebug(`gateway connect failed: ${formatGatewayClientErrorForLog(error)}`);
			}
			this.protocol.stop();
			return pendingStop.promise;
		}
		this.protocol.stop();
		return null;
	}
	createPendingStop(ws) {
		if (this.pendingStop?.ws === ws) return this.pendingStop;
		let resolve = () => {};
		const promise = new Promise((done) => {
			resolve = done;
		});
		this.pendingStop = {
			ws,
			promise,
			resolve
		};
		return this.pendingStop;
	}
	resolvePendingStop(ws) {
		if (this.pendingStop?.ws !== ws) return;
		const { resolve, terminateTimer } = this.pendingStop;
		if (terminateTimer) clearTimeout(terminateTimer);
		this.pendingStop = null;
		resolve();
	}
	logDebug(message) {
		this.deps.logDebug(this.deps.redactForLog(message));
	}
	logError(message) {
		this.deps.logError(this.deps.redactForLog(message));
	}
	assembleConnectParams(params) {
		const { role, nonce } = params;
		const selectedAuth = this.selectConnectAuth(role);
		const { authDeviceToken, authApprovalRuntimeToken, authAgentRuntimeIdentityToken, signatureToken, resolvedDeviceToken, storedToken, storedScopes, usingStoredDeviceToken } = selectedAuth;
		if (this.pendingDeviceTokenRetry && authDeviceToken) this.pendingDeviceTokenRetry = false;
		const auth = buildGatewayConnectAuth(selectedAuth);
		const signedAtMs = Date.now();
		const scopes = resolveGatewayConnectScopes({
			requestedScopes: this.opts.scopes,
			usingStoredDeviceToken,
			storedScopes,
			defaultScopes: ["operator.admin"]
		});
		const platform = this.opts.platform ?? process.platform;
		return {
			params: {
				minProtocol: this.opts.minProtocol ?? MIN_CLIENT_PROTOCOL_VERSION,
				maxProtocol: this.opts.maxProtocol ?? PROTOCOL_VERSION,
				client: {
					id: this.opts.clientName ?? GATEWAY_CLIENT_NAMES.GATEWAY_CLIENT,
					displayName: this.opts.clientDisplayName,
					version: this.opts.clientVersion ?? DEFAULT_CLIENT_VERSION,
					platform,
					deviceFamily: this.opts.deviceFamily,
					mode: this.opts.mode ?? GATEWAY_CLIENT_MODES.BACKEND,
					instanceId: this.opts.instanceId
				},
				caps: Array.isArray(this.opts.caps) ? this.opts.caps : [],
				commands: Array.isArray(this.opts.commands) ? this.opts.commands : void 0,
				permissions: this.opts.permissions && typeof this.opts.permissions === "object" ? this.opts.permissions : void 0,
				pathEnv: this.opts.pathEnv,
				auth,
				role,
				scopes,
				device: this.buildDeviceConnectParams({
					nonce,
					role,
					scopes,
					signatureToken,
					signedAtMs,
					platform
				})
			},
			authApprovalRuntimeToken,
			authAgentRuntimeIdentityToken,
			resolvedDeviceToken,
			storedToken,
			usingStoredDeviceToken
		};
	}
	buildDeviceConnectParams(params) {
		if (!this.opts.deviceIdentity) return;
		const { nonce, role, scopes, signatureToken, signedAtMs, platform } = params;
		const payload = buildDeviceAuthPayloadV3({
			deviceId: this.opts.deviceIdentity.deviceId,
			clientId: this.opts.clientName ?? GATEWAY_CLIENT_NAMES.GATEWAY_CLIENT,
			clientMode: this.opts.mode ?? GATEWAY_CLIENT_MODES.BACKEND,
			role,
			scopes,
			signedAtMs,
			token: signatureToken ?? null,
			nonce,
			platform,
			deviceFamily: this.opts.deviceFamily
		});
		const signature = this.deps.signDevicePayload(this.opts.deviceIdentity.privateKeyPem, payload);
		return {
			id: this.opts.deviceIdentity.deviceId,
			publicKey: this.deps.publicKeyRawBase64UrlFromPem(this.opts.deviceIdentity.publicKeyPem),
			signature,
			signedAt: signedAtMs,
			nonce
		};
	}
	handleConnectHello(helloOk, assembled) {
		this.pendingDeviceTokenRetry = false;
		this.deviceTokenRetryBudgetUsed = false;
		this.suppressedTransientPreHelloCleanCloses = 0;
		const role = this.opts.role ?? "operator";
		const authInfo = helloOk.auth;
		if (authInfo?.deviceToken && this.opts.deviceIdentity) this.deps.storeDeviceAuthToken({
			deviceId: this.opts.deviceIdentity.deviceId,
			role: authInfo.role ?? role,
			token: authInfo.deviceToken,
			scopes: authInfo.scopes ?? [],
			env: this.opts.env
		});
		this.tickIntervalMs = typeof helloOk.policy?.tickIntervalMs === "number" ? helloOk.policy.tickIntervalMs : 3e4;
		this.lastTick = Date.now();
		this.startTickWatch();
	}
	handleConnectRequestFailure(error, assembled) {
		const role = this.opts.role ?? "operator";
		const shouldRetryWithDeviceToken = shouldRetryGatewayWithDeviceToken({
			retryBudgetUsed: this.deviceTokenRetryBudgetUsed,
			currentDeviceToken: assembled.resolvedDeviceToken,
			explicitToken: this.opts.token?.trim() || void 0,
			storedToken: assembled.storedToken,
			trustedEndpoint: this.isTrustedDeviceRetryEndpoint(),
			errorDetails: error instanceof GatewayClientRequestError ? error.details : void 0
		});
		if (this.opts.deviceIdentity && assembled.usingStoredDeviceToken && error instanceof GatewayClientRequestError && readConnectErrorDetailCode(error.details) === ConnectErrorDetailCodes.AUTH_DEVICE_TOKEN_MISMATCH) {
			const deviceId = this.opts.deviceIdentity.deviceId;
			try {
				this.deps.clearDeviceAuthToken({
					deviceId,
					role,
					env: this.opts.env
				});
				this.logDebug(`cleared stale device-auth token for device ${deviceId}`);
			} catch (clearError) {
				this.logDebug(`failed clearing stale device-auth token for device ${deviceId}: ${String(clearError)}`);
			}
		}
		if (shouldRetryWithDeviceToken) {
			this.pendingDeviceTokenRetry = true;
			this.deviceTokenRetryBudgetUsed = true;
			this.protocol.resetReconnectBackoff(250);
		}
		const startupRetryAfterMs = resolveGatewayStartupRetryAfterMs(error);
		if (startupRetryAfterMs !== null) {
			this.logDebug(`gateway connect failed: ${formatGatewayClientErrorForLog(error)}`);
			return {
				closeCode: 1013,
				closeReason: "gateway starting",
				reconnectDelayMs: startupRetryAfterMs
			};
		}
		if (this.shouldFailClosedForUnsupportedAgentRuntimeIdentity({
			error,
			authAgentRuntimeIdentityToken: assembled.authAgentRuntimeIdentityToken
		})) {
			const unsupportedIdentityError = /* @__PURE__ */ new Error("gateway rejected required agent runtime identity auth field; refusing to retry without it");
			this.stopped = true;
			this.notifyConnectError(unsupportedIdentityError);
			this.logError(`gateway connect failed: ${unsupportedIdentityError.message}`);
			return {
				closeCode: 1008,
				closeReason: "connect failed",
				stop: true
			};
		}
		if (this.shouldRetryWithoutApprovalRuntimeToken({
			error,
			authApprovalRuntimeToken: assembled.authApprovalRuntimeToken
		})) {
			this.approvalRuntimeTokenCompatibilityDisabled = true;
			this.approvalRuntimeTokenRetryBudgetUsed = true;
			this.protocol.resetReconnectBackoff(250);
			this.logDebug("gateway rejected approval runtime auth field; retrying without it");
			return {
				closeCode: 1008,
				closeReason: "connect retry"
			};
		}
		this.notifyConnectError(error);
		const message = `gateway connect failed: ${formatGatewayClientErrorForLog(error)}`;
		if (this.opts.mode === GATEWAY_CLIENT_MODES.PROBE || isGatewayClientStoppedError(error)) this.logDebug(message);
		else this.logError(message);
		return {
			closeCode: 1008,
			closeReason: "connect failed"
		};
	}
	resolveClose(context) {
		const info = this.closeInfo(context);
		const detailCode = context.connectFailure?.error instanceof GatewayClientRequestError ? readConnectErrorDetailCode(context.connectFailure.error.details) : null;
		const details = context.connectFailure?.error instanceof GatewayClientRequestError ? context.connectFailure.error.details : void 0;
		if (context.code === 1013 && context.connectFailure?.reconnectDelayMs !== void 0) return {
			retry: true,
			notify: false,
			reconnectDelayMs: context.connectFailure.reconnectDelayMs
		};
		if (info.transientPreHelloCleanClose && this.suppressedTransientPreHelloCleanCloses < MAX_SUPPRESSED_TRANSIENT_PRE_HELLO_CLEAN_CLOSES) {
			this.suppressedTransientPreHelloCleanCloses += 1;
			return {
				retry: true,
				notify: true,
				pendingError: new GatewayClientTransientPreHelloCloseError()
			};
		}
		if (info.transientPreHelloCleanClose || context.connectRequestSent && !context.helloReceived && !context.connectFailure) {
			const error = /* @__PURE__ */ new Error(`gateway closed (${context.code}): ${context.reason}`);
			this.notifyConnectError(error);
			this.logError(`gateway connect failed: ${formatGatewayClientErrorForLog(error)}`);
		}
		this.clearStaleDeviceTokenForClose(context.code, context.reason);
		if (shouldPauseGatewayReconnect({
			details,
			deviceTokenRetryPending: this.pendingDeviceTokenRetry,
			tokenMismatchIsTerminal: true,
			clientVersionMismatchIsTerminal: true
		})) {
			this.notifyReconnectPaused({
				code: context.code,
				reason: context.reason,
				detailCode
			});
			return {
				retry: false,
				notify: true
			};
		}
		return {
			retry: true,
			notify: true,
			reconnectDelayMs: context.connectFailure?.reconnectDelayMs
		};
	}
	closeInfo(context) {
		return {
			phase: context.helloReceived ? "post-hello" : "pre-hello",
			socketOpened: context.socketOpened,
			transportValidated: this.transportValidated,
			transientPreHelloCleanClose: !context.helloReceived && context.code === 1e3 && context.reason === ""
		};
	}
	clearStaleDeviceTokenForClose(code, reason) {
		if (code !== 1008 || !normalizeLowercaseStringOrEmpty(reason).includes("device token mismatch") || this.opts.token || this.opts.password || !this.opts.deviceIdentity) return;
		const deviceId = this.opts.deviceIdentity.deviceId;
		const role = this.opts.role ?? "operator";
		try {
			this.deps.clearDeviceAuthToken({
				deviceId,
				role,
				env: this.opts.env
			});
			this.logDebug(`cleared stale device-auth token for device ${deviceId}`);
		} catch (error) {
			this.logDebug(`failed clearing stale device-auth token for device ${deviceId}: ${String(error)}`);
		}
	}
	notifyConnectError(error) {
		try {
			this.opts.onConnectError?.(error);
		} catch (err) {
			this.logDebug(`gateway client connect error handler error: ${formatGatewayClientErrorForLog(err)}`);
		}
	}
	notifyReconnectPaused(info) {
		try {
			this.opts.onReconnectPaused?.(info);
		} catch (err) {
			this.logDebug(`gateway client reconnect paused handler error: ${formatGatewayClientErrorForLog(err)}`);
		}
	}
	shouldRetryWithoutApprovalRuntimeToken(params) {
		if (this.approvalRuntimeTokenRetryBudgetUsed) return false;
		if (!params.authApprovalRuntimeToken) return false;
		if (!(params.error instanceof GatewayClientRequestError)) return false;
		if (params.error.gatewayCode !== "INVALID_REQUEST") return false;
		const message = normalizeLowercaseStringOrEmpty(params.error.message);
		return message.includes("invalid connect params") && message.includes("approvalruntimetoken");
	}
	shouldFailClosedForUnsupportedAgentRuntimeIdentity(params) {
		if (!params.authAgentRuntimeIdentityToken) return false;
		if (!(params.error instanceof GatewayClientRequestError)) return false;
		if (params.error.gatewayCode !== "INVALID_REQUEST") return false;
		const message = normalizeLowercaseStringOrEmpty(params.error.message);
		return message.includes("invalid connect params") && message.includes("agentruntimeidentitytoken");
	}
	isTrustedDeviceRetryEndpoint() {
		const rawUrl = this.opts.url ?? "ws://127.0.0.1:18789";
		try {
			const parsed = new URL(rawUrl);
			const protocol = parsed.protocol === "https:" ? "wss:" : parsed.protocol === "http:" ? "ws:" : parsed.protocol;
			if (isLoopbackHost(parsed.hostname)) return true;
			return protocol === "wss:" && Boolean(this.opts.tlsFingerprint?.trim());
		} catch {
			return false;
		}
	}
	selectConnectAuth(role) {
		const storedAuth = this.opts.deviceIdentity ? this.deps.loadDeviceAuthToken({
			deviceId: this.opts.deviceIdentity.deviceId,
			role,
			env: this.opts.env
		}) : null;
		return selectGatewayConnectAuth({
			token: this.opts.token,
			bootstrapToken: this.opts.bootstrapToken,
			deviceToken: this.opts.deviceToken,
			password: this.opts.password,
			approvalRuntimeToken: this.approvalRuntimeTokenCompatibilityDisabled ? void 0 : this.opts.approvalRuntimeToken,
			agentRuntimeIdentityToken: this.opts.agentRuntimeIdentityToken,
			storedToken: storedAuth?.token,
			storedScopes: storedAuth?.scopes,
			pendingDeviceTokenRetry: this.pendingDeviceTokenRetry,
			trustedDeviceTokenRetry: this.isTrustedDeviceRetryEndpoint()
		});
	}
	startTickWatch() {
		if (this.tickTimer) clearInterval(this.tickTimer);
		const rawMinInterval = this.opts.tickWatchMinIntervalMs;
		const minInterval = typeof rawMinInterval === "number" && Number.isFinite(rawMinInterval) ? Math.max(1, Math.min(3e4, rawMinInterval)) : 1e3;
		const interval = resolveSafeTimeoutDelayMs(Math.max(this.tickIntervalMs, minInterval));
		this.tickTimer = setInterval(() => {
			if (this.stopped) return;
			if (!this.lastTick) return;
			if (this.protocol.hasPendingRequests && !this.protocol.hasUnboundedPendingRequests) return;
			const gap = Date.now() - this.lastTick;
			const rawTimeoutMs = this.opts.tickWatchTimeoutMs;
			if (gap > (typeof rawTimeoutMs === "number" && Number.isFinite(rawTimeoutMs) ? Math.max(1, rawTimeoutMs) : this.tickIntervalMs * 2)) this.protocol.closeSocket(4e3, "tick timeout");
		}, interval);
	}
	validateTlsFingerprint() {
		if (!this.opts.tlsFingerprint || !this.ws) return null;
		const expected = this.deps.normalizeTlsFingerprint(this.opts.tlsFingerprint);
		if (!expected) return /* @__PURE__ */ new Error("gateway tls fingerprint missing");
		const socket = this.ws["_socket"];
		if (!socket || typeof socket.getPeerCertificate !== "function") return /* @__PURE__ */ new Error("gateway tls fingerprint unavailable");
		const cert = socket.getPeerCertificate();
		const fingerprint = this.deps.normalizeTlsFingerprint(cert?.fingerprint256 ?? "");
		if (!fingerprint) return /* @__PURE__ */ new Error("gateway tls fingerprint unavailable");
		if (fingerprint !== expected) return /* @__PURE__ */ new Error("gateway tls fingerprint mismatch");
		return null;
	}
	async request(method, params, opts) {
		const expectFinal = opts?.expectFinal === true;
		const timeoutMs = opts?.timeoutMs === null ? null : typeof opts?.timeoutMs === "number" && Number.isFinite(opts.timeoutMs) ? resolveSafeTimeoutDelayMs(opts.timeoutMs, { minMs: 0 }) : expectFinal ? null : this.requestTimeoutMs;
		return this.protocol.request(method, params, {
			expectFinal,
			timeoutMs,
			signal: opts?.signal,
			onSent: opts?.onSent,
			onAccepted: opts?.onAccepted
		});
	}
};
function createGatewayRequestAbortError(method) {
	const err = /* @__PURE__ */ new Error(`gateway request aborted for ${method}`);
	err.name = "AbortError";
	return err;
}
//#endregion
export { DEFAULT_GATEWAY_REQUEST_TIMEOUT_MS, DEFAULT_PREAUTH_HANDSHAKE_TIMEOUT_MS, GatewayBrowserDeviceAuthLifecycle, GatewayClient, GatewayClientRequestError, GatewaySessionMessageSubscriptionCoordinator, MAX_CONNECT_CHALLENGE_TIMEOUT_MS, MAX_SAFE_TIMEOUT_DELAY_MS, MIN_CONNECT_CHALLENGE_TIMEOUT_MS, addSafeTimeoutDelayGraceMs, buildDeviceAuthPayload, buildDeviceAuthPayloadV3, buildGatewayConnectAuth, clampConnectChallengeTimeoutMs, clearGatewayConnectTimeout, createSessionProjection, getConnectChallengeTimeoutMsFromEnv, getGatewaySessionMessageSubscriptionCoordinator, hasSessionProjectionAcceptedFinal, isGatewayConnectAssemblyError, isLocallyOptimisticSessionMessage, normalizeDeviceMetadataForAuth, normalizeSessionProjectionRunId, projectLiveSessionMessage, readSessionMessageIdentity, readSessionMessageSequence, reconcileSessionProjectionSnapshot, reduceSessionProjection, reduceSessionProjectionRunEvent, releaseGatewaySessionMessageSubscription, resetGatewaySessionMessageSubscriptionCoordinator, resolveConnectChallengeTimeoutMs, resolveFiniteTimeoutDelayMs, resolveGatewayConnectScopes, resolvePreauthHandshakeTimeoutMs, resolveSafeTimeoutDelayMs, selectGatewayConnectAuth, shouldRetryGatewayWithDeviceToken, startGatewayClientWhenEventLoopReady, startGatewayClientWithReadinessWait, startGatewayConnectTimeout, waitForEventLoopReady };
