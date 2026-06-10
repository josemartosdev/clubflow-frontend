import { CLUB } from "../../config/club";

const historyEvents = [
  {
    year: CLUB.founded,
    title: "Fundación del club",
    description: `${CLUB.name} fue fundado con el objetivo de promover el fútbol en la comunidad.`,
  },
  {
    year: "1995",
    title: "Primer torneo local",
    description: "Organización del primer torneo local, marcando el inicio de una tradición anual.",
  },
  {
    year: "2005",
    title: "Expansión de categorías",
    description: "Se incorporaron equipos en todas las categorías de base, consolidando la cantera.",
  },
  {
    year: "2015",
    title: "Reconocimiento regional",
    description: "El club recibió reconocimientos por su contribución al deporte en la región.",
  },
  {
    year: "2020",
    title: "Adaptación digital",
    description: "Durante la pandemia, el club se adaptó con entrenamientos online y comunicación digital.",
  },
  {
    year: "2025",
    title: "Plataforma integral",
    description: "Lanzamiento de la plataforma digital de gestión para jugadores, familias y staff.",
  },
];

export default function History() {
  return (
    <section className="module" style={{ marginBottom: "60px" }}>
      <div className="module__header" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginBottom: "40px" }}>
        <p className="module__eyebrow">Historia</p>
        <h2>Historia de {CLUB.name}</h2>
      </div>

      <div className="history-scroll" style={{ maxHeight: "400px", overflowY: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        {historyEvents.map((event, index) => (
          <div key={event.year} style={{ marginBottom: "20px", paddingBottom: "10px", borderBottom: index < historyEvents.length - 1 ? "1px solid #eee" : "none" }}>
            <h3 style={{ margin: "0 0 10px 0", color: "#1b8a4c" }}>{event.year} — {event.title}</h3>
            <p style={{ margin: 0 }}>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
