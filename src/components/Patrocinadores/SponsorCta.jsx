import { Mail, Phone } from "lucide-react";
import { CLUB } from "../../config/club";

export default function SponsorCta() {
  return (
    <section id="colaborar" className="patro-cta">
      <div className="patro-cta__inner">
        <div>
          <span className="patro-eyebrow">Colabora con nosotros</span>
          <h2>¿Quieres ser patrocinador?</h2>
          <p>
            Únete a las empresas que apoyan el fútbol formativo y la competición.
            Visibilidad en partidos, redes sociales y eventos del club.
          </p>
        </div>
        <div className="patro-cta__actions">
          <a href={`mailto:${CLUB.email}?subject=Patrocinio%20${CLUB.shortName}%20FC`} className="patro-btn patro-btn--primary patro-btn--wide">
            <Mail size={18} aria-hidden />
            {CLUB.email}
          </a>
          <a href={`tel:${CLUB.phone.replace(/\s/g, "")}`} className="patro-btn patro-btn--ghost patro-btn--wide">
            <Phone size={18} aria-hidden />
            {CLUB.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
