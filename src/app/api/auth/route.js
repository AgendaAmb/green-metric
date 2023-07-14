import { NextResponse } from "next/server";
import { connection } from "@lib/db"
import { cookies } from 'next/headers';



export async function GET(req, res) {
    const [password, user_id] = [await req.nextUrl.searchParams.get("password"), await req.nextUrl.searchParams.get("user_id")];
    let results, user;

    try {
        results = await new Promise((resolve, reject) => {
            connection.query(
                `SELECT user_id, password, dependency_id FROM users WHERE user_id = ?`,
                [7440],
                function (err, results, fields) {
                    if (err) {
                        reject("Error con la busqueda de datos/consulta");
                    }
                    resolve(results);
                }
            );
        });
    } catch (error) {
        console.error("Error con la conexion a la BD");
    }
    if (results[0].password === password) {
        user = { dependency_id: results[0].dependency_id, user_id: results[0].user_id };
        
    }
    return new NextResponse('OK', {
        status: 200,
        headers: { 'Set-Cookie': `user=${JSON.stringify(user)}}` },
    })
};