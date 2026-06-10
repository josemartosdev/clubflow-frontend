import { User } from "lucide-react";
import { parseFormation, getRoleLabel } from "../../lib/formations";

/**
 * Campo con convocatoria tipo 4-3-3 — iconos de jugadores sobre el césped.
 * @param {string} formation - ej. "4-3-3"
 * @param {Array<{dorsal?: number, nombre?: string, role?: string}>} [players] - opcional, por orden de filas
 */
export default function FormationPitch({ formation = "4-3-3", players = [], compact = false }) {
  const layout = parseFormation(formation);
  if (!layout) {
    return (
      <div className="formation-pitch formation-pitch--empty">
        <p>Formación no reconocida: {formation}</p>
      </div>
    );
  }

  let playerIdx = 0;

  return (
    <div className={`formation-pitch${compact ? " formation-pitch--compact" : ""}`}>
      <div className="formation-pitch__header">
        <span className="formation-pitch__badge">{layout.label}</span>
        <span className="formation-pitch__title">Convocatoria</span>
      </div>
      <div className="formation-pitch__field">
        <div className="formation-pitch__lines" aria-hidden>
          <div className="formation-pitch__center-circle" />
          <div className="formation-pitch__box formation-pitch__box--top" />
          <div className="formation-pitch__box formation-pitch__box--bottom" />
          <div className="formation-pitch__half-line" />
        </div>

        {layout.rows.map((row, ri) => (
          <div key={ri} className="formation-pitch__row">
            {row.roles.map((role, ci) => {
              const custom = players[playerIdx];
              const dorsal = custom?.dorsal ?? row.numbers[ci] ?? playerIdx + 1;
              const name = custom?.nombre?.split(" ")[0] ?? getRoleLabel(role);
              playerIdx += 1;
              return (
                <div key={`${ri}-${ci}`} className="formation-player">
                  <div className="formation-player__shirt">
                    <User size={18} className="formation-player__icon" aria-hidden />
                    <span className="formation-player__dorsal">{dorsal}</span>
                  </div>
                  <span className="formation-player__name">{name}</span>
                  <span className="formation-player__role">{getRoleLabel(role)}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
