import { CLUB } from "../../config/club";

const directos = [
  {
    fecha: "Sáb 18 Ene — 17:00",
    partido: `${CLUB.shortName} FC vs UD Almería B`,
    competicion: "Liga Regional",
    lugar: CLUB.stadium,
  },
  {
    fecha: "Sáb 1 Feb — 18:30",
    partido: `${CLUB.shortName} Juvenil vs Marbella FC`,
    competicion: "Copa Provincial",
    lugar: CLUB.stadium,
  },
];

export default function ProximosDirectos() {
  return (
    <section className="directo-card directo-card--upcoming">
      <div className="directo-card__header">
        <p className="directo-card__eyebrow">Próximas retransmisiones</p>
        <h2>Calendario de directos</h2>
      </div>
      <div className="directo-lista">
        {directos.map((d) => (
          <article key={d.partido} className="directo-item">
            <span className="directo-item__fecha">{d.fecha}</span>
            <h3>{d.partido}</h3>
            <p>{d.competicion} · {d.lugar}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
