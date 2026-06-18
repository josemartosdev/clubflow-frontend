/**
 * Mismo patrón que SRM Compras (srm-compras-front/src/services/apiClient.js).
 */
const DEFAULT_LOCAL_API = "http://127.0.0.1:8000/api";
const RAILWAY_API = "https://cv-berja-back-production.up.railway.app/api";

function resolveApiBase() {
  const configured = import.meta.env.VITE_API_URL?.trim();

  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    const runningOnVercel =
      host.endsWith(".vercel.app") || host === "clubflow-frontend.vercel.app";

    // Evita CORS en despliegues Vercel incluso si el panel tiene una VITE_API_URL vieja.
    if (runningOnVercel) {
      if (!configured || configured === RAILWAY_API) {
        return "/api";
      }
    }
  }

  return configured || DEFAULT_LOCAL_API;
}

export const API_BASE = resolveApiBase();

export function apiUrl(endpoint) {
  const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${API_BASE}${path}`;
}

export function apiOrigin() {
  return API_BASE.replace(/\/api$/, "") || API_BASE;
}
