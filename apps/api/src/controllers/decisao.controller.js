const decisaoService = require('../services/decisao.service');
const beneficioService = require('../services/beneficio.service');

exports.decidir = (req, res) => {
  try {
    const { perfil, topico } = req.query;

    if (!perfil || !topico) {
      return res.status(400).json({
        error: 'Parâmetros perfil e topico são obrigatórios'
      });
    }

    const cenario = decisaoService.decidirCenario({
      perfilId: perfil,
      topicoId: topico
    });

    if (!cenario) {
      return res.status(404).json({
        error: 'Nenhum cenário encontrado para essa combinação'
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
