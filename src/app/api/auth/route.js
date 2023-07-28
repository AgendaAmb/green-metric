import { NextResponse } from "next/server";
import { connection } from "@lib/db"
import { cookies, Headers } from 'next/headers';



export async function POST(req, res) {
    let params;
    try {
        const body = await req.json();
        params = body.params;
    }
    catch (e) {
        console.log("No hay cuerpo en la request")
    }

    const { user_id, password } = params;
    /* let user, headers;
    if (
        (user_id == 262482 && password == "@g3nd4@mb13nt4l") || (user_id == 11007 && password == "@g3nd4@mb13nt4l")
        ) {
            user = { dependency_id: 1, user_id: user_id };
            console.log("Authorized");
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
        console.log("unauthorized")
        
        return new NextResponse('Unauthorized', {
            status: 200,
        });
    } */
    let data = [];
    try {
        data = await new Promise((resolve, reject) => {
            connection.query(
                `SELECT user_id, password, dependency_id FROM users WHERE user_id = ?`,
                [user_id, password],
                function (err, results, fields) {
                    if (err) {
                        reject([]);
                    }
                    if (results == undefined) {
                        reject([]);
                    }
                    resolve(results);
                }
            );
        });
        if (data.length > 0 && data[0].password == password) {
            const user = { dependency_id: data[0].dependency_id, user_id: data[0].user_id };
            return new Response('OK', {
                status: 200,
                headers: { 'Set-Cookie': `user=${encodeURI(JSON.stringify(user))}` },
            })
        }
    } catch (error) {
        console.error("Error con la conexion a la BD");
    }
    return NextResponse.json("No autorizado");
};