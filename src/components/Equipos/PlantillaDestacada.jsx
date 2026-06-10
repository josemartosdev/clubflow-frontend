const jugadores = [
  { dorsal: "1", nombre: "Carlos M.", posicion: "Portero", iniciales: "CM" },
  { dorsal: "4", nombre: "David R.", posicion: "Defensa central", iniciales: "DR" },
  { dorsal: "8", nombre: "Pablo S.", posicion: "Centrocampista", iniciales: "PS" },
  { dorsal: "9", nombre: "Álvaro G.", posicion: "Delantero", iniciales: "AG" },
  { dorsal: "10", nombre: "Miguel L.", posicion: "Mediapunta", iniciales: "ML" },
  { dorsal: "7", nombre: "Sergio V.", posicion: "Extremo", iniciales: "SV" },
];

export default function PlantillaDestacada() {
  return (
    <section className="equipos-section equipos-section--plantilla">
      <div className="equipos-section__header">
        <p className="equipos-section__eyebrow">Primer Equipo</p>
        <h2>Plantilla 2025/26</h2>
      </div>

      <div className="grid-jugadores">
        {jugadores.map((j) => (
          <article key={j.dorsal} className="card-jugador">
            <div className="jugador-top">
              <span className="jugador-avatar">{j.iniciales}</span>
              <span className="jugador-dorsal">#{j.dorsal}</span>
            </div>
            <h3 className="jugador-nombre">{j.nombre}</h3>
            <p className="jugador-posicion">{j.posicion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
