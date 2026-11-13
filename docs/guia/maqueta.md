---
description: 'Explicadores en un diorama 3D low-poly con Morfeo: maqueta con corte de tierra, tráfico, rayos X, etiquetas 3D y tarjetas de datos.'
---

# Maqueta 3D (diorama)

Explicadores largos (90–130 s) dentro de **una sola maqueta 3D low-poly**: una isla flotante con el corte de la tierra
a la vista, y la cámara cortando cada 2–3 s entre ángulos del mismo mundo (general, detalle, a ras de suelo, por dentro).
Es el formato de "Imagina que eres un castor…" o "¿Cómo se hace una caseta de cobro?".

## El video

```js
// guiones/semaforo.mjs
export default {
	estilo: 'maqueta',
	voice: 'em_alex',
	music: 'chillpop',
	mundo: [{tipo: 'componente', nombre: 'MiCruce', entrada: 'ninguna',
		props: {ambulancia: {tipo: 'recurso', buscar: 'ambulancia', estilo: '3d'}}}],
	scenes: [
		{say: 'Imagina que eres un semáforo.', claves: ['semáforo']},
		{say: 'Si te equivocas, se arma el caos.', rotulo: '¡CAOS!', rotuloEstilo: 'pastilla'},
		{say: 'Cambiabas cada noventa segundos.', show: 'Cambiabas cada 90 segundos.', rotulo: 'CADA *90 S*',
			capas: [{tipo: 'cronometro', de: 0, a: 90, x: 540, y: 700}]},
		// ...una escena por toma de cámara, de 2 a 4 s cada una
		{type: 'cta', pide: 'comenta', palabra: 'VERDE'},
	],
};
```

- Un **recurso** dentro de `props` llega al componente ya descargado (`props.ambulancia.src`): úsalo con `<Modelo>`.
- `claves` elige la palabra que sale en amarillo; `rotulo` es el texto grande de arriba.

## El mundo

```tsx
// escenas/MiCruce.tsx  (regístralo en morfeo.config.mjs → componentes)
import {Lienzo3D, Maqueta, Trafico, Modelo, Persona, Corte, Bloque, type Toma3D, type Etiqueta3D} from 'morfeo/kit';

const TOMAS: Toma3D[] = [
	{pos: [-17, 14, 27], mirar: [0, -1, 3], fov: 40, a: {pos: [-15, 12.5, 24]}}, // 1 · general
	{pos: [-1, 2.6, 13], mirar: [-7, 0.4, 7], corte: true},                         // 2 · la fila
	// una por escena
];
const ETIQUETAS: Etiqueta3D[] = [{escena: 2, pos: [-2.4, 3.2, 8.2], texto: 'SEMÁFORO', color: '#2D7BFF', lado: 'der'}];

export default function MiCruce({t, escena, tEscena, inicios, ambulancia}) {
	const rojo: [number, number][] = [[inicios[1], inicios[2]]]; // rojo durante la escena 2
	return (
		<Lienzo3D tomas={TOMAS} escena={escena} tEscena={tEscena} inicios={inicios} hora={12} etiquetas={ETIQUETAS}>
			<Maqueta ancho={24} fondo={18} libres={[[0, 6, 24, 4.6]]} />
			<Bloque tam={[24, 0.05, 3.2]} pos={[0, 0.03, 6]} color="#3E4149" />
			<Trafico camino={[[-11.6, 0.06, 6.8], [11.6, 0.06, 6.8]]} t={t} n={5} pluma={{d: 8.7, cerrada: rojo}} />
			<Persona pos={[5, 0, 7.6]} pose="saludar" t={t} />
			{ambulancia ? <Modelo src={ambulancia} pos={[0, 0, 6.8]} rot={[0, 90, 0]} tam={2.6} /> : null}
		</Lienzo3D>
	);
}
```

| Pieza | Para qué |
|---|---|
| `Maqueta` | Isla con estratos (`capas`), pasto, flores y matas; `libres` deja zonas despejadas para calles o ríos |
| `Modelo` | Un `.glb` tuyo o de la biblioteca: lo escala a `tam`, lo apoya en el suelo y reproduce su `animacion` con `t` |
| `Persona` | Personaje low-poly: `pose` `parado`, `saludar`, `caminar`, `senalar`, `celebrar`; casco y chaleco opcionales |
| `Coche`, `Trafico` | Coches por un `camino`; con `pluma: {d, cerrada: [[desde, hasta]]}` se detienen y hacen fila |
| `Pluma` | Barrera de caseta que sube con `abierta` (0..1) |
| `Corte` | Rayos X: recorta lo que envuelve para ver adentro (`k` de 0 a 1) |
| `Tubo`, `Gotas` | Tuberías o cables transparentes con lo que llevan dentro, gotas que caen |
| `Confeti3D`, `Linterna` | Festejo y foco de luz con su cono (de noche) |
| `Arbol`, `Arbusto`, `Casa`, `Bloque`, `Agua`, `Piedras` | Lo básico del paisaje |

`Lienzo3D`:
- `hora`: `12`, `'atardecer'`, `'noche'` o cualquier número de 0 a 24. Anímala para que anochezca.
- `etiquetas`: pastilla de color con una flecha que apunta a un punto 3D y lo sigue cuando la cámara se mueve. Usa `escena` para mostrarla solo en esa escena y `en` (segundos) para que entre a destiempo.
- `encima`: elementos en coordenadas de pantalla.

Un solo `Lienzo3D` por video. Todo se calcula con `t`, `escena` y `tEscena`; nada de `useFrame`.

## Tarjetas de datos

Son capas que se llenan o palomean solas:

| Capa | Ejemplo |
|---|---|
| `reloj` | `{tipo: 'reloj', de: 0, a: 22, max: 24, segmentos: [[0, 7, '#2D3A6B'], [7, 19, '#FFC928']]}` |
| `cronometro` | `{tipo: 'cronometro', de: 90, a: 45, max: 90}` |
| `termometro` | `{tipo: 'termometro', valor: 38, unidad: '°C'}` |
| `recipientes` | `{tipo: 'recipientes', n: 3, valor: 2.5, total: '50 L'}` (garrafones o `forma: 'vaso'`) |
| `ficha` | `{tipo: 'ficha', titulo: 'Credencial', foto: 'buey.png', campos: [['Nombre', 'Buey prieto']]}` |
| `checklist` | `{tipo: 'checklist', items: [{texto: 'Cornudo', en: 'cuernos'}, {texto: 'Dormido', pendiente: true}]}` |
| `mapa` | `{tipo: 'mapa', distancia: '850 M', ruta: [[0.1, 0.7], [0.9, 0.3]]}` |

## Estructura

`npx morfeo revisar` sabe que en `maqueta` (o con `formato: 'largo'`) un video de 90–130 s está bien.
- Te avisa si una escena dura más de ~4,5 s, porque aquí la cámara corta cada 2–3 s.
- Ganchos que funcionan: "Imagina que eres…" y "¿Cómo se hace…?".
- Cierres que funcionan: "¡Felicidades, eres…!" con una escena `eleccion` (ya lo sabía / no lo sabía) o un `cta` que pide comentar una palabra.
