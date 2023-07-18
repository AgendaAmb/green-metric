const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Ruta para recibir la imagen y guardarla en la carpeta "public/uploads"
app.post('/upload', (req, res) => {
  const image = req.body.image; // Aquí obtén la imagen que estás enviando desde el cliente

  // Obtén el nombre de la imagen y el contenido base64
  const { name, data } = image;

  // Decodifica el contenido base64 a un buffer
  const buffer = Buffer.from(data, 'base64');

  // Ruta donde se guardará la imagen en la carpeta "public/uploads"
  const imagePath = path.join(process.cwd(), 'public', 'uploads', name);

  // Guarda la imagen en el directorio "public/uploads"
  fs.writeFile(imagePath, buffer, (err) => {
    if (err) {
      console.error('Error al guardar la imagen:', err);
      res.status(500).json({ error: 'Error al guardar la imagen' });
    } else {
      console.log('Imagen guardada exitosamente');
      res.status(200).json({ message: 'Imagen guardada exitosamente' });
    }
  });
});

// Inicia el servidor en el puerto 5000 (puedes cambiarlo según tus necesidades)
app.listen(5000, () => {
  console.log('Servidor de subida de imágenes iniciado en el puerto 5000');
});
