import NextResponse from "next/server";
import { headers } from 'next/headers'
import { connection } from "@lib/db";




export async function POST(req) {
  let body;
  let cookies = req.cookies.get("user");
  try {
    let module = JSON.parse(cookies.value);
    body = await req.json();
    if (body.hasOwnProperty("value") && body.hasOwnProperty("images")) {
      const { images } = body;

      images.forEach(({id, path}) => {

        connection.query(`
          INSERT INTO images (image_id, path, dependency_id)
          VALUES (?, ?, ?)
          ON DUPLICATE KEY UPDATE
              image_id = VALUES(image_id)
              path = VALUES(path),
              dependency_id = VALUES(dependency_id),
              ;`,
          [id, path, module.dependency_id],
          function (err, results, fields) {
            if (err) {
              console.error(err);
              return;
            }
            
          });

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
export async function GET(req) {

  let results = [];
  let cookies = req.cookies.get("user");

  try {
    let module = JSON.parse(cookies.value);
    results = await new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM images WHERE dependency_id = ?`,
        [module.dependency_id],
        function (err, results, fields) {
          if (err) {
            reject([]);
          }

          resolve(results);
        }
      );
    });
  } catch (error) {
  }
  if (results.length > 0) {
    let data = {};
    results.forEach((el) => {
      data[el.question_id] = el.answer;
    });
    return NextResponse.json(data);
  }
};

