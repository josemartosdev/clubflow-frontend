import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ChevronRight, MapPin, Trophy } from "lucide-react";
import { partidosApi } from "../../api/partidosApi";
import { CLUB } from "../../config/club";
import { mapApiMatch, enrichMatch } from "../../data/matchDetail";

const FALLBACK = [
  { fecha: "Sáb 1 Feb — 17:00", local: `${CLUB.shortName} FC`, visitante: "Roquetas CF", categoria: "Senior", lugar: CLUB.stadium, estado: "programado" },
  { fecha: "Mon 22 Dec 2025 — 11:00", local: `${CLUB.shortName} Juvenil`, visitante: "Marbella FC", categoria: "Juvenil", lugar: CLUB.stadium, resultado: "1 - 2", estado: "finalizado" },
  { fecha: "Sat 18 Jan 2026 — 17:00", local: `${CLUB.shortName} FC`, visitante: "UD Almería B", categoria: "Senior", lugar: CLUB.stadium, resultado: "2 - 1", estado: "finalizado" },
  { fecha: "Wed 8 Jan 2026 — 18:30", local: "Atlético Costa", visitante: `${CLUB.shortName} FC`, categoria: "Senior", resultado: "1 - 3", estado: "finalizado" },
  { fecha: "Wed 1 Jan 2026 — 12:00", local: `${CLUB.shortName} FC`, visitante: "Polideportivo CF", categoria: "Senior", resultado: "2 - 0", estado: "finalizado" },
];

function isPlayed(m) {
  return m.estado === "finalizado" || (m.resultado && m.score?.local != null);
}

function MatchCard({ partido, variant }) {
  const played = isPlayed(partido);
  return (
    <Link to={`/partidos/${partido.id}`} className={`partido-card partido-card--${variant}`}>
      <div className="partido-card__meta">
        <span className="partido-card__fecha">
          <Calendar size={14} aria-hidden />
          {partido.fecha}
        </span>
        {partido.categoria && <span className="partido-card__cat">{partido.categoria}</span>}
      </div>

      <div className="partido-card__matchup">
        <span className="partido-card__team">{partido.local}</span>
        {played ? (
          <span className="partido-card__score">
            {partido.score.local} <span>—</span> {partido.score.visitante}
          </span>
        ) : (
          <span className="partido-card__vs">VS</span>
        )}
        <span className="partido-card__team partido-card__team--away">{partido.visitante}</span>
      </div>

      {partido.lugar && (
        <p className="partido-card__lugar">
          <MapPin size={13} aria-hidden />
          {partido.lugar}
        </p>
      )}

      <span className="partido-card__link">
        Ver ficha <ChevronRight size={16} aria-hidden />
      </span>
    </Link>
  );
}

export default function PartidosCalendario() {
  const [partidos, setPartidos] = useState(() => FALLBACK.map((p, i) => enrichMatch(p, i)));
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("demo");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await partidosApi.stored();
        const list = data.partidos ?? [];
        if (!cancelled && list.length > 0) {
          setPartidos(list.map((p, i) => mapApiMatch(p) ?? enrichMatch(p, i)));
          setSource(data.source === "database" ? "database" : "api");
        }
      } catch {
        /* demo */
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const { proximos, jugados, destacado } = useMemo(() => {
    const prox = [];
    const jug = [];
    for (const p of partidos) {
      if (isPlayed(p)) jug.push(p);
      else prox.push(p);
    }
    return {
      proximos: prox,
      jugados: jug,
      destacado: prox[0] ?? null,
    };
  }, [partidos]);

  if (loading) {
    return <p className="partidos-loading">Cargando calendario…</p>;
  }

  return (
    <div className="partidos-calendario">
      {destacado && (
        <section className="partido-destacado">
          <span className="partido-destacado__tag">Próximo partido</span>
          <div className="partido-destacado__matchup">
            <div>
              <span className="partido-destacado__label">Local</span>
              <strong>{destacado.local}</strong>
            </div>
            <div className="partido-destacado__vs">VS</div>
            <div>
              <span className="partido-destacado__label">Visitante</span>
              <strong>{destacado.visitante}</strong>
            </div>
          </div>
          <p className="partido-destacado__info">
            {destacado.fecha} · {destacado.lugar}
          </p>
          <div className="partido-destacado__actions">
            <Link to={`/partidos/${destacado.id}`} className="partido-destacado__btn partido-destacado__btn--primary">
              Ver ficha del partido
            </Link>
            <Link to="/en-directo" className="partido-destacado__btn partido-destacado__btn--ghost">
              En directo
            </Link>
          </div>
        </section>
      )}

      <section className="partidos-bloque">
        <header className="partidos-bloque__header">
          <div>
            <span className="partidos-bloque__eyebrow">Calendario</span>
            <h2>Próximos partidos</h2>
          </div>
          {source !== "demo" && <span className="partidos-bloque__badge">Datos del club</span>}
        </header>
        {proximos.length === 0 ? (
          <p className="partidos-bloque__empty">No hay partidos programados por ahora.</p>
        ) : (
          <div className="partidos-bloque__grid">
            {proximos.filter((p) => p.id !== destacado?.id).map((p) => (
              <MatchCard key={p.id} partido={p} variant="upcoming" />
            ))}
          </div>
        )}
      </section>

      <section className="partidos-bloque partidos-bloque--played">
        <header className="partidos-bloque__header">
          <div>
            <span className="partidos-bloque__eyebrow">
              <Trophy size={14} aria-hidden /> Resultados
            </span>
            <h2>Partidos jugados</h2>
          </div>
        </header>
        {jugados.length === 0 ? (
          <p className="partidos-bloque__empty">Aún no hay resultados registrados.</p>
        ) : (
          <div className="partidos-bloque__grid">
            {jugados.map((p) => (
              <MatchCard key={p.id} partido={p} variant="played" />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
