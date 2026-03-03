const fs = require('fs').promises;
const path = require('path');

exports.getAbout = async (req, res, next) => {
  try {
    const data = await fs.readFile(path.join(__dirname, '../info/acerca.txt'), 'utf8');
    res.json({ text: data });
  } catch (err) {
    next(err);
  }
};

exports.getQueHacemos = async (req, res, next) => {
  try {
    const data = await fs.readFile(path.join(__dirname, '../info/hacemos.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    next(err);
  }
};

exports.getIntegrantes = async (req, res, next) => {
  try {
    const data = await fs.readFile(path.join(__dirname, '../info/integrantes.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    next(err);
  }
};