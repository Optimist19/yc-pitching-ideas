import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const sessionToken = req.cookies.get("authjs.session-token")?.value;
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/pitchsubmission");

  if (isProtectedRoute && !sessionToken) {
    const homeUrl = new URL("/pitch", req.url);
    // Add redirect path for after login
    // homeUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/pitchsubmission/:path*"], 
};

