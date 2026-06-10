import { CLUB } from "../../config/club";

const heroHighlights = [
  { value: CLUB.founded, label: "Año de fundación" },
  { value: "350+", label: "Jugadores formados" },
  { value: "8", label: "Títulos regionales" },
];

export default function HistoriaHero() {
  return (
    <section className="historia-hero historia-hero--full">
      <div className="historia-hero__backdrop" />
      <div className="historia-hero__shell">
        <span className="historia-hero__eyebrow">Nuestra historia</span>
        <h1>{CLUB.name}</h1>
        <p className="historia-hero__lead">
          Desde {CLUB.founded}, el club impulsa cantera, competición y sentimiento de pertenencia,
          llevando el nombre del municipio por toda Andalucía en las categorías de fútbol base y amateur.
        </p>

        <article className="historia-hero__story historia-panel">
          <span className="historia-panel__tag">Club y ciudad</span>
          <h2>Un proyecto deportivo con raíces locales</h2>
          <p>
            El club nace con la vocación de abrir el fútbol a todo el municipio. Ese origen explica
            una identidad muy clara: cantera, compromiso y una vinculación directa con la vida deportiva local.
            A lo largo de estas décadas se ha consolidado como referente del fútbol formativo en la zona.
          </p>
        </article>

        <div className="historia-hero__stats">
          {heroHighlights.map((item) => (
            <div key={item.label} className="historia-stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
