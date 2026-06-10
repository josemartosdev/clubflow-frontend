import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import PublicLayout from "../layouts/PublicLayout";
import FormationPitch from "../components/gestion/FormationPitch";
import { partidosApi } from "../api/partidosApi";
import { mapApiMatch, enrichMatch } from "../data/matchDetail";
import { CLUB } from "../config/club";

const TABS = [
  { id: "resumen", label: "Resumen" },
  { id: "estadisticas", label: "Estadísticas" },
  { id: "formaciones", label: "Formaciones" },
  { id: "detalle", label: "Detalle" },
];

const STAT_LABELS = [
  { key: "posesion", label: "Posesión", suffix: "%" },
  { key: "tiros", label: "Tiros" },
  { key: "tirosPuerta", label: "A puerta" },
  { key: "corners", label: "Córners" },
  { key: "faltas", label: "Faltas" },
  { key: "fuerasJuego", label: "Fueras de juego" },
  { key: "tarjetas", label: "Tarjetas" },
];

function StatBar({ label, home, away, suffix = "" }) {
  const total = home + away || 1;
  const homePct = Math.round((home / total) * 100);
  return (
    <div className="partido-stat-row">
      <span className="partido-stat-row__val partido-stat-row__val--home">{home}{suffix}</span>
      <div className="partido-stat-row__center">
        <span className="partido-stat-row__label">{label}</span>
        <div className="partido-stat-row__bar">
          <span style={{ width: `${homePct}%` }} />
        </div>
      </div>
      <span className="partido-stat-row__val partido-stat-row__val--away">{away}{suffix}</span>
    </div>
  );
}

export default function PartidoDetallePage() {
  const { id } = useParams();
  const [partido, setPartido] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("resumen");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await partidosApi.get(id);
        if (!cancelled) setPartido(mapApiMatch(data));
      } catch {
        if (!cancelled) {
          setPartido(enrichMatch({
            local: `${CLUB.shortName} FC`,
            visitante: "Rival",
            fecha: "Próxima jornada",
            resultado: "2 - 1",
          }, 0));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  if (loading) {
    return (
      <PublicLayout className="web-public--partido">
        <p className="partido-loading">Cargando partido…</p>
      </PublicLayout>
    );
  }

  if (!partido) {
    return (
      <PublicLayout className="web-public--partido">
        <div className="partido-not-found">
          <p>Partido no encontrado.</p>
          <Link to="/partidos">Volver a partidos</Link>
        </div>
      </PublicLayout>
    );
  }

  const isLive = partido.estado === "en_vivo";
  const isFinished = partido.estado === "finalizado" || !!partido.resultado;

  return (
    <PublicLayout className="web-public--partido">
      <div className="partido-detalle">
        <header className="partido-hero">
          <div className="partido-hero__top">
            <Link to="/partidos" className="partido-back">
              <ArrowLeft size={16} aria-hidden />
              Partidos
            </Link>
            <span className="partido-hero__meta">
              {partido.categoria} · {partido.jornada}
            </span>
          </div>

          <div className="partido-scoreboard">
            <div className="partido-team partido-team--home">
              <span className="partido-team__badge">{partido.local.slice(0, 2).toUpperCase()}</span>
              <h1>{partido.local}</h1>
            </div>

            <div className="partido-scoreboard__center">
              {isFinished || isLive ? (
                <div className="partido-score">
                  <span>{partido.score.local}</span>
                  <span className="partido-score__sep">-</span>
                  <span>{partido.score.visitante}</span>
                </div>
              ) : (
                <div className="partido-score partido-score--vs">VS</div>
              )}
              {isLive && <span className="partido-live">EN VIVO</span>}
              {!isLive && !isFinished && <span className="partido-hora">{partido.hora}</span>}
              {isFinished && !isLive && <span className="partido-estado">Final</span>}
            </div>

            <div className="partido-team partido-team--away">
              <span className="partido-team__badge partido-team__badge--away">
                {partido.visitante.slice(0, 2).toUpperCase()}
              </span>
              <h1>{partido.visitante}</h1>
            </div>
          </div>

          <div className="partido-hero__info">
            <span><Calendar size={14} aria-hidden /> {partido.fecha}</span>
            <span><MapPin size={14} aria-hidden /> {partido.lugar}</span>
            <span><Users size={14} aria-hidden /> {partido.asistencia} espectadores</span>
          </div>
        </header>

        <nav className="partido-tabs" aria-label="Secciones del partido">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`partido-tabs__btn${tab === t.id ? " partido-tabs__btn--active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <div className="partido-panel">
          {tab === "resumen" && (
            <div className="partido-resumen">
              <section>
                <h2>Cronología</h2>
                {partido.eventos.length === 0 ? (
                  <p className="partido-empty">Sin eventos registrados.</p>
                ) : (
                  <ul className="partido-eventos">
                    {partido.eventos.map((ev) => (
                      <li key={`${ev.min}-${ev.texto}`} className={`partido-evento partido-evento--${ev.tipo}`}>
                        <span className="partido-evento__min">{ev.min}&apos;</span>
                        <span className="partido-evento__text">{ev.texto}</span>
                        <span className="partido-evento__team">
                          {ev.equipo === "local" ? partido.local : partido.visitante}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
              <section>
                <h2>Datos del encuentro</h2>
                <dl className="partido-datos">
                  <div><dt>Árbitro</dt><dd>{partido.arbitro}</dd></div>
                  <div><dt>Competición</dt><dd>{partido.categoria}</dd></div>
                  <div><dt>Campo</dt><dd>{partido.lugar}</dd></div>
                </dl>
              </section>
            </div>
          )}

          {tab === "estadisticas" && (
            <div className="partido-stats">
              <h2>Estadísticas del partido</h2>
              <div className="partido-stats__teams">
                <span>{partido.local}</span>
                <span>{partido.visitante}</span>
              </div>
              {STAT_LABELS.map(({ key, label, suffix }) => {
                const vals = partido.stats[key];
                if (!vals) return null;
                return (
                  <StatBar key={key} label={label} home={vals[0]} away={vals[1]} suffix={suffix || ""} />
                );
              })}
            </div>
          )}

          {tab === "formaciones" && (
            <div className="partido-formaciones">
              <div className="partido-formaciones__col">
                <h2>{partido.local}</h2>
                <p className="partido-formaciones__sys">{partido.formacionLocal}</p>
                <FormationPitch formation={partido.formacionLocal} players={partido.convocatoriaLocal} />
              </div>
              <div className="partido-formaciones__col">
                <h2>{partido.visitante}</h2>
                <p className="partido-formaciones__sys">{partido.formacionVisitante}</p>
                <FormationPitch formation={partido.formacionVisitante} players={partido.convocatoriaVisitante} />
              </div>
            </div>
          )}

          {tab === "detalle" && (
            <div className="partido-detalle-texto">
              <h2>Informe del partido</h2>
              <p>{partido.notas || "Sin informe adicional."}</p>
            </div>
          )}
        </div>
      </div>
    </PublicLayout>
  );
}
