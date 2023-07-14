export const runtime = 'nodejs'
import { NextResponse } from "next/server"
import {isAuth} from '@lib/auth';
export async function middleware(request) {
    const path = request.nextUrl.pathname;
    if (path === '/') {
        return NextResponse.redirect(new URL('/GreenMetric/login', request.url))

    }
    else if (path.startsWith('/login')) {
        console.log("LOGIN", request.cookies.get("user"));
        const isConnected = isAuth(request);
        if(isConnected){
            return NextResponse.redirect(new URL('/GreenMetric/home', request.url));
        }
    }
    else if (path  === '/api/auth') {
        const user = request.cookies.get("user");
        const resp = NextResponse.next();
        resp.cookies.set("user", JSON.stringify(user));
        console.log("AUTH", user);
        //return resp.redirect(new URL('/GreenMetric/home', request.url));
        return resp;
    }
    else{
        if(!isAuth(request)){
            return NextResponse.redirect(new URL('/GreenMetric/login', request.url))
        }
    }
}

export const config = {
    matcher: ['/','/home','/login', '/informacion', '/infraestructura', '/energia', '/residuos', '/agua', '/transporte', '/educacion', '/reporte', '/api/:path*'],
}