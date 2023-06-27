const { createCanvas } = require('canvas');
import { NextResponse } from 'next/server'
export async function GET(request) {
  //Obtener el texto a convertir
  let req = request.nextUrl.searchParams.get('text');

  //Crear canvas
  const canvas = createCanvas(900, 900); // Ancho y alto de la imagen
  const contexto = canvas.getContext('2d');
  
  //Asignar valor a req en caso de nulo
  req??="Hello World"

  // Establecer el estilo del texto
  contexto.font = '20px Arial';
  contexto.fillStyle = 'black';
  contexto.textAlign = 'center';
  contexto.textBaseline = 'middle';

  // Dibujar el texto en el lienzo
  contexto.fillText(req, canvas.width / 2, canvas.height / 2);

  // Obtener la representación de imagen en formato de datos URI
  const datosURI = canvas.toDataURL();

  return NextResponse.json({ url: datosURI });
}
