import { NextRequest, NextResponse } from "next/server";

import { headers } from 'next/headers';
import { connection } from "@lib/db";

const fs = require('fs');
const path = require('path');

export async function GET(req, res) {
    return NextResponse.json({message: "Hello World"});
};

export async function POST(req, res) {
    console.log("Posting img");
    const body = await req.json();
    const { name, data } = body;
    console.log(body);
    return new Response('Ok', {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
};

