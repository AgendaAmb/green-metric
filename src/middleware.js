import { NextResponse } from "next/server"
export const runtime = 'nodejs'
export function middleware(request) {
    console.log("middleware")
    return NextResponse.redirect(new URL('/GreenMetric/'))
}

export const config = {
    matcher: '/GreenMetric/:path*',
}