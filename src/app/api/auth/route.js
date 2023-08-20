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
        //console.log("No hay cuerpo en la request")
    }

    const { user_id, password } = params;

    try {
        const cookies = req.cookies?.get('user')?.value;
        const dataOnCache = JSON.parse(cookies);
        if (cookies && `${dataOnCache?.user_id}` !== `${user_id}`) {
            const withoutCookies = new Response(
                'No autorizado',
                {
                    status: 401,
                    headers: { 'Set-Cookie': `user=; Max-Age=0` },
                }
            );
            return withoutCookies;
        }
    }
    catch (e) { }

    let data = [];
    try {
        data = await new Promise((resolve, reject) => {
            connection.query(
                `SELECT user_id, password, dependency_id, role FROM users WHERE user_id = ?`,
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
            const user = { dependency_id: data[0].dependency_id, user_id: data[0].user_id, role: data[0].role };

            return new Response('OK', {
                status: 200,
                headers: { 'Set-Cookie': `user=${encodeURI(JSON.stringify(user))}` },
            })
        }
    } catch (error) {
        //console.error("Error con la conexion a la BD");
    }
    return NextResponse.json("No autorizado");
};