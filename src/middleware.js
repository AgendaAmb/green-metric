export const runtime = 'nodejs'
import { NextResponse } from "next/server"
import { isAuth } from '@lib/auth';
export async function middleware(request) {


    const path = request.nextUrl.pathname;
    //console.log(path)
    if (path === '/') {
        return NextResponse.redirect(new URL('/GreenMetric/login', request.url))

    }
    else if (path == '/login') {
        console.log("login");
            const isConnected = isAuth(request);
            if (isConnected) {
                return NextResponse.redirect(new URL('/GreenMetric/home', request.url));
            }
            else {
                
                return NextResponse.next();
            }

    }
    else if (path.endsWith('/api/auth')) {
        console.log("auth");

        const user = request.cookies?.get("user")?.value;
        const resp = NextResponse.next();
        if (user != null) {
            resp.cookies.set("user", user);
        }
        else {
            resp.cookies.delete("user");
        }
        return resp;
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