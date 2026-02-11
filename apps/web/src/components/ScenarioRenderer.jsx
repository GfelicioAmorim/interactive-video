import ListaRenderer from './renderers/ListaRenderer';
import TextoRenderer from './renderers/TextoRenderer';
import VideoRenderer from './renderers/VideoRenderer';

export default function ScenarioRenderer({ scenario }) {
  if (!scenario) return null;

  switch (scenario.tipo_render) {
    case 'lista':
      return <ListaRenderer scenario={scenario} />;

    case 'texto':
      return <TextoRenderer scenario={scenario} />;

    case 'video':
      return <VideoRenderer scenario={scenario} />;

    default:
      return <div>Tipo de render não suportado</div>;
  }
}
