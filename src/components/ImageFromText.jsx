
export default function ImageFromText({ text }) {  
    const lienzo = canvasRef.current;
    const contexto = lienzo.getContext('2d');

    // Establecer el tamaño del lienzo
    lienzo.width = 200; // Ancho de la imagen
    lienzo.height = 100; // Alto de la imagen

    // Establecer el estilo del texto
    contexto.font = '20px Arial';
    contexto.fillStyle = 'black';
    contexto.textAlign = 'center';
    contexto.textBaseline = 'middle';

    // Dibujar el texto en el lienzo
    contexto.fillText(text, lienzo.width / 2, lienzo.height / 2);

  // Obtener la representación de imagen en formato de datos URI
  const datosURI = canvasRef.current ? canvasRef.current.toDataURL() : '';

  return datosURI;
}
