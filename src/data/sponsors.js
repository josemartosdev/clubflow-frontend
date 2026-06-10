/** Patrocinadores demo — personalizables por club */

const base = import.meta.env.BASE_URL;

export const SPONSORS = [
  {
    id: "sport-pro",
    name: "SportPro Equipaciones",
    tagline: "Material y equipación de fútbol",
    description:
      "Proveen equipaciones oficiales, balones y material de entrenamiento para todas las categorías del club.",
    image: `${base}img/patrocinadores/decathlon.svg`,
    initials: "SP",
    since: "2022",
    url: "mailto:info@clubflow.es",
  },
  {
    id: "verde-club",
    name: "Verde Club",
    tagline: "Hostelería y eventos",
    description:
      "Colaboran en celebraciones del club, comidas de equipo y eventos sociales que unen a familias y jugadores.",
    image: `${base}img/patrocinadores/rojo-club.svg`,
    initials: "VC",
    since: "2023",
    url: "#",
  },
  {
    id: "arenas-tech",
    name: "Arenas Tech",
    tagline: "Tecnología y digitalización",
    description:
      "Impulsan la presencia digital del club: web, redes y herramientas que acercan la información a jugadores, familias y afición.",
    image: `${base}img/patrocinadores/arenas-tech.svg`,
    initials: "AT",
    since: "2024",
    url: "#",
  },
  {
    id: "futbol-zone",
    name: "Fútbol Zone",
    tagline: "Tienda especializada",
    description:
      "Asesoran a familias en material técnico y botas, con condiciones especiales para la cantera del club.",
    image: `${base}img/patrocinadores/zona-voley.svg`,
    initials: "FZ",
    since: "2021",
    url: "#",
  },
  {
    id: "decathlon",
    name: "Decathlon",
    tagline: "Deporte para todos",
    description:
      "Referente en deporte de base: apoyan campus de verano, escuelas de fútbol y la difusión del deporte en la comarca.",
    image: `${base}img/patrocinadores/decathlon.svg`,
    initials: "DC",
    since: "2020",
    url: "#",
  },
  {
    id: "gimnasio",
    name: "FitCenter",
    tagline: "Preparación física",
    description:
      "Trabajan la condición física de jugadores con programas adaptados a la temporada competitiva.",
    image: `${base}img/patrocinadores/gimnasio.svg`,
    initials: "FC",
    since: "2024",
    url: "#",
  },
  {
    id: "farmacia",
    name: "Farmacia Central",
    tagline: "Salud y bienestar",
    description:
      "Colaboran en la salud de la plantilla, primeros auxilios y consejo a familias en el día a día del club.",
    image: `${base}img/patrocinadores/farmacia.svg`,
    initials: "FA",
    since: "2019",
    url: "#",
  },
  {
    id: "paseo",
    name: "Restaurante El Estadio",
    tagline: "Restauración local",
    description:
      "Acogen encuentros del club y refuerzan el vínculo entre comercio local y deporte federado.",
    image: `${base}img/patrocinadores/paseo.svg`,
    initials: "RE",
    since: "2022",
    url: "#",
  },
];

export const MARQUEE_SPONSORS = SPONSORS.map((s) => s.name);

export const SPONSOR_STATS = [
  { value: `${SPONSORS.length}+`, label: "Empresas colaboradoras" },
  { value: "2025/26", label: "Temporada activa" },
  { value: "1.200+", label: "Impactos en redes / mes" },
  { value: "100%", label: "Compromiso local" },
];
