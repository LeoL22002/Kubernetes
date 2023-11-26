// server.js
const express = require('express');
const app = express();
const port = 3000;

const {linearSearch,jumpSearch} = require('./main');
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

app.get('/lineal/:target', (req, res) => {
  const target = parseInt(req.params.target);
  const result = linearSearch(array, target);
  
  if (result !== -1) {
    res.send(`
  <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          text-align: center;
          background-color: #f2f2f2;
          margin: 20px;
        }
        h2 {
          color: #333;
        }
        h4 {
          color: green;
        }
      </style>
    </head>
    <body>
      <h2>RESULTADOS DE ALGORITMO DE BÚSQUEDA LINEAL</h2>
      <br>
      <h4>Elemento ${target} encontrado en el índice ${result}</h4>
    </body>
  </html>
`);
  } else {
    res.send(`
  <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          text-align: center;
          background-color: #f2f2f2;
          margin: 20px;
        }
        h2 {
          color: #333;
        }
        h4 {
          color: #d9534f;
        }
      </style>
    </head>
    <body>
      <h2>RESULTADOS DE ALGORITMO DE BÚSQUEDA LINEAL</h2>
      <br>
      <h4>Elemento ${target} no encontrado en el array</h4>
    </body>
  </html>
`);
  }
});

app.get('/Salto/:target',(req,res)=>{
  const target = parseInt(req.params.target);
  const result = jumpSearch(array, target);

  if(result!==-1)
  res.send(`
  <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          text-align: center;
          background-color: #f2f2f2;
          margin: 20px;
        }
        h2 {
          color: #333;
        }
        h4 {
          color: green;
        }
      </style>
    </head>
    <body>
      <h2>RESULTADOS DE ALGORITMO DE BUSQUEDA POR SALTOS</h2>
      <br>
      <h4>Elemento ${target} encontrado en el índice ${result}</h4>
    </body>
  </html>
`);
else
res.send(`
<html>
  <head>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        text-align: center;
        background-color: #f2f2f2;
        margin: 20px;
      }
      h2 {
        color: #333;
      }
      h4 {
        color: #d9534f;
      }
    </style>
  </head>
  <body>
    <h2>RESULTADOS DE ALGORITMO DE BUSQUEDA POR SALTOS</h2>
    <br>
    <h4>Elemento ${target} no encontrado en el array</h4>
  </body>
</html>
`);
}

);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
