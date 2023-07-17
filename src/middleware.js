export const runtime = 'nodejs'
import { NextResponse } from "next/server"
import { isAuth } from '@lib/auth';
export async function middleware(request) {
    const path = request.nextUrl.pathname;
    console.log(path)
    if (path === '/') {
        return NextResponse.redirect(new URL('/GreenMetric/login', request.url))

    }
    else if (path == '/login') {
        setTimeout(() => {
            const isConnected = isAuth(request);
            if (isConnected) {
                return NextResponse.redirect(new URL('/GreenMetric/home', request.url));
            }
            else{
                return NextResponse.redirect(new URL('/GreenMetric/login', request.url));
            }
        }, 0);
    }
    else if (path === '/api/auth') {
        const user = request.cookies?.get("user")?.value;
        console.log("Api user", user);
        if (user != null) {
            const resp = NextResponse.next();
            resp.cookies.set("user", user);
            return resp;
        }
    }
    else {
        if (!isAuth(request)) {
            return NextResponse.redirect(new URL('/GreenMetric/login', request.url))
        }
    }
}

export const config = {
    matcher: ['/', '/home', '/login', '/informacion', '/infraestructura', '/energia', '/residuos', '/agua', '/transporte', '/educacion', '/reporte', '/api/:path*'],
}