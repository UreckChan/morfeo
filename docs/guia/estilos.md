# Estilos

El estilo define el fondo, los colores, las fuentes, el tipo de subtítulos, las transiciones y el movimiento de cámara.
Se elige por video (`estilo: 'documental'`) o para todo el proyecto en `morfeo.config.mjs`. `npx morfeo estilos` los lista.

<div class="estilos">

| | Estilo | Para qué |
|---|---|---|
| ![](/img/datos-curiosos.jpg) | **`datos-curiosos`** | El clásico: fondo morado, texto grande con contorno, íconos pixel en 3D. Escenas propias: `title`, `year`, `text`, `icon`, `compare`, `card`, `dialog` |
| ![](/img/explicativo.jpg) | **`explicativo`** | Tutoriales: papel claro, titulares negro y rojo, etiquetas `// paso 1`, tarjetas y teléfonos |
| ![](/img/documental.jpg) | **`documental`** | Naturaleza y ciencia: azul profundo, rayos de luz, burbujas, chips con datos |
| ![](/img/mesa.jpg) | **`mesa`** | Dinero y crecimiento: mesa de madera con foco, objetos 3D, contadores LCD |
| ![](/img/historia.jpg) | **`historia`** | Misterio: interiores oscuros, foco de luz, siluetas, letreros "DÍA 10" |
| ![](/img/serie.jpg) | **`serie`** | Series con personaje: HUD (días, barras), cartas VS, "¡comenta!", subtítulos en bloque |
| ![](/img/infografia.jpg) | **`infografia`** | Infografía plana: medidores, barras, globos, rayos X, subtítulos en caja |
| ![](/img/3d.jpg) | **`3d`** | Tus escenas de Blender con recorrido de cámara, una palabra grande a la vez |
| | **`ilustrado`** | Cuentos y animales: cielo de atardecer o tu escenario ilustrado |
| | **`minimal`** | Oscuro y limpio, para lo que sea |

</div>

## Escenarios ilustrados

Cinco escenarios animados para que un personaje nunca quede sobre un fondo vacío: `bosque` (estrellas, luna con cara que canta, luciérnagas), `cuarto` (ventana, póster, calendario y, como capa, el escritorio con teclado RGB), `departamento` (ciudad por la ventana, lámpara, tele), `tunel` (el tren llega en la palabra que digas) y `pasillo` (la puerta se sacude al tocar).

```js
fondo: {tipo: 'escenario', nombre: 'bosque', paneo: 80, luna: {cara: true, cantar: 'canta'}}
```

`serie` usa el cuarto, `ilustrado` el bosque e `historia` el departamento por defecto.

## Cambiar un estilo para un video

Con `tema` cambias lo que quieras del estilo en ese video:

```js
{
	estilo: 'documental',
	tema: {
		colores: {acento: '#FFD43B'},
		fondo: {tipo: 'imagen', src: 'oceano.jpg', oscurecer: 0.3},
		subtitulos: {tipo: 'palabra'},
		particulas: {tipo: 'estrellas', cantidad: 40},
	},
	scenes: [/* ... */],
}
```

Cada escena también acepta `tema` y `fondo` solo para ella.

## Crear tu estilo

En `morfeo.config.mjs`, a partir de uno existente:

```js
estilos: {
	'mi-marca': {
		base: 'minimal',
		colores: {acento: '#00E0A0', acento2: '#FF4D8D'},
		fondo: {tipo: 'degradado', colores: ['#0B1E2D', '#02070C']},
		subtitulos: {tipo: 'bloque', resalte: '#00E0A0'},
		fuentes: {titulo: 'Poppins'},   // fuente propia, ver referencia
		transicion: 'deslizar',
	},
},
estilo: 'mi-marca',
```

## Qué se puede ajustar

| Clave | Valores |
|---|---|
| `fondo` | `{tipo: 'color', color}` · `{tipo: 'degradado', colores, angulo}` · `{tipo: 'imagen', src, oscurecer, desenfoque}` · `{tipo: 'video', src}` · `{tipo: 'escenario', nombre}` |
| `rayos` | `{color, fuerza}`: rayos de luz desde arriba |
| `foco` | `{color, x, y, radio, fuerza}`: luz puntual |
| `vineta` | `0` a `1`: oscurece los bordes |
| `textura` | `'papel'`, `'grano'` o `'ninguna'` |
| `particulas` | `{tipo: 'burbujas' \| 'polvo' \| 'estrellas' \| 'nieve' \| 'confeti', cantidad, color}` |
| `colores` | `texto`, `acento`, `acento2`, `suave`, `tarjeta`, `tarjetaTexto`, `borde` |
| `fuentes` | `titulo`, `texto`, `mono` |
| `subtitulos` | `tipo` (`karaoke`, `bloque`, `palabra`, `pop`, `ninguno`), `y`, `tam`, `color`, `pendiente`, `resalte`, `fondo`, `maxPalabras` |
| `transicion` | `'corte'`, `'fundido'`, `'deslizar'` o `'zoom'` |
| `marca` | `'esquina'` (avatar y nombre arriba a la izquierda) o `'ninguna'` |
| `zoomLento` | Acercamiento suave de cada escena (`1` = sin movimiento) |

<style>
.estilos img { width: 120px; min-width: 120px; border-radius: 8px; }
.estilos td:first-child { width: 132px; }
</style>
