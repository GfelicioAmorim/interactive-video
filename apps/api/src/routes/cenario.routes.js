const express = require('express');
const controller = require('../controllers/cenario.controller');

const router = express.Router();

router.get('/', controller.getCenarios);
router.get('/:id', controller.getCenarioById);

module.exports = router;
