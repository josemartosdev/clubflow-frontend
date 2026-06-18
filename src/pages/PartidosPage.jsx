import PublicLayout from "../layouts/PublicLayout";
import PartidosCalendario from "../components/Partidos/PartidosCalendario";
import PhotoShowcase from "../components/ui/PhotoShowcase";
import { pagePhotoSets } from "../data/publicPhotos";

export default function PartidosPage() {
  return (
    <PublicLayout className="web-public--partidos">
      <div className="pagina-estandar pagina-partidos">
        <div className="pagina-header">
          <span className="pagina-header__eyebrow">Temporada 2025/26</span>
          <h1>Partidos</h1>
          <p>Consulta los próximos encuentros y el historial de resultados del club.</p>
        </div>
        <PhotoShowcase
          className="photo-showcase--partidos"
          eyebrow="Partidos"
          title="Cada jornada cuenta"
          subtitle="Seguimiento visual del esfuerzo del equipo durante toda la temporada."
          photos={pagePhotoSets.partidos}
        />
        <PartidosCalendario />
      </div>
    </PublicLayout>
  );
}
