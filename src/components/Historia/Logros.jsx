const logros = [
  {
    año: "2024",
    titulo: "Campeonato Provincial Juvenil",
    descripcion: "El juvenil se proclamó campeón tras una final épica a penaltis.",
  },
  {
    año: "2023",
    titulo: "Torneo de Verano Ciudad",
    descripcion: "Récord de participantes con más de 40 equipos inscritos.",
  },
  {
    año: "2022",
    titulo: "Ascenso del Senior",
    descripcion: "El primer equipo logró el ascenso a Liga Regional.",
  },
  {
    año: "2020",
    titulo: "Mejor cantera provincial",
    descripcion: "Reconocimiento de la federación por el trabajo formativo.",
  },
];

export default function Logros() {
  return (
    <section className="historia-module-pro">
      <div className="historia-module-pro__header">
        <p className="module__eyebrow">Palmarés</p>
        <h2>Logros destacados</h2>
      </div>
      <div className="historia-logros-pro">
        {logros.map((l) => (
          <article key={l.titulo} className="historia-logro-pro">
            <span className="historia-logro-pro__year">{l.año}</span>
            <h3>{l.titulo}</h3>
            <p>{l.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
