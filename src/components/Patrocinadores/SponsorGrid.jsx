import { SPONSORS } from "../../data/sponsors";

function tierFor(sponsor, index) {
  if (index < 2) return "gold";
  if (index < 5) return "silver";
  return "silver";
}

export default function SponsorGrid() {
  return (
    <section className="patro-grid-section" aria-label="Todos los patrocinadores">
      <div className="patro-grid-section__header">
        <span>Red de colaboradores</span>
        <h2>Empresas que confían en nosotros</h2>
      </div>
      <div className="patro-grid">
        {SPONSORS.map((s, i) => (
          <article key={s.id} className="patro-card">
            <div className="patro-card__visual">
              <span className={`patro-card__tier patro-card__tier--${tierFor(s, i)}`}>
                {tierFor(s, i) === "gold" ? "Principal" : "Colaborador"}
              </span>
              <span className="patro-card__initials">{s.initials}</span>
            </div>
            <div className="patro-card__body">
              <h3>{s.name}</h3>
              <p className="patro-card__tagline">{s.tagline}</p>
              <p className="patro-card__desc">{s.description}</p>
              <span className="patro-card__since">Desde {s.since}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
