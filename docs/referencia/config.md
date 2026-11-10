# morfeo.config.mjs

```js
import {defineConfig} from 'morfeo';

export default defineConfig({
	estilo: 'documental',
	marca: {
		nombre: 'Mi Canal',
		logo: './logo.png',
		redes: 'YT @micanal · TikTok @micanal',
		cta: 'Sígueme para más.',
		etiqueta: 'DATO CURIOSO',
		seguir: '+ SEGUIR',
		siguiendo: 'SIGUIENDO',
	},
	voces: {narrador: [['em_alex', 0.6], ['am_michael', 0.4]]},
	musicas: {intro: {archivo: './musica/intro.mp3', volumen: 0.8}},
	estilos: {'mi-marca': {base: 'minimal', colores: {acento: '#00E0A0'}}},
	personajes: {neto: {poses: {normal: './personajes/neto.png'}}},
	componentes: {Barras: './escenas/Barras.tsx'},
	fuentes: {Poppins: './fuentes/Poppins-Bold.ttf'},
	imagenes: {proveedor: 'openai', estilo: 'ilustración plana'},
	videos: './videos.mjs',
	guiones: './guiones',
	assets: './assets',
	salida: './salida',
	render: {crf: 18, gl: 'swangle', concurrencia: null, miniatura: true},
});
```

| Clave | Qué es |
|---|---|
| `estilo` | Estilo por defecto de los videos. Ver [Estilos](../guia/estilos) |
| `marca` | Nombre, logo (imagen cuadrada), redes, lo que dice la voz en el cierre, la etiqueta del gancho y el texto del botón |
| `voces` | Alias de voces. Ver [Voces](../guia/voces-musica) |
| `musicas` | Alias de música |
| `estilos` | Tus estilos, con `base` para heredar de uno existente |
| `personajes` | Personajes con poses. Ver [Personajes](../guia/series#personajes) |
| `componentes` | Componentes de React. Ver [Componentes](../guia/componentes) |
| `fuentes` | Fuentes propias `{Nombre: './archivo.ttf'}`; úsalas en `tema.fuentes` o en `fuente` de un texto |
| `imagenes` | Proveedor y línea gráfica de las imágenes con IA |
| `videos` | Archivo con `{id: video}`, o una carpeta (por defecto `./videos.mjs`) |
| `guiones` | Carpeta con un video por archivo (por defecto `./guiones`) |
| `assets` | Carpeta de tus imágenes, videos y modelos (por defecto `./assets`) |
| `salida` | Carpeta de los videos terminados (por defecto `./salida`) |
| `render.crf` | Calidad del video: menos es mejor (18 por defecto) |
| `render.gl` | `angle` usa la tarjeta de video (por defecto en Mac con Apple Silicon, unas 4 veces más rápido) y `swangle` funciona en cualquier computadora. Si la GPU falla, reintenta solo con `swangle` |
| `render.concurrencia` | Cuadros en paralelo. Por defecto Morfeo elige un valor seguro y, si el navegador truena, reintenta con menos |
| `render.miniatura` | Generar el `.jpg` de cada video |

## Un video

| Clave | Qué es |
|---|---|
| `title` | Título para publicar (sale en `npx morfeo lista` y en `salida/resumen.json`) |
| `estilo`, `tema` | Estilo y ajustes del estilo para este video |
| `voice`, `speed`, `lang` | Voz. Ver [Voces](../guia/voces-musica) |
| `music` | Música |
| `hud` | Capas fijas encima de todo el video. Ver [HUD](../guia/series#hud) |
| `scenes` | Las escenas. Ver [Escenas](../guia/escenas) |
| `miniaturaEn` | Segundo para la miniatura (por defecto, cuando termina de armarse la primera escena). Sale sin subtítulos |
| `meta` | Datos libres que se copian a `salida/resumen.json` |

## Variables de entorno

| Variable | Para qué |
|---|---|
| `ANTHROPIC_API_KEY` | Guiones con Claude |
| `OPENAI_API_KEY` | Imágenes, poses y voces de OpenAI |
| `ELEVENLABS_API_KEY` | Voces de ElevenLabs |
| `POLYPIZZA_API_KEY` | Opcional: suma los 10 mil+ modelos de Poly Pizza a la biblioteca 3D |
| `MORFEO_HOME` | Dónde guardar Python, voces, Whisper y el navegador (por defecto `~/.morfeo`) |
| `MORFEO_PYTHON` | Usar un Python específico al instalar |
| `MORFEO_GL` | Igual que `render.gl` |
| `MORFEO_NAVEGADOR` | Usar un Chrome que ya tengas |
