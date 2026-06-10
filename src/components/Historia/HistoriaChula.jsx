const hitos = [
  {
    year: "2018",
    title: "Primer ascenso del juvenil",
    description: "El equipo juvenil ganó su primer campeonato provincial y llenó el estadio hasta la bandera.",
  },
  {
    year: "2020",
    title: "Escuela de porteros",
    description: "Se creó la primera escuela especializada de porteros, con formación técnica de alto nivel.",
  },
  {
    year: "2023",
    title: "Torneo de verano récord",
    description: "La quinta edición del torneo Ciudad rompió todos los récords de asistencia y se convirtió en la fiesta deportiva del verano.",
  },
  {
    year: "2025",
    title: "Plataforma digital",
    description: "Lanzamiento de la plataforma de gestión integral para jugadores, familias y cuerpo técnico.",
  },
];

export default function HistoriaChula() {
  return (
    <section className="historia-timeline-pro">
      <div className="historia-timeline-pro__header">
        <p className="module__eyebrow">Hitos</p>
        <h2>Momentos que marcaron el club</h2>
      </div>
      <div className="historia-timeline-pro__track">
        {hitos.map((h) => (
          <article key={h.year} className="historia-timeline-pro__item">
            <span className="historia-timeline-pro__dot" aria-hidden />
            <span className="historia-timeline-pro__year">{h.year}</span>
            <h3>{h.title}</h3>
            <p>{h.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
