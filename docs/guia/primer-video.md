# Tu primer video

Un video es una lista de **escenas**. Cada escena dice algo (`say`) y lo ilustra en pantalla.

```js
// guiones/cafe.mjs
export default {
	title: 'El café se descubrió por unas cabras ☕',
	estilo: 'documental',
	voice: 'em_alex',
	music: 'lofi',
	scenes: [
		{say: '¿Sabías que el café se descubrió gracias a unas cabras?', capas: [
			{tipo: 'emoji', texto: '🐐', tam: 420, entrada: 'rebote', flotar: true},
		]},
		{type: 'dato', say: 'Pasó hace más de mil años, en Etiopía.', show: 'Pasó hace más de 1.000 años, en Etiopía.',
			valor: 1000, prefijo: '+', sufijo: ' años'},
		{type: 'cta'},
	],
};
```

```bash
npx morfeo render cafe
```

## Lo que dice la voz y lo que se lee

- **`say`**: lo que dice la voz. Escribe los números **con letras** ("mil novecientos ochenta") para que se lean bien.
- **`show`**: el subtítulo, si debe ser distinto. Por ejemplo, con cifras: "1980".
- Si cambias el texto, la voz se vuelve a generar sola. Si no, se reutiliza y solo se rehace la imagen.

## El cierre

`{type: 'cta'}` es la escena final con tu avatar, tu nombre, el botón de seguir y tus redes. Si no le pones `say`,
dice el `cta` de tu marca. Se configura en `morfeo.config.mjs`:

```js
marca: {
	nombre: 'Mi Canal',
	logo: './logo.png',        // cuadrado; sin logo se usa la inicial
	redes: 'YT @micanal · TikTok @micanal',
	cta: 'Sígueme para más datos curiosos.',
},
```

## Dónde van los videos

- En `videos.mjs`, todos juntos: `export default {cafe: {...}, otro: {...}}`.
- En `guiones/`, un archivo por video: `guiones/cafe.mjs` o `guiones/cafe.json`. El nombre del archivo es el id.

`npx morfeo lista` muestra todos y cuáles ya están hechos. `npx morfeo render` genera solo los que faltan.
`npx morfeo render cafe` genera ese, y `--todos` los regenera todos.
