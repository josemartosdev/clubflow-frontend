const toImg = (fileName) => `${import.meta.env.BASE_URL}img/${fileName}`;

export const NEWS_ITEMS = [
  {
    id: 1,
    slug: "victoria-contundente-segunda-vuelta",
    title:
      "El primer equipo arranca la segunda vuelta con una victoria contundente (3-0)",
    category: "PRIMER EQUIPO",
    time: "ayer",
    date: "18 junio 2026",
    author: "Redacción Clubflow",
    image: toImg("jugadores-equipo-futbol-reglas-fifa.jpg"),
    summary:
      "El conjunto senior firmó un partido muy completo en casa, con presión alta, solidez defensiva y gran efectividad en los metros finales.",
    body: [
      "Clubflow salió al césped con una propuesta valiente desde el primer minuto, dominando la posesión y recuperando rápido tras pérdida.",
      "El primer gol llegó tras una combinación por banda derecha y un remate limpio dentro del área. A partir de ahí, el equipo mantuvo el ritmo y apenas concedió ocasiones.",
      "En la segunda parte, el cuerpo técnico reforzó el medio campo y el equipo encontró espacios para sentenciar con dos tantos más.",
      "Con este resultado, el club suma confianza para afrontar el siguiente bloque de partidos con opciones reales de mantenerse en la zona alta.",
    ],
  },
  {
    id: 2,
    slug: "cantera-semifinales-provincial",
    title:
      "La cantera brilla en el torneo provincial: juvenil y cadete a semifinales",
    category: "CANTERA",
    time: "anteayer",
    date: "16 junio 2026",
    author: "Área de Cantera",
    image: toImg("WhatsApp-Image-2024-09-26-at-12.42.53.jpeg"),
    summary:
      "Gran actuación de los equipos de formación, que completaron una fase previa sobresaliente y se meten entre los mejores del torneo.",
    body: [
      "El juvenil mostró personalidad en salida de balón y ganó sus dos encuentros con autoridad, destacando por su orden táctico.",
      "El cadete, por su parte, sacó adelante un partido exigente con una gran segunda mitad y mucho carácter competitivo.",
      "Desde el club se valora especialmente la evolución del grupo en conceptos defensivos, ritmo de circulación y toma de decisiones.",
      "El objetivo ahora es competir las semifinales con ambición, manteniendo la identidad de juego que se trabaja cada semana.",
    ],
  },
  {
    id: 3,
    slug: "nuevo-convenio-escuela-porteros",
    title:
      "Nuevo convenio con la escuela de porteros para la temporada 2025/26",
    category: "CLUB",
    time: "hace 4 días",
    date: "14 junio 2026",
    author: "Dirección Deportiva",
    image: toImg("equipo-atardecer.avif"),
    summary:
      "El acuerdo refuerza la tecnificación específica de porteros en todas las categorías y amplía recursos para entrenamientos individuales.",
    body: [
      "Clubflow y la escuela colaboradora han definido un plan conjunto para elevar la preparación técnica y táctica de los guardametas del club.",
      "El convenio contempla sesiones semanales por niveles, seguimiento individual y coordinación directa con entrenadores de cada equipo.",
      "También se incorporan evaluaciones periódicas para medir progresos en juego aéreo, blocaje, uno contra uno y construcción desde atrás.",
      "La entidad considera este paso estratégico para consolidar un modelo formativo completo y sostenible en el tiempo.",
    ],
  },
  {
    id: 4,
    slug: "declaraciones-mister-pelear-ascenso",
    title:
      '"Este grupo tiene margen para pelear el ascenso" — declaraciones del míster',
    category: "PRIMER EQUIPO",
    time: "hace 4 días",
    date: "14 junio 2026",
    author: "Sala de Prensa",
    image: toImg("jugadores-equipo-futbol-reglas-fifa.jpg"),
    summary:
      "El entrenador valoró el crecimiento del equipo en las últimas jornadas y destacó la mentalidad competitiva del vestuario.",
    body: [
      "En rueda de prensa, el técnico subrayó que el equipo ha mejorado en regularidad y en gestión de los momentos clave de partido.",
      "También insistió en la importancia de mantener la intensidad en los entrenamientos y cuidar los detalles en ambas áreas.",
      "El míster destacó la aportación de jugadores jóvenes y el compromiso de la plantilla para sostener el rendimiento hasta final de temporada.",
      "El próximo objetivo, según explicó, es encadenar resultados positivos en casa para fortalecer la candidatura del equipo.",
    ],
  },
];

export function getNewsBySlug(slug) {
  return NEWS_ITEMS.find((item) => item.slug === slug) ?? null;
}
