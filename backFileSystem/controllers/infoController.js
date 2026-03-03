const fs = require('fs').promises;
const path = require('path');

exports.getAbout = async (req, res, next) => {
  try {
    const data = await fs.readFile(path.join(__dirname, '../data/acerca.txt'), 'utf8');
    res.json({ text: data });
  } catch (err) {
    next(err);
  }
};

exports.getQueHacemos = async (req, res, next) => {
  try {
    const data = await fs.readFile(path.join(__dirname, '../data/hacemos.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    next(err);
  }
};

exports.getIntegrantes = async (req, res, next) => {
  try {
    const data = await fs.readFile(path.join(__dirname, '../data/integrantes.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    next(err);
  }
};