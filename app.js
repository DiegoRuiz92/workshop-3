const express = require('express'); //Importamos el framework express.js
const app = express(); //Creamos una variable que acceda a express()
const port = 3000; //Creamos una variable para definir el puerto

//nos traemos de express el método get para retornar una respuesta
//cuando el cliente ingrese a la ruta '/'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//nos traemos de express el método listen para levantar el proyecto 
//en el puerto definido
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`); //Mensaje en consola
});

// npm cache clean --force comando para limpiar cache cuando hay problemas de npm