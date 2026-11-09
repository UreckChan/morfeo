# Comandos

```bash
npx morfeo <comando> [opciones]
```

| Comando | Qué hace |
|---|---|
| `nuevo <carpeta>` | Crea un proyecto con videos de ejemplo |
| `instalar` | Prepara la computadora: Python, voces, navegador y Whisper (opcional). `--si`, `--whisper`, `--sin-whisper` |
| `doctor` | Revisa qué está instalado y qué falta |
| `lista` | Muestra los videos del proyecto y cuáles ya están hechos |
| `render [id...]` | Genera los que faltan, o los que indiques. `--todos` regenera todos, `--gpu` usa la tarjeta de video |
| `studio` | Abre el editor en el navegador con los videos ya preparados. `--puerto 3001` |
| `guion "tema"` | Claude escribe un video. Ver [Guiones](../guia/ia#guiones) |
| `guion --desde f.txt` | Convierte tu guion en escenas (`--sin-ia`: una escena por frase) |
| `estilos` | Lista los estilos visuales |
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
