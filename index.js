// Importamos express
const express = require('express');

// Creamos la app
const app = express();

// Puerto donde se ejecutará el servidor
const PORT = 3000;

// Middleware para entender JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, esta es mi primera API con Express!');
});

// Ruta de ejemplo con parámetro
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}, bienvenido a mi API 🥳`);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
