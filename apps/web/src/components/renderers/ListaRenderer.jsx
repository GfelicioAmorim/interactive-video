export default function ListaRenderer({ scenario }) {
  return (
    <div className="overlay">
      <h2>{scenario.titulo_overlay}</h2>
      <p>{scenario.texto}</p>

      <ul>
        {scenario.beneficios?.map((beneficio) => (
          <li key={beneficio.id}>
            <strong>{beneficio.titulo}</strong>
            <p>{beneficio.descricao}</p>
          </li>
        ))}
      </ul>

      <button onClick={() => console.log(scenario.acao_apos)}>
        Continuar
      </button>
    </div>
  );
}
