import { NextResponse } from 'next/server'
export async function GET() {
    
    console.log("Inside fn")
    return NextResponse.json({ message: 'Hello, world!' });
  }