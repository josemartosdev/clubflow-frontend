const toImg = (fileName) => `${import.meta.env.BASE_URL}img/${fileName}`;

export const publicPhotos = {
  hero: toImg("equipo-atardecer.avif"),
  galleryMain: toImg("jugadores-equipo-futbol-reglas-fifa.jpg"),
  galleryAlt: toImg("WhatsApp-Image-2024-09-26-at-12.42.53.jpeg"),
  galleryThird: toImg("equipo-atardecer.avif"),
};

export const pagePhotoSets = {
  home: [
    publicPhotos.galleryMain,
    publicPhotos.galleryAlt,
    publicPhotos.galleryThird,
  ],
  equipos: [
    publicPhotos.galleryMain,
    publicPhotos.galleryThird,
    publicPhotos.galleryAlt,
  ],
  partidos: [
    publicPhotos.galleryThird,
    publicPhotos.galleryMain,
    publicPhotos.galleryAlt,
  ],
  historia: [
    publicPhotos.galleryAlt,
    publicPhotos.galleryMain,
    publicPhotos.galleryThird,
  ],
  patrocinadores: [
    publicPhotos.galleryMain,
    publicPhotos.galleryAlt,
    publicPhotos.galleryThird,
  ],
};
