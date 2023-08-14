const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());


app.get('/api/hello', (req, res) => {
  res.json({ message: '¡Hola desde el backend!' });
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
