---
description: 'Del tema al reel terminado con Morfeo y tu IA: estilo propio, investigación con fuentes, previa del gancho, revisión automática y portada.'
---

# Del tema al reel terminado

Morfeo hace el ciclo completo: investiga, escribe, te enseña el gancho, renderiza, se revisa solo y te entrega el
video con su portada y el texto del post. Puedes hacerlo con tu IA (Claude Code o Codex) o a mano en la terminal.

## Con tu IA

Cada proyecto nuevo trae `AGENTS.md` (y `CLAUDE.md`), las instrucciones para Claude Code y Codex. Abre la carpeta
con tu IA y escribe:

- **«Configúrame»**: instala lo que falte, abre la página de tu estilo y te pide (si quieres) tu clave de voz.
- **«Hazme un video sobre la Fórmula 1 en México»**: investiga cada dato con su fuente, elige la fórmula, te enseña el
  guion para aprobarlo, luego el gancho ya animado, renderiza y revisa. Nada se publica solo.

## Tu estilo

```bash
npx morfeo estilo
```

Abre una página en tu computadora con vista previa: nombre y siglas del canal, colores, letra de títulos (12 letras
libres de Google Fonts), voz (gratis con Kokoro o la tuya de ElevenLabs), ritmo (pausado, natural o ágil) y la frase de
cierre. Guarda `estilo.json` y desde ahí todos tus videos salen así. Un video puede cambiar cualquier cosa con su
propio `estilo`, `voice` o `speed`.

## Investigar con fuentes

```bash
npx morfeo guion "la fuga más famosa de México" --investigar
```

Claude busca en la web, junta los datos con su fuente y escribe el guion solo con esos datos. Las fuentes quedan en
el texto del post. Necesita `ANTHROPIC_API_KEY` en el `.env`.

## Ver el gancho antes de todo

```bash
npx morfeo previa mi-video          # los primeros ~8 s, en segundos
npx morfeo previa mi-video --hasta 5
```

Si no te convence, cambia la primera frase (el guion trae 3 ganchos de reserva en `hooks`) y vuelve a probar.

## Revisión automática

```bash
npx morfeo revisar mi-video
npx morfeo hoja mi-video --zona
```

- **La voz dijo el guion**: compara lo que la voz dijo de verdad (con Whisper) con el texto de cada escena.
- **Zona segura**: avisa si un texto o dato queda bajo los botones de TikTok, Reels o Shorts. `hoja --zona` pinta
  en rojo esas zonas sobre los cuadros del video.
- **Estructura**: gancho, ritmo, preguntas, cierre y lo propio de la [fórmula](./historias).

## Lo que te entrega

En `salida/`, con el título del video como nombre:

| Archivo | Qué es |
|---|---|
| `<título>.mp4` | El video 1080×1920 con voz, música, efectos y subtítulos |
| `<título>.jpg` | La miniatura (cuadro limpio) |
| `<título> (portada).jpg` | La portada: título grande con tu letra y tu color, y tu marca |
| `<título>.txt` | Título, descripción, etiquetas, fuentes y 3 ganchos de reserva |

## Piezas para explicar

Además de las de [capas](./capas) y [historias](./historias): `linea` (línea de tiempo con hitos que entran en su
palabra), `tierra` con `acercar: 3` (el globo vuela hasta el lugar) y 14 efectos de sonido generados por Morfeo, sin
derechos de terceros: pop, whoosh, tick, glitch, ding, golpe, teclas, radio, obturador, notificación, latido, alarma,
reloj y caja registradora.
