const equipos = [
  { nombre: "Primer Equipo", detalle: "Compite en Liga Regional de fútbol amateur." },
  { nombre: "Senior Femenino", detalle: "Participación en liga provincial femenina." },
  { nombre: "Juvenil", detalle: "Presencia en Copa Provincial con proyección competitiva." },
  { nombre: "Cadete", detalle: "Bloque clave del crecimiento deportivo de la cantera." },
  { nombre: "Infantil", detalle: "Participación estable en las fases provinciales de base." },
  { nombre: "Alevín", detalle: "Formación técnica y consolidación competitiva temprana." },
  { nombre: "Benjamín", detalle: "Primeros pasos en competición organizada." },
  { nombre: "Prebenjamín", detalle: "Iniciación al fútbol con enfoque lúdico-formativo." },
];

export default function Palmares() {
  return (
    <section className="historia-module-pro">
      <div className="historia-module-pro__header">
        <p className="module__eyebrow">Equipos</p>
        <h2>Nuestras categorías</h2>
      </div>

      <p className="historia-module-pro__intro">
        En la temporada 2025-2026 el club cuenta con 12 equipos que cubren desde prebenjamín
        hasta el primer equipo, con presencia en Liga Regional, cantera provincial y fútbol femenino.
      </p>

      <div className="historia-teams-pro">
        {equipos.map((eq) => (
          <article key={eq.nombre} className="historia-team-pro">
            <h3>{eq.nombre}</h3>
            <p>{eq.detalle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
