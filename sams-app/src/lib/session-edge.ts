// Edge-runtime-safe session verification (middleware can't use node:crypto).
// Must stay byte-for-byte compatible with createSessionToken() in auth.ts.

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
  }
  return bytes;
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "verify",
  ]);
}

export async function verifySessionToken(token: string | undefined, secret: string): Promise<boolean> {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  let exp: number;
  try {
    let b64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4 !== 0) b64 += "=";
    const decoded = JSON.parse(atob(b64));
    exp = decoded.exp;
  } catch {
    return false;
  }
  if (typeof exp !== "number" || Date.now() > exp) return false;

  try {
    const key = await hmacKey(secret);
    return crypto.subtle.verify(
      "HMAC",
      key,
      hexToBytes(signature) as BufferSource,
      new TextEncoder().encode(payload) as BufferSource,
    );
  } catch {
    return false;
  }
}
