const cmsService = require('./cms.service');

function decidirCenario({ perfilId, topicoId }) {
  const cenarios = cmsService.getCenarios();

  return cenarios.find(cenario =>
    cenario.perfil_id === perfilId &&
    cenario.topico_id === topicoId
  );
}

module.exports = {
  decidirCenario
};
