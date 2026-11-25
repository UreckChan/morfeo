---
description: 'El mismo video 3D en otro estilo visual: cómic, pixel art, PS2, neón, tinta china, papel recortado, boceto a lápiz, plastilina y juguete. Una línea en el guion o una variante por look desde la terminal.'
---

# Looks de render

Todo lo 3D de un video (ambientes, lugares propios, escenas 3D y tus componentes con `Lienzo3D`) puede salir en otro
estilo visual, sin tocar el guion ni los sets:

```js
export default {
	look: 'comic',
	ambiente: 'auto',
	scenes: [/* … */],
};
```

O saca el mismo video en varios looks de una vez, sin pisar el original:

```bash
npx morfeo render mi-video --looks comic,pixel,neon        # "<título> (look comic).mp4", …
npx morfeo animatica mi-video --looks plastilina,juguete   # rápido, para elegir
```

<figure><img src="/img/looks.jpg" alt="El mismo video en los 9 looks" loading="lazy" style="width:100%;border-radius:12px"><figcaption>El mismo video en los 9 looks (de izquierda a derecha): comic, pixel, ps2, neon, tinta, papel, boceto, plastilina y juguete</figcaption></figure>

| `look` | Cómo se ve |
|---|---|
| `comic` | Tintas planas, más color, línea negra y trama de puntos en las sombras |
| `pixel` | Pixel art: resolución baja y paleta corta |
| `ps2` | Consola vieja: pixel fino, sombreado plano y tramado |
| `neon` | Todo oscuro y solo las aristas encendidas con el color de cada pieza |
| `tinta` | Tinta china: tres aguadas sobre papel y trazo negro |
| `papel` | Papel recortado: colores planos con fibra y contorno café |
| `boceto` | Lápiz: papel blanco, contorno de grafito y achurado en las sombras |
| `plastilina` | Mate, colores suaves, contacto oscuro y foco corto |
| `juguete` | Plástico brillante y efecto maqueta (desenfoque arriba y abajo) |

- Las tramas, el papel y el tramado están fijos en pantalla: no cambian en cada cuadro, así que el MP4 no pesa más.
- Los textos, subtítulos y capas 2D no cambian: el look es solo del mundo 3D.
- `Lienzo3D look="pixel"` lo fija en un componente propio.
