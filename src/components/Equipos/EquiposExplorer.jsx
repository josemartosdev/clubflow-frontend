import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { publicApi } from "../../api/publicApi";

function initials(nombre, apellidos) {
  const a = (nombre?.[0] ?? "").toUpperCase();
  const b = (apellidos?.split(" ")[0]?.[0] ?? "").toUpperCase();
  return a + b;
}

export default function EquiposExplorer() {
  const [equipos, setEquipos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [detalle, setDetalle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    publicApi.equipos.list()
      .then((data) => {
        const list = data.equipos ?? [];
        setEquipos(list);
        if (list.length > 0) setSelectedId(list[0].id);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedId) return;
    let cancelled = false;
    publicApi.equipos.get(selectedId)
      .then((data) => { if (!cancelled) setDetalle(data); })
      .catch(() => { if (!cancelled) setDetalle(null); });
    return () => { cancelled = true; };
  }, [selectedId]);

  if (loading) {
    return <p className="equipos-loading">Cargando equipos…</p>;
  }

  if (equipos.length === 0) {
    return <p className="equipos-loading">No hay equipos disponibles.</p>;
  }

  const stats = detalle?.estadisticas;

  return (
    <div className="equipos-explorer">
      <div className="equipos-explorer__picker">
        <p className="equipos-section__eyebrow">Selecciona equipo</p>
        <div className="equipos-picker">
          {equipos.map((eq) => (
            <button
              key={eq.id}
              type="button"
              className={`equipos-picker__btn${selectedId === eq.id ? " equipos-picker__btn--active" : ""}`}
              onClick={() => setSelectedId(eq.id)}
            >
              <span className="equipos-picker__name">{eq.nombre}</span>
              <span className="equipos-picker__cat">{eq.categoria}</span>
            </button>
          ))}
        </div>
      </div>

      {detalle && (
        <div className="equipos-explorer__detail">
          <header className="equipos-detail-header">
            <div>
              <h2>{detalle.nombre}</h2>
              <p>{detalle.categoria} · {detalle.temporada}</p>
              {detalle.coach_nombre && <p className="equipos-detail-coach">Entrenador: {detalle.coach_nombre}</p>}
            </div>
            {stats && (
              <div className="equipos-stats-card">
                <span className="equipos-stats-card__label">Temporada {stats.temporada}</span>
                <div className="equipos-stats-grid">
                  <div><strong>{stats.puntos}</strong><span>Puntos</span></div>
                  <div><strong>{stats.victorias}-{stats.empates}-{stats.derrotas}</strong><span>V-E-D</span></div>
                  <div><strong>{stats.goles_favor}:{stats.goles_contra}</strong><span>Goles</span></div>
                  <div><strong>#{stats.posicion_tabla}</strong><span>Posición</span></div>
                </div>
                {stats.racha && <p className="equipos-racha">Racha: {stats.racha.split("").join(" · ")}</p>}
              </div>
            )}
          </header>

          <section className="equipos-section equipos-section--plantilla">
            <div className="equipos-section__header">
              <p className="equipos-section__eyebrow">Plantilla</p>
              <h3>{detalle.jugadores?.length ?? 0} jugadores</h3>
            </div>
            <div className="grid-jugadores">
              {(detalle.jugadores ?? []).map((j) => (
                <article key={j.id} className="card-jugador">
                  <div className="jugador-top">
                    <span className="jugador-avatar">{initials(j.nombre, j.apellidos)}</span>
                    {j.dorsal != null && <span className="jugador-dorsal">#{j.dorsal}</span>}
                  </div>
                  <h3 className="jugador-nombre">{j.nombre} {j.apellidos?.split(" ")[0]}</h3>
                  <p className="jugador-posicion">{j.posicion ?? "Jugador"}</p>
                </article>
              ))}
            </div>
          </section>

          {(detalle.ultimos_partidos ?? []).length > 0 && (
            <section className="equipos-section">
              <div className="equipos-section__header">
                <p className="equipos-section__eyebrow">Partidos</p>
                <h3>Últimos encuentros</h3>
              </div>
              <div className="equipos-partidos-list">
                {detalle.ultimos_partidos.map((p) => (
                  <Link key={p.id ?? p.slug} to={`/partidos/${p.id ?? p.slug}`} className="equipos-partido-link">
                    <span>{p.local} vs {p.visitante}</span>
                    <strong>{p.resultado ?? "Próximo"}</strong>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
