import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { partidosApi } from "../../api/partidosApi";
import { CLUB } from "../../config/club";
import { mapApiMatch, enrichMatch } from "../../data/matchDetail";

const FALLBACK_RAW = [
  { fecha: "Sáb 18 Ene — 17:00", local: `${CLUB.shortName} FC`, visitante: "UD Almería B", categoria: "Senior", lugar: CLUB.stadium },
  { fecha: "Dom 26 Ene — 11:00", local: "Atlético Costa", visitante: `${CLUB.shortName} Cadete`, categoria: "Cadete", lugar: "Campo Municipal" },
  { fecha: "Sáb 1 Feb — 18:30", local: `${CLUB.shortName} Juvenil`, visitante: "Marbella FC", categoria: "Juvenil", lugar: CLUB.stadium },
];

export default function ProximosEncuentros() {
  const [encuentros, setEncuentros] = useState(() =>
    FALLBACK_RAW.map((p, i) => enrichMatch(p, i)),
  );
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("demo");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await partidosApi.stored();
        const list = data.partidos ?? data.matches ?? [];
        if (!cancelled && list.length > 0) {
          setEncuentros(list.map((p, i) => mapApiMatch(p) ?? enrichMatch(p, i)));
          setSource(data.source === "database" ? "database" : "api");
        }
      } catch {
        /* fallback demo */
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="module">
      <div className="module__header" style={{ marginBottom: "20px" }}>
        <h2>Próximos encuentros</h2>
        {(source === "api" || source === "database") && (
          <span className="module__badge" style={{ fontSize: "12px", color: "#1b8a4c" }}>
            {source === "database" ? "Datos del club" : "Datos en tiempo real"}
          </span>
        )}
      </div>
      {loading ? (
        <p className="module__loading">Cargando calendario…</p>
      ) : (
        <div className="lista-encuentros">
          {encuentros.map((enc) => (
            <Link key={enc.id} to={`/partidos/${enc.id}`} className="encuentro-item encuentro-item--link">
              <div className="encuentro-fecha">{enc.fecha}</div>
              <div className="encuentro-equipos">
                <strong>{enc.local}</strong> <span className="vs">vs</span> <strong>{enc.visitante}</strong>
              </div>
              <div className="encuentro-detalles">
                <span className="encuentro-cat">{enc.categoria}</span> — <span>📍 {enc.lugar}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
