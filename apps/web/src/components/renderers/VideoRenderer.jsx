export default function TextoRenderer({ scenario }) {
  return (
    <div className="overlay">
      <h2>{scenario.titulo_overlay}</h2>
      <p>{scenario.texto}</p>
    </div>
  );
}
