# Componentes propios

Cuando algo no cabe en las capas, escríbelo en React. En `morfeo.config.mjs`:

```js
componentes: {Barras: './escenas/Barras.tsx'},
```

```tsx
// escenas/Barras.tsx
import React from 'react';

export default function Barras({t, valores = [3, 7, 12], tema}: {t: number; valores?: number[]; tema: any}) {
	const max = Math.max(...valores);
	return (
		<div style={{display: 'flex', alignItems: 'flex-end', gap: 40, height: 520}}>
			{valores.map((v, i) => {
				const k = Math.min(1, Math.max(0, (t - i * 0.25) / 0.6));
				return <div key={i} style={{width: 150, height: (v / max) * 500 * k, background: tema.colores.acento, borderRadius: 16}} />;
			})}
		</div>
	);
}
```

Úsalo como una capa:

```js
{tipo: 'componente', nombre: 'Barras', props: {valores: [2, 5, 13]}, en: 'interés', x: 540, y: 1050}
```

## Lo que recibe tu componente

| Prop | Qué es |
|---|---|
| `t` | Segundos desde que apareció la capa |
| `dur` | Duración de la escena |
| `palabras` | `[palabra, inicio, fin]` de la escena |
| `cuando('palabra')` | Segundo (relativo a `t`) en que se dice esa palabra |
| `tema` | Colores y fuentes del estilo |
| tus `props` | Lo que pongas en `props` |

::: warning Anima con `t`
Todo debe depender de `t`, nunca de temporizadores ni de animaciones CSS: cada cuadro del video se dibuja por separado.
:::
