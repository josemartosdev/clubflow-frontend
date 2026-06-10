import PublicLayout from "../layouts/PublicLayout";
import PartidosCalendario from "../components/Partidos/PartidosCalendario";

export default function PartidosPage() {
  return (
    <PublicLayout className="web-public--partidos">
      <div className="pagina-estandar pagina-partidos">
        <div className="pagina-header">
          <span className="pagina-header__eyebrow">Temporada 2025/26</span>
          <h1>Partidos</h1>
          <p>Consulta los próximos encuentros y el historial de resultados del club.</p>
        </div>
        <PartidosCalendario />
      </div>
    </PublicLayout>
  );
}
