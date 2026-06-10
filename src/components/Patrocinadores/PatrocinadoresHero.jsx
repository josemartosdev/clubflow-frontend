import { Handshake } from "lucide-react";
import { CLUB } from "../../config/club";

export default function PatrocinadoresHero() {
  return (
    <header className="patro-solo-hero">
      <span className="patro-solo-hero__eyebrow">
        <Handshake size={14} aria-hidden />
        Patrocinadores oficiales
      </span>
      <h1>
        Aliados de <em>{CLUB.shortName}</em>
      </h1>
    </header>
  );
}
