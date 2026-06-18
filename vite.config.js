import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const PROD_API = "https://clubflow-back-production.up.railway.app/api";
const LOCAL_API = "http://127.0.0.1:8000/api";
const VERCEL_PROXY_API = "/api";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const onVercel = process.env.VERCEL === "1";
  const apiUrl =
    env.VITE_API_URL?.trim() ||
    (onVercel
      ? VERCEL_PROXY_API
      : mode === "production"
        ? PROD_API
        : LOCAL_API);

  return {
    plugins: [react()],
    base: "/",
    define: {
      "import.meta.env.VITE_API_URL": JSON.stringify(apiUrl),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
