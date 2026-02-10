const cms = require("../services/cms.service");

const getVideoCompleto = (req, res) => {
  try {
    const empresa = cms.getEmpresa();
    const video = cms.getVideo();

    const topicos = cms.getTopicos();
    const perfis = cms.getPerfis();
    const beneficios = cms.getBeneficios();
    const cenarios = cms.getCenarios();
    const eventos = cms.getEventos();
    const acoes = cms.getAcoes();

    res.json({
      empresa,
      video,
      topicos,
      perfis,
      beneficios,
      cenarios,
      eventos,
      acoes
    });
  } catch (error) {
    res.status(500).json({
      error: "Erro ao carregar dados do vídeo",
      details: error.message
    });
  }
};

module.exports = {
  getVideoCompleto
};
