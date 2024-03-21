import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(req) {
  const url = new URL(req.url);
  const path = url.pathname;

  try {
    const jwtSecret = process.env.JWT_SECRET;
    const encodedJwtSecret = new TextEncoder().encode(jwtSecret);
    const token = req.cookies.get("token")?.value;

    if (!token && path.startsWith("/profile")) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else if (
      token &&
      (path.startsWith("/login") || path.startsWith("/register"))
    ) {
      await jose.jwtVerify(token, encodedJwtSecret);
      return NextResponse.redirect(new URL("/profile", req.url));
    } else if (token && path.startsWith("/profile")) {
      await jose.jwtVerify(token, encodedJwtSecret);
      return NextResponse.next();
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/profile/:path*", "/login", "/register"],
};
