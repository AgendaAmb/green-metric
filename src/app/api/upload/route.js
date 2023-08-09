import fs from "fs";
import { NextResponse } from "next/server";

export async function POST(req) {
  
  try {
    const formData = await req.formData();
    const user = JSON.parse(req.cookies.get("user").value);
    const id = 1;
  
    const formDataEntryValues = Array.from(formData.values());
    
    let counter = 1;
    fs.mkdirSync(`public/answers/${user.dependency_id}/${id}`, { recursive: true });
    for (const formDataEntryValue of formDataEntryValues) {
      console.log("aqui")
      if (typeof formDataEntryValue === "object" && "arrayBuffer" in formDataEntryValue) {
        const file = formDataEntryValue;
        const ext = file.name.split(".").pop();
        console.log(ext);
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(`public/answers/${user.dependency_id}/${id}/${counter}.${ext}`, buffer);
        counter++;
      }
    }
    return NextResponse.json({ success: true });
  }
  catch (e) {
    return NextResponse.json({ success: false });
  }


};

