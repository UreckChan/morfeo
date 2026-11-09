# Ejemplos

Los 8 videos de la galería, uno por estilo:

| Archivo | Estilo | Qué muestra |
|---|---|---|
| `videos.mjs` → `cielo` | `datos-curiosos` | Escenas clásicas: title, text, icon, compare, year |
| `guiones/tutorial.mjs` | `explicativo` | Titular con paso, tarjeta que se palomea, comparar y contador |
| `guiones/cachalote.mjs` | `documental` | Capas por palabra, formación en círculo, contador LCD |
| `guiones/centimo.mjs` | `mesa` | Moneda 3D, pila que crece, contadores y un componente propio (`escenas/Barras.tsx`) |
| `guiones/vecino.mjs` | `historia` | Silueta, letrero "DÍA 10", temblor de cámara y transición zoom |
| `guiones/neto.mjs` | `serie` | Personaje con poses, HUD (día y barra que cambia), chat, cartas VS y botón de seguir |
| `guiones/cinta.mjs` | `infografia` | Medidor, barras, votación, barra de estado, noticiero, teléfono y botones |
| `guiones/plomeria.mjs` | `3d` | Escena `.glb` con recorrido de cámara y piezas que se ocultan |

```bash
npm install
npx morfeo instalar
npx morfeo render
```

Los videos quedan en `salida/`. Las ilustraciones de este ejemplo son emojis y dibujos simples en SVG. Con tus propias
imágenes (`assets/`), personajes y modelos de Blender se ve como un canal real.
