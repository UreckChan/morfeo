# Series, HUD y personajes

Todo lo que necesitas para series con personaje y capítulos ("Día 30", "¿qué hace Neto? ¡comenta!") y para historias
interactivas. Se ve mejor con el estilo `serie`, pero funciona en cualquiera.

![Serie](/img/serie.jpg){width=260}

## HUD

Son capas fijas encima de todo el video: el día, una barra de progreso, la hora del celular. Se definen en el video,
no en una escena, y se actualizan con `cambios`:

```js
export default {
	estilo: 'serie',
	hud: [
		{tipo: 'texto', texto: '📅 DÍA 30', fuente: 'texto', tam: 34, color: '#141414', fondo: '#fff', relleno: '8px 18px', radio: 12, x: 150, y: 200, entrada: 'ninguna'},
		{tipo: 'barra', titulo: 'Probabilidad con Ari', valor: 0, ancho: 560, x: 700, y: 205, entrada: 'ninguna',
			cambios: [{en: {escena: 3}, valor: 15}]},
	],
	scenes: [/* ... */],
};
```

`cambios[].en` acepta `{escena: n}` (cuando empieza la escena n, contando desde 1), una palabra o segundos del video.
El HUD se oculta solo en la escena de cierre.

## Personajes

Un personaje del canal con sus poses. En `morfeo.config.mjs`:

```js
personajes: {
	neto: {
		poses: {
			normal: './personajes/neto.png',
			feliz: './personajes/neto-feliz.png',
			triste: './personajes/neto-triste.png',
		},
	},
},
```

En una escena, el personaje cambia de pose en la palabra que indiques y se mueve mientras habla:

```js
{say: 'Neto está enamorado desde la primaria.', capas: [
	{tipo: 'personaje', nombre: 'neto', pose: 'normal', poses: [{en: 'enamorado', pose: 'feliz'}], hablar: true, ancho: 520, x: 540, y: 1420},
]}
```

### Poses con IA

Con una imagen de referencia, cualquier pose escrita como texto la genera la IA a partir de esa imagen. Así siempre es
el mismo personaje (necesita `OPENAI_API_KEY`):

```js
neto: {
	referencia: './personajes/neto.png',
	poses: {
		normal: './personajes/neto.png',
		enamorado: 'con ojos de corazón, sonriendo',
		gym: 'levantando una pesa, sudando',
	},
},
```

Cada pose se genera una sola vez y queda guardada.

## Cartas VS y "¡comenta!"

La escena [`eleccion`](./escenas#eleccion) cierra el capítulo con dos opciones para que el público vote en los
comentarios. Con `formato: 'botones'` queda como "ABRIR / NO ABRIR".

## Capas para historias

- `chat`: comentarios de una transmisión en vivo que van apareciendo.
- `estado`: barra de estado del celular, con día, hora, batería y llamadas perdidas.
- `noticia`: rótulo de noticiero con cintillo.
- `votacion`: resultados del capítulo anterior ("72% votó por…").
- `telefono` con `onda`: una llamada en curso.
- `seguir`: tarjeta de seguir que se pulsa sola.

Ver todos sus campos en [Capas](./capas#interfaz).
