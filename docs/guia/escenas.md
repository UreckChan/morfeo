---
description: 'Escenas de Morfeo: lo que dice la voz, lo que aparece en pantalla y los tipos de escena (titular, dato, lista, comparar, elección).'
---

# Escenas

Toda escena lleva `say` (lo que dice la voz). El `type` elige una escena lista para usar; sin `type`, la escena es
solo tus `capas`. Todas las escenas aceptan además:

| Clave | Para qué |
|---|---|
| `show` | Subtítulo distinto de `say` (con cifras, por ejemplo) |
| `capas` | Capas extra encima, ver [Capas](./capas) |
| `fondo` | Fondo solo para esta escena |
| `camara` | Zoom, paneo y temblor, ver [Animación y cámara](./animacion#camara) |
| `transicion` | `'corte'`, `'fundido'`, `'deslizar'` o `'zoom'` al entrar |
| `tema` | Ajustes del estilo solo para esta escena |
| `audio` | Tu propia grabación de esta frase, ver [Voces](./voces-musica#tu-propia-grabacion) |

## `capas`

Solo tus capas. Es el `type` por defecto cuando la escena trae `capas`.

```js
{say: 'Y forman un círculo para proteger a sus crías.', capas: [
	{tipo: 'grupo', repetir: 8, disposicion: 'circulo', radio: 300, orientar: 90, capa: {tipo: 'imagen', src: 'ballena.png', ancho: 200}},
]}
```

## `titular`

Etiqueta pequeña, titular con la palabra clave resaltada y número de paso.

```js
{type: 'titular', say: 'Paso dos: crea una carpeta.', etiqueta: '// paso 2', texto: 'CREA UNA *CARPETA*', numero: 2, sub: 'en tu escritorio'}
```

## `dato`

Un número grande que cuenta. Opcionalmente, una imagen encima y un texto debajo.

```js
{type: 'dato', say: 'Baja a más de dos mil metros.', show: 'Baja a más de 2.000 metros.',
	valor: 2000, sufijo: ' m', texto: 'de profundidad', formato: 'chip', imagen: 'cachalote.png'}
```

`formato`: `'grande'` (por defecto), `'lcd'` o `'chip'`. `curva: 'exponencial'` sirve para cosas que crecen muchísimo,
como un centavo que se duplica.

## `lista`

Tarjeta con renglones que se palomean cuando la voz dice su palabra.

```js
{type: 'lista', say: 'Necesitas harina, huevo y leche.', titulo: 'Lo *básico*',
	items: [{texto: 'Harina', check: 'harina'}, {texto: 'Huevo', check: 'huevo'}, {texto: 'Leche', check: 'leche'}]}
```

## `comparar`

A contra B: el segundo aparece en la palabra `at`.

```js
{type: 'comparar', say: 'Tu guion pasa de aburrido a viral.', a: 'ABURRIDO', b: '¡VIRAL!', at: 'viral'}
```

`a` y `b` también pueden ser `{texto, imagen, color}`.

## `telefono`

Un teléfono con tu imagen o video, o con capas dentro (`capasPantalla`, con coordenadas relativas al centro de la pantalla).

```js
{type: 'telefono', say: 'Y lo publicas desde tu celular.', src: 'captura.png', texto: 'PUBLICADO'}
```

## `eleccion`

Final abierto para que el público comente: cartas VS o botones.

```js
{type: 'eleccion', say: '¿Qué cambia primero: el gimnasio o los granos?',
	opciones: [{texto: 'Gimnasio', sub: 'primero', emoji: '🏋️'}, {texto: 'Granos', sub: 'primero', emoji: '🧴'}]}

{type: 'eleccion', say: '¿Le abres la puerta?', formato: 'botones', pregunta: '¿LE ABRES A DARÍO?',
	opciones: [{texto: 'Abrir', sub: 'le abres la puerta'}, {texto: 'No abrir', sub: 'te quedas adentro'}]}
```

`comenta` cambia el texto del botón amarillo, o lo quita con `false`.

## `cta`

El cierre con tu marca: avatar, nombre, botón de seguir que se pulsa solo y tus redes.

```js
{type: 'cta'}                                // dice el cta de tu marca
{type: 'cta', say: 'Sígueme para la parte dos.'}
```

## Escenas del estilo clásico

El estilo `datos-curiosos` tiene escenas propias:

| `type` | Campos |
|---|---|
| `title` | `rows: [[texto, color, tamaño], ...]`, `icon`, `tag` |
| `text` | `rows`, `strike` (tachar) |
| `year` | `pre`, `year`, `sub` |
| `icon` | `icon`, `label`, `color` |
| `compare` | `a: [texto, color]`, `b`, `at`, `sizes` |
| `card` | `file`, `rows: [[etiqueta, antes, después], ...]`, `at`, `flash` |
| `dialog` | `q: [línea1, línea2]`, `click`, `result` |

El estilo clásico también acepta todas las escenas de arriba.
