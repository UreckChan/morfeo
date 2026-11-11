# Instalación

Necesitas **Node.js 18 o más nuevo** ([nodejs.org](https://nodejs.org), versión LTS). Python también, pero el instalador
te ayuda a conseguirlo.

## 1. Crea tu proyecto

```bash
npx morfeo nuevo mi-canal
cd mi-canal
npm install
```

El proyecto trae tres videos de ejemplo (uno clásico, uno documental y uno explicativo), tu configuración y un componente
propio de muestra.

## 2. Prepara tu computadora (una sola vez)

```bash
npx morfeo instalar
```

Deja todo en `~/.morfeo` y lo comparten todos tus proyectos:

| Paso | Tamaño | Qué hace |
|---|---|---|
| Python 3.10–3.13 | — | Lo busca; si falta, ofrece instalarlo (Homebrew en Mac, winget en Windows) |
| Entorno de voces | ~200 MB | Crea un entorno aislado con Kokoro, numpy y scipy |
| Voces Kokoro | ~340 MB | Más de 50 voces en varios idiomas |
| Navegador de render | ~100 MB | Chrome Headless, una sola copia para todos tus proyectos |
| Whisper (opcional) | ~470 MB | Subtítulos sincronizados palabra por palabra. Se compila: en Mac pide `xcode-select --install` y `cmake` (te ofrece instalarlo con Homebrew) |

Opciones: `--si` responde que sí a todo; `--whisper` o `--sin-whisper` deciden Whisper sin preguntar.

::: tip ¿Algo falta?
`npx morfeo doctor` revisa cada pieza y te dice cómo arreglar lo que falte.
:::

## 3. Genera tus videos

```bash
npx morfeo render
```

Los `.mp4` y sus miniaturas `.jpg` quedan en `salida/`. Cada video tarda de 30 segundos a 3 minutos, según tu computadora.
Si tienes tarjeta de video, prueba `npx morfeo render --gpu`.

Para verlos y ajustarlos en vivo:

```bash
npx morfeo studio
```

## Estructura del proyecto

```
mi-canal/
├─ morfeo.config.mjs   tu marca, estilo, voces, música, personajes…
├─ videos.mjs          videos escritos a mano
├─ guiones/            un archivo por video (aquí escribe `morfeo guion`)
├─ assets/             tus imágenes, videos y modelos 3D
├─ escenas/            tus componentes de React (opcional)
├─ .env                tus claves (ElevenLabs, OpenAI, Anthropic), nunca a git
└─ salida/             los videos terminados
```
