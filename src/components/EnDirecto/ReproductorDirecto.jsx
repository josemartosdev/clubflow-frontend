import { CLUB } from "../../config/club";

const liveConfig = {
  embedUrl: "https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID&autoplay=0",
  channelUrl: `https://www.youtube.com/${CLUB.social.youtube}`,
};

export default function ReproductorDirecto() {
  return (
    <section className="directo-card directo-card--player">
      <div className="directo-card__header">
        <p className="directo-card__eyebrow">Emisión en directo</p>
        <h2>Partido del primer equipo</h2>
      </div>

      <div className="directo-player-wrap">
        <iframe
          className="directo-player"
          src={liveConfig.embedUrl}
          title={`Emisión en directo ${CLUB.name}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <p className="directo-note">
        Si no hay evento activo, YouTube mostrará la última emisión o un aviso del canal.
      </p>

      <a
        className="directo-channel-btn"
        href={liveConfig.channelUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        Abrir canal en YouTube
      </a>
    </section>
  );
}
