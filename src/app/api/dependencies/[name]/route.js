import {NextResponse} from "next/server";
import { connection } from "@lib/db";
import { deleteCookie } from "@/lib/cookies";

export async function GET(req, res) {
  let results = [];
  const cookie = req.cookies.get("user");
  try {
    const dependency_id = JSON.parse(cookie?.value)?.dependency_id;
    results = await new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM dependencies WHERE dependency_id = ?`, [dependency_id],
        function (err, results, fields) {
          if (err) {
            reject([]);
          }
          
          resolve(results);
        }
        );
      //console.log(results);
    });
  } catch (error) {
  }
  if (results?.length > 0) {
    let data = [];
    data = results;
    return NextResponse.json(data);
  } 
  else {
    return NextResponse.json({success: false});
  }
};

