export async function fetchCenario({ perfil, topico }) {
  const response = await fetch(
    `http://localhost:3001/api/decisao?perfil=${perfil}&topico=${topico}`
  );

  if (!response.ok) {
    throw new Error('Erro ao buscar cenário');
  }

  return response.json();
}
