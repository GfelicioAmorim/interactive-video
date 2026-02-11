const express = require('express');
const controller = require('../controllers/decisao.controller');

const router = express.Router();

router.get('/', controller.decidir);

module.exports = router;
