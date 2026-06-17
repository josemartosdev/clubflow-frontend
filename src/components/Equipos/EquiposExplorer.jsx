import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { publicApi } from "../../api/publicApi";

function initials(nombre, apellidos) {
  const a = (nombre?.[0] ?? "").toUpperCase();
  const b = (apellidos?.split(" ")[0]?.[0] ?? "").toUpperCase();
  return a + b;
}

function categoryLabel(categoria) {
  const value = (categoria ?? "").toLowerCase();
  if (value.includes("senior")) return "Competición senior";
  if (value.includes("juvenil")) return "Etapa alto rendimiento";
  if (value.includes("cadete")) return "Desarrollo táctico";
  if (value.includes("infantil")) return "Formación específica";
  if (value.includes("alev")) return "Cantera base";
  return "Escuela de fútbol";
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
  const badgeSrc = `${import.meta.env.BASE_URL}img/clubflow-team-badge.jpg`;
  const squadCount = detalle?.jugadores?.length ?? 0;
  const matchCount = detalle?.ultimos_partidos?.length ?? 0;

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
          <header className="equipos-detail-header equipos-detail-hero">
            <div className="equipos-detail-hero__main">
              <div className="equipos-detail-hero__badge">
                <img src={badgeSrc} alt={`Insignia ${detalle.nombre}`} />
              </div>
              <div className="equipos-detail-hero__copy">
                <p className="equipos-detail-hero__kicker">{detalle.categoria} · {categoryLabel(detalle.categoria)}</p>
                <h2>{detalle.nombre}</h2>
                <p className="equipos-detail-hero__summary">
                  Equipo de la temporada {detalle.temporada} con un grupo preparado para competir y crecer jornada a jornada.
                </p>
                {detalle.coach_nombre && <p className="equipos-detail-coach">Entrenador principal: {detalle.coach_nombre}</p>}
                <div className="equipos-detail-hero__tags">
                  <span>{squadCount} jugadores</span>
                  <span>{matchCount} partidos recientes</span>
                  <span>Identidad Clubflow</span>
                </div>
              </div>
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
                    <div className="jugador-identidad">
                      <span className="jugador-avatar">{initials(j.nombre, j.apellidos)}</span>
                      <div className="jugador-meta">
                        <span className="jugador-etiqueta">{detalle.categoria}</span>
                        <span className="jugador-temporada">{detalle.temporada}</span>
                      </div>
                    </div>
                    {j.dorsal != null && <span className="jugador-dorsal">#{j.dorsal}</span>}
                  </div>
                  <h3 className="jugador-nombre">{j.nombre} {j.apellidos?.split(" ")[0]}</h3>
                  <div className="jugador-bottom">
                    <p className="jugador-posicion">{j.posicion ?? "Jugador"}</p>
                    <span className="jugador-chip">Plantilla oficial</span>
                  </div>
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
