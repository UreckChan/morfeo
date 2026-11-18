---
description: 'Historias en primera persona con Morfeo: reparto con una voz por personaje, gente sentada en la combi, la sala o la fogata, tu teléfono con chats, llamadas, fotos y cámaras, luces y música de suspenso, monstruos y series en las que el público vota.'
---

# Historias en primera persona

Las historias de «tú decides» se cuentan desde los ojos de quien las vive: vas en la última combi de la noche, estás
solo en tu cama o en la fogata con tus amigos. Ves a la gente que habla, sostienes tu teléfono y el público vota qué
haces después.

<div class="galeria-docs">
<figure><img src="/img/pov-chat.jpg" alt="El chat en tu teléfono" loading="lazy"><figcaption>El chat en tu teléfono</figcaption></figure>
<figure><img src="/img/pov-quien.jpg" alt="<code>plano: 'quien'</code> y ojos que brillan" loading="lazy"><figcaption><code>plano: 'quien'</code> y ojos que brillan</figcaption></figure>
<figure><img src="/img/pov-fogata.jpg" alt="<code>campamento</code> con amigos" loading="lazy"><figcaption><code>campamento</code> con amigos</figcaption></figure>
<figure><img src="/img/pov-monstruo.jpg" alt="<code>figuras</code>: un monstruo en el bosque" loading="lazy"><figcaption><code>figuras</code>: un monstruo en el bosque</figcaption></figure>
<figure><img src="/img/pov-camara.jpg" alt="<code>pantalla</code>: cámara de seguridad" loading="lazy"><figcaption><code>pantalla</code>: cámara de seguridad</figcaption></figure>
<figure><img src="/img/pov-lluvia.jpg" alt="El barrio de noche con lluvia" loading="lazy"><figcaption>El barrio de noche con lluvia</figcaption></figure>
</div>

```js
export default {
	estilo: 'historia',
	music: 'suspenso',
	reparto: {
		yo:    {voz: 'em_alex',  nombre: 'Tú',        color: '#7FE7FF'},
		chema: {voz: 'em_santa', nombre: 'Don Chema', color: '#FFD23F', nota: 'sin voltear'},
		lupe:  {voz: 'ef_dora',  nombre: 'Doña Lupe', color: '#FF8FB1'},
	},
	ambiente: {
		nombre: 'combi',
		pov: {sostiene: 'movil', manos: 'ambas'},
		gente: [
			{asiento: 'chofer', quien: 'chema', personaje: 'chema'},
			{asiento: 'f1-ventana', quien: 'lupe', personaje: 'lupe', estados: [{escena: 6, ojos: '#FF2A2A', gira: 'tu'}]},
		],
	},
	scenes: [
		{say: 'Son las tres y siete. Me subí a la última combi.', quien: 'yo', pantalla: {tipo: 'bloqueo', hora: '3:07'}},
		{say: '¿Hasta dónde va, joven?', quien: 'chema', plano: 'quien'},
		{say: 'No la mires, mijo.', quien: 'lupe', nota: 'susurrando', plano: 'quien', luz: 'parpadeo'},
		// …
		{type: 'eleccion', pregunta: '¿Qué hago?', opciones: [{texto: 'Me bajo'}, {texto: 'Me quedo'}], say: 'Tú decides.', quien: 'yo'},
	],
};
```

## Reparto: una voz por personaje

`reparto` (en el video o en `morfeo.config.mjs` para toda la serie) le da a cada personaje su voz, su nombre arriba del
subtítulo, su color y una nota de cómo habla. Cada escena dice `quien` habla.

| Campo | Para qué |
|---|---|
| `voz` | La voz final: Kokoro (`'em_alex'`), ElevenLabs, OpenAI o un alias de `voces` |
| `borrador` | Su voz gratis para la previa y la animática (distinta por personaje, para que se distingan) |
| `nombre`, `color` | Lo que sale arriba del subtítulo; `nombre: false` lo quita |
| `nota` | Cómo lo dice por defecto ('susurrando'); la escena puede cambiarla con su propia `nota` |
| `velocidad` | Velocidad de su voz Kokoro |

Con **ElevenLabs v3** (`modelo: 'eleven_v3'`), la `nota` se vuelve emoción en la voz: «susurrando», «temblando»,
«asustado», «llorando», «gritando» se actúan, no se leen. `etiquetas: '[scared] [whispers]'` en la escena las fija a mano.

Si una escena no tiene `quien` y el video no tiene `voice`, Morfeo te dice cuál escena le falta.

## Lugares para historias

| Lugar | Cómo se ve | Asientos para `gente` |
|---|---|---|
| `combi` | Pesero por dentro de noche: calle que pasa, faros, tubo que falla, rosario, retrovisor | `chofer`, `copiloto`, `f1-ventana`, `f1-pasillo`, `f2-ventana`, `f2-pasillo` (tu lugar), `atras-izq`, `atras-centro`, `atras-der` |
| `campamento` | Fogata con troncos, casas de campaña, bosque oscuro, estrellas y luna | `tu`, `der`, `der-lejos`, `frente`, `izq-lejos`, `izq` (todos miran al fuego) |
| `sala` | La casa con amigos: sillón, tele y la puerta de entrada con la luz del pasillo | `sillon-izq`, `sillon-centro`, `sillon-der` |
| `recamara` | Solo en tu cama: puerta con luz por debajo, clóset entreabierto, ventana con luna, el celular en el buró | (sin asientos) |
| `calle`, `barrio` | Para salir corriendo: plano `correr` (la cámara avanza y rebota al paso) | |
| `montana`, `bosque`, `nevado`… | Todos los [paisajes](./ambientes) | |

Planos útiles: `pov` (desde tus ojos), `quien` (volteas a ver a quien habla), `puerta` (sala), `cama`, `closet`,
`ventana`, `techo` (recámara), `bosque`, `fogata`, `amigos` (campamento), `correr` (calle y barrio).

Todos los lugares sirven **de día o de noche** (`hora: 'mañana'`, `'dia'`, `'atardecer'`, `'noche'`) y con
**lluvia, nieve o tormenta** (`clima`). Adentro no cae la lluvia, pero los relámpagos alumbran el cuarto.

## La gente

`gente: [{asiento, quien, personaje, …}]` sienta a las personas. Cuando su `quien` habla, mueve la boca.

- **22 personajes:** `beto`, `ana`, `caro`, `dani`, `eli`, `fer`, `gus`, `lu`, `memo`, `sofi`, y para historias
  `chema` (chofer con gorra y bigote), `lupe` (señora de chongo canoso), `nico` (niño de rizos), `vale` (niña de
  trenzas), `tavo` (chavo de capucha), `rosa` (mamá), `beto2` (señor de sombrero), `nayra` (cajera), `mateo` (robusto
  con barba), `xime` (rizos y lentes), `ruth` (trenzas) y `don` (abuelo calvo).
- **Cómo es:** `edad` (`nino`, `adulto`, `mayor`), `cuerpo` (`normal`, `robusto`, `delgado`), `peinado` (también
  `rizado`, `trenzas`, `capucha`, `sombrero`, `flequillo`), `bigote`, `barba`, `lentes`, `cubrebocas`, `ojosHuecos`.
- **Atuendo:** `policia`, `enfermera`, `obrero`, `escolar`, `payaso`, `monja`, `chef`, `pijama`, `abrigo`, `vestido`,
  `militar`, `traje`, `deportivo`, `vaquero`, `bombero`, `doctor`, `sacerdote`, `repartidor` o `charro`.
- **Cara y gestos:** `expresion` (también `sospecha` y `terror`) y `gesto` (`shh`, `saludar`, `señalar`, `cubrirse`).
- **Cambios por escena:** `estados: [{escena: 4, expresion: 'terror', gesto: 'cubrirse'}, {escena: 6, ojos: '#FF2A2A', gira: 'tu'}]`.
  `gira: 'tu'` la hace voltear despacio hacia ti; `ojos` los hace brillar.

## Figuras en el set

`figuras` pone de pie, en las escenas que digas, lo que no va sentado:

```js
ambiente: {nombre: 'campamento', figuras: [{monstruo: 'flaco', ancla: 'bosque'}, {animal: 'cuervo', ancla: 'tienda'}]}
```

- Monstruos: `flaco`, `sinCara`, `sombra`, `cabezaAnimal`, `chupacabras`, `gateando`.
- Animales: `perro`, `cuervo`, `venado`, `rata`, `buho`, `cabra`.
- Personas: `{persona: {personaje: 'mateo', atuendo: 'policia'}, ancla: 'coche'}`.
- Dónde: `ancla` del set (más `desplazar`) o `pos`. `mira: 'tu'` te ve.

## Tu teléfono

Con `ambiente.pov: {sostiene: 'movil'}` lo llevas en la mano en todas las escenas. `pantalla` en la escena dice lo que
muestra:

| `tipo` | Qué muestra |
|---|---|
| `bloqueo` | La hora y una notificación |
| `alerta` | Un aviso con título, texto y botón |
| `chat` | Un chat de grupo con mensajes (`tu: true` para los tuyos) |
| `llamada` | Una llamada entrante con nombre |
| `galeria` | Fotos nocturnas (`dormido`, `alguien`, `espalda`, `vacio`); `nuevas` marca las recientes |
| `foto` | Una sola foto |
| `ubicacion` | Un mapa con pines (`tu: true` es tu punto azul) |
| `camara` | Cámara de seguridad: `pasillo`, `escalera`, `estacionamiento` o `caseta`, con `figura` lejos, medio o cerca |

- `acercar: true` sube el teléfono a tu cara para leerlo.
- `manos: false` lo baja. En la tarjeta de elección se baja solo.

## Suspenso

- **Luz** por escena: `luz: 'apagon'`, `'parpadeo'`, `'emergencia'` (roja que late), `'linterna'` (solo un círculo de
  luz) o `'relampago'`. Cada una suena.
- **Música:** `music: 'suspenso'` o `'terror'` (zumbido grave, latido que acelera, cuerdas al final).
- **Sonidos sin capa:** `sonidos: [{efecto: 'toc', en: 'puerta', veces: 3, cada: 0.35}]` (toques, latidos,
  notificaciones, alarma…).
- La [revisión](./estudio) no marca como error las escenas oscuras a propósito (linterna, apagón) ni el relámpago.

## Series en las que el público vota

```bash
npx morfeo serie iniciar "La combi de las 3 AM"
npx morfeo serie estado
npx morfeo serie voto 2 --nota "61% en comentarios"
npx morfeo serie terminar
```

1. Cada parte termina en una elección.
2. Al renderizar el video final, la serie queda **esperando voto**: Morfeo no renderiza la parte siguiente hasta que
   anotes qué ganó.
3. `serie terminar` archiva la historia en `series/` para empezar otra en la misma cuenta.

Tu IA trae una guía para escribirlas: `node_modules/morfeo/skills/morfeo-guion/referencias/serie-interactiva.md`.

## Gastar menos en voces

- `npx morfeo costo` dice cuántos caracteres de voz de pago gastaría el render. Lo que ya está en caché no cuenta.
- El render avisa antes de gastar. `--tope 2000` (o `MORFEO_TOPE_VOZ` en `.env`) lo detiene si se pasa.
- `previa`, `animatica` y `--borrador` usan la voz gratis de cada personaje.
- `MORFEO_MODELO_GUION` en `.env` cambia el modelo de Claude para los guiones con IA.
