import PublicLayout from "../layouts/PublicLayout";
import EquiposExplorer from "../components/Equipos/EquiposExplorer";

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
        <EquiposExplorer />
      </div>
    </PublicLayout>
  );
}
