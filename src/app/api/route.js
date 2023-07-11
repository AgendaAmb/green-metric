import NextResponse from "next/server";
import { headers } from 'next/headers'

export const dynamic = 'force-static'



export async function GET(req, res) {
  const data = await req;
  console.log(data.nextUrl.pathname);
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
};

