---
description: 'Todas las capas de Morfeo: texto, cifras, tarjetas de datos, teléfono, llamada, votación, globo terráqueo, línea de tiempo y más.'
---

# Capas

Una capa es cualquier cosa que aparece en pantalla. Todas comparten la posición y las
[animaciones](./animacion). Cada tipo agrega sus propios campos.

```js
{tipo: 'imagen', src: 'oso.png', ancho: 600, x: 540, y: 1000, en: 'oso', entrada: 'rebote', flotar: true}
```

## Posición

El lienzo mide **1080 × 1920**. `x` e `y` son el centro de la capa (por defecto, el centro de la pantalla). Dentro de un
`grupo` o un `telefono`, las coordenadas son relativas a su centro. `ancla: 'izquierda'` o `'derecha'` alinea por un borde.

::: tip Zonas seguras
Las apps tapan arriba (~200 px), abajo (~370 px) y la columna derecha (~160 px). Deja ahí solo lo que puede taparse.
:::

## Imagen y video

| Tipo | Campos |
|---|---|
| `imagen` | `src` (archivo en `assets/`) o `generar` (descripción para la IA), `ancho`, `alto`, `redondo`, `radio`, `voltear`, `sombra` |
| `video` | `src`, `ancho`, `alto`, `radio` (va sin sonido) |

Para que una imagen se convierta en otra, con un fundido, un barrido o un círculo que se abre (por ejemplo, para pasar a rayos X):

```js
{tipo: 'imagen', src: 'mano.png', ancho: 700, cambiarA: {src: 'mano-rayosx.png', en: 'tendón', efecto: 'circulo'}}
```

## Texto

```js
{tipo: 'texto', texto: 'CREA UNA *CARPETA*', tam: 110, x: 80, ancla: 'izquierda', alinear: 'left'}
```

| Campo | Para qué |
|---|---|
| `texto` | Admite saltos de línea (`\n`). `*palabra*` la pinta del color de acento |
| `tam`, `color`, `acento`, `peso` | Tamaño, colores y grosor |
| `fuente` | `'titulo'`, `'texto'`, `'mono'` o el nombre de una fuente tuya |
| `mayusculas` | Por defecto, según el estilo |
| `contorno`, `colorContorno` | Borde de las letras |
| `fondo`, `borde`, `relleno`, `radio` | Para hacer pastillas y botones |
| `maxAncho`, `ancho`, `alinear`, `interlineado` | Medidas y alineación del texto |
| `escribir` | Aparece letra por letra (`true`, o letras por segundo) |
| `subrayado` | Subraya lo resaltado |

## Números y datos

| Tipo | Campos |
|---|---|
| `contador` | `de`, `a`, `prefijo`, `sufijo`, `decimales`, `duracion`, `curva` (`suave`, `lineal`, `exponencial`), `formato` (`grande`, `lcd`, `chip`), `tam`, `color` |
| `chip` | `texto`, `unidad` (más pequeña), `tam`, `color`, `fondo`, `borde`: etiquetas como "230 dB" o "×5" |
| `barra` | `titulo`, `valor` (0–100, o hasta `max`), `unidad`, `color`, `ancho`: barra de progreso que se llena |
| `medidor` | `valor`, `min`, `max`, `unidad`, `tam`, `zonas`: velocímetro con aguja |
| `votacion` | `cabecera`, `titulo`, `opciones: [{texto, valor, sub}]`: resultados en porcentaje |
| `grafica` | `forma` (`barras`, `columnas`, `linea`, `area`, `dona`), `datos: [{etiqueta, valor}]`, `titulo`, `prefijo`, `unidad`, `resaltar`: gráfica que crece al entrar |
| `kpi` | `etiqueta`, `valor`, `prefijo`, `sufijo`, `cambio` (% con ▲/▼), `periodo`: indicador con cifra que cuenta |
| `proceso` | `pasos` (texto o `{titulo, texto, en}`), `direccion` (`vertical`/`horizontal`): pasos numerados que entran por turno |
| `pictograma`, `icono-linea`, `leyenda` | Personas pictograma, 36 íconos de contorno y textos espaciados: ver [Negocios, deportes e historias de vida](/guia/temas-serios) |
| `numero` | `texto`: número de paso en un cuadro |
| `etiqueta` | `texto`: texto pequeño en fuente mono ("// paso 1") |

## Interfaz

| Tipo | Campos |
|---|---|
| `tarjeta` | `cabecera`, `titulo`, `texto`, `items: [{texto, check, en}]`, `ancho`: renglones que se palomean en su palabra |
| `telefono` | `src` (imagen o video de la pantalla), `capas` (dentro de la pantalla), `ancho`, `pantalla` (color) |
| `estado` | `dia`, `hora`, `bateria`, `aviso`, `contador`: barra de estado del celular |
| `noticia` | `etiqueta`, `titular`, `cintillo` (texto que corre), `vivo` |
| `chat` | `mensajes: [{usuario, texto}]`, `cada` (segundos entre mensajes), `maximo` |
| `onda` | `barras`, `ancho`, `alto`, `color`, `siempre`: onda de audio que se mueve con la voz |
| `globo` | `texto`, `cola` (`abajo`, `arriba`, `izq`, `der`, `ninguna`), `fondo`, `color` |
| `seguir` | `usuario`, `texto`, `pulsar` (segundos): tarjeta con botón que pasa a "Siguiendo" |
| `ventana` | `diametro`, `src` o `capas`, `borde` (`metal`, `ninguno` o un color), `remaches`, `zoom` (`[inicio, fin]`), `fondo`: escotilla o lupa circular |
| `marca` | `tam`: tu avatar |

### Ventana circular

Para mostrar el interior de algo (un submarino, una célula, un motor) con borde metálico y remaches:

```js
{tipo: 'ventana', diametro: 640, src: 'interior-submarino.png', zoom: [1, 1.2], en: 'dentro'}
```

## Tarjetas de datos

| Tipo | Campos |
|---|---|
| `reloj` | `de`, `a`, `max` (24 por defecto), `segmentos: [[desde, hasta, color]]`, `etiqueta`: carátula que se llena |
| `cronometro` | `de`, `a`, `max`, `color`: cuenta y su aro avanza |
| `termometro` | `valor`, `max`, `color` |
| `recipientes` | `n`, `forma` (`garrafon`, `vaso`), `total` ("50 L"): se llenan uno por uno |
| `ficha` | `titulo`, `foto`, `campos: [[nombre, valor]]`: credencial |
| `checklist` | `items: [{texto, en, pendiente}]`, `titulo`: se palomea en cada palabra |
| `mapa` | `ruta: [[x, y]]`, `distancia` ("8 CUADRAS"), `inclinar`: plano con ruta que se dibuja |

## Historias, series y documental

Ver [Historias, series y fórmulas](./historias) con ejemplos.

| Tipo | Campos |
|---|---|
| `bloqueo` | `hora`, `fecha`, `anio` (o `[2026, 2031]` con `anioEn` para que salte), `notificaciones: [{app, titulo, texto, en}]` |
| `llamada` | `estado` (`entrante`, `curso`, `terminada`), `nombre`, `numero`, `desde`, `duracion` |
| `recuento` | `cabecera`, `titulo`, `opciones: [{texto, valor, sub}]`: lo que votaron en el capítulo anterior |
| `capitulo` | `serie`, `capitulo`, `pregunta`, `opciones: [{texto, sub}]`, `siguiente`, `horario`: fin de capítulo |
| `vigilancia` | `hora`, `fecha`, `etiqueta`, `zoom`, `mira`: vista de cámara encima de todo |
| `cintillo` | `nombre`, `cargo`, `color`: nombre de una persona, abajo a la izquierda |
| `fecha` | `anio`, `de`, `pie`, `color`: tarjeta de año que cuenta. `estilo: 'placa'` la vuelve placa dorada de documental (`texto: '13 DE AGOSTO / DE 1971'`, renglones con ` / `) |
| `calendario` | `titulo`, `de`, `a`: hoja que voltea |
| `linea` | `hitos: [{anio, texto, en}]`, `color`: línea de tiempo que avanza en cada palabra |
| `tierra` | `lat`, `lon`, `etiqueta`, `acercar` (vuela al lugar, p. ej. `3`): globo que gira y clava un pin |
| `dividida` | `izq` / `der` (o `arriba` / `abajo` con `vertical`): `{etiqueta, color, fondo, capas}` |
| `marcador` | `filas: [{texto, valor, color, pasos: [{en, valor}]}]`: marcador que va sumando (el chiste que se repite). `en` acepta `{escena: 3}`. Ponlo en `hud`, lejos de los subtítulos |
| `caricatura` | Personaje 2D de cabeza grande: `expresion` (`neutral`, `feliz`, `triste`, `sorpresa`, `enojado`, `miedo`, `aburrido`, `sospecha`), `pose` (`parado`, `senalar`, `brazosArriba`, `radio`, `manosAtras`), `gorra`, `sombrero`, `lentes`, `bigote`, `ropa`, `piel`, `estados: [{en, expresion, pose}]`, `habla: true` (mueve la boca con la voz). `(x, y)` = sus pies |
| `fila` | Personas de la mano: `n`, y con `de` + `crece: 'palabra'` va sumando una cada `cada` segundos hasta `n`; `numeros: true` las numera. Para retos colectivos |
| `hora` | `etiqueta` (`'NOCHE 1 · PARTE 2'`), `hora`, `de` (`'de la mañana'`), `lugar`: reloj con lugar para series. Cambia la hora con `cambios: [{en, hora}]` |

Para los diálogos, `habla` en la escena pone el nombre de quien habla sobre el subtítulo: `habla: 'Mamá'` o
`habla: {nombre: 'Tavo', nota: 'por radio', color: '#FFD23F'}`.

## Formas e íconos

| Tipo | Campos |
|---|---|
| `forma` | `forma` (`rect`, `circulo`, `linea`, `flecha`), `ancho`, `alto`, `color`, `borde`, `grosor`, `punteado`, `radio`, `brillo` |
| `emoji` | `texto`, `tam` |
| `icono` | `nombre` (íconos pixel: `question`, `warning`, `star`, `zap`, `eye`, `trophy`, `skull`, `coin`…), `tam`, `color` |
| `particulas` | `particulas` (`burbujas`, `polvo`, `estrellas`, `nieve`, `confeti`), `cantidad`, `color` |

## Grupos

Varias capas que se mueven juntas, o una capa repetida en una formación:

```js
{tipo: 'grupo', x: 540, y: 1000, repetir: 8, disposicion: 'circulo', radio: 300, orientar: 90, retraso: 0.08, girar: 6,
	capa: {tipo: 'imagen', src: 'ballena.png', ancho: 180}}
```

| Campo | Para qué |
|---|---|
| `capas` | Las capas del grupo, con coordenadas relativas |
| `repetir` + `capa` | Copia `capa` `repetir` veces |
| `disposicion` | `circulo` (con `radio` y `orientar`), `fila`, `columna`, `cuadricula` (con `columnas`), `pila` o `aleatorio` (con `area` y `girarAzar`) |
| `espacio` | Separación entre copias |
| `retraso` | Segundos entre la aparición de cada copia |

## Escenarios y recursos

| Tipo | Campos |
|---|---|
| `recurso` | `buscar` (palabra en español), `estilo` (`3d`, `realista`, `2d`), `variante`, `indice`: objeto de la biblioteca. Ver [Objetos 2D y 3D](./recursos) |
| `escenario` | `nombre` (`bosque`, `cuarto`, `departamento`, `tunel`, `pasillo`), `parte: 'frente'` para el primer plano |

## Varias copias

<div class="galeria-docs">
<figure><img src="/img/fantasmas.jpg" alt="<code>cantidad: 4</code>: fantasmas de colores" loading="lazy"><figcaption><code>cantidad: 4</code>: fantasmas de colores</figcaption></figure>
</div>

`cantidad: n` en una capa `recurso`, `modelo`, `emoji`, `icono` o `imagen` la repite acomodada, cada copia entra un
poquito después de la anterior y sale distinta cuando la pieza lo permite (fantasmas de colores, tetrominós de otra
forma, banderas de otros países):

```js
{tipo: 'recurso', buscar: 'fantasma de pacman', cantidad: 4, ancho: 300}
{tipo: 'recurso', buscar: 'tetris', cantidad: 6, acomodo: 'regados'}
```

`acomodo`: `'fila'`, `'cuadricula'`, `'pila'`, `'circulo'` o `'regados'` (por defecto: fila hasta 5, cuadrícula hasta
9 y regados después). En 3D hasta 6 copias (cada una es un contexto WebGL); en 2D hasta 40.

## Juegos, documentos y banderas

Que se vea lo que se cuenta: si el guion habla de un juego, el juego; si habla de un tratado o un recibo, la hoja.

<div class="galeria-docs">
<figure><img src="/img/juego.jpg" alt="<code>juego</code>: tetris en la maquinita" loading="lazy"><figcaption><code>juego</code>: tetris en la maquinita</figcaption></figure>
<figure><img src="/img/documento.jpg" alt="<code>documento</code> con firma y sello" loading="lazy"><figcaption><code>documento</code> con firma y sello</figcaption></figure>
<figure><img src="/img/banderas.jpg" alt="<code>bandera</code>: mx y jp" loading="lazy"><figcaption><code>bandera</code>: mx y jp</figcaption></figure>
</div>

| Tipo | Campos |
|---|---|
| `juego` | `juego`: `tetris`, `comecocos`, `invasores`, `pong`, `snake`, `plataformas`, `carreras`, `rompebloques`. `marco`: `maquinita` (con su letrero), `tele`, `portatil` o `ninguno`. El juego se mueve solo: piezas que caen, fantasmas que persiguen, marcador que sube |
| `documento` | `titulo`, `sub`, `fecha`, `lineas` (se escriben una por una; `['Salario', '$3,000']` en dos columnas; `'~Impuesto'` sale tachado en rojo), `firma` (se dibuja), `sello` (cae al final). `estilo`: `hoja`, `recibo`, `carta` u `oficio` |
| `bandera` | `pais`: `mx`, `us`, `es`, `jp`, `fr`, `it`, `de`, `ru`, `ua`, `co`, `ve`, `ec`, `ar`, `br`, `cl`, `pe`, `cu`, `pr`, `gt`, `ca`, `cn`, `kr`, `gb`, `in`, `pt`, `eu`, `onu`. Ondea; `asta: false`, `nombre: false` o un nombre propio |

```js
{tipo: 'documento', titulo: 'Tratado de París', sub: '10 de diciembre de 1898', lineas: ['Artículo 1…', ['Pago', '$20,000,000']], firma: 'Los representantes', sello: 'Firmado'}
```

## Más

- `personaje`: ver [Series y personajes](./series#personajes).
- `modelo` y `escena3d`: ver [3D](./3d).
- `componente`: ver [Componentes propios](./componentes).

## Sonido

Cada capa suena al entrar según cómo entra o qué es: un sello golpea, un dato hace tic, una moneda suena a moneda.
Cada `enfasis` también suena, y el cierre tiene su sonido. `sonido` lo cambia y `false` lo apaga.

Los efectos son grabaciones de [Kenney](https://kenney.nl) con licencia CC0 (gratis, también para uso comercial, sin
dar crédito). Se bajan solos la primera vez, unos 570 KB. Si no hay internet, Morfeo usa sus sonidos sintetizados y el
video sale igual.

| Para | Sonidos |
|---|---|
| Interfaz | `clic`, `correcto`, `error`, `pregunta`, `abrir`, `cerrar`, `sube`, `baja`, `interruptor`, `raspon`, `campanita`, `cristal` |
| Golpes | `golpe`, `puno`, `metal`, `vidrio`, `madera`, `suave`, `campana`, `plato`, `paso` |
| Videojuegos | `laser`, `zap`, `poder`, `subida`, `arcade`, `bip`, `perder` |
| Objetos | `moneda`, `monedas`, `fichas`, `carta`, `dado`, `pagina`, `rechinido`, `puerta` |
| Jingles cortos | `victoria`, `nivel`, `revelacion`, `chiste` |
| De siempre | `pop`, `tick`, `ding`, `glitch`, `whoosh`, `teclas`, `radio`, `obturador`, `notificacion`, `latido`, `alarma`, `reloj`, `caja` |
