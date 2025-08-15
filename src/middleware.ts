import { NextRequest, NextResponse } from "next/server";
import { DASHBOARDSTARTPATH } from "./lib/config";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  const isProtected = request.nextUrl.pathname.startsWith(DASHBOARDSTARTPATH);

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  /**
   * Test if user has already authenticated and are on welcome or login page
   */
  if ( request.nextUrl.pathname == `/` ||  request.nextUrl.pathname == `/login`  && token) {
    return NextResponse.redirect(new URL(DASHBOARDSTARTPATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [`${DASHBOARDSTARTPATH}/:path*`,"/","/login/"],
};