const newsData = [
  {
    id: 1,
    title: "El primer equipo arranca la segunda vuelta con una victoria contundente (3-0)",
    category: "PRIMER EQUIPO",
    time: "ayer",
    image: `${import.meta.env.BASE_URL}img/jugadores-equipo-futbol-reglas-fifa.jpg`,
  },
  {
    id: 2,
    title: "La cantera brilla en el torneo provincial: juvenil y cadete a semifinales",
    category: "CANTERA",
    time: "anteayer",
    image: `${import.meta.env.BASE_URL}img/WhatsApp-Image-2024-09-26-at-12.42.53.jpeg`,
  },
  {
    id: 3,
    title: "Nuevo convenio con la escuela de porteros para la temporada 2025/26",
    category: "CLUB",
    time: "hace 4 días",
    image: `${import.meta.env.BASE_URL}img/equipo-atardecer.avif`,
  },
  {
    id: 4,
    title: "\"Este grupo tiene margen para pelear el ascenso\" — declaraciones del míster",
    category: "PRIMER EQUIPO",
    time: "hace 4 días",
    image: `${import.meta.env.BASE_URL}img/jugadores-equipo-futbol-reglas-fifa.jpg`,
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
          <div className="noticia-photo">
            <img src={featured.image} alt={featured.title} loading="lazy" />
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
              <div className="noticia-photo" style={{ minHeight: "80px" }}>
                <img src={news.image} alt={news.title} loading="lazy" />
              </div>
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
