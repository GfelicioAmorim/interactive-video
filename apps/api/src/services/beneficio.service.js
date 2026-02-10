const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '../../../../');
const BENEFICIOS_PATH = path.join(PROJECT_ROOT, 'cms', 'beneficios');

function readFolder() {
  if (!fs.existsSync(BENEFICIOS_PATH)) {
    throw new Error(`Diretório de benefícios não encontrado: ${BENEFICIOS_PATH}`);
  }

  return fs
    .readdirSync(BENEFICIOS_PATH)
    .filter(file => file.endsWith('.json'));
}

function getBeneficios() {
  return readFolder().map(file => {
    const filePath = path.join(BENEFICIOS_PATH, file);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  });
}

function getBeneficiosByIds(ids = []) {
  const all = getBeneficios();
  return all
    .filter(b => ids.includes(b.id))
    .sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0));
}

module.exports = {
  getBeneficios,
  getBeneficiosByIds
};
