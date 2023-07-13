import { NextResponse } from "next/server"
import axios from "axios";
export const runtime = 'nodejs'
export async function middleware(request) {
    const path = request.nextUrl.pathname;
    if(path === '/'){
    return NextResponse.redirect(new URL('/GreenMetric/login', request.url))

    }
    else if(path.startsWith('/api/auth')){
        console.log("auth api");

    }
    /* else{
        return NextResponse.redirect(new URL('/GreenMetric', request.url))
    } */
}

export const config = {
    matcher: ['/','/login', '/informacion','/infraestructura','/energia', '/residuos', '/agua', '/transporte', '/educacion', '/reporte'],
}