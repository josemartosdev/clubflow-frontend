import PublicLayout from "../layouts/PublicLayout";
import EquiposExplorer from "../components/Equipos/EquiposExplorer";
import PhotoShowcase from "../components/ui/PhotoShowcase";
import { pagePhotoSets } from "../data/publicPhotos";

export default function EquiposPage() {
  return (
    <PublicLayout>
      <div className="pagina-estandar pagina-equipos">
        <div className="pagina-header">
          <span className="pagina-header__eyebrow">Cantera y competición</span>
          <h1>Nuestros Equipos</h1>
          <p>
            Selecciona un equipo para ver plantilla, estadísticas de temporada y partidos.
          </p>
        </div>
        <PhotoShowcase
          className="photo-showcase--equipos"
          eyebrow="Equipos"
          title="Del fútbol base al primer equipo"
          subtitle="Una estructura competitiva para crecer temporada tras temporada."
          photos={pagePhotoSets.equipos}
        />
        <EquiposExplorer />
      </div>
    </PublicLayout>
  );
}
