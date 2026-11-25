---
description: 'Lugares 3D, objetos, fondos 2D y personajes hechos a la medida del tema de cada video, guardados en una biblioteca que sirve en todos tus proyectos. Tu IA los crea cuando Morfeo no trae lo que el video pide.'
---

# Elementos a la medida y biblioteca

Los 35 lugares, los ~250 objetos, los 20 fondos 2D y los 22 personajes que trae Morfeo son **la base, no el límite**.
Los videos que más retienen tienen un mundo hecho para su tema: el estadio que se construye pieza por pieza, la cárcel
vista en corte, la glorieta desde arriba, la balanza con los goles de cada jugador. Cuando el tema pide algo que la base
no tiene, tu IA (Claude Code, Codex u otra) lo **crea** con las piezas del kit, lo revisa y lo **guarda en tu
biblioteca**. La próxima vez ya existe, en cualquier proyecto.

<div class="galeria-docs">
<figure><img src="/img/propio-estadio-1.jpg" alt="Estadio propio: escena 1, solo la cancha" loading="lazy"><figcaption>Escena 1: «si pones solo una cancha…»</figcaption></figure>
<figure><img src="/img/propio-estadio-2.jpg" alt="Estadio propio: escena 3, gradas" loading="lazy"><figcaption>Escena 3: gradas que crecen</figcaption></figure>
<figure><img src="/img/propio-estadio-3.jpg" alt="Estadio propio: escena 5, lleno" loading="lazy"><figcaption>Escena 5: techo, luces y lleno</figcaption></figure>
</div>

## Qué se puede agregar

| El tema pide… | Tipo | Clave en `morfeo.config.mjs` | Se usa con |
|---|---|---|---|
| Un lugar donde pasa todo (estadio, cárcel, mina, glorieta) | lugar 3D | `ambientes` | `ambiente: 'nombre'` o `'auto'` |
| Un objeto del que se habla (balanza, reactor, sismógrafo) | pieza 3D | `piezas` | `objeto: 'nombre'`, `{tipo: 'modelo', forma: 'nombre'}` |
| Un fondo ilustrado (pasillo, mapa, aula de otro país) | escenario 2D | `escenarios` | `fondo: {tipo: 'escenario', nombre}`, `fondos: 'auto'` |
| Alguien de la historia (abuelo, niño, monstruo) | personaje 3D | `personajes3d` | `persona: 'nombre'`, `gente: [{personaje}]` |
| Un gráfico o panel propio | capa | `componentes` | `{tipo: 'componente', nombre}` |

```js
// morfeo.config.mjs
export default defineConfig({
	ambientes: {'estadio-por-partes': './lugares/EstadioPorPartes.tsx'},
	piezas: {balanza: './piezas/Balanza.tsx'},
	personajes3d: {abuelo: {piel: '#C98E62', pelo: '#D8D2C8', ropa: '#6A5A3A', pantalon: '#2E2A26', peinado: 'calvo', bigote: true, edad: 'mayor'}},
});
```

## Un lugar 3D propio

Un lugar propio tiene todo lo de los de fábrica: planos con nombre, persona, gente, fila, letrero, objeto, hora, clima,
público y `plano: 'cenital'`. Solo `Set` y `planos` son obligatorios.

```tsx
// @palabras estadio que se construye, construir un estadio
import React from 'react';
import {Crece, Gradas, Pasto3D, Porteria, TorreLuz, defineAmbiente, type PropsSet} from 'morfeo/kit';

const Set: React.FC<PropsSet> = ({t, escena, tEscena}) => (
	<group>
		<Pasto3D w={20} l={32} />
		<Porteria z={16} dir={1} />
		<Porteria z={-16} dir={-1} />
		{/* el lugar crece con la historia: aparece en la escena 2 */}
		<Crece escena={escena} tEscena={tEscena} desde={2}>
			<Gradas t={t} pos={[-12.6, 0, 0]} rot={Math.PI / 2} largo={30} />
		</Crece>
	</group>
);

export default defineAmbiente({
	Set,
	luz: 'dia',
	exterior: true,
	planos: {
		general: {pos: [0, 30, 46], mirar: [0, 0, -2], fov: 50, a: {pos: [0, 27, 42]}},
		cancha: {pos: [0, 2.4, 24], mirar: [0, 2, 0], fov: 55},
	},
});
```

- **El lugar cambia con la historia.** El `Set` recibe la escena en curso: con `<Crece desde={3}>` una parte aparece
  en la escena 3. Así funciona la fórmula «si pones X… pero… entonces…».
- **`@palabras`** son las frases con que la voz lo nombra. Con `ambiente: 'auto'`, cuando una escena las dice, el video
  va a ese lugar. Dentro de un lugar propio, las palabras de los de fábrica no te sacan de él.
- Piezas del kit para armar: `Bloque`, `Arbol`, `Casa`, `Ciudad`, `Coche`, `Camino`, `Terreno`, `Agua`, `Tubo`,
  `Mesa`, `Gradas`, `TorreLuz`, `Porteria`, `Pasto3D`, `Marcador3D`, `Fila3D`, `Letrero3D`, `Fuego`, `Persona3D`,
  `Multitud3D` y `Modelo` (para archivos `.glb`).

## La biblioteca

```bash
npx morfeo plantillas                          # lo que tienes guardado
npx morfeo plantillas buscar "estadio"         # por nombre, palabras o descripción
npx morfeo plantilla guardar estadio-por-partes --descripcion "Estadio que se construye" --vista hoja.png
npx morfeo plantilla usar estadio-por-partes   # copia al proyecto para cambiarlo (y lo registra)
```

Lo guardado vive en `~/.morfeo/plantillas/` y sirve en **todos** tus proyectos, por su nombre o por sus palabras, sin
registrarlo. Solo entra al video lo que el video usa.

### Editar y hacer variantes

```bash
npx morfeo plantilla editar estadio-por-partes          # guarda una copia y te dice qué archivo cambiar
npx morfeo plantilla deshacer estadio-por-partes        # vuelve a como estaba
npx morfeo plantilla variante estadio-por-partes estadio-de-noche --palabras "estadio de noche"
```

- **Editar** cambia la plantilla para todos los proyectos que la usan.
- **Variante** crea otra con nombre propio (de noche, en ruinas, más grande) y deja la original igual.
- **Variar sin copiar**: si el lugar lee `opciones`, el guion las pasa:
  `ambiente: {nombre: 'estadio-por-partes', opciones: {noche: true}}`. Las piezas reciben sus opciones igual:
  `objeto: {forma: 'balanza', lado: -1}`.

## Con tu IA

Los proyectos nuevos traen la guía `morfeo-plantillas` (ver [Skills](./skills)). Pídele un video sobre algo que no
existe («hazme un video de cómo se construye un estadio») y tu IA busca en la biblioteca y, si no hay nada, crea el
lugar, lo revisa en la animática y te propone guardarlo.
