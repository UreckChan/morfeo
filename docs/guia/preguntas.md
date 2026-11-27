---
title: Preguntas frecuentes
description: '¿Qué es Morfeo? Un generador gratuito de videos verticales para TikTok, YouTube Shorts y Reels que corre en tu computadora: lo usas con tu IA (Claude Code, Codex) o escribiendo el guion en código.'
head:
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué es Morfeo?","acceptedAnswer":{"@type":"Answer","text":"Morfeo es un generador de videos verticales animados (TikTok, YouTube Shorts, Reels) que corre en tu computadora. Escribes el guion o se lo pides a tu IA, y Morfeo pone la voz, la música, los subtítulos, las animaciones 2D y 3D y la miniatura."}},{"@type":"Question","name":"¿Morfeo es gratis?","acceptedAnswer":{"@type":"Answer","text":"Sí. Se instala desde npm sin costo y las voces que trae (Kokoro) también son gratis. Solo pagas si eliges una voz de un proveedor como ElevenLabs u OpenAI."}},{"@type":"Question","name":"¿Necesito saber programar?","acceptedAnswer":{"@type":"Answer","text":"No. Puedes pedirle el video a una IA como Claude Code o Codex: cada proyecto trae instrucciones y guías para que la IA investigue el tema, escriba el guion y renderice el video. Si programas, puedes escribir las escenas tú mismo en JavaScript."}},{"@type":"Question","name":"¿En qué computadoras funciona?","acceptedAnswer":{"@type":"Answer","text":"En Windows, macOS y Linux, con Node.js 18.17 o más nuevo. El instalador de Morfeo prepara lo demás (Python, voces y navegador)."}},{"@type":"Question","name":"¿Qué tipo de videos hace?","acceptedAnswer":{"@type":"Answer","text":"Videos verticales de 1080×1920: datos curiosos, historias con personajes, explicadores, tops, series, biografías y más, en 2D o 3D, con 16 estilos, personajes por piezas, lugares 3D y fórmulas de historia."}},{"@type":"Question","name":"¿En qué se diferencia de Remotion?","acceptedAnswer":{"@type":"Answer","text":"Morfeo usa Remotion y Three.js por dentro, pero ya trae todo armado: voz, música, subtítulos, estilos, lugares 3D, personajes y revisión de calidad. Con Remotion solo tendrías que construir cada pieza desde cero."}}]}'
---

# Preguntas frecuentes

## ¿Qué es Morfeo?

Un **generador de videos verticales animados** para TikTok, YouTube Shorts y Reels que corre en tu computadora.
Escribes el guion, o se lo pides a tu IA, y Morfeo pone la voz, la música, los subtítulos, las animaciones 2D y 3D y la
miniatura. Sale un MP4 listo para subir.

## ¿Es gratis?

Sí. Se instala desde [npm](https://www.npmjs.com/package/morfeo) sin costo y las voces que trae (Kokoro) también son
gratis. Solo pagas si eliges una voz de un proveedor como ElevenLabs u OpenAI. Ver [licencia](/licencia).

## ¿Necesito saber programar?

No. Puedes pedirle el video a una IA como **Claude Code** o **Codex**: cada proyecto trae instrucciones y guías
(skills) para que la IA investigue el tema con fuentes, escriba el guion y renderice el video. Ver
[Usar con tu IA](/guia/ia). Si programas, escribe tú las escenas en JavaScript ([tu primer video](/guia/primer-video)).

## ¿En qué computadoras funciona?

Windows, macOS y Linux, con Node.js 18.17 o más nuevo. `npx morfeo instalar` prepara lo demás (Python, voces y
navegador). Ver [instalación](/guia/empezar).

## ¿Qué tipo de videos hace?

Videos de 1080×1920: datos curiosos, historias con personajes, explicadores, tops, series, biografías, "un día en la
vida" y más, en 2D o 3D. Tiene 16 [estilos](/guia/estilos), [personajes](/guia/personajes) por piezas,
[lugares 3D](/guia/ambientes), [objetos que se abren por dentro](/guia/textos#por-dentro) y
[fórmulas de historia](/guia/historias).

## ¿En qué se diferencia de Remotion?

Morfeo usa Remotion y Three.js por dentro, pero ya trae todo armado: voz, música, subtítulos, estilos, lugares 3D,
personajes y una revisión de calidad que avisa de cuadros tapados o textos encimados. Con Remotion solo, cada pieza
se construye desde cero.

## ¿Puedo usar mi propia voz o mi marca?

Sí: voces de ElevenLabs u OpenAI, una grabación tuya, tu logo, tus colores y tu letra (`npx morfeo estilo`). Ver
[voces y música](/guia/voces-musica).
