---
description: 'Textos en Morfeo 3.0: 50 tipografías que se bajan solas, 15 rótulos nuevos, rótulos propios, subtítulos nuevos, grado de color, dirección de arte por video y paisajes nuevos.'
---

# Textos, color y variedad

## Tipografías

Unas 50 letras libres (OFL/Apache) del repositorio de Google Fonts. Escribe su nombre y Morfeo la baja la primera vez,
con todos sus pesos:

```js
// en el estilo del canal
estilos: {mio: {base: 'documental', fuentes: {titulo: 'Bebas Neue', texto: 'Nunito'}}}
// en un rótulo
{say: '…', rotulo: 'Años después', rotuloEstilo: 'cine', rotuloFuente: 'DM Serif Display'}
// en cualquier capa con texto
{tipo: 'kpi', valor: 38e9, fuente: 'Oswald'}
```

| Tipo | Letras |
|---|---|
| Condensadas | Bebas Neue, Oswald, League Gothic, Big Shoulders Display, Barlow Condensed, Fjalla One, Teko, Staatliches |
| Redondeadas | Nunito, Fredoka, Baloo 2, Quicksand, Varela Round |
| Serif | Playfair Display, DM Serif Display, Abril Fatface, Lora, Alfa Slab One |
| Sans | Poppins, Rubik, Space Grotesk, Sora, Unbounded, Syne, Kanit |
| Display | Archivo Black, Luckiest Guy, Bangers, Lilita One, Russo One, Titan One, Black Ops One, Rubik Mono One, Passion One, Bungee, Righteous, Shrikhand, Monoton, Orbitron, Audiowide, Press Start 2P, Chakra Petch |
| Manuscritas | Pacifico, Caveat, Permanent Marker, Patrick Hand, Dancing Script, Lobster, Gloria Hallelujah |
| Máquina | Space Mono, Courier Prime |

Una letra tuya: `fuentes: {'MiLetra': './fuentes/MiLetra.ttf'}` en el config.

## Rótulos nuevos

<figure><img src="/img/rotulos-3.jpg" alt="Los 15 rótulos nuevos" loading="lazy" style="width:100%;border-radius:12px"><figcaption>Los 15 rótulos de 3.0, cada uno con otra tipografía</figcaption></figure>

`rotuloEstilo`: `tarjeta` (cifra grande con subtítulo), `etiqueta` (pastilla de color), `cinta` (de precaución),
`neon`, `sticker`, `marcador` (resaltador), `periodico` (primera plana), `cine` (franjas negras), `maquina` (letra por
letra), `glitch`, `comic`, `precio`, `recuadro`, `degradado` y `subrayado`. Todos aceptan `rotuloColor`,
`rotuloColor2`, `rotuloY`, `rotuloTam` y `rotuloFuente`; `tarjeta`, `etiqueta`, `periodico` y `cine` llevan segunda
línea con `rotuloPie`.

**Rótulos propios**: un componente de React que recibe `{texto, t, pie, color, color2, fuente, fuenteTexto, tam, y,
mayusculas, claro}`:

```js
// morfeo.config.mjs
rotulos: {grafiti: './rotulos/Grafiti.tsx'},
// guion
{say: '…', rotulo: 'Barrio', rotuloEstilo: 'grafiti'}
```

## Subtítulos nuevos

En el `tema` del estilo (`subtitulos: {tipo}`): `cine` (abajo, en franja oscura), `llenado` (cada palabra se llena de
color al decirla), `resaltador` (un marcador pasa detrás), `neon` y `maquina`.

## Que cada video se vea distinto

<figure><img src="/img/variedad-3.jpg" alt="El mismo lugar en tres videos" loading="lazy" style="width:100%;border-radius:12px"><figcaption>La misma oficina en tres videos: otra persona, otro tono de muros y piso, otro color</figcaption></figure>

- **Persona y gente de fondo** cambian con cada video (en una serie se quedan iguales).
- **Variante del set**: los muros, el piso y los muebles toman otro tono por video. `ambiente: {nombre, variante: false}` lo apaga.
- **Grado de color**: `grado: 'calido' | 'frio' | 'vivo' | 'pastel' | 'dramatico' | 'sepia' | 'noche' | 'desaturado'`
  en el video o en una escena. Sin decir, Morfeo elige uno por video; `direccion: false` lo apaga.
- **Aviso**: `npx morfeo revisar <id>` (y `render`) te dice si un video se parece demasiado a los últimos que hiciste
  (mismo lugar, estilo de personaje, rótulos y color) y qué cambiar.

## Paisajes

<figure><img src="/img/paisajes-3.jpg" alt="Los 14 paisajes" loading="lazy" style="width:60%;border-radius:12px"><figcaption>Los 14 paisajes: los de antes con más detalle y los nuevos cañón, volcán, río, pradera, selva y cascada</figcaption></figure>

Terreno con relieve fractal y crestas, roca en las pendientes, nieve con borde irregular, cielo en degradado con sol,
agua turquesa en la orilla y azul en lo hondo, y rocas, arbustos, pasto y flores que cambian de lugar en cada video.
Nuevos: `canon`, `volcan`, `rio`, `pradera`, `selva` y `cascada` (también los elige `ambiente: 'auto'`).

## 2D con acabado

Los estilos 2D llevan luz suave y viñeta, y algunos papel o grano (`acabado: 'luz' | 'papel' | 'grano' | 'ninguno'`).
Las caricaturas tienen sombra y brillo como en animación.
