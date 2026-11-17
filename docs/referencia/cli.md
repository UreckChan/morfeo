---
description: 'Todos los comandos de Morfeo: nuevo, instalar, estilo, nuevo-video, guion, previa, render, revisar, hoja y más.'
---

# Comandos

```bash
npx morfeo <comando> [opciones]
```

| Comando | Qué hace |
|---|---|
| `nuevo <carpeta>` | Crea un proyecto con videos de ejemplo |
| `nuevo-video <id>` | Crea un video desde una base que ya renderiza. `--look 2d`, `3d`, `serie`, `mito`, `escalada`, `biografia` o `construiste` (o `--formula`) |
| `formulas` | Lista las fórmulas de historia con su gancho de ejemplo |
| `skills` | Instala o actualiza las [guías para tu IA](../guia/skills) en `.claude/skills/` (`--lista` solo las muestra) |
| `estilo` | Abre la página para crear tu estilo (guarda `estilo.json`). `--desde https://tusitio.com` toma los colores y la letra de tu web |
| `voces` | Las voces gratis; `--elevenlabs` lista las más usadas de su biblioteca en español con su ID (`--acento mexicano`, `--genero mujer`, `--muestras 5` genera una muestra de cada una) |
| `previa <id>` | Solo el gancho (~8 s) para aprobarlo, con la voz gratis de borrador. `--hasta 5`, `--voz-final` |
| `animatica <id>` | Todo el video a 1/3 de tamaño (más rápido) y su hoja, con la voz gratis de borrador, para aprobar tomas y ritmo antes del render final. `--voz-final` |
| `instalar` | Prepara la computadora: Python, voces, navegador y Whisper (opcional). `--si`, `--whisper`, `--sin-whisper` |
| `doctor` | Revisa qué está instalado y qué falta |
| `lista` | Muestra los videos del proyecto y cuáles ya están hechos |
| `render [id...]` | Genera los que faltan, o los que indiques. `--todos` regenera todos, `--gpu` usa la tarjeta de video, `--solo-fallidos` reintenta los que fallaron en el último lote, `--cambiados` rehace solo los videos cuyo guion o componentes cambiaron desde su último render, `--revisar` saca la hoja y revisa cada video al terminar, `--escenas 5-7` solo esas escenas (para corregir una toma) `--borrador` lo hace con la voz gratis de borrador. |
| `revisar [id...]` | Revisa la estructura (gancho, ritmo, preguntas, rótulos, cierre), la voz, la zona segura, el riesgo de "diapositiva" y, si ya está el MP4, cuadros negros, tapados, lisos o quietos. `--sin-cuadros` salta lo último. Ver [Estructura](../guia/mundo#revisar-la-estructura) |
| `hoja <id>` | Hoja de contacto PNG para revisar un video de un vistazo. `--desde 8 --hasta 11`, `--cols 5 --filas 3`, `--zona` (zonas que tapan las apps) |
| `studio` | Abre el editor en el navegador con los videos ya preparados. `--puerto 3001` |
| `guion "tema"` | Claude escribe un video. `--formula serie` sigue una fórmula; `--investigar` busca cada dato con su fuente. Ver [Guiones](../guia/ia#guiones) |
| `guion --desde f.txt` | Convierte tu guion en escenas (`--sin-ia`: una escena por frase) |
| `estilos` | Lista los estilos visuales |
| `recursos temas` | Diccionario de objetos 2D/3D por temática |
| `recursos buscar "x"` | Busca un objeto: `--3d`, `--realista`, `--2d --variante clay` |
| `ayuda`, `-v` | Ayuda y versión |

Todos aceptan `--proyecto <carpeta>` para trabajar con un proyecto que no está en la carpeta actual.

## Qué se genera

```
salida/
├─ cafe.mp4        el video (1080×1920, H.264, 30 fps)
├─ cafe.jpg        la miniatura
└─ resumen.json    título, archivo y duración de cada video
.morfeo/           trabajo interno (voz, mezcla, caché): no lo subas a git
```
