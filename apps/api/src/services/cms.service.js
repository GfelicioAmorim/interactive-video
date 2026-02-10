const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '../../../../');
const CENARIOS_PATH = path.join(PROJECT_ROOT,'apps', 'cms', 'cenarios');

function readFolder() {
  if (!fs.existsSync(CENARIOS_PATH)) {
    throw new Error(`Diretório CMS não encontrado: ${CENARIOS_PATH}`);
  }

  return fs
    .readdirSync(CENARIOS_PATH)
    .filter(file => file.endsWith('.json'));
}

function getCenarios() {
  return readFolder().map(file => {
    const filePath = path.join(CENARIOS_PATH, file);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  });
}

function getCenarioById(id) {
  const cenarios = getCenarios();

  return cenarios.find(cenario => cenario.id === id);
}

module.exports = {
  getCenarios,
  getCenarioById
};
