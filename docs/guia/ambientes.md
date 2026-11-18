---
description: 'Ambientes 3D listos (de noche: cuarto gamer, sala, arcade; de día: laboratorio, salón, parque, barrio) como fondo vivo de cualquier video, con planos de cámara, cortes en las palabras clave, persona que reacciona, postproceso y sonido de fondo.'
---

# Ambientes 3D (fondo vivo)

Un video que solo pone texto y objetos sobre un color liso se siente como una presentación. Un **ambiente** es un set
3D completo, ya armado y con vida, que sirve de fondo a cualquier video, sea 2D o 3D:

```js
export default {
	estilo: 'minimal',             // sirve con cualquier estilo del motor de capas
	ambiente: 'cuarto-gamer',      // o {nombre: 'sala', persona: true}
	scenes: [
		{say: 'Imagina que juegas una hora al día.'},                        // cada escena toma otro ángulo sola
		{say: '¿Cuánto es en diez años?', plano: 'persona'},                  // o el plano que tú digas
		{say: 'Son 3650 horas.', capas: [{tipo: 'contador', a: 3650, sufijo: ' h'}]},
	],
};
```

Hay ambientes de noche y de día. En los de noche, con un estilo de texto oscuro (como `explicativo`), el texto pasa solo a claro, y una sombra suave arriba deja leer subtítulos y titular aunque el set sea claro.

| Ambiente | Qué trae | Planos |
|---|---|---|
| `cuarto-gamer` | Escritorio con tele encendida, consola y control, silla gamer, estante con juegos, pósters, tira LED, ventana con lluvia, cama, polvo en la luz | `general`, `persona`, `escritorio`, `tele`, `consola`, `estante`, `ventana`, `contrapicado`, `cenital` |
| `sala` | Sillón frente a la tele, mesa de centro, lámpara de pie, plantas, cuadros, ventana con lluvia y un gato que respira | `general`, `persona`, `espalda`, `tele`, `sillon`, `gato`, `ventana`, `lampara` |
| `arcade` | Filas de maquinitas con pantallas animadas, alfombra que brilla, letreros de neón y focos de techo | `general`, `persona`, `maquina`, `espalda`, `pasillo`, `contrapicado` |
| `taller` | Mesa de reparación con un control abierto, cautín humeando, lupa con brazo, tablero de herramientas, lámpara de brazo y repisa con cajas | `general`, `persona`, `mesa`, `control`, `tablero`, `repisa`, `cenital` |
| `oficina` | Dos escritorios con monitor, ventanal de atardecer con la ciudad, pizarrón con gráfica, garrafón y plantas | `general`, `persona`, `monitor`, `ventana`, `pizarron`, `companero` |
| `tienda` | Tienda de videojuegos: pared de juegos, mostrador con caja y vitrina, tele de demostración, isla de ofertas y letrero de neón | `general`, `persona`, `estantes`, `mostrador`, `tele`, `isla` |
| `calle` | Calle de noche con lluvia: fachadas con ventanas encendidas, un local con vitrina, toldo y letrero, farola, banca y un coche estacionado | `general`, `persona`, `vitrina`, `edificios`, `coche`, `farola` |

**De día:**

| Ambiente | Qué trae | Planos |
|---|---|---|
| `laboratorio` | Mesas con matraces que burbujean, microscopio, gradilla con tubos, campana de extracción, pantallas con gráficas y ventanal. La persona trae bata | `general`, `persona`, `mesa`, `matraces`, `microscopio`, `pantallas`, `ventana`, `cenital` |
| `salon` | Salón de clases: pizarrón con gis, pupitres, escritorio del maestro, reloj, mapa y ventanas con sol | `general`, `persona`, `pizarron`, `pupitres`, `ventana`, `reloj`, `mapa` |
| `parque` | Pasto, camino, árboles, fuente con agua, banca, faroles, columpio, pájaros y nubes | `general`, `persona`, `fuente`, `camino`, `banca`, `arboles`, `columpio`, `cielo` |
| `barrio` | Calle de día con casas de colores, tiendita con toldo, coches estacionados, uno que pasa, árboles y nubes | `general`, `persona`, `tiendita`, `casas`, `coche`, `calle`, `cielo` |

**Paisajes generados** (el terreno sale de una función, con agua que ondea, vegetación y cámara de dron que se mueve):

| Ambiente | Qué trae |
|---|---|
| `isla` | Isla con playa, palmeras, árboles, mar y un barco |
| `montana` | Montaña nevada en la cima, cerros, pinos y pradera |
| `playa` | Arena que baja al mar, palmeras, olas y velero |
| `desierto` | Dunas, cactus y un sol grande |
| `bosque` | Lomas cubiertas de árboles |
| `nevado` | Todo blanco, pinos con nieve y nevando |
| `oceano` | Mar abierto con islotes y un barco |
| `ciudad` | Cuadras de edificios de día |

Sus planos se mueven: `general`, `dron` (cruza de lado a lado), `acercar` (se acerca a lo importante), `persona`,
`espalda`, `cielo` y `rodear`.

## Plano técnico (`plano`)

El look de plano de ingeniería o programa de CAD: fondo azul marino con cuadrícula, un rascacielos de alambre azul
claro con caras translúcidas que **se arma piso por piso**, una grúa torre que sube con él, anotaciones en cajas
naranjas con flecha y una barra de CAD abajo ("Comando: _LINE_", que va cambiando a EXTRUDE, ARRAY, COPY…).

```js
export default {
	estilo: 'explicativo',
	ambiente: {
		nombre: 'plano',
		etiquetas: [
			{ancla: 'cimientos', texto: 'CIMIENTOS 40 M', lado: 'der', escena: 1},
			{ancla: 'cima', texto: '381 M', lado: 'der', escena: 4, en: 'metros'},
		],
	},
	scenes: [
		{say: 'Así se arma un rascacielos, empezando por los cimientos.', plano: 'base'},
		{say: 'Cada piso sube en acero y concreto.', plano: 'contrapicado'},
		{say: 'Una grúa torre crece junto con el edificio.', plano: 'grua'},
		{say: 'Hasta llegar a trescientos ochenta y un metros.', show: 'Hasta llegar a 381 metros.', plano: 'cima'},
	],
};
```

| Opción | Qué hace |
|---|---|
| `armado: {pisos, cada, en}` | Cuántos pisos (20 por defecto, hasta 60), segundos entre piso y piso y cuándo empieza (palabra o segundos). Sin `cada`, el edificio termina hacia el 80 % del video, antes del cierre |
| `comando: 'LINE'` | Deja fijo el comando de la barra de CAD; sin él, va cambiando |
| `etiquetas` | En este ambiente salen como cajas naranjas de CAD. Anclas: `cimientos`, `base`, `podio`, `piso`, `cima`, `aguja`, `grua` |

Planos: `general`, `base`, `contrapicado`, `cima`, `grua`, `rodear`, `cenital`.

No confundir con `modo: 'plano'` (un filtro azul que se pone sobre cualquier escena): el ambiente `plano` es un set
propio, con la pieza que se arma. En tus componentes, `Alambre` (caja o cilindro de alambre que crece con `k` de 0 a 1),
`Cuadricula` y `BarraCAD` vienen en `morfeo/kit`, y `Lienzo3D post="plano"` hace que las líneas brillen.

## Que el lugar siga a la historia: `ambiente: 'auto'`

Con `ambiente: 'auto'` cada escena va al lugar del que habla: "llegaron a una **isla**" → isla, "subieron la
**montaña**" → montaña, "en la **escuela**" → salón, "hicieron **fila** en la **tienda**" → tienda, "en el
**laboratorio**" → laboratorio, "juegas con tu **consola**" → cuarto gamer. Si una escena no nombra ningún lugar, se
queda donde iba. `ambiente: {nombre: 'auto', persona: 'ana'}` lleva la misma persona a todos lados.

## Clima, estaciones y desastres

```js
ambiente: {nombre: 'barrio', estacion: 'otono', clima: 'lluvia'}
{say: 'Y entonces se inundó todo.', ambiente: {nombre: 'barrio', clima: 'tormenta', desastre: 'inundacion', desastreEn: 'inundó'}}
```

- `estacion`: `primavera` (árboles con flores y pétalos), `verano`, `otono` (hojas naranjas que caen; sin tilde),
  `invierno` (nieve en el piso y cayendo).
- `clima`: `lluvia`, `nieve`, `tormenta` (con relámpagos), `niebla`, `viento` (hojas volando). El cielo se nubla.
- `desastre`: `inundacion` (el agua sube y flotan cosas), `incendio` (fuego y humo), `sismo` (todo tiembla),
  `tornado`, `volcan` (erupción a lo lejos), `meteorito` (cae y destella), `calor`. `desastreEn` (palabra o
  segundos) dice cuándo empieza; sube en unos 3 segundos.
- `hora` en los de día: `'amanecer'`, `'atardecer'`, `'noche'` o un número de 0 a 24.
- Cada uno suena: lluvia, truenos, viento, fuego que truena, agua corriendo o el retumbo del sismo.

## Filas y letreros

- `fila: 6` forma una fila de personas distintas (en la tienda frente al mostrador, en el barrio hacia la tiendita…)
  y agrega el plano `fila` para verla de lado.
- `letrero: 'VIDEOJUEGOS'` pone el nombre de la tienda o marca en su letrero (`{texto, fondo, color}` para cambiar
  colores).

## Cambiar de lugar dentro de un video

Una escena con su propio `ambiente` cambia de lugar ahí, y las siguientes se quedan en él hasta que otra diga otro.
Al llegar a un lugar nuevo la escena abre con el plano `general`, para que se vea dónde estamos:

```js
ambiente: {nombre: 'laboratorio', persona: true},
scenes: [
	{say: 'En el laboratorio descubrieron algo raro.'},
	{say: 'Y lo fueron a probar al parque.', ambiente: 'parque'},
	{say: 'Al otro día lo explicaron en clase.', ambiente: {nombre: 'salon', persona: 'gus'}},
],
```

Lo que diga el `ambiente` del video (persona, post…) vale para todos los lugares; cada escena puede cambiarlo.

Todo se mueve aunque la escena no haga nada: la tele parpadea y alumbra la pared, el LED cambia de color, llueve en la
ventana, flota polvo en la luz.

## Cámara

- **Un ángulo por escena**: sin `plano`, cada escena toma el siguiente de la lista sin repetir el anterior. Entre
  escenas la cámara corta en seco (sin viajar a través de los muebles).
- **Escenas con capas al centro** (contador, checklist, tarjeta…) usan planos abiertos, sin una cara que tape la capa.
- **Cortes en la palabra clave**: si una escena dura más de 3,5 s, la cámara corta en seco a otro ángulo del mismo set
  en la primera de sus `claves` (en las de más de 7 s sin claves, a la mitad). `cortes: [2.1]` los fija y
  `cortes: false` los apaga. Cada corte suena con un whoosh suave.
- **Lente despejado**: si algo queda pegado a la cámara (una cabeza o un mueble), la cámara avanza hasta pasarlo.
- **Golpe de énfasis**: cuando cae un rótulo `sello` o `pixel`, todo el cuadro da un pequeño zoom con sacudida.
  `golpe: false` en la escena lo quita, y `golpe: true` lo pone en cualquier rótulo.

## Textos y capas encima

- Con ambiente, los **subtítulos van más abajo** (cerca de y 1380) y arriba hay una sombra para el rótulo. Pon `fecha`,
  `cintillo` y tarjetas en la parte de arriba o en medio (y 560–640): abajo se enciman con el subtítulo.
- El rótulo `pixel` usa una letra de videojuego que no trae flechas (↑ ↓ ← →): salen como rayas. Para flechas, usa
  `rotuloEstilo: 'pastilla'` o `'contorno'`.
- En una capa `modelo` (por ejemplo `{tipo: 'modelo', forma: 'alcancia'}`), el tamaño en pantalla es `ancho` (en px);
  `tamano` es la escala del objeto (1 = normal).

## Persona

Con `persona: true` aparece una persona en su lugar del set (sentada frente a la tele, en el sillón o parada en la
maquinita) y **reacciona a lo que se dice**: pensativa en las preguntas, sorprendida con cifras o exclamaciones y
feliz con "felicidades". `reaccionar: false` la deja quieta.

**Con nombre:** `persona: {personaje: 'gus', nombre: 'Satoru Iwata', sub: 'presidente de Nintendo'}` le pone una
etiqueta arriba de la cabeza con su nombre y cargo.

**No siempre es la misma persona.** Hay 10 personajes con distinta piel, peinado, ropa, lentes o barba, y cada video
toma uno según su título. Para elegirlo: `persona: 'ana'`. Para ajustarlo: `persona: {personaje: 'ana', ropa: '#30A46C'}`.

| Personaje | Cómo es |
|---|---|
| `beto` | Pelo corto, sudadera azul |
| `ana` | Pelo largo, playera roja |
| `caro` | Pelirroja de cola de caballo, con lentes |
| `dani` | Pelo chino, playera amarilla |
| `eli` | Rubia de chongo, playera morada |
| `fer` | Gorra roja y barba, sudadera negra |
| `gus` | Señor calvo con barba gris y lentes |
| `lu` | Pelo largo, piel morena, playera naranja |
| `memo` | Gorra azul, playera turquesa |
| `sofi` | Cola de caballo, playera rosa |

También se ajusta pieza por pieza: `peinado` (`corto`, `largo`, `cola`, `chongo`, `chino`, `calvo`, `gorra`), `lentes`,
`barba`, `bata` (en el laboratorio va puesta), `piel`, `pelo`, `ropa` y `pantalon`. En un componente propio,
`Persona3D` de `morfeo/kit` acepta lo mismo.

## Primera persona (POV)

Para que el espectador sea el protagonista, `pov` pone sus manos en cámara en todas las tomas:

```js
ambiente: {nombre: 'cuarto-gamer', pov: {sostiene: 'movil', manos: 'ambas'}}
```

`sostiene`: `'movil'`, `'control'` o `'nada'`; `manos`: `'derecha'` o `'ambas'`; `camina: true` las mece al paso.
Combínalo con `hora` (reloj con lugar) y `habla` para series narradas en segunda persona. En un mundo propio, el
componente `ManosPOV` de `morfeo/kit` hace lo mismo con tus `tomas`.

## Postproceso y sonido

- Los ambientes llevan el postproceso `'cine'`: el fondo se desenfoca y lo que mira la toma queda nítido, las pantallas
  y luces brillan, y hay viñeta. `ambiente: {nombre: 'sala', post: 'suave'}` lo cambia (`'miniatura'` = efecto
  maqueta, `false` = sin postproceso).
- Cada ambiente suena, muy bajito: lluvia y el juego de la tele en el cuarto, lluvia y murmullo en la sala, maquinitas en el arcade,
  herramientas en el taller, teclas con aire acondicionado en la oficina, murmullo y la tele de demostración en la
  tienda, lluvia, viento y algún coche lejano en la calle, extractor y burbujeo en el laboratorio, murmullo y pájaros en el
  salón, pájaros y la fuente en el parque, y pájaros con coches que pasan en el barrio.
  Va bajito y se aparta cuando habla la voz. `ambiente: {nombre: 'arcade', sonido: false}` lo apaga.

## En tu propio componente

```tsx
import {Ambiente} from 'morfeo/kit';

<Ambiente nombre="sala" t={t} escena={escena} tEscena={tEscena} inicios={inicios} persona
	etiquetas={[{ancla: 'gato', texto: 'MICHI', escena: 3, en: 0.5}]}>
	{/* lo tuyo, dentro del mismo set */}
</Ambiente>
```

Las etiquetas pueden apuntar a un objeto del set por nombre (`ancla: 'tele'`, `'consola'`, `'gato'`…).

### Piezas para tus mundos

`Tele3D` (tele encendida que alumbra), `Gato3D`, `Chip` (con `calor`), `Ventilador` (`tipo: 'pie' | 'pc'`),
`Escritorio`, `Puerta` (`abierta`), `Audifonos`, `Nube3D` (polvo o humo que se apaga solo al acabar su tramo) y
`tomaA(objetivo, {tipo: 'detalle' | 'media' | 'general', tam, desde})`, que calcula una toma donde el objeto cabe
completo en el cuadro vertical.

En `Lienzo3D`: `post` (postproceso), `despejado` (lente despejado) y `cuando` (para usar palabras en el `en` de las
etiquetas: la pastilla sale junto con el objeto que llega en esa palabra).
