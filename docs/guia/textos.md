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

## Objetos nuevos, usados o rotos

```js
{say: 'Así quedó la tele.', objeto: {forma: 'tele', estado: 'roto'}}
{say: 'Y el celular se cayó.', objeto: {forma: 'celular', romper: {en: 'cayó', tipo: 'estrellar'}}}
```

Estados: `nuevo`, `usado`, `gastado`, `sucio`, `oxidado`, `quemado`, `maltratado`, `roto`, `destrozado`. Golpes:
`estrellar`, `romper`, `aplastar`, `choque`, `explotar`, `caer`, `quemar` (con pedazos, chispas, humo y su sonido).
Sirve con cualquier objeto: piezas de Morfeo, modelos de la biblioteca, tus piezas y, en tus mundos, envolviendo lo que
sea con `<Desgaste>` (un coche que choca, una pantalla que se estrella).

## Por dentro

<figure><img src="/img/adentro-3.jpg" alt="Objetos abiertos con una pieza resaltada" loading="lazy" style="width:100%;border-radius:12px"><figcaption>Cartucho, consola, control, celular, tele, carro, casa, un reloj con piezas propias y un cohete que se despieza</figcaption></figure>

Cuando la voz dice qué hay dentro de algo, el objeto se abre y la pieza que se nombra brilla, se acerca y lleva su
etiqueta:

```js
{say: 'Dentro de cada cartucho va una pila de reloj.', objeto: {forma: 'cartucho'}}   // se abre solo
{say: 'El motor del carro.', objeto: {forma: 'carro', adentro: {resaltar: 'motor'}}}
{say: 'La soldadura del chip.', objeto: {forma: 'consola', adentro: {modo: 'rayos', resaltar: 'soldadura'}}}
```

Si la voz dice "dentro", "adentro" o "componentes", se abre solo y resalta la pieza que nombra (`adentro: false` lo
apaga). Modos: `abrir` (la carcasa se levanta; por defecto), `rayos` (queda transparente) y `despiece` (las piezas se
separan). También: `en` (cuándo se abre), `resaltarEn` (por defecto, cuando la voz nombra la pieza), `etiqueta`
(texto o `false`) y `color`.

| Objeto | Piezas |
|---|---|
| `cartucho` | placa, juego (chip), memoria (la partida), pila, controlador, reloj, contactos, capacitor |
| `consola` | placa, procesador, grafica, soldadura, disipador, ventilador, fuente, disco, lector, memoria |
| `control` | placa, procesador, palancas, botones, vibracion, pilas, gatillos |
| `celular`, `tableta` | bateria, placa, procesador, memoria, camara, bocina, conector, vibracion |
| `tele`, `monitor` | panel, luces (LED), placa, procesador, fuente, bocinas |
| `carro` | motor, bateria, radiador, transmision, flecha, tanque, escape, frenos, amortiguadores, llantas, asientos, volante, chasis |
| `casa` | cimientos, castillos, varillas, muros (ladrillos), losa, tuberia, cables, piso |

Acepta sinónimos ("batería", "ladrillos", "cableado"). Cualquier otro objeto se despieza solo, o arma su interior con
las piezas 3D de Morfeo:

```js
objeto: {forma: 'reloj', adentro: {
	piezas: [{nombre: 'engrane', forma: 'engrane', pos: [0, 0, 0], escala: 0.35}, {nombre: 'resorte', forma: 'resorte', pos: [0.4, -0.3, 0], escala: 0.2}],
	resaltar: 'engrane',
}}
```

Funciona igual en las capas `modelo`.
