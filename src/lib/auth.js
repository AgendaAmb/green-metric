
import { NextRequest, NextResponse } from 'next/server'

export const auth = (request) => {
    console.log(request.nextUrl.searchParams.get("password"));
    if( isAuth(request)){
        const path = request.nextUrl.pathname;
        //return NextResponse.redirect(path, request.url);
    }
    else{
        const url = request.nextUrl.clone()
        url.pathname = '/login'        
        //return NextResponse.redirect(url);
    }
}

export const isAuth = (request) => {
    if(request.cookies.get("user") != null){
        return true;
    }
    return false;
}