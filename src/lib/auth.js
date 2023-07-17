
"use server"
export const auth = (request) => {
    if (isAuth(request)) {
        const path = request.nextUrl.pathname;
        return NextResponse.redirect(path, request.url);
    }
    else {
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url);
    }
}

export const isAuth = (request) => {
    try {
        if (request?.cookies?.get("user") != null) {
            return true;
        }

    } catch (error) {
        return false;
    }
    return false;
}