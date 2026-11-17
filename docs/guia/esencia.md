---
description: 'Dale tu esencia a los videos de Morfeo: gustos.md con tus reglas, tu estilo, tus voces, tu ritmo y tus formatos, para que cada canal suene y se vea distinto.'
---

# Tu esencia: gustos y configuración

Morfeo trae guías de oficio para tu IA ([skills](./skills)), pero dos canales hechos con Morfeo no tienen por qué
parecerse. Lo que hace tuyos los videos vive en tres lugares de tu proyecto:

| Archivo | Qué guarda | Quién lo cambia |
|---|---|---|
| `gustos.md` | Tus reglas: tono, voz, ritmo, formatos, lo que nunca quieres | Tú, o tu IA cuando la corriges |
| `estilo.json` | Nombre, siglas, colores, letra, voz y frase de cierre | `npx morfeo estilo` (una página con vista previa) |
| `morfeo.config.mjs` | Marca, voces con nombre, música, estilos propios, personajes y componentes | Tú o tu IA |

## gustos.md: las reglas de tu canal

Es un archivo de texto en la carpeta de tu proyecto. Tu IA lo lee **antes de cada video** y sus reglas **mandan sobre
las skills**: si la guía dice "cierra pidiendo un comentario" y tu `gustos.md` dice "siempre cierra con «¿ya lo
sabías?»", gana tu regla.

Cada vez que corrijas algo ("esa voz va muy lenta", "no uses esa palabra", "pon el control más grande"), tu IA te
ofrece guardarlo aquí para que no se repita en el siguiente video. Con el tiempo, el archivo se vuelve el manual de tu
canal.

`npx morfeo nuevo` lo crea con estas secciones; llénalas a tu manera:

```md
# Gustos del canal

## Quién soy y de qué va el canal
- Curiosidades de videojuegos para gente de 15 a 30 años, en español de México.

## Voz y ritmo
- Alternar las voces `alberto`, `fernando` y `david` entre videos, en ese orden.
- Ritmo rápido: voz a 1.15× y sin pausas muertas entre escenas.

## Mi tono
- Cercano, con humor, de tú. Sin groserías.
- Palabras que sí uso: "neta", "de volada". Palabras que no: "increíble", "en este video".

## Cómo se ve
- Siempre un ambiente de fondo; nunca texto sobre un color liso.
- Objetos 3D para todo lo que se nombra.
- Estilo `3d` para explicar cosas; `caricatura` para historias.

## Formatos que más me funcionan
- Mito, "construiste" y "un día en la vida de…". Cierre «¿ya lo sabías?» en los explicadores.

## Lo que no
- Emojis en pantalla.
- Datos sin fuente.
```

### Tres canales, tres esencias

El mismo Morfeo, tres `gustos.md` distintos:

| Canal | Lo que pondría en gustos.md |
|---|---|
| Videojuegos, humor | Voces rápidas alternadas, jerga ligera, estilo `3d` con ambientes, sonidos de arcade, cierre «¿ya lo sabías?» |
| Ciencia para niños | Voz pausada y cálida, nada de sustos, estilo `ilustrado`, una sola idea por video, cierre "pregúntale a tu maestra" |
| Finanzas personales | Voz sobria, cifras siempre con fuente, estilo `mesa` con contadores, nada de promesas de dinero fácil |

## estilo.json: cómo se ve y cómo suena

```bash
npx morfeo estilo
```

Abre una página en tu computadora con vista previa: nombre y siglas del canal, colores, letra de títulos, voz, ritmo
(pausado, natural o ágil) y la frase de cierre. Guarda `estilo.json` y desde ahí todos tus videos salen así. Un
video puede cambiar cualquier cosa con su propio `estilo`, `voice` o `speed`.

## morfeo.config.mjs: tus voces, tu música y tus piezas

### Voces con nombre

Ponles nombre a tus voces y úsalas en los guiones con `voice: 'nombre'`. Si cambias la voz aquí, cambian todos los
videos que la usan, sin tocar los guiones.

```js
voces: {
  narrador: [['em_alex', 0.6], ['am_michael', 0.4]],   // gratis: mezcla de voces Kokoro
  alberto: {proveedor: 'elevenlabs', voz: 'ID_DE_LA_VOZ', idioma: 'es', ajustes: {speed: 1.15}},
},
```

- `ajustes: {speed: 1.15}` acelera la voz de ElevenLabs sin que suene a cámara rápida (hasta 1.2). Un poco de
  aceleración hace el video más dinámico.
- Para alternar varias voces entre videos, nómbralas y escribe la regla en `gustos.md` ("alternar `a`, `b` y `c` en
  ese orden"): tu IA elige la que sigue.
- La clave de ElevenLabs va en `.env`, nunca en el guion. Más en [Voces y música](./voces-musica).

### Música, estilos propios, personajes y componentes

```js
musicas: {intro: {archivo: './musica/intro.mp3', volumen: 0.8}},
estilos: {'mi-marca': {base: 'minimal', colores: {acento: '#00E0A0'}, subtitulos: {resalte: '#00E0A0'}}},
personajes: {neto: {poses: {normal: './personajes/neto.png', feliz: './personajes/neto-feliz.png'}}},
componentes: {MundoConsola: './escenas/MundoConsola.tsx'},
```

- **Estilos propios** heredan de uno de Morfeo y cambian colores, letras, subtítulos o ritmo.
- **Personajes** con poses para series que vuelven en cada capítulo.
- **Componentes**: tus propios mundos 2D o 3D en React, para lo que no esté en el kit.

Todo lo que se puede poner está en [morfeo.config.mjs](../referencia/config).

## Cómo trabajan juntos

1. Pides un video a tu IA.
2. Tu IA lee `gustos.md` y la skill que toque (guion, animación, 3D).
3. Escribe el guion con tus voces, tu estilo y tus formatos.
4. Morfeo lo renderiza con tu `estilo.json` y tu `morfeo.config.mjs`.
5. Si corriges algo, tu IA te ofrece guardarlo en `gustos.md` para la próxima.
