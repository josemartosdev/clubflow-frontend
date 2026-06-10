# Clubflow FC — Frontend

Plataforma digital profesional para clubes de fútbol: web pública + panel de gestión interna.

## Stack

- React 19 + Vite 8
- React Router 7
- Tailwind CSS 3 + shadcn/ui
- API Symfony (JWT)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`. La API debe estar en `http://127.0.0.1:8000/api`.

### Variables de entorno

Copia `.env.example` a `.env`:

```
VITE_API_URL=http://127.0.0.1:8000/api
```

### Credenciales demo

- Usuario: `admin`
- Contraseña: `ChangeMe123!`

## Estructura

| Ruta | Descripción |
|------|-------------|
| `/` | Web pública (inicio, equipos, partidos, historia…) |
| `/login` | Acceso staff y jugadores |
| `/gestion` | Panel de gestión (jugadores, equipos, contabilidad…) |
| `/gestion/mi-ficha` | Portal del jugador |

## Personalización

Edita `src/config/club.js` para cambiar nombre, colores, contacto y redes del club.

## Build

```bash
npm run build
npm run preview
```

## Despliegue

Vercel con `VITE_API_URL` apuntando al backend en Railway.
