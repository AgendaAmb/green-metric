import fs from "fs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();

  const formDataEntryValues = Array.from(formData.values());
  for (const formDataEntryValue of formDataEntryValues) {
    if (typeof formDataEntryValue === "object" && "arrayBuffer" in formDataEntryValue) {
      const file = formDataEntryValue;
      const ext = file.name.split(".").pop();
      console.log(ext);
      fs.mkdirSync("public/1", { recursive: true });
      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(`public/1/${"test"}.${ext}`, buffer);
    }
  }
  return NextResponse.json({ success: true });
};

