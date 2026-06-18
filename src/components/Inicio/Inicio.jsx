import { Link } from "react-router-dom";
import SponsorsCarousel from "./SponsorCarousel";
import ResultadosCarousel from "./ResultadosCarousel";
import Noticias from "./Noticias";
import RedesSociales from "./RedesSociales";
import { CLUB } from "../../config/club";
import PhotoShowcase from "../ui/PhotoShowcase";
import { pagePhotoSets, publicPhotos } from "../../data/publicPhotos";

const stats = [
  { value: CLUB.founded, label: "Fundado" },
  { value: "8", label: "Títulos" },
  { value: "350+", label: "Jugadores" },
  { value: "12", label: "Equipos" },
];

function Inicio() {
  return (
    <section className="inicio">
      <div className="hero">
        <div className="hero__inner">
          <div className="hero__content">
            <span className="hero__eyebrow">Temporada 2025–26</span>
            <h1 className="hero__title">
              El fútbol<br />que nos<br />
              <em>define como club</em>
            </h1>
            <p className="hero__sub">
              Un club moderno, competitivo y abierto a todos: jugadores, familias y patrocinadores.
              Formación de calidad desde la base hasta el primer equipo.
            </p>
            <div className="hero__ctas">
              <Link to="/equipos" className="btn-primary">Ver equipos</Link>
              <Link to="/calendario" className="btn-ghost">Calendario</Link>
            </div>
          </div>
          <div className="hero__visual">
            <img src={publicPhotos.hero} alt="Jugadores del Clubflow FC en el campo" />
          </div>
        </div>
        <div className="hero__stats">
          {stats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <PhotoShowcase
        className="photo-showcase--home"
        eyebrow="Galería"
        title="Clubflow en imágenes"
        subtitle="Entrenamientos, convivencia y competición en una misma temporada."
        photos={pagePhotoSets.home}
      />

      <div className="home-modules">
        <Noticias />
        <ResultadosCarousel />
        <RedesSociales />
        <section className="home-module home-module--sponsors">
          <div className="home-module__header home-module__header--row">
            <div>
              <span className="home-eyebrow">Patrocinadores</span>
              <h2>Aliados del club</h2>
            </div>
            <Link to="/patrocinadores" className="home-module__link">
              Ver área de patrocinadores →
            </Link>
          </div>
          <SponsorsCarousel />
        </section>
      </div>
    </section>
  );
}

export default Inicio;
