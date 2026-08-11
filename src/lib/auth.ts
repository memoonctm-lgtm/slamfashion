import { createHmac, timingSafeEqual } from "crypto";
import { SESSION_DURATION_MS } from "./auth-constants";

export { SESSION_COOKIE, SESSION_DURATION_MS } from "./auth-constants";

function getSecret(): string {
  const secret = process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error(
      "ADMIN_SECRET or ADMIN_PASSWORD must be set in environment variables"
    );
  }
  return secret;
}

export function getAdminPassword(): string {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error("ADMIN_PASSWORD must be set in environment variables");
  }
  return password;
}

export function createSessionToken(): string {
  const payload = JSON.stringify({ exp: Date.now() + SESSION_DURATION_MS });
  const signature = createHmac("sha256", getSecret())
    .update(payload)
    .digest("hex");
  return `${Buffer.from(payload).toString("base64url")}.${signature}`;
}

export function verifySessionToken(token: string): boolean {
  try {
    const [payloadB64, signature] = token.split(".");
    if (!payloadB64 || !signature) return false;

    const payload = Buffer.from(payloadB64, "base64url").toString("utf8");
    const expected = createHmac("sha256", getSecret())
      .update(payload)
      .digest("hex");

    const sigBuffer = Buffer.from(signature, "hex");
    const expectedBuffer = Buffer.from(expected, "hex");
    if (sigBuffer.length !== expectedBuffer.length) return false;
    if (!timingSafeEqual(sigBuffer, expectedBuffer)) return false;

    const { exp } = JSON.parse(payload) as { exp: number };
    return Date.now() < exp;
  } catch {
    return false;
  }
}

export function verifyPassword(input: string): boolean {
  const expected = getAdminPassword();
  const inputBuffer = Buffer.from(input);
  const expectedBuffer = Buffer.from(expected);
  if (inputBuffer.length !== expectedBuffer.length) return false;
  return timingSafeEqual(inputBuffer, expectedBuffer);
}

export const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: SESSION_DURATION_MS / 1000,
};
