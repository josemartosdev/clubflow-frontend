import { Link, Navigate, useParams } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import { NEWS_ITEMS, getNewsBySlug } from "../data/news";

function NoticiaDetallePage() {
  const { slug } = useParams();
  const noticia = getNewsBySlug(slug);

  if (!noticia) {
    return <Navigate to="/" replace />;
  }

  const related = NEWS_ITEMS.filter((item) => item.slug !== noticia.slug).slice(0, 3);

  return (
    <PublicLayout className="web-public--noticia">
      <article className="pagina-estandar noticia-detalle">
        <header className="noticia-detalle__header">
          <span className="noticia-detalle__cat">{noticia.category}</span>
          <h1>{noticia.title}</h1>
          <p>{noticia.summary}</p>
          <div className="noticia-detalle__meta">
            <span>{noticia.date}</span>
            <span>{noticia.time}</span>
            <span>{noticia.author}</span>
          </div>
        </header>

        <figure className="noticia-detalle__hero">
          <img src={noticia.image} alt={noticia.title} />
        </figure>

        <section className="noticia-detalle__content">
          {noticia.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <footer className="noticia-detalle__actions">
          <Link to="/" className="btn-ghost">
            ← Volver a inicio
          </Link>
        </footer>

        <section className="noticia-relacionada">
          <div className="home-module__header noticia-relacionada__header">
            <span className="home-eyebrow">Más actualidad</span>
            <h2>Otras noticias</h2>
          </div>
          <div className="noticia-relacionada__grid">
            {related.map((item) => (
              <Link key={item.slug} to={`/noticias/${item.slug}`} className="noticia-relacionada__card">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </PublicLayout>
  );
}

export default NoticiaDetallePage;
