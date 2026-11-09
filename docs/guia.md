# Guía de Morfeo

Genera videos verticales animados (Shorts, TikTok, Reels) desde código: escribes las escenas y Morfeo agrega
la voz, la música, los efectos de sonido, los subtítulos, las animaciones y la miniatura.

- **Estilos:** 10 incluidos, y puedes crear los tuyos:
  - `datos-curiosos`: texto grande con contorno e íconos 3D;
  - `explicativo`: papel claro, titulares y tarjetas;
  - `documental`: océano, rayos de luz y datos;
  - `ilustrado`: escenarios ilustrados y personajes;
  - `historia`: siluetas, foco de luz y misterio;
  - `mesa`: objetos 3D y contadores;
  - `serie`: series con personaje, HUD (días, barras), cartas VS y "comenta";
  - `infografia`: medidores, barras, globos y rayos X;
  - `3d`: tus escenas `.glb` con recorrido de cámara;
  - `minimal`: oscuro y limpio.
- **Motor de capas:** cada escena se arma con imágenes, texto, contadores, chips, tarjetas, teléfonos, formas,
  grupos (formaciones, pilas), modelos 3D o tus propios componentes de React. Todo se anima justo en la palabra que dice la voz.

- **Voces:** Kokoro (gratis, en tu computadora, más de 50 voces y mezclas), ElevenLabs, OpenAI, tu propia
  grabación por escena o cualquier servicio que conectes con una función.
- **Música:** 7 estilos generados sin derechos de autor, o tu propia pista (mp3, wav, flac, ogg). Baja sola cuando habla la voz.
- **Guiones:** los escribes tú, o Claude escribe el video completo a partir de un tema o de tu texto.
- **Subtítulos:** palabra por palabra; con Whisper quedan sincronizados con la voz real.

## Instalar

Necesitas Node.js 18+. Python 3.10–3.13 también, pero el instalador te ayuda a conseguirlo.

```bash
npx morfeo nuevo mi-canal
cd mi-canal
npm install
npx morfeo instalar
npx morfeo render
```

`morfeo instalar` se corre una sola vez por computadora y deja todo en `~/.morfeo`:

- busca Python y, si falta, ofrece instalarlo (Homebrew en Mac, winget en Windows);
- crea un entorno aislado con las librerías de voz;
- descarga las voces (~340 MB) y el navegador de render;
- pregunta si quieres Whisper (~470 MB). En Mac, Whisper necesita `xcode-select --install`.

`npx morfeo doctor` dice qué falta.

## Comandos

| Comando | Qué hace |
|---|---|
| `morfeo nuevo <carpeta>` | Crea un proyecto con un video de ejemplo |
| `morfeo lista` | Videos del proyecto y cuáles ya están hechos |
| `morfeo render [id...]` | Genera los que faltan (`--todos` para todos, `--gpu` para usar la tarjeta de video) |
| `morfeo studio` | Abre el editor en el navegador para ver y ajustar en vivo |
| `morfeo guion "tema"` | Claude escribe un video completo en `guiones/<id>.json` (`--estilo documental`, `--imagenes`) |
| `morfeo estilos` | Lista los estilos visuales |
| `morfeo guion --desde guion.txt` | Convierte tu texto en escenas (con IA, o `--sin-ia`: una escena por frase) |
| `morfeo instalar` / `doctor` | Prepara o revisa la computadora |

## Un video

```js
// videos.mjs
import {defineVideos} from 'morfeo';

export default defineVideos({
	cielo: {
		title: '¿Por qué el cielo es azul? 🌤️',
		voice: [['em_alex', 0.6], ['am_michael', 0.4]],
		music: 'lofi',
		scenes: [
			{type: 'title', say: '¿Sabías por qué el cielo es azul?', rows: [['¿POR QUÉ', '#FFF', 150], ['ES AZUL?', '#50DCFF', 230]], icon: 'question'},
			{type: 'year', say: 'Lord Rayleigh lo explicó en mil ochocientos setenta y uno.', show: 'Lo explicó en 1871.', pre: 'RAYLEIGH', year: 1871, sub: 'DISPERSIÓN'},
			{type: 'cta'},
		],
	},
});
```

**Escenas:**
- `title`: el gancho.
- `text`: filas grandes de texto.
- `year`: una fecha.
- `icon`: ícono grande con etiqueta.
- `compare`: A vs B, el cambio ocurre en la palabra `at`.
- `card`: tarjeta tipo código cuyo valor cambia.
- `dialog`: ventana con un botón que se pulsa en la palabra `click`.
- `cta`: cierre con tu marca.

`say` es lo que dice la voz. `show` es el subtítulo cuando debe ser distinto, por ejemplo con cifras. Las escenas
`aliens`, `memory` y `morph` son especiales de los videos de ejemplo.

## Estilos y capas

Cada video elige un `estilo` (o usa el de `morfeo.config.mjs`). `npx morfeo estilos` los lista.

```js
// guiones/cachalote.mjs
export default {
	estilo: 'documental',
	voice: 'narrador',
	music: 'ballad',
	scenes: [
		{say: '¿Sabías que las orcas le tienen miedo a un solo animal?', capas: [
			{tipo: 'imagen', src: 'cachalote.png', ancho: 700, entrada: 'deslizar-der', mover: {a: [480, 980]}, flotar: true},
			{tipo: 'chip', texto: '×5', x: 760, y: 1260, en: 'animal', sonido: 'pop'},
		]},
		{type: 'dato', say: 'Baja a más de dos mil metros.', show: 'Baja a más de 2.000 metros.', valor: 2000, sufijo: ' m', camara: {zoom: [1.15, 1]}},
		{say: 'Y forman un círculo.', capas: [
			{tipo: 'grupo', repetir: 8, disposicion: 'circulo', radio: 300, orientar: 90, capa: {tipo: 'imagen', src: 'cachalote.png', ancho: 220}},
		]},
		{type: 'cta'},
	],
};
```

**Tipos de escena:**
- `capas`: solo tus capas.
- `titular`: etiqueta "// paso 1", titular con `*palabra*` resaltada y número.
- `dato`: número que cuenta.
- `lista`: tarjeta que se palomea.
- `telefono`
- `comparar`
- `cta`

Todas aceptan `capas`, `fondo`, `camara` (zoom, paneo, temblor), `transicion` (corte, fundido, deslizar, zoom) y `tema`.

**Capas:**
- `imagen`, `video`, `texto` (con `*resaltado*` y efecto de escribir), `contador` (grande, LCD o chip; lineal o exponencial);
- `chip`, `etiqueta`, `numero`, `tarjeta`, `telefono`;
- `forma` (rect, círculo, línea, flecha), `icono`, `emoji`, `marca`, `particulas`;
- `grupo`: varias capas juntas, o una repetida en círculo, fila, cuadrícula, pila o al azar;
- `modelo`: tu `.glb`, o formas 3D incluidas como moneda, billete, lingote, cubo y esfera; con `cantidad` y `crecer` forma una pila que crece;
- `componente`: tu propio React.

**Animación de cada capa:**
- `en` y `hasta` aceptan segundos o una palabra de la voz;
- `entrada`: escala, rebote, deslizar-izq, caer, girar…;
- `mover`, `escalar`, `girar`, `flotar` y `latir`;
- `sonido`: pop, whoosh, tick, glitch o ding.

Tus imágenes, videos y modelos van en `assets/`. Para que la IA dibuje, usa `{tipo: 'imagen', generar: 'un oso pardo de frente'}`
con `imagenes: {proveedor: 'openai', estilo: 'ilustración plana, colores cálidos'}` en el config. El `estilo` mantiene la misma
línea gráfica en todas las imágenes. Cada imagen se genera una sola vez (caché).

**Series y personajes:**
- `personajes: {neto: {poses: {normal: './neto.png', feliz: './neto-feliz.png'}}}` en el config. Con `referencia: './neto.png'`, una pose escrita como texto (`triste: 'llorando'`) la genera la IA a partir de esa imagen, así sigue siendo el mismo personaje.
- En la escena: `{tipo: 'personaje', nombre: 'neto', pose: 'normal', poses: [{en: 'enamorado', pose: 'feliz'}], hablar: true}`.
- `hud: [...]` en el video: capas fijas en todos los cuadros (día, barra "probabilidad 0%", hora). `cambios: [{en: {escena: 3}, valor: 15}]` las actualiza con animación.
- Escena `eleccion`: cartas VS con "¡COMENTA!", o `formato: 'botones'` (ABRIR / NO ABRIR).
- Capas de interfaz: `barra`, `medidor`, `votacion`, `estado` (hora, batería, día), `noticia` (cintillo), `chat`, `onda`, `globo` y `seguir`.
- `imagen` con `cambiarA: {src, en, efecto: 'circulo'}` revela otra imagen, por ejemplo en modo rayos X.

**Escenas 3D:**
- `{tipo: 'escena3d', src: 'casa.glb', camara: [{en: 0, pos: [12, 7, 16], mirar: [0, 0, 0]}, {en: 'drenaje', pos: [5, 1, 9]}], animacion: true, ocultar: [{nodo: 'Tierra', en: 'tierra'}]}`.
- La cámara recorre la escena en las palabras que indiques.
- Las animaciones del archivo van sincronizadas con el video.
- Las piezas se muestran u ocultan por su nombre de Blender.

**Estilo propio:** `estilos: {'mi-marca': {base: 'minimal', colores: {acento: '#00E0A0'}, fondo: {tipo: 'imagen', src: 'fondo.png'}}}`.

**Componentes propios:** `componentes: {Mapa: './escenas/Mapa.tsx'}`. Reciben `t`, `dur`, `palabras`, `tema` y `cuando('palabra')`.

## Voces

```js
voice: 'em_alex'                                      // una voz Kokoro
voice: [['ef_dora', 0.6], ['af_heart', 0.4]]          // mezcla
voice: './voces/mi-voz.npy'                           // estilo de voz Kokoro propio
voice: {proveedor: 'elevenlabs', voz: 'VOICE_ID'}     // ELEVENLABS_API_KEY en .env
voice: {proveedor: 'openai', voz: 'nova'}             // OPENAI_API_KEY en .env
voice: {proveedor: async (texto) => './audio.wav'}    // tu propio servicio
```

O graba tú: `{type: 'text', say: 'Hola', audio: './grabaciones/hola.wav', rows: [...]}`.

Lo que se pide a servicios de pago se guarda en caché (`.morfeo/cache`). La misma frase no se vuelve a pedir ni a cobrar.

## Música

`music: 'lofi'` (también `lofi2`, `chillpop`, `synth`, `house`, `ballad`, `trap`), `music: './musica/cancion.mp3'`,
`music: {archivo: './musica/cancion.mp3', volumen: 0.7, inicio: 12}` o `music: false`.

Para no repetir, define alias en `morfeo.config.mjs` con `voces: {...}` y `musicas: {...}`.

## Claves (.env)

Copia `.env.example` como `.env`. Solo llena lo que uses:

- `ANTHROPIC_API_KEY`: guiones con IA.
- `ELEVENLABS_API_KEY` u `OPENAI_API_KEY`: voces por servicio.

Nunca subas `.env` a git.

## Desde código

```js
import {render, guionConIA, guardarVideo} from 'morfeo';

const {id, video} = await guionConIA({tema: 'el origen del café'});
guardarVideo('./guiones', id, video);
await render({ids: [id]});
```

## Licencia

Uso gratuito para crear videos, incluidos los comerciales. El código es de Uriel Gómez; no se permite
redistribuirlo ni modificarlo. Remotion tiene su propia licencia: gratis para personas y equipos de hasta 3 personas.
Detalles en [LICENSE](../LICENSE).
