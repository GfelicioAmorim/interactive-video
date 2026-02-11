import { useEffect, useState } from 'react';
import { fetchCenario } from '../api/decisao';
import ScenarioRenderer from '../components/ScenarioRenderer';

export default function Player() {
  const [scenario, setScenario] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await fetchCenario({
        perfil: 'clt',
        topico: 'beneficios'
      });

      setScenario(data);
    }

    load();
  }, []);

  return (
    <div>
      <video
        src="/videos/video-base.mp4"
        controls
        width="800"
      />

      <ScenarioRenderer scenario={scenario} />
    </div>
  );
}
