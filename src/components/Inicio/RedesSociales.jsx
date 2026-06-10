import { CLUB } from "../../config/club";

const posts = [
  {
    platform: "Instagram",
    user: CLUB.social.instagram,
    likes: "1.2K",
    text: "Entrenamiento intenso de cara al derbi del domingo. ¡Vamos equipo! ⚽",
    gradient: "linear-gradient(135deg, #833AB4, #FD1D1D, #FCB045)",
  },
  {
    platform: "TikTok",
    user: CLUB.social.tiktok,
    likes: "3.4K",
    text: "Golazo de la semana desde el ángulo. ¿Cuál fue tu favorito?",
    gradient: "linear-gradient(135deg, #010101, #69C9D0)",
  },
  {
    platform: "X",
    user: CLUB.social.twitter,
    likes: "856",
    text: "Victoria importantísima en casa 3-1. Gracias a la afición. #VamosClubflow",
    gradient: "linear-gradient(135deg, #14171A, #657786)",
  },
];

export default function RedesSociales() {
  return (
    <section className="social-section">
      <div className="home-module__header">
        <span className="home-eyebrow">Redes sociales</span>
        <h2>Sigue al club</h2>
      </div>
      <div className="social-grid">
        {posts.map((post) => (
          <article key={post.platform} className="social-card">
            <div className="social-card__header" style={{ background: post.gradient }}>
              <span className="social-card__platform">{post.platform}</span>
              <span className="social-card__user">{post.user}</span>
            </div>
            <div className="social-card__body">
              <p>{post.text}</p>
              <span className="social-card__likes">❤️ {post.likes}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
