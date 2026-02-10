const cmsService = require('../services/cms.service');
const beneficioService = require('../services/beneficio.service');

exports.getCenarios = (req, res) => {
  try {
    const cenarios = cmsService.getCenarios();
    res.json(cenarios);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.getCenarioById = (req, res) => {
  try {
    const { id } = req.params;
    const cenario = cmsService.getCenarioById(id);

    if (!cenario) {
      return res.status(404).json({
        error: 'Cenário não encontrado'
      });
    }

    res.json(cenario);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.getCenarioCompleto = (req, res) => {
  try {
    const { id } = req.params;
    const cenario = cmsService.getCenarioById(id);

    if (!cenario) {
      return res.status(404).json({
        error: 'Cenário não encontrado'
      });
    }

    let beneficios = [];
    if (Array.isArray(cenario.beneficios_ids)) {
      beneficios = beneficioService.getBeneficiosByIds(
        cenario.beneficios_ids
      );
    }

    res.json({
      ...cenario,
      beneficios
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
