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
| `marca` | `tam`: tu avatar |

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

## Más

- `personaje`: ver [Series y personajes](./series#personajes).
- `modelo` y `escena3d`: ver [3D](./3d).
- `componente`: ver [Componentes propios](./componentes).
