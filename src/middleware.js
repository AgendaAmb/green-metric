export const runtime = 'nodejs'
import { NextResponse } from "next/server"
import {isAuth} from '@lib/auth';
export async function middleware(request) {
    const path = request.nextUrl.pathname;
    if (path === '/') {
        return NextResponse.redirect(new URL('/GreenMetric/login', request.url))

    }
    else if (path == '/login') {
        const isConnected = isAuth(request);
        if(isConnected){
            return NextResponse.redirect(new URL('/GreenMetric/home', request.url));
        }
    }
    else if (path  === '/api/auth') {
        const value = request.cookies?.get("user")?.value;
        console.log("value", value);
        if(value != null){
            const resp = NextResponse.next();
            resp.cookies.set("user", JSON.stringify({value: value, name: "user"}));
            return resp;
        }
        else{
            return new NextResponse('OK', {
                status: 400,
            })
        }
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