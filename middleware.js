import { NextResponse } from 'next/server'
import { auth } from './src/lib/auth'

export async function middleware(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  })

  if (session) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/signin', request.url))
}

export const config = {
  matcher: [
    '/destinations/:path*',
    '/bookingdestination',
    '/addtravel',
    '/profile',
  ],
}