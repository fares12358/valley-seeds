// src/middleware.js
// Protects all /dashboard/* routes except public auth pages.
// Strategy: check cookie PRESENCE only — the backend verifies the JWT
// on every protected API call. No crypto here avoids the NEXT_PUBLIC_JWT_SECRET
// mismatch footgun and works even before the env var is configured.

import { NextResponse } from "next/server";

const PUBLIC_PATHS = [
  "/dashboard/login",
  "/dashboard/forgot-password",
  "/dashboard/reset-password",
];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Always allow public auth pages through
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Check cookie presence — backend validates the JWT on every API call
  const token = request.cookies.get("vs_token")?.value;

  if (!token) {
    const loginUrl = new URL("/dashboard/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
