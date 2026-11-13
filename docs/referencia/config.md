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
	render: {calidad: 'alta', gl: 'angle', concurrencia: null, miniatura: true, portada: true, consejos: true, nombreArchivo: 'titulo'},
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
| `render.calidad` | `alta`, `media` o `ligera`. Por defecto `media` en videos con `mundo` (la cámara siempre se mueve y pesarían el doble) y `alta` en los demás |
| `render.crf` | Fuerza un valor exacto de calidad (menos es mejor; `alta` = 18, `media` = 21, `ligera` = 24) |
| `render.consejos` | Mostrar al renderizar los consejos de estructura (`npx morfeo revisar`). `false` los apaga |
| `render.gl` | `angle` usa la tarjeta de video (por defecto en Mac con Apple Silicon y en Windows, unas 4 veces más rápido) y `swangle` funciona en cualquier computadora. Si la GPU falla, reintenta solo con `swangle` |
| `render.concurrencia` | Cuadros en paralelo. Por defecto Morfeo elige un valor seguro y, si el navegador truena, reintenta con menos |
| `render.miniatura` | Generar el `.jpg` de cada video |
| `render.portada` | Generar `<título> (portada).jpg` con el título grande y tu marca. `false` la apaga |
| `render.nombreArchivo` | `titulo` (por defecto: `salida/<Título>.mp4`, listo para subir) o `id` |

## estilo.json

`npx morfeo estilo` lo crea con una página. Va junto a `morfeo.config.mjs` y se aplica encima de él: todos los videos
salen así salvo que uno diga su propio `estilo`, `voice` o `speed`.

```json
{
	"nombre": "Datos Rápidos", "siglas": "DR", "redes": "TikTok @datosrapidos",
	"base": "documental", "colores": {"acento": "#FF5A3C", "subtitulo": "#4C8DFF"},
	"letra": "Bebas Neue", "voz": [["em_alex", 0.6], ["am_michael", 0.4]],
	"ritmo": "agil", "cierre": "Guárdalo para cuando te pregunten."
}
```

| Clave | Qué es |
|---|---|
| `nombre`, `siglas`, `redes` | Tu marca (las siglas van en el círculo si no hay logo) |
| `base`, `colores` | Estilo del que hereda y colores de acento y del subtítulo |
| `letra` | Letra de títulos y portada (se baja sola a `fuentes/`) |
| `voz` | Voz por defecto: Kokoro o `{proveedor: 'elevenlabs', voz: 'ID'}` |
| `ritmo` | `pausado`, `natural` o `agil`: velocidad de la voz y de las animaciones |
| `cierre` | Lo que dice la voz en la escena final |

## Un video

| Clave | Qué es |
|---|---|
| `title` | Título para publicar (sale en `npx morfeo lista`, `salida/resumen.json` y `salida/<id>.txt`) |
| `descripcion`, `tags` | Descripción y etiquetas para publicar; van a `salida/<título>.txt` con el título y los créditos |
| `hooks` | 3 ganchos de reserva (otras primeras frases) para probar otra versión; van al final del `.txt` |
| `fuentes` | De dónde salen los datos: `['INEGI 2024']` o `[{texto, url}]`; van al `.txt` |
| `portada` | Texto grande de la portada (por defecto, el título); `*palabra*` en color; `false` sin portada |
| `formula` | Fórmula de historia (`serie`, `mito`, `construiste`…): `revisar` da consejos propios. Ver [Fórmulas](../guia/historias) |
| `estilo`, `tema` | Estilo y ajustes del estilo para este video |
| `voice`, `speed`, `lang` | Voz. Ver [Voces](../guia/voces-musica) |
| `music` | Música |
| `hud` | Capas fijas encima de todo el video. Ver [HUD](../guia/series#hud) |
| `mundo` | Escenario que dura todo el video y la cámara recorre con la `toma` de cada escena. Ver [Mundo](../guia/mundo) |
| `lugares` | Varios mundos `{nombre: [...]}`; cada escena elige uno con `lugar`. Ver [Historias](../guia/historias#varios-lugares-en-un-video) |
| `serie` | Pastilla fija arriba para series: `'MI SERIE · EP. 2'` |
| `calidad` | Calidad de este video (`alta`, `media`, `ligera`) |
| `scenes` | Las escenas. Ver [Escenas](../guia/escenas) |
| `miniaturaEn` | Segundo para la miniatura (por defecto, cuando termina de armarse la primera escena). Sale sin subtítulos |
| `meta` | Datos libres que se copian a `salida/resumen.json` |

## Una escena

Además de `say`, `show`, `type` y `capas` (ver [Escenas](../guia/escenas)):

| Clave | Qué es |
|---|---|
| `claves` | Palabras que se resaltan en el subtítulo |
| `rotulo`, `rotuloEn` | Texto grande del momento y la palabra en que entra |
| `rotuloEstilo` | `normal`, `contorno`, `pastilla`, `sello`, `paso` (con `rotuloPaso`) o `pixel`; `rotuloColor`, `rotuloInclinar`, `rotuloY` |
| `modo`, `modoEn`, `modoHasta` | `rayosx`, `plano` u `holograma` en una palabra. Ver [Rayos X](../guia/mundo#rayos-x-plano-y-holograma) |
| `toma` | Cámara del mundo 2D. Ver [Mundo](../guia/mundo) |
| `lugar` | En qué lugar de `lugares` pasa |
| `transicion` | Cómo entra (también al cambiar de lugar) |

## Variables de entorno

| Variable | Para qué |
|---|---|
| `ANTHROPIC_API_KEY` | Guiones con Claude (y `--investigar`) |
| `OPENAI_API_KEY` | Imágenes, poses y voces de OpenAI |
| `ELEVENLABS_API_KEY` | Voces de ElevenLabs |
| `POLYPIZZA_API_KEY` | Opcional: suma los 10 mil+ modelos de Poly Pizza a la biblioteca 3D |
| `MORFEO_HOME` | Dónde guardar Python, voces, Whisper y el navegador (por defecto `~/.morfeo`) |
| `MORFEO_PYTHON` | Usar un Python específico al instalar |
| `MORFEO_GL` | Igual que `render.gl` |
| `MORFEO_NAVEGADOR` | Usar un Chrome que ya tengas |
| `MORFEO_CONCURRENCIA` | Cuadros en paralelo (igual que `render.concurrencia`) |
