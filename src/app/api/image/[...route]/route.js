import { connection } from "@lib/db";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req, res) {
	//const data = await req.json();
	const url = req.url;
	const [dependency, id, index] = url.split("/").splice(5);
  const realIndex = index.split(".")?.[0];
  
  try {
    const results = new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM images WHERE image_id = ? AND dependency_id = ? AND order_id = ?`,
        [`${id}i`, Number(dependency), realIndex],
        function (err, results, fields) {
          if (err) {
            console.log(err);
            reject([]);
          }
          //console.log(results);
          resolve(results);
        }
      );
    });
  }
  catch(e){}

	return NextResponse.json({ req: req }, { status: 200 });
}

