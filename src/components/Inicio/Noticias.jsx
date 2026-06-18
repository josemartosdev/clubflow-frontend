import { Link } from "react-router-dom";
import { NEWS_ITEMS } from "../../data/news";

export default function Noticias() {
  const [featured, ...rest] = NEWS_ITEMS;
  return (
    <section className="noticias-section">
      <div className="home-module__header">
        <span className="home-eyebrow">Actualidad</span>
        <h2>Últimas noticias</h2>
      </div>
      <div className="noticias-grid">
        <Link to={`/noticias/${featured.slug}`} className="noticia-link" aria-label={featured.title}>
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
        </Link>
        <div className="noticias-sidebar">
          {rest.map((news) => (
            <Link key={news.id} to={`/noticias/${news.slug}`} className="noticia-link" aria-label={news.title}>
              <article className="noticia-card noticia-card--small">
                <div className="noticia-photo" style={{ minHeight: "80px" }}>
                  <img src={news.image} alt={news.title} loading="lazy" />
                </div>
                <div className="noticia-info">
                  <span className="noticia-cat">{news.category}</span>
                  <h3 className="noticia-title">{news.title}</h3>
                  <span className="noticia-time">{news.time}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
