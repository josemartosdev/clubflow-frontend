import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { SPONSORS } from "../../data/sponsors";

function SponsorVisual({ sponsor }) {
  const [failed, setFailed] = useState(false);

  if (!failed && sponsor.image) {
    return (
      <img
        src={sponsor.image}
        alt=""
        className="patro-carousel__logo"
        onError={() => setFailed(true)}
      />
    );
  }

  return <span className="patro-carousel__initials">{sponsor.initials}</span>;
}

export default function SponsorCarousel() {
  const [index, setIndex] = useState(0);
  const total = SPONSORS.length;
  const sponsor = SPONSORS[index];

  const go = useCallback(
    (delta) => setIndex((i) => (i + delta + total) % total),
    [total],
  );

  useEffect(() => {
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [go]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const linkProps =
    sponsor.url === "#"
      ? { href: "#", onClick: (e) => e.preventDefault() }
      : sponsor.url?.startsWith("mailto")
        ? { href: sponsor.url }
        : { href: sponsor.url, target: "_blank", rel: "noreferrer noopener" };

  return (
    <section className="patro-carousel patro-carousel--solo" aria-label="Patrocinadores" aria-roledescription="carousel">
      <div className="patro-carousel__slide" key={sponsor.id}>
        <div className="patro-carousel__visual">
          <SponsorVisual sponsor={sponsor} />
        </div>

        <div className="patro-carousel__panel">
          <p className="patro-carousel__count">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <h2 className="patro-carousel__name">{sponsor.name}</h2>
          <p className="patro-carousel__tagline">{sponsor.tagline}</p>
          <p className="patro-carousel__desc">{sponsor.description}</p>
          <div className="patro-carousel__meta">
            <span>Colaborador desde {sponsor.since}</span>
            {sponsor.url !== "#" && (
              <a className="patro-carousel__link" {...linkProps}>
                Visitar web
                <ExternalLink size={16} aria-hidden />
              </a>
            )}
          </div>
        </div>
      </div>

      <button type="button" className="patro-carousel__nav patro-carousel__nav--prev" onClick={() => go(-1)} aria-label="Anterior">
        <ChevronLeft size={26} />
      </button>
      <button type="button" className="patro-carousel__nav patro-carousel__nav--next" onClick={() => go(1)} aria-label="Siguiente">
        <ChevronRight size={26} />
      </button>

      <div className="patro-carousel__dots" role="tablist" aria-label="Elegir patrocinador">
        {SPONSORS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={s.name}
            className={`patro-carousel__dot${i === index ? " patro-carousel__dot--active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
