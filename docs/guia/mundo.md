---
description: 'Un mundo por video en Morfeo: cámara que viaja, anotaciones pegadas a los objetos, rótulos, rayos X y revisión de estructura.'
---

# Mundo, anotaciones y estructura

Novedad de la 0.2. Lo que hace que un video se vea "producido" y no como objetos sueltos al centro de un fondo.

## Un mundo por video

En vez de cambiar de fondo en cada escena, el video vive en **un mundo** (normalmente un componente tuyo, más grande
que el cuadro) y la cámara viaja entre **tomas**: general → detalle → primer plano.

```js
export default {
	estilo: 'ilustrado',
	mundo: [{tipo: 'componente', nombre: 'MiBosque', x: 540, y: 960, entrada: 'ninguna'}],
	scenes: [
		{say: 'En lo profundo del bosque…', toma: {x: 1080, y: 960, zoom: 0.6}},
		{say: 'vivía un oso.', toma: {x: 700, y: 1100, zoom: 1.2, duracion: 1.2}},
		{say: 'que no podía dormir.', toma: {a: {zoom: 1.5}}},
	],
};
```

- `toma`: punto del mundo que queda al centro (`x`, `y`), `zoom`, `giro`. La cámara viaja desde la toma anterior en
  `duracion` segundos (`corte: true` salta) y luego deriva despacio (`deriva`) o se mueve hasta `a`.
- El componente del mundo recibe `t`, `cuando('palabra')`, `escena` (1, 2, 3…), `tEscena`, `inicios` y `camara`.
- Una capa con `enMundo: true` vive en coordenadas del mundo y se mueve con la cámara.

## Kit para escenas a medida

La forma más rápida de empezar es con una base que ya renderiza:

```bash
npx morfeo nuevo-video mi-video --look 2d     # o --look 3d
```

Crea `guiones/mi-video.mjs` y `escenas/MundoMiVideo.tsx` (ya registrado en `componentes`) con la estructura completa:
gancho, etiquetas, pregunta, revelación y cierre. Cambia el texto y el mundo a partir de ahí.

```tsx
import {Persona2D, Globo, CiudadNoche, Paralaje} from 'morfeo/kit';       // 2D, dentro de un <svg>
import {Lienzo3D, Persona3D, Ciudad, Camino, Terreno, Tubo} from 'morfeo/kit';   // 3D
import {GraficaBarras, GraficaLinea, Comparacion, Lupa} from 'morfeo/kit';  // gráficas 2D
```

Cualquier tema puede ir en 2D o en 3D; el kit no ata el look al tipo de video.

- **Personajes 2D:** `Persona2D` (piel, pelo, `peinado`, ropa, `complexion`, `accesorio`), con `expresion` (feliz, triste,
  enojado, sorpresa, miedo, dormido, pensativo, neutral), `pose` (parado, caminar, señalar, brazosArriba, pensar, cruzado,
  sentado), `estados: [{en, expresion, pose}]` para cambiar con la historia y `habla: [[inicio, fin]]` para mover la boca.
  `silueta` la vuelve una figura de un solo color. `Multitud` pone varias en filas y `Globo` es un globo de diálogo
  (`en`, `hasta`, `pensar`).
- **Escenarios 2D:** `CiudadNoche`, `Cuarto`, `Campo`, `Calle`, `Oficina` y `Mar`, más anchos que el cuadro para que la
  cámara los recorra. Piezas sueltas: cielo, estrellas, luna, montañas, pinos, suelo, pasto, luciérnagas, `ConoLuz` y
  `Paralaje` (capas que se mueven distinto con la cámara).
- **3D:** `Lienzo3D` (`luz="dia"` o `luz="calida"`) con `Persona3D` (con cara y las mismas expresiones y poses),
  `Ciudad`, `Camino`, `Cuarto3D`, `Terreno`, `Tubo` (con agua), `Arbol`, `Casa`, `Agua`, `Mesa`, `Pila` y `Bloque`; para
  dioramas, las piezas de [Maqueta 3D](./maqueta). En 3D la cámara va dentro del componente: una toma por escena según
  `escena`/`tEscena`.
- **Gráficas 2D:** `GraficaBarras`, `GraficaLinea`, `Comparacion` (antes/después) y `Lupa`; se dibujan solas a partir de `en`.
- Usa un solo `Lienzo3D` por video y anima todo con `t` (nada de `useFrame`).
- Con `show`, los momentos por palabra se buscan en el subtítulo: si dice "1.560.000", usa `en: '1.560.000'`, no `'millón'`.
  Al renderizar, Morfeo avisa con `!` cuando una palabra no aparece.

## Anotaciones

Señalan y explican lo que hay en pantalla. Son capas como cualquier otra (`en`, `entrada`, `sigue: 'id'` para pegarse a otra capa):

| Capa | Para qué |
|---|---|
| `dato` | número que cuenta con su unidad (`valor`, `de`, `unidad`) |
| `medida` | cota entre dos puntos (`de`, `a`, `texto`) |
| `trazo` | línea o flecha que se dibuja (`puntos`, `flecha`, `punteado`) |
| `contorno` | rectángulo, círculo o aro alrededor de algo |
| `fuente` | cita de la fuente del dato |
| `seccion`, `insignia`, `sello` | etiquetas de sección, insignias y sellos ("ENVIADO") |
| `nombre`, `accion` | "DOÑA ROSA · la mamá", "▶ Te despiertas" |
| `cursor` | cursor que va a un punto y hace clic |
| `terminal` | ventana de terminal que escribe líneas |

## Texto en dos niveles

- **Subtítulo** chico arriba (tipo `seleccion` en documental, ilustrado, historia y mesa). `claves: ['palabra']` en la
  escena elige la palabra resaltada.
- **Rótulo**: 2–4 palabras grandes que resumen el momento: `rotulo: '¿CUÁNTO *SUBIÓ*?'`, `rotuloEn: 'palabra'`.
- **Serie**: `serie: 'MI SERIE · PARTE 5'` en el video pone una pastilla fija arriba.

### Estilos de rótulo

| `rotuloEstilo` | Cómo se ve | Opciones |
|---|---|---|
| `normal` / `contorno` | Grande al centro; con contorno, blanco con borde oscuro | `rotuloInclinar` |
| `pastilla` | Caja oscura inclinada: "¡CUIDADO!" | `rotuloInclinar` |
| `sello` | Sello de goma inclinado con tinta gastada que cae de golpe (y suena): "¡SIN LUZ!" | `rotuloColor` (rojo por defecto), `rotuloInclinar`, `rotuloY` |
| `paso` | Titular arriba a la izquierda con la clave en color e insignia numerada | `rotuloPaso: 3`, `rotuloColor` |
| `pixel` | Letra de videojuego en una caja de color; las letras salen una por una | `rotuloColor: 'verde'` (bien) o `'rojo'` (mal) |

`rotuloColor` acepta `rojo`, `verde`, `azul`, `amarillo`, `naranja`, `gris`, `negro`, `morado` o cualquier color CSS.

```js
{say: 'Y el portón se fue rodando por la calle.', rotulo: '¡SE FUE RODANDO!', rotuloEstilo: 'sello', rotuloEn: 'rodando'}
{say: 'Primero, un sensor bajo el pavimento.', rotulo: 'UN *SENSOR* BAJO TIERRA', rotuloEstilo: 'paso', rotuloPaso: 1}
{say: 'Diez años después, duerme mejor.', rotulo: 'RESULTADO', rotuloEstilo: 'pixel', rotuloColor: 'verde'}
```

Con subtítulo `palabra` o `pop`, `tema: {subtitulos: {coloresClave: ['#FF3B30', '#FF9F0A', '#FFD60A', '#34C759']}}`
pinta cada palabra clave del siguiente color de la lista.

## Rayos X, plano y holograma

Para "abrir" algo y mostrar lo de adentro, una escena cambia la imagen con un barrido justo en una palabra:

```js
{say: 'Si lo vieras por dentro, su corazón no para.', modo: 'rayosx', modoEn: 'dentro', modoHasta: 'para+0.4'}
{say: 'Así que dibujamos el plano de la cueva.', modo: 'plano', modoEn: 'plano'}
{say: 'Imagina la ciudad entera conectada.', modo: 'holograma'}
```

- `rayosx`: cian brillante sobre negro. `plano`: azul de plano con líneas blancas y rejilla. `holograma`: azul
  translúcido con rejilla y escaneo.
- Cambia el mundo, el fondo y las capas; el rótulo y los subtítulos se quedan igual. Funciona en 2D, en 3D y con tus componentes.
- Si la escena siguiente tiene el mismo `modo`, sigue sin volver a barrer. `modoHasta` vuelve a la imagen normal.
- En los estilos claros (`3d`, `maqueta`, `explicativo`, `infografia`, `minimal`) la imagen se invierte para que el
  fondo quede oscuro; `modoInvertir: true | false` lo fuerza.
- Se luce más en tomas con objetos que en un primer plano liso.

## Cierre que pide algo

```js
{type: 'cta', pide: 'comenta', palabra: 'CAJA', say: 'Escribe CAJA si todavía las guardas.'}
{type: 'cta', pide: 'comparte', a: 'tu amigo gamer', say: 'Mándaselo a tu amigo gamer.'}
```

## Revisar la estructura

```bash
npx morfeo revisar [id]   # gancho, ritmo, preguntas, rótulos y cierre
npx morfeo hoja <id>      # hoja de contacto PNG en salida/<id>-hoja.png (--desde 8 --hasta 11)
```

Las reglas salen de medir videos cortos con buen desempeño:
- Nadie abre con título ni logo: el sujeto está desde el primer cuadro y la voz arranca de inmediato.
- Gancho en segunda persona ("Imagina que…", "¿Y si tu…?") o con una cifra imposible.
- Algo nuevo en pantalla cada 2–4 s (o un corte cada 2,5–5 s).
- Una pregunta antes de revelar el dato fuerte.
- Duración típica: 30–65 s.

`render` muestra estos consejos al preparar (no detienen nada); se apagan con `render: {consejos: false}` en el config.

## Transiciones y acabado

- Transiciones nuevas: `barrido`, `empuje`, `mascara` y `destello`.
- En el tema: `movimiento: {curva: 'resorte' | 'seca' | 'suave'}` y `post: {tinte, luz, desenfoqueBordes}` para un acabado de cine.
