function PhotoShowcase({
  eyebrow,
  title,
  subtitle,
  photos = [],
  className = "",
}) {
  const [mainPhoto, secondPhoto, thirdPhoto] = photos;

  if (!mainPhoto || !secondPhoto || !thirdPhoto) return null;

  return (
    <section className={`photo-showcase ${className}`.trim()}>
      <div className="photo-showcase__copy">
        <span className="photo-showcase__eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      <div className="photo-showcase__grid">
        <article className="photo-showcase__item photo-showcase__item--main">
          <img src={mainPhoto} alt={`${title} principal`} loading="lazy" />
        </article>
        <article className="photo-showcase__item photo-showcase__item--side">
          <img src={secondPhoto} alt={`${title} secundaria`} loading="lazy" />
        </article>
        <article className="photo-showcase__item photo-showcase__item--side">
          <img src={thirdPhoto} alt={`${title} ambiente`} loading="lazy" />
        </article>
      </div>
    </section>
  );
}

export default PhotoShowcase;
