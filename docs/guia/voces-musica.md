---
description: 'Voces y música en Morfeo: voces Kokoro gratis, ElevenLabs, OpenAI o tu grabación, y música generada sin derechos.'
---

# Voces y música

## Voces Kokoro (gratis, en tu computadora)

```js
voice: 'em_alex'                                  // una voz
voice: [['em_alex', 0.6], ['am_michael', 0.4]]    // mezcla: timbre propio
voice: './voces/mi-voz.npy'                       // estilo de voz Kokoro propio (510×1×256)
```

El nombre indica el idioma (1.ª letra) y el género (2.ª letra): `e` español, `a` inglés de EE. UU., `b` inglés británico,
`f` francés, `i` italiano, `p` portugués, `j` japonés, `z` chino y `h` hindi; `f` es femenina y `m` masculina.

- **Español:** `em_alex`, `ef_dora`, `em_santa`.
- **Para mezclar con las de español:** `am_michael`, `am_onyx`, `am_puck`, `am_eric`, `am_liam`, `am_adam`, `bm_george`,
  `af_heart`, `af_bella`, `af_nova` y `af_sarah`.

| Campo del video | Para qué |
|---|---|
| `speed` | Velocidad de la voz (1.2 por defecto) |
| `lang` | Idioma de pronunciación: `es`, `en-us`, `en-gb`, `fr-fr`, `it`, `pt-br`, `ja`, `cmn` o `hi` |

Define alias para no repetir mezclas, en `morfeo.config.mjs`:

```js
voces: {narrador: [['em_alex', 0.6], ['am_michael', 0.4]]},
```

y en el video usa `voice: 'narrador'`.

## ElevenLabs, OpenAI o tu servicio

```js
voice: {proveedor: 'elevenlabs', voz: 'TU_VOICE_ID', modelo: 'eleven_multilingual_v2'}   // ELEVENLABS_API_KEY
voice: {proveedor: 'openai', voz: 'nova', instrucciones: 'tono entusiasta'}                // OPENAI_API_KEY
voice: {proveedor: async (texto) => './audio/frase.wav'}                                   // lo que quieras
```

Las claves van en el archivo `.env` de tu proyecto. Cada frase se pide una sola vez y queda en caché (`.morfeo/cache`):
si no cambias el texto, no se vuelve a pedir ni a cobrar.

## Tu propia grabación

Por escena, con `audio`. `say` sigue sirviendo para los subtítulos:

```js
{type: 'titular', say: 'Hola, soy Uriel.', audio: './grabaciones/hola.wav', texto: 'HOLA'}
```

Formatos: wav, mp3, flac u ogg (m4a y aac si tienes ffmpeg). Todas las voces pasan por la misma cadena de locutor
(ecualización, compresión y volumen parejo), así que tu grabación suena igual que las demás. Si todas las escenas
traen `audio`, el video no necesita `voice`.

## Música

```js
music: 'lofi'                                                        // generada: lofi, lofi2, chillpop, synth, house, ballad, trap
music: './musica/cancion.mp3'                                        // la tuya
music: {archivo: './musica/cancion.mp3', volumen: 0.7, inicio: 12}   // con volumen y desde el segundo 12
music: false                                                         // sin música
```

La música baja sola cuando habla la voz. Tu pista se repite si es corta y termina con un fundido. La música generada
es distinta en cada video (tono, tempo y melodía) aunque compartan estilo, y no tiene derechos de autor.

Alias en el config: `musicas: {intro: {archivo: './musica/intro.mp3', volumen: 0.8}}`.
