import NextResponse from "next/server";
import { headers } from 'next/headers'
import { connection } from "@lib/db"


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
