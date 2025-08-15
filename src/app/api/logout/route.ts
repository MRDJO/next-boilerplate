
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = NextResponse.redirect(new URL("/", request.url));

  res.cookies.set({
    name: "access_token",
    value: "",
    expires: new Date(0),
    path: "/",
  });
  return res;
}
