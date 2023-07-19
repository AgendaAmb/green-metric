import { NextResponse } from "next/server";
import { connection } from "@lib/db"
import { cookies, Headers } from 'next/headers';



export async function POST(req, res) {
    console.log("auth api");

    let params;
    try {
        const body = await req.json();
        params = body.params;
    }
    catch (e) {
        console.log("No hay cuerpo en la request")
    }

    const { user_id, password } = params;
    let user, headers;
    if (
        user_id === 262482 && password == "@g3nd4@mb13nt4l" || user_id === 11007 && password == "@g3nd4@mb13nt4l"
    ) {
        user = { dependency_id: 1, user_id: user_id };
    }

    user ??= null;
    if (user != null) {
        //console.log(user);
        return new NextResponse('OK', {
            status: 200,
            headers: { 'Set-Cookie': `user=${JSON.stringify(user)}}` },
        });
    }
    else {
        //console.log("unauthorized")
        
        return new NextResponse('Unauthorized', {
            status: 401,
        });
    }
    /* const password = await req.nextUrl.searchParams.get("password");
    const user_id = await req.nextUrl.searchParams.get("user_id");
    console.log("password", password);
    try {

    }
    catch(e){
        console.log("Error capturando parametros");
    }
    if (password === "@g3nd4@mb13nt4l" && user_id === "262482") {
        console.log("Inside 262482")
        user = { dependency_id: 1, user_id: 262482 };
        const headers = new Headers({ 'Set-Cookie': `user=${JSON.stringify(user)}}` });
        console.log("Headers", headers);
        return new NextResponse('OK', {
            status: 200,
            headers: headers,
        })
    } */
    /* try {
        results = await new Promise((resolve, reject) => {
            connection.query(
                `SELECT user_id, password, dependency_id FROM users WHERE user_id = ?`,
                [user_id],
                function (err, results, fields) {
                    if (err) {
                        reject([]);
                    }
                    resolve(results);
                }
            );
        });
    } catch (error) {
        console.error("Error con la conexion a la BD");
    } */
    /* finally {
        results ??= [];
        if (results.length > 0 && results[0]?.password === password) {
            console.log("Inside api")
            user = { dependency_id: results[0].dependency_id, user_id: results[0].user_id };
            console.log("Inside user")
            
            return new NextResponse('OK', {
                status: 200,
                headers: { 'Set-Cookie': `user=${JSON.stringify(user)}}` },
            })
        }
    } */
    return new NextResponse('OK', {
        status: 400,
    })
};