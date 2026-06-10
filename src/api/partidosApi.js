import { apiUrl } from "../services/apiClient.js";
import { fixUtf8Deep } from "../lib/fixUtf8.js";

async function fetchJson(path) {
  const res = await fetch(apiUrl(path), {
    headers: { Accept: "application/json; charset=utf-8" },
  });
  const text = await res.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { error: "Respuesta inválida del servidor" };
  }
  if (!res.ok) {
    throw new Error(data.error || data.message || "Error al cargar partidos");
  }
  return fixUtf8Deep(data);
}

export const partidosApi = {
  /** Obtiene partidos en vivo desde favoley.es */
  fetch: () => fetchJson("/partidos"),
  /** Partidos guardados en caché del backend */
  stored: () => fetchJson("/partidos/guardados"),
  /** Detalle de partido (slug o id) */
  get: (id) => fetchJson(`/partidos/${encodeURIComponent(id)}`),
};
