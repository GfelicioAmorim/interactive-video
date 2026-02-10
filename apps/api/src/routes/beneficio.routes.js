const express = require('express');
const controller = require('../controllers/beneficio.controller');

const router = express.Router();

router.get('/', controller.getBeneficios);

module.exports = router;
