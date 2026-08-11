import { NextRequest, NextResponse } from "next/server";
import {
  COOKIE_OPTIONS,
  createSessionToken,
  SESSION_COOKIE,
  verifyPassword,
} from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { password } = (await request.json()) as { password?: string };

    if (!password || !verifyPassword(password)) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = createSessionToken();
    const response = NextResponse.json({ success: true });
    response.cookies.set(SESSION_COOKIE, token, COOKIE_OPTIONS);
    return response;
  } catch {
    return NextResponse.json(
      { error: "Authentication is not configured" },
      { status: 500 }
    );
  }
}
