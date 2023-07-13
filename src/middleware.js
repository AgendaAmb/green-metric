export const runtime = 'nodejs'
import { NextResponse } from "next/server"
import {auth} from '@lib/auth';
export async function middleware(request) {
    const path = request.nextUrl.pathname;
    if (path === '/') {
        return NextResponse.redirect(new URL('/GreenMetric/login', request.url))

    }
    else if (path.startsWith('/login')) {
        const isConnected = auth(request);
        
        return NextResponse.redirect(new URL('/GreenMetric/home', request.url));
    }
    /* else{
        return NextResponse.redirect(new URL('/GreenMetric', request.url))
    } */
}

export const config = {
    matcher: ['/', '/login', '/informacion', '/infraestructura', '/energia', '/residuos', '/agua', '/transporte', '/educacion', '/reporte', '/api/:path*'],
}