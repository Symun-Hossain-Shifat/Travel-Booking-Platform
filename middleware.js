import { NextResponse } from "next/server";

export function middleware(request) {
  const sessionToken = request.cookies.get("session")?.value;

  if (!sessionToken) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/destinations/:path*",
    "/bookingdestination",
    "/addtravel",
    "/profile",
  ],
};