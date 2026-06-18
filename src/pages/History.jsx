import PublicLayout from "../layouts/PublicLayout";
import HistoriaHero from "../components/Historia/HistoriaHero";
import Cronologia from "../components/Historia/Cronologia";
import HistoriaChula from "../components/Historia/HistoriaChula";
import Palmares from "../components/Historia/Palmares";
import Logros from "../components/Historia/Logros";
import PhotoShowcase from "../components/ui/PhotoShowcase";
import { pagePhotoSets } from "../data/publicPhotos";

function History() {
  return (
    <PublicLayout className="web-public--historia">
      <div className="historia-pagina">
        <HistoriaHero />
        <PhotoShowcase
          className="photo-showcase--historia"
          eyebrow="Historia viva"
          title="Una identidad que se construye en el campo"
          subtitle="Imágenes que representan compromiso, evolución y pertenencia."
          photos={pagePhotoSets.historia}
        />
        <div className="historia-stack">
          <Cronologia />
          <HistoriaChula />
          <Palmares />
          <Logros />
        </div>
      </div>
    </PublicLayout>
  );
}

export default History;
