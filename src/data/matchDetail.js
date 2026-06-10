import { CLUB } from "../config/club";

/** Normaliza respuesta API → formato usado por la UI */
export function mapApiMatch(data) {
  if (!data) return null;

  const score = data.score ?? (data.goles_local != null ? {
    local: data.goles_local,
    visitante: data.goles_visitante,
  } : null);

  return {
    id: data.slug ?? data.id,
    local: data.local ?? data.equipo_local,
    visitante: data.visitante ?? data.equipo_visitante,
    resultado: data.resultado ?? (score ? `${score.local} - ${score.visitante}` : null),
    score: score ?? { local: 0, visitante: 0 },
    fecha: data.fecha,
    hora: data.hora,
    categoria: data.categoria,
    lugar: data.lugar ?? data.campo ?? CLUB.stadium,
    jornada: data.jornada,
    estado: data.estado ?? "programado",
    arbitro: data.arbitro ?? "Por designar",
    asistencia: data.asistencia ?? "—",
    formacionLocal: data.formacion_local ?? data.formacionLocal ?? "4-3-3",
    formacionVisitante: data.formacion_visitante ?? data.formacionVisitante ?? "4-3-3",
    stats: data.stats ?? {},
    eventos: data.eventos ?? [],
    convocatoriaLocal: (data.convocatoria_local ?? data.convocatoriaLocal ?? []).map(mapLineupPlayer),
    convocatoriaVisitante: (data.convocatoria_visitante ?? data.convocatoriaVisitante ?? []).map(mapLineupPlayer),
    notas: data.notas ?? "",
  };
}

function mapLineupPlayer(p) {
  return {
    dorsal: p.dorsal,
    nombre: p.nombre,
    role: p.role,
  };
}

/** Fallback si la API no responde */
export function enrichMatch(partido, index = 0) {
  const local = partido.local || partido.equipo_local || CLUB.shortName;
  const visitante = partido.visitante || partido.equipo_visitante || "Rival";
  const id = partido.id || partido.slug || `partido-${index}`;

  return mapApiMatch({
    ...partido,
    id,
    slug: id,
    local,
    visitante,
    score: partido.score ?? { local: 2, visitante: 1 },
    stats: partido.stats ?? {
      posesion: [58, 42],
      tiros: [14, 9],
      tirosPuerta: [6, 3],
      corners: [7, 4],
      faltas: [11, 14],
      tarjetas: [2, 3],
    },
    eventos: partido.eventos ?? [],
    convocatoria_local: partido.convocatoria_local ?? [],
    convocatoria_visitante: partido.convocatoria_visitante ?? [],
  });
}

export function matchIdFromPartido(partido) {
  return partido.id ?? partido.slug;
}
