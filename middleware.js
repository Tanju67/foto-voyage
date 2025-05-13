import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req) {
  const token = await getToken({ req, secret });

  // Token yoksa login sayfasına yönlendir
  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  // Token varsa devam et
  return NextResponse.next();
}

export const config = {
  matcher: ["/account"],
};
