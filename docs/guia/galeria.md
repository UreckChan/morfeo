---
description: 'Galería de Morfeo: los 16 estilos, los 35 lugares 3D, los 20 fondos 2D, uniformes y equipo, y los tipos de video y formatos que salen de cada render.'
---

# Galería

Todo lo que Morfeo puede dibujar, en un solo lugar. Cada imagen sale de un render real (proyecto de ejemplo, voz
Kokoro gratuita).

## Estilos

<div class="galeria-docs">
<figure><img src="/img/estilo-datos-curiosos.jpg" alt="datos-curiosos" loading="lazy"><figcaption><code>datos-curiosos</code></figcaption></figure>
<figure><img src="/img/estilo-explicativo.jpg" alt="explicativo" loading="lazy"><figcaption><code>explicativo</code></figcaption></figure>
<figure><img src="/img/estilo-documental.jpg" alt="documental" loading="lazy"><figcaption><code>documental</code></figcaption></figure>
<figure><img src="/img/estilo-ilustrado.jpg" alt="ilustrado" loading="lazy"><figcaption><code>ilustrado</code></figcaption></figure>
<figure><img src="/img/estilo-historia.jpg" alt="historia" loading="lazy"><figcaption><code>historia</code></figcaption></figure>
<figure><img src="/img/estilo-mesa.jpg" alt="mesa" loading="lazy"><figcaption><code>mesa</code></figcaption></figure>
<figure><img src="/img/estilo-serie.jpg" alt="serie" loading="lazy"><figcaption><code>serie</code></figcaption></figure>
<figure><img src="/img/estilo-infografia.jpg" alt="infografia" loading="lazy"><figcaption><code>infografia</code></figcaption></figure>
<figure><img src="/img/estilo-3d.jpg" alt="3d" loading="lazy"><figcaption><code>3d</code></figcaption></figure>
<figure><img src="/img/estilo-maqueta.jpg" alt="maqueta" loading="lazy"><figcaption><code>maqueta</code></figcaption></figure>
<figure><img src="/img/estilo-minimal.jpg" alt="minimal" loading="lazy"><figcaption><code>minimal</code></figcaption></figure>
<figure><img src="/img/estilo-caricatura.jpg" alt="caricatura" loading="lazy"><figcaption><code>caricatura</code></figcaption></figure>
<figure><img src="/img/estilo-linea.jpg" alt="linea" loading="lazy"><figcaption><code>linea</code></figcaption></figure>
<figure><img src="/img/estilo-corporativo.jpg" alt="corporativo" loading="lazy"><figcaption><code>corporativo</code></figcaption></figure>
<figure><img src="/img/estilo-pizarra.jpg" alt="pizarra" loading="lazy"><figcaption><code>pizarra</code></figcaption></figure>
<figure><img src="/img/estilo-datos.jpg" alt="datos" loading="lazy"><figcaption><code>datos</code></figcaption></figure>
</div>

Detalle de cada uno en [Estilos](/guia/estilos).

## Lugares 3D

![Los 35 lugares 3D](/img/lugares-3d.jpg)

Los 35 lugares de `ambiente`: cuartos, tiendas, calles, laboratorio, salón, paisajes (isla, montaña, playa, desierto,
bosque, nevado, océano, ciudad), cueva, estudio, combi, campamento, recámara, canchas de cinco deportes, auditorio,
teatro, conferencia, sala de juntas y vlog. Todos de día o de noche, con clima y con gente de fondo
(`publico: 'vacio' | 'poco' | 'normal' | 'lleno'`). Ver [Ambientes](/guia/ambientes).

## Fondos 2D

![Los 20 fondos 2D](/img/fondos-2d.jpg)

`fondo: {tipo: 'escenario', nombre}` o `fondos: 'auto'` en el video: bosque, cuarto, departamento, túnel, pasillo,
estadio, cancha de básquet, teatro, auditorio, sala de juntas, ciudad de noche, campo, calle, oficina, mar, aula,
oficina abierta, conferencia, vlog y tienda. Los que tienen público aceptan `publico`.

## Uniformes y equipo

![Uniformes en 2D y 3D](/img/uniformes.jpg)

`atuendo` viste a la persona 3D, a la gente de fondo y a la caricatura 2D: futbolista, basquetbolista, beisbolista,
tenista, voleibolista, árbitro, doctor, enfermera, policía, bombero, chef, obrero, traje, piloto, astronauta,
mecánico, científico, programador, maestro, graduado y escolar. `sostiene` le pone algo en la mano: balones de cada
deporte, bate, guante, raqueta, micrófono, laptop, maletín, portapapeles, trofeo, silbato o llave.

## Tipos de video

| Tipo | Cómo se arma | Ejemplo |
|---|---|---|
| Dato curioso | estilo `datos-curiosos` o cualquiera con `rotulo` | "Pac-Man nació de una pizza" |
| Tutorial / explicador | `explicativo`, `pizarra` o `infografia` con `proceso`, `medidor`, `barra` | "Por qué tu control se mueve solo" |
| Negocios y finanzas | `corporativo`, `datos` o `linea` con `grafica`, `kpi`, `pictograma` | "Lo que gastas en microtransacciones" |
| Historia de vida | `ambiente: 'auto'` + `etapa` en cada escena | "Del salón a la conferencia" |
| Historia en primera persona | `historia` + `pov`, `reparto`, `pantalla` | [Historias en primera persona](/guia/primera-persona) |
| Serie con votación | `serie` + escena `eleccion` + `morfeo serie` | "Reto 30 días, parte 2" |
| Deportes | canchas 3D con jugadores, uniformes y balón | "El estadio de FIFA es real" |
| Maqueta / proceso de obra | `maqueta` + ambiente `plano` con `armado` | "Así se construye un estudio" |
| Vlog | ambiente `vlog` o fondo 2D `vlog` | "Hoy les cuento…" |

## Formatos de salida

Cada `npx morfeo render` deja en `salida/`:

- **`<título>.mp4`**: el video vertical 1080×1920 a 30 fps, con voz, música, efectos y subtítulos.
- **`<título> (portada).jpg`**: la portada con el título grande, lista para subir.
- **`<título>.jpg`**: la miniatura.
- **`<título>.txt`**: título, descripción, hashtags y fuentes por red (TikTok, YouTube Shorts, Instagram Reels).
- **`morfeo previa`** (las 2 primeras escenas) y **`morfeo animatica`** (todo a 1/3, con su hoja de contacto) para aprobar antes del render final.
- **`morfeo carrusel`**: las imágenes 4:5 para un carrusel y el hilo de texto.
