# Uso desde código

Todo lo que hace la línea de comandos también se puede usar desde Node.js:

```js
import {render, guionConIA, guardarVideo, lista} from 'morfeo';

// un video nuevo escrito por Claude, y luego a renderizar
const {id, video} = await guionConIA({tema: 'el origen del café', estilo: 'documental'});
guardarVideo('./guiones', id, video);

const hechos = await render({ids: [id], alProgreso: (id, p) => console.log(id, Math.round(p * 100) + '%')});
console.log(hechos); // [{id, mp4, jpg, segundos}]
```

| Función | Qué hace |
|---|---|
| `render({proyecto, ids, todos, log, alProgreso})` | Genera videos. Devuelve `[{id, mp4, jpg, segundos}]` |
| `preparar({proyecto, ids})` | Solo voz, música y tiempos (sin video) |
| `lista({proyecto})` | `[{id, titulo, hecho}]` |
| `studio({proyecto, puerto})` | Abre Remotion Studio |
| `instalar({si, whisper})` / `doctor()` | Preparar o revisar la computadora |
| `guionConIA({tema \| texto, estilo, imagenes, duracion, idioma, tono, voz})` | Video escrito por Claude |
| `guionSinIA(texto, {estilo})` | Una escena por frase |
| `guardarVideo(carpeta, id, video)` | Guarda `<id>.json` sin pisar otro |
| `defineConfig`, `defineVideo`, `defineVideos` | Autocompletado en tus archivos |

Morfeo trae tipos de TypeScript, así que tu editor autocompleta estilos, escenas, capas y opciones también en archivos `.mjs`.
