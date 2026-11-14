---
description: 'Las skills de Morfeo: guías de oficio para tu IA sobre ganchos, estructura de la historia, animación y 3D, incluidas en el paquete.'
---

# Skills: guías de oficio para tu IA

Morfeo trae cuatro guías que le enseñan a tu IA a hacer mejores videos: cómo abrir, cómo ordenar la historia, cómo
se mueve cada cosa y cómo armar un mundo 3D. Vienen dentro del paquete, así que siempre coinciden con tu versión.

| Skill | Para qué |
|---|---|
| `morfeo-video` | La ruta completa de un video, del tema al archivo terminado. Dice cuándo abrir las otras tres. |
| `morfeo-guion` | Ganchos (escribir varios y elegir), historia ordenada por retención, escalada, pago y cierre. |
| `morfeo-animacion` | Entradas y salidas, tiempos y curvas, escalonado, énfasis, movimiento de ambiente y cámara. |
| `morfeo-3d` | Luz, materiales, color, forma de las piezas, encuadre vertical y rendimiento. |

## Cómo llegan a tu proyecto

```bash
npx morfeo nuevo mi-canal   # un proyecto nuevo ya las trae
npx morfeo skills           # las instala o las pone al día en un proyecto que ya tienes
npx morfeo skills --lista   # solo las muestra
```

- **Claude Code** las encuentra en `.claude/skills/` y abre la que toca según lo que le pidas.
- **Codex u otra IA** las lee desde `node_modules/morfeo/skills/`; `AGENTS.md` le dice cuál abrir en cada paso.

Corre `npx morfeo skills` después de actualizar Morfeo. Solo reemplaza las cuatro carpetas `morfeo-*`; tus otras
skills no se tocan. Si tu proyecto es anterior a la 0.7.0, su `AGENTS.md` no las menciona: copia la tabla de
"Guías de oficio" desde `node_modules/morfeo/plantilla/AGENTS.md`.

## Qué cambia en los videos

**Guion.** La IA escribe primero el pago (el dato o giro por el que vale la pena ver el video), luego de 6 a 10
ganchos de arquetipos distintos, elige uno y deja tres de reserva en `hooks`. La historia se arma hacia atrás desde
el pago, con una pregunta abierta en cada tramo y un giro hacia la mitad.

| Arquetipo | Molde |
|---|---|
| Cifra imposible | "Este [objeto] aguanta [cifra]." |
| Pregunta directa | "¿Y si tu [cosa] llevara años haciendo [algo]?" |
| Contradicción | "Todos creen que [X]. No es así." |
| Hallazgo | "Hay [algo oculto] dentro de [cosa conocida]." |
| Experimento | "Probé [X] durante [tiempo] para saber [Y]." |
| Esto es X, pero… | "Este es [nombre]. Hoy va a [giro]." |
| Error común | "Llevas años [haciendo X] mal." |

**Animación.** Cada cosa entra en la palabra que la nombra, las capas hermanas entran escalonadas, lo importante
nunca entra solo con `aparecer`, hay una sola cosa llamativa por momento y nada se queda quieto más de 3 segundos.

**3D.** Sujeto despegado del fondo, paleta de tres colores, suelo y sombra, una toma por escena que muestra el
objeto entero y por su cara buena, y un fondo con algo que se mueve.

## En la revisión

`npx morfeo revisar` ahora también mira los ganchos de reserva:

- Sugiere dejar tres en `hooks` si hay menos.
- Avisa si dos arrancan igual o repiten el arranque del gancho principal: son la misma idea con otras palabras.

`npx morfeo guion` (con IA) escribe con estas mismas reglas.

## Tus propias reglas mandan

Las skills son el punto de partida. Lo que escribas en `gustos.md` tiene prioridad, y puedes agregar skills tuyas en
`.claude/skills/` con otro nombre.

Son recomendaciones basadas en patrones de videos que funcionan: suben las probabilidades, no garantizan resultados.
