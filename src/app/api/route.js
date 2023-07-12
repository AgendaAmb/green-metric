import NextResponse from "next/server";
import { headers } from 'next/headers'




export async function POST(req, res) {
  const data = await req.json();
  console.log(data);
  return new Response('Ok', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
};

