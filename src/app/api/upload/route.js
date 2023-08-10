import fs from "fs";
import { NextResponse } from "next/server";
import {connection} from "@lib/db";

export async function POST(req) {

  try {
    const formData = await req.formData();
    const user = JSON.parse(req.cookies.get("user").value);
    const id = `${formData.get("id")}i`;

    const formDataEntryValues = Array.from(formData.values());

    let counter = 1;
    fs.mkdirSync(`public/answers/${user.dependency_id}/${id}`, { recursive: true });
    const arr = [];
    let path = "";
    
    for (const formDataEntryValue of formDataEntryValues) {
      //console.log("aqui")
      if (typeof formDataEntryValue === "object" && "arrayBuffer" in formDataEntryValue) {
        const file = formDataEntryValue;
        const ext = file.name.split(".").pop();
        //console.log(ext);
        path = `public/answers/${user.dependency_id}/${id}/${counter}.${ext}`
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(path, buffer);
        arr.push({id: id, path: path, order: counter});
        counter++;
      }
    }


    if (arr.length > 0) {
      console.log("more than 0");
      console.log(arr.length);
      arr.forEach((img) => {
        connection.query(`
          INSERT INTO images (image_id, dependency_id, path, order_id)
          VALUES (?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE
              image_id = VALUES(image_id),
              path = VALUES(path),
              dependency_id = VALUES(dependency_id),
              order_id = VALUES(order_id);`,
          [img.id, user.dependency_id, img.path, img.order],
          function (err, results, fields) {
            if (err) {
              console.error(err);
              return;
            }

          });

      });
    }


    return NextResponse.json({ success: true });
  }
  catch (e) {
    return NextResponse.json({ success: false });
  }


};

