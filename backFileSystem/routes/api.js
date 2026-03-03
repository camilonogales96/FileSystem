const express = require('express');
const router = express.Router();
const {getAbout, getQueHacemos, getIntegrantes} = require('../controllers/infoController');

router.get('/acerca', getAbout);
router.get('/hacemos', getQueHacemos);
router.get('/integrantes', getIntegrantes);