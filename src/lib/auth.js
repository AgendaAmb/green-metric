import { NextRequest, NextResponse } from 'next/server'
import { getCookies, getCookie, setCookies, removeCookies, setCookie } from 'cookies-next';

export const auth = (request) => {
    if( isAuth(request)){
        console.log(1);
        return NextResponse.redirect(res.nextUrl.pathname, request.url);
    }
    else{
        setCookie("session", true, {
            path: "/"
        });
    }
}

export const isAuth = (request) => {
    const hasSession = getCookies();
    console.log("cokkie", hasSession);
    return false;
}