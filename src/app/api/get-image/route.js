const { createCanvas } = require('canvas');
import { NextResponse } from 'next/server'
export async function GET(request) {
  console.log("Request", request);
  const canvas = createCanvas(900, 900); // Ancho y alto de la imagen
  const contexto = canvas.getContext('2d');

  // Establecer el estilo del texto
  contexto.font = '20px Arial';
  contexto.fillStyle = 'black';
  contexto.textAlign = 'center';
  contexto.textBaseline = 'middle';

  // Dibujar el texto en el lienzo
  contexto.fillText("Oscar", canvas.width / 2, canvas.height / 2);

  // Obtener la representación de imagen en formato de datos URI
  const datosURI = canvas.toDataURL();

  return NextResponse.json({ message: datosURI });
}
