const express = require('express');
const router = express.Router();

const controller = require('../controllers/beneficio.controller');

router.post('/', controller.create);
router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
