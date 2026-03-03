const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/imagenes', express.static(path.join(__dirname, 'public/imagenes')));

app.get('/api/acerca', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'info/acerca.txt'), 'utf8');
    res.json({ text: data });
  } catch (err) {
    res.status(500).json({ error: 'Error leyendo acerca.txt' });
  }
});

app.get('/api/hacemos', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'info/hacemos.json'), 'utf8');
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (err) {
    res.status(500).json({ error: 'Error leyendo hacemos.json' });
  }
});

app.get('/api/integrantes', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'info/integrantes.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: 'Error leyendo integrantes.json' });
  }
});

if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '../app/build');
  app.use(express.static(clientBuildPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});