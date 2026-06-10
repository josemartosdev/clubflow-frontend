import { CLUB } from "../../config/club";

const resultadosMock = [
  { id: 1, local: CLUB.shortName, visitante: "UD Almería B", resultado: "3 - 1" },
  { id: 2, local: "Granada CF B", visitante: CLUB.shortName, resultado: "2 - 1" },
  { id: 3, local: CLUB.shortName, visitante: "Málaga CF", resultado: "2 - 0" },
  { id: 4, local: "Sevilla FC", visitante: CLUB.shortName, resultado: "1 - 1" },
  { id: 5, local: CLUB.shortName, visitante: "Jaén CF", resultado: "0 - 2" },
  { id: 6, local: "Córdoba CF", visitante: CLUB.shortName, resultado: "1 - 3" },
];

function getOutcomeForMatch(partido) {
  const [gLocal, gAway] = partido.resultado.split(" - ").map(Number);
  const isClubLocal = partido.local === CLUB.shortName;
  const clubGoals = isClubLocal ? gLocal : gAway;
  const rivalGoals = isClubLocal ? gAway : gLocal;
  if (clubGoals > rivalGoals) return "win";
  if (clubGoals < rivalGoals) return "loss";
  return "draw";
}

const outcomeLabel = { win: "Victoria", loss: "Derrota", draw: "Empate" };

function ResultadosCarousel() {
  return (
    <section className="scoreboard-section">
      <div className="home-module__header scoreboard-header">
        <span className="home-eyebrow">Competición</span>
        <h2>Últimos resultados</h2>
      </div>
      <div className="scoreboard-grid">
        {resultadosMock.map((partido) => {
          const outcome = getOutcomeForMatch(partido);
          return (
            <div key={partido.id} className={`scoreboard-card scoreboard-card--${outcome}`}>
              <span className={`scoreboard-badge scoreboard-badge--${outcome}`}>
                {outcomeLabel[outcome]}
              </span>
              <div className="scoreboard-match">
                <span className="scoreboard-team">{partido.local}</span>
                <span className="scoreboard-score">{partido.resultado}</span>
                <span className="scoreboard-team scoreboard-team--away">{partido.visitante}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ResultadosCarousel;
