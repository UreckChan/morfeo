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

```tsx
import {Cielo, Pinos, Paralaje} from 'morfeo/kit';          // 2D ilustrado, dentro de un <svg>
import {Lienzo3D, Terreno, Tubo, Mesa, Pila} from 'morfeo/kit';   // 3D: maqueta de día o mesa con luz cálida
```

- **2D:** cielo, pinos, suelo, pasto, luna y `Paralaje` (capas que se mueven distinto con la cámara).
- **3D:** `Lienzo3D` (`luz="dia"` o `luz="calida"`) con `Terreno`, `Tubo` (con agua), `Arbol`, `Casa`, `Agua`, `Mesa`,
  `Pila` y `Bloque`. En 3D la cámara va dentro del componente: una toma por escena según `escena`/`tEscena`.
- Usa un solo `Lienzo3D` por video y anima todo con `t` (nada de `useFrame`).

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
