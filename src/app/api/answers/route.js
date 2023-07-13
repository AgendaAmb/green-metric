import { NextRequest, NextResponse } from "next/server";
import { headers } from 'next/headers';
import { connection } from "@lib/db";

export async function GET(req, res) {

    let results;
    try {
        results = await new Promise((resolve, reject) => {
            connection.query(
                `SELECT * FROM answers WHERE dependency_id = ?`,
                [1],
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

    return NextResponse.json(results);


};

export async function POST(req, res) {
    let body;
    try {
        body = await req.json();
        if (body.hasOwnProperty("value") && body.hasOwnProperty("question")) {
            const { value, question } = body;
            connection.query(`
        INSERT INTO answers (dependency_id, answer, question_id)
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE
            dependency_id = VALUES(dependency_id),
            answer = VALUES(answer),
            question_id = VALUES(question_id);`,
                [1, value, question],
                function (err, results, fields) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    /* console.log("Results", results);
                    console.log("Fields", fields); */
                });
        }
    }
    catch (e) {
        throw new Error("Información no recibida");
    }


    return new Response('Ok', {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
};

