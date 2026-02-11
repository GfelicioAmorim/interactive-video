const express = require('express');
const router = express.Router();

const controller = require('../controllers/cenario.controller');

router.post('/', controller.create);
router.get('/', controller.findAll);
router.get('/logical/:logicalId', controller.findByLogicalId);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
