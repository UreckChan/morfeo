---
description: 'Publicar todos los días con Morfeo: calendario de temas que no se repiten, series de varias partes y un carrusel con hilo sacados de cada video.'
---

# Publicar todos los días

Hacer un video ya es rápido; lo difícil es saber qué hacer mañana y sacarle más provecho a cada uno. Tres comandos
ayudan con eso.

## Calendario de temas

```bash
npx morfeo calendario --dias 30
```

Crea `calendario.md` con un día por renglón. Cada día trae una **fórmula** (mito, supervivencia, misterio, escalada…) y
un **lugar** (isla, laboratorio, ciudad, cueva…) que van rotando, para que dos videos seguidos no se parezcan.

- Sin `--ia`, las columnas **Tema** y **Gancho** quedan vacías para que tu IA (Claude Code, Codex) las llene. El
  archivo trae las reglas: leer `gustos.md`, no repetir y que cada tema tenga fuente.
- Con `--ia` (y `ANTHROPIC_API_KEY` en `.env`), Claude propone los temas y la primera frase de cada uno.
- Nunca repite lo que ya hiciste: lee los títulos de `guiones/` y, si existe, `temas-usados.md`.
- `--desde 2026-12-01` cambia el primer día.

Para hacer el de un día, a tu IA: «Hazme el video del 2026-12-01 del calendario».

## Series de varias partes

```bash
npx morfeo serie "la historia de las consolas portátiles" --partes 4
```

Crea `…-parte-1` a `…-parte-4` con la estructura de serie:
- una pastilla arriba con «TEMA · PARTE 2/4»;
- la parte 2 en adelante abre recordando la anterior;
- cada parte cierra pidiendo la siguiente («Escribe PARTE 3 si quieres la que sigue»), y la última cierra la serie.

Sin `--ia` deja los huecos marcados entre paréntesis para tu IA. Con `--ia`, Claude primero divide el tema en partes con
su suspenso y luego escribe cada una (`--investigar` busca los datos con fuente). `--voz alberto` elige la voz.

## Un video, varias publicaciones

```bash
npx morfeo carrusel mi-video
```

Del video ya renderizado saca:

- **Carrusel** en `salida/<título> (carrusel)/`: hasta 8 imágenes, la portada primero y luego un cuadro por escena,
  tomado justo cuando cae el rótulo (con el texto grande y el objeto en su lugar). Por defecto en 4:5 para Instagram;
  `--formato 9:16` para el modo foto de TikTok o Stories.
- **Hilo** en `salida/<título> (hilo).txt`: el gancho, el resto del guion en publicaciones de hasta 270 caracteres
  numeradas (1/5, 2/5…), el cierre y las fuentes. Listo para X o Threads.
