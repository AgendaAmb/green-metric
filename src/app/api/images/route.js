import { NextRequest, NextResponse } from "next/server";
import formidable from 'formidable';
const path = require('path');

export async function GET(req, res) {

    return NextResponse.json({ message: pond });
};

export async function POST(req, res) {
    const { img } = await req.json();

    if (img != null) {
        const options = formidable.Options = {};
        options.uploadDir = '/GreenMetric/images';
        options.fileName = "image.jpg"
        
        const form = formidable(options);
        try {
            console.log('¡Imagen guardada correctamente!');
            return NextResponse.json({ message: '¡Imagen guardada correctamente!' });
        } catch (error) {
            console.log('Error al guardar la imagen:');
            return NextResponse.json({ message: 'Error al guardar la imagen:' });
        }
    }
    return new Response('Ok', {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
};

