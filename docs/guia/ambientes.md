---
description: 'Ambientes 3D listos (cuarto gamer, sala, arcade) como fondo vivo de cualquier video, con planos de cámara, cortes en las palabras clave, persona que reacciona, postproceso y sonido de fondo.'
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

Los ambientes son de noche: con un estilo de texto oscuro (como `explicativo`), el texto pasa solo a claro, y una sombra suave arriba deja leer subtítulos y titular aunque el set sea claro.

| Ambiente | Qué trae | Planos |
|---|---|---|
| `cuarto-gamer` | Escritorio con tele encendida, consola y control, silla gamer, estante con juegos, pósters, tira LED, ventana con lluvia, cama, polvo en la luz | `general`, `persona`, `escritorio`, `tele`, `consola`, `estante`, `ventana`, `contrapicado`, `cenital` |
| `sala` | Sillón frente a la tele, mesa de centro, lámpara de pie, plantas, cuadros, ventana con lluvia y un gato que respira | `general`, `persona`, `espalda`, `tele`, `sillon`, `gato`, `ventana`, `lampara` |
| `arcade` | Filas de maquinitas con pantallas animadas, alfombra que brilla, letreros de neón y focos de techo | `general`, `persona`, `maquina`, `espalda`, `pasillo`, `contrapicado` |
| `taller` | Mesa de reparación con un control abierto, cautín humeando, lupa con brazo, tablero de herramientas, lámpara de brazo y repisa con cajas | `general`, `persona`, `mesa`, `control`, `tablero`, `repisa`, `cenital` |
| `oficina` | Dos escritorios con monitor, ventanal de atardecer con la ciudad, pizarrón con gráfica, garrafón y plantas | `general`, `persona`, `monitor`, `ventana`, `pizarron`, `companero` |

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

## Persona

Con `persona: true` aparece una persona en su lugar del set (sentada frente a la tele, en el sillón o parada en la
maquinita) y **reacciona a lo que se dice**: pensativa en las preguntas, sorprendida con cifras o exclamaciones y
feliz con "felicidades". `persona: {ropa: '#E5484D'}` cambia su ropa y `reaccionar: false` la deja quieta.

## Postproceso y sonido

- Los ambientes llevan el postproceso `'cine'`: el fondo se desenfoca y lo que mira la toma queda nítido, las pantallas
  y luces brillan, y hay viñeta. `ambiente: {nombre: 'sala', post: 'suave'}` lo cambia (`'miniatura'` = efecto
  maqueta, `false` = sin postproceso).
- Cada ambiente suena: lluvia y el juego de la tele en el cuarto, lluvia y murmullo en la sala, maquinitas en el arcade,
  herramientas en el taller y teclas con aire acondicionado en la oficina.
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
