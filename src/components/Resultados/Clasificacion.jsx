import { CLUB } from "../../config/club";

const tabla = [
  { pos: 1, eq: "UD Almería B", pts: 24, pj: 10, pg: 8, pe: 0, pp: 2 },
  { pos: 2, eq: CLUB.shortName, pts: 21, pj: 10, pg: 7, pe: 0, pp: 3 },
  { pos: 3, eq: "Málaga CF B", pts: 18, pj: 10, pg: 6, pe: 0, pp: 4 },
  { pos: 4, eq: "Granada CF B", pts: 15, pj: 10, pg: 5, pe: 0, pp: 5 },
  { pos: 5, eq: "Jaén CF", pts: 12, pj: 10, pg: 4, pe: 0, pp: 6 },
];

export default function Clasificacion() {
  const club = tabla.find((fila) => fila.eq === CLUB.shortName);

  return (
    <section className="resultados-card resultados-card--clasificacion">
      <div className="resultados-card__header">
        <p className="resultados-card__eyebrow">Liga Regional</p>
        <h2>Clasificación</h2>
      </div>

      {club && (
        <div className="clasificacion-resumen">
          <div className="clasificacion-resumen__item">
            <span>Posición</span>
            <strong>{club.pos}.º puesto</strong>
          </div>
          <div className="clasificacion-resumen__item">
            <span>Puntos</span>
            <strong>{club.pts}</strong>
          </div>
          <div className="clasificacion-resumen__item">
            <span>Balance</span>
            <strong>{club.pg}G · {club.pp}P</strong>
          </div>
        </div>
      )}

      <div className="tabla-clasificacion-wrap">
        <table className="tabla-clasificacion">
          <thead>
            <tr>
              <th>#</th>
              <th>Equipo</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PP</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            {tabla.map((fila) => (
              <tr key={fila.eq} className={fila.eq === CLUB.shortName ? "highlight-row" : ""}>
                <td>{fila.pos}</td>
                <td>{fila.eq}</td>
                <td>{fila.pj}</td>
                <td>{fila.pg}</td>
                <td>{fila.pp}</td>
                <td><strong>{fila.pts}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
