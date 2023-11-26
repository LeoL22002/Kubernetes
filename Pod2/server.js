// server2.js
const express = require('express');
const app = express();
const port = 3001;

const { binarySearch, bubbleSort } = require('./main');
const Sortedarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array=[10,231,4532,54,76,245,8654,32,4325,2,21];
app.get('/binaria/:target', (req, res) => {
  const target = parseInt(req.params.target);
  const result = binarySearch(Sortedarray, target);
  const title="RESULTADOS DE ALGORITMO DE BÚSQUEDA BINARIA";
 
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
      <h2>${title}</h2>
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
      <h2>${title}</h2>
      <br>
      <h4>Elemento ${target} no encontrado en el array</h4>
    </body>
  </html>
`);
  }
  
  // if (result !== -1) {
  //   res.send(`Elemento ${target} encontrado en el índice ${result}`);
  // } else {
  //   res.send(`Elemento ${target} no encontrado en el array`);
  // }
});

app.get('/burbuja', (req, res) => {
  const sortedArray = bubbleSort([...array]);
  
  res.send(
`
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resultado del Método de Burbuja</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f2f2f2;
      text-align: center;
      margin: 20px;
    }
    h2 {
      color: #333;
    }
    p {
      font-size: 20px;
      color: #555;
    }
    pre {
      font-size: 1.2em;
      background-color: #fff;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
  </style>
</head>
<body>
  <h2>Resultado del Método de Burbuja</h2>
  <p>Array original:</p>
  <pre>
    <code>
      ${array}
    </code>
  </pre>
  <p>Array ordenado con el Método de Burbuja:</p>
  <pre>
    <code>
      ${sortedArray}
    </code>
  </pre>
</body>
</html>

`
  );
  //res.json({ originalArray: array, sortedArray });
});

app.listen(port, () => {
  console.log(`Segundo servidor escuchando en http://localhost:${port}`);
});
