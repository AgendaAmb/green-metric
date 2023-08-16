import {NextResponse} from "next/server";
import { connection } from "@lib/db";
import { deleteCookie } from "@/lib/cookies";

export async function POST(req, res) {
  let body;
  
  let cookies = req.cookies.get("user");
  let module;
  try {
    module = JSON.parse(cookies?.value);
    body = await req.json();
    const newUser = {...module, dependency_id: body?.module || 16}
    deleteCookie();
    return new Response('OK', {
      status: 200,
      headers: { 'Set-Cookie': `user=${encodeURI(JSON.stringify(newUser))}` },
  })
  
  }
  catch (error) {
        return NextResponse.json({success: false});
    }


  //console.log(data);
  return new Response('Ok', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
};



export async function GET(req, res) {
  let results = [];
  try {
    results = await new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM dependencies`,
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

