const categorias = [
  { nombre: "Primer Equipo", nivel: "Liga Regional", status: "Activo", cupo: "22 jugadores" },
  { nombre: "Juvenil", nivel: "Copa Provincial", status: "En competición", cupo: "20 jugadores" },
  { nombre: "Cadete", nivel: "Liga Cadete", status: "Activo", cupo: "18 jugadores" },
  { nombre: "Alevín", nivel: "Escuela de fútbol", status: "Inscripciones abiertas", cupo: "Plazas disponibles" },
];

function statusClass(status) {
  if (status.toLowerCase().includes("inscripciones")) return "is-open";
  if (status.toLowerCase().includes("competición")) return "is-playing";
  return "is-active";
}

export default function Categorias() {
  return (
    <section className="equipos-section equipos-section--categorias">
      <div className="equipos-section__header">
        <p className="equipos-section__eyebrow">Categorías</p>
        <h2>Escuela y competición</h2>
      </div>

      <div className="grid-categorias">
        {categorias.map((cat) => (
          <article key={cat.nombre} className="card-categoria">
            <h3>{cat.nombre}</h3>
            <p className="categoria-nivel">{cat.nivel}</p>
            <p className="categoria-cupo">{cat.cupo}</p>
            <span className={`categoria-status ${statusClass(cat.status)}`}>{cat.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
