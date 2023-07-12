import NextResponse from "next/server";
import { headers } from 'next/headers'

import { connection } from "@lib/db"



export default async function GET(req,res)
{
    try{
        const { value, question } = body;
      connection.query(`
       SELECT * FROM answers`,
        [1],
        function (err, results, fields) {
          if (err) {
            console.error(err);
            return;
          }
          console.log("Results", results);
          console.log("Fields", fields);
        });
    }catch(error)
    {
        console.log(error);
    }
// export async function GET(req, res) {
//     try {
//       const { value} = req.query;
//       if (value) {
//         connection.query(
//           `
//           SELECT * FROM answers WHERE dependency_id = ?;
//         `,
//           [value],
//           function (err, results, fields) {
//             if (err) {
//               console.error(err);
//               return;
//             }
//             console.log("Results", results);
//             console.log("Fields", fields);
//           }
//         );
//       }
//     } catch (e) {
//       throw new Error("Información no recibida");
//     }

  


  return new Response('Ok', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
};

