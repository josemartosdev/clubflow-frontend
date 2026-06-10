const newsData = [
  {
    id: 1,
    title: "El primer equipo arranca la segunda vuelta con una victoria contundente (3-0)",
    category: "PRIMER EQUIPO",
    time: "ayer",
    gradient: "linear-gradient(135deg, #0d4a2b, #1b8a4c)",
  },
  {
    id: 2,
    title: "La cantera brilla en el torneo provincial: juvenil y cadete a semifinales",
    category: "CANTERA",
    time: "anteayer",
    gradient: "linear-gradient(135deg, #157a40, #22a35c)",
  },
  {
    id: 3,
    title: "Nuevo convenio con la escuela de porteros para la temporada 2025/26",
    category: "CLUB",
    time: "hace 4 días",
    gradient: "linear-gradient(135deg, #126b3a, #1b8a4c)",
  },
  {
    id: 4,
    title: "\"Este grupo tiene margen para pelear el ascenso\" — declaraciones del míster",
    category: "PRIMER EQUIPO",
    time: "hace 4 días",
    gradient: "linear-gradient(135deg, #0a3d24, #157a40)",
  },
];

export default function Noticias() {
  const [featured, ...rest] = newsData;
  return (
    <section className="noticias-section">
      <div className="home-module__header">
        <span className="home-eyebrow">Actualidad</span>
        <h2>Últimas noticias</h2>
      </div>
      <div className="noticias-grid">
        <article className="noticia-card noticia-card--featured">
          <div className="noticia-photo" style={{ background: featured.gradient }}>
            <div className="noticia-overlay">
              <span className="noticia-cat">{featured.category}</span>
              <h3 className="noticia-title">{featured.title}</h3>
              <span className="noticia-time">{featured.time}</span>
            </div>
          </div>
        </article>
        <div className="noticias-sidebar">
          {rest.map((news) => (
            <article className="noticia-card noticia-card--small" key={news.id}>
              <div className="noticia-photo" style={{ background: news.gradient, minHeight: "80px" }} />
              <div className="noticia-info">
                <span className="noticia-cat">{news.category}</span>
                <h3 className="noticia-title">{news.title}</h3>
                <span className="noticia-time">{news.time}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
