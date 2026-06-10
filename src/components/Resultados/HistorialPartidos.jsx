import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CLUB } from "../../config/club";
import { mapApiMatch, enrichMatch } from "../../data/matchDetail";
import { partidosApi } from "../../api/partidosApi";

const FALLBACK = [
  { fecha: "8 Ene", local: "Atlético Costa", visitante: CLUB.shortName, resultado: "1 - 3" },
  { fecha: "1 Ene", local: CLUB.shortName, visitante: "Polideportivo", resultado: "2 - 0" },
];

export default function HistorialPartidos() {
  const [jugados, setJugados] = useState(() => FALLBACK.map((p, i) => enrichMatch(p, i)));

  useEffect(() => {
    partidosApi.stored()
      .then((data) => {
        const finished = (data.partidos ?? [])
          .filter((p) => p.estado === "finalizado" || p.resultado)
          .map((p, i) => mapApiMatch(p) ?? enrichMatch(p, i));
        if (finished.length > 0) setJugados(finished);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="resultados-card resultados-card--historial">
      <div className="resultados-card__header">
        <p className="resultados-card__eyebrow">Partidos recientes</p>
        <h2>Últimos encuentros</h2>
      </div>

      <div className="lista-historial">
        {jugados.map((p) => {
          const isClubLocal = p.local.includes(CLUB.shortName) || p.local.includes("Clubflow");
          const clubGoals = isClubLocal ? p.score.local : p.score.visitante;
          const rivalGoals = isClubLocal ? p.score.visitante : p.score.local;
          const isWin = clubGoals > rivalGoals;
          const isDraw = clubGoals === rivalGoals;

          return (
            <Link key={p.id} to={`/partidos/${p.id}`} className="historial-item historial-item--link">
              <div className="historial-item__meta">
                <span className="historial-fecha">{p.fecha}</span>
                <span className={`historial-estado ${isWin ? "is-win" : isDraw ? "" : "is-loss"}`}>
                  {isWin ? "Victoria" : isDraw ? "Empate" : "Derrota"}
                </span>
              </div>
              <div className="historial-scorecard">
                <span className="historial-equipo">{p.local}</span>
                <span className="historial-score">{p.score.local} - {p.score.visitante}</span>
                <span className="historial-equipo historial-equipo--away">{p.visitante}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
