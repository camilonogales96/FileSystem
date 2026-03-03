const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/imagenes', express.static(path.join(__dirname, 'public/imagenes')));
app.use('/api', apiRoutes);


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