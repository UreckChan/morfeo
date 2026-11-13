# Historias, series y fórmulas

Morfeo trae las **fórmulas de historia** medidas en videos de referencia, las **piezas** que cada una necesita
(teléfono, llamada, votación, globo, cintillos, multitudes, objetos que se arman) y una **base lista** para empezar
cada una sin escribir desde cero.

## Fórmulas

```bash
npx morfeo formulas                                  # la lista con su gancho de ejemplo
npx morfeo guion "cómo funciona un elevador" --formula construiste
npx morfeo nuevo-video mi-serie --look serie         # una base que ya renderiza
```

| `formula` | Para | Base (`--look`) | Duración |
|---|---|---|---|
| `construiste` | cómo funciona una obra o máquina: "Si haces X… pero… así que…" → "¡Felicidades, construiste X!" | `construiste` | 90–120 s |
| `recomendable` | "Lo recomendable es X, y no [algo absurdo con cifra]", tres rondas | — | 45–60 s |
| `escalada` | un objeto que suma piezas porque cada arreglo trae otro problema | `escalada` | 40–55 s |
| `supervivencia` | "con uno haz A y con el otro nunca", cómo distinguirlos | — | 45–60 s |
| `experimento` | dilemas y "¿qué pasa si…?" que se resuelven contando días o años | — | 45–60 s |
| `misterio` | un hecho raro que escala por días y un giro final | — | 50–65 s |
| `demuestralo` | algo que el espectador prueba con su cuerpo, explicado en rayos X | — | 30–45 s |
| `mito` | creencia con truco, prueba y comparación lado a lado | `mito` | 50–65 s |
| `roast` | una conducta explicada con un animal ("tu amigo el rata y el pavo real") | — | 45–60 s |
| `serie` | capítulos donde el público vota A o B | `serie` | 70–115 s |
| `biografia` | una vida año por año con un secreto como gancho | `biografia` | 90–180 s |

Pon `formula: 'serie'` en el guion y `npx morfeo revisar` te da consejos propios de esa fórmula (por ejemplo, que
la serie termine con una decisión A/B o que "construiste" tenga suficientes "pero").

## Series interactivas

```js
{say: 'La mayoría de ustedes votó que no tomaras el metro.', capas: [
	{tipo: 'recuento', cabecera: 'VOTACIÓN · CAPÍTULO 1', opciones: [{texto: 'NO LO TOMAS', valor: 90}, {texto: 'LO TOMAS', valor: 10}]}]},
{say: 'El teléfono dice que pasaron cinco años.', capas: [{tipo: 'bloqueo', hora: '08:14', anio: [2026, 2031], anioEn: 'cinco'}]},
{say: 'A medianoche, el teléfono suena.', capas: [{tipo: 'llamada', estado: 'entrante', nombre: 'Yo'}]},
{say: '¿Le abres a Darío?', capas: [{tipo: 'capitulo', serie: 'LLAMADA PERDIDA', capitulo: 'Capítulo 2', pregunta: '¿LE ABRES A DARÍO?',
	opciones: [{texto: 'ABRIR'}, {texto: 'NO ABRIR'}], siguiente: 'capítulo 3', horario: 'Mañana · 15:30'}]},
```

| Capa | Qué es |
|---|---|
| `bloqueo` | Pantalla de bloqueo: fecha, hora gigante, año (con `anio: [2026, 2031]` salta en `anioEn`) y `notificaciones` que entran en su palabra |
| `llamada` | `estado: 'entrante'` (botones que laten), `'curso'` (contador y onda de voz) o `'terminada'` (duración fija) |
| `recuento` | Lo que votaron en el capítulo anterior, con la ganadora resaltada |
| `capitulo` | Fin de capítulo: la pregunta, opciones A/B, "comenta tu opción" y el horario del siguiente |
| `vigilancia` | Vista de cámara encima de todo: REC, hora que corre, esquinas y mira |

## Documental y biografías

| Capa | Qué es |
|---|---|
| `tierra` | Globo que gira hasta `lat`/`lon` y clava un pin con su `etiqueta` ("TAIWÁN · 1963") |
| `cintillo` | Nombre y cargo de una persona, abajo a la izquierda |
| `fecha` | Tarjeta de año que cuenta desde `de` hasta `anio`, con `pie` ("SE CASARON") |
| `calendario` | Hoja que voltea de `de` a `a` con su `titulo` ("MESES", "AÑOS") |
| `dividida` | Pantalla A \| B (o arriba/abajo con `vertical`): cada mitad con su `etiqueta` y sus `capas` |

### Varios lugares en un video

Una biografía o una historia que cambia de sitio no cabe en un solo mundo. Define `lugares` y elige uno por escena:

```js
lugares: {
	ciudad: [{tipo: 'componente', nombre: 'MiMundo', props: {set: 'ciudad'}}],
	casa: [{tipo: 'componente', nombre: 'MiMundo', props: {set: 'casa'}}],
},
scenes: [
	{say: '…', lugar: 'ciudad'},
	{say: '…'},                                  // sigue en la ciudad
	{say: '…', lugar: 'casa', transicion: 'barrido'},
],
```

Cada lugar tiene su propia cámara (`toma`); al cambiar de lugar se corta o se usa la `transicion` de la escena.

## Objetos que se arman (kit 3D)

Para "construiste" y "escalada", las piezas llegan en su palabra:

```tsx
import {Aparece, Asiento, Lienzo3D, Mano3D, Motor, Multitud3D, Rueda} from 'morfeo/kit';

<Aparece t={t} en={cuando('ruedas')} desde="arriba">          {/* cae y rebota; también 'crece', 'izq', 'der', 'abajo' */}
	<Rueda pos={[-0.5, 0.25, 0]} />
</Aparece>
<Multitud3D t={t} n={600} ancho={18} fondo={12} destacar={[0, 13]} brinca />
<Mano3D t={t} pos={[0.35, 0.85, 2.6]} sostiene="control" aprieta={cuando('aprietas')} />
```

`Multitud3D` dibuja miles de figuras en una sola pieza (sin costo extra) y entra fila por fila; `Mano3D` es la mano
en primera persona que sostiene un control o un móvil y aprieta en su palabra.
