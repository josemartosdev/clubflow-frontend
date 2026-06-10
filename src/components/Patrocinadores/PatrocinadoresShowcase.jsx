import { ExternalLink, Mail, Sparkles } from "lucide-react";
import { SPONSORS, SPONSOR_STATS } from "../../data/sponsors";
import { CLUB } from "../../config/club";

const PRINCIPALES = SPONSORS.slice(0, 2);
const COLABORADORES = SPONSORS.slice(2);

function SponsorLogo({ sponsor, size = "md" }) {
  return (
    <div className={`patro-logo patro-logo--${size}`} aria-hidden>
      <span>{sponsor.initials}</span>
    </div>
  );
}

function PrincipalCard({ sponsor }) {
  const link = sponsor.url !== "#" ? sponsor.url : null;
  return (
    <article className="patro-principal">
      <div className="patro-principal__glow" aria-hidden />
      <SponsorLogo sponsor={sponsor} size="lg" />
      <span className="patro-principal__tier">Patrocinador principal</span>
      <h3>{sponsor.name}</h3>
      <p className="patro-principal__tag">{sponsor.tagline}</p>
      <p className="patro-principal__desc">{sponsor.description}</p>
      <footer>
        <span>Desde {sponsor.since}</span>
        {link && (
          <a href={link} target="_blank" rel="noreferrer noopener">
            Visitar <ExternalLink size={14} aria-hidden />
          </a>
        )}
      </footer>
    </article>
  );
}

function ColaboradorCard({ sponsor }) {
  return (
    <article className="patro-colab">
      <SponsorLogo sponsor={sponsor} size="sm" />
      <div>
        <h4>{sponsor.name}</h4>
        <p>{sponsor.tagline}</p>
        <span>Desde {sponsor.since}</span>
      </div>
    </article>
  );
}

export default function PatrocinadoresShowcase() {
  return (
    <div className="patro-page">
      <header className="patro-page__hero">
        <div className="patro-page__hero-inner">
          <span className="patro-page__kicker">
            <Sparkles size={14} aria-hidden />
            Patrocinadores oficiales
          </span>
          <h1>
            Impulsan el <em>fútbol</em> de {CLUB.shortName}
          </h1>
          <p>
            Empresas locales que apoyan cantera, competición y el día a día del club.
          </p>
          <div className="patro-page__stats">
            {SPONSOR_STATS.map((s) => (
              <div key={s.label} className="patro-page__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="patro-page__principales" aria-label="Patrocinadores principales">
        <h2 className="patro-page__section-title">Socios estratégicos</h2>
        <div className="patro-page__principales-grid">
          {PRINCIPALES.map((s) => (
            <PrincipalCard key={s.id} sponsor={s} />
          ))}
        </div>
      </section>

      <section className="patro-page__marquee" aria-hidden>
        <div className="patro-page__marquee-track">
          {[...SPONSORS, ...SPONSORS].map((s, i) => (
            <span key={`${s.id}-${i}`}>{s.name}</span>
          ))}
        </div>
      </section>

      <section className="patro-page__colabs" aria-label="Colaboradores">
        <h2 className="patro-page__section-title">Red de colaboradores</h2>
        <div className="patro-page__colabs-grid">
          {COLABORADORES.map((s) => (
            <ColaboradorCard key={s.id} sponsor={s} />
          ))}
        </div>
      </section>

      <section id="colaborar" className="patro-page__cta">
        <div className="patro-page__cta-inner">
          <div>
            <h2>¿Quieres patrocinar al club?</h2>
            <p>Visibilidad en partidos, redes y eventos. Hablemos de cómo colaborar.</p>
          </div>
          <a href={`mailto:${CLUB.email}?subject=Patrocinio%20${CLUB.shortName}`} className="patro-page__cta-btn">
            <Mail size={18} aria-hidden />
            {CLUB.email}
          </a>
        </div>
      </section>
    </div>
  );
}
