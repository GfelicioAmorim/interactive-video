const service = require('../services/beneficio.service');

exports.getBeneficios = (req, res) => {
  try {
    res.json(service.getBeneficios());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
