---
description: 'Historial de versiones de Morfeo: qué trae cada versión publicada en npm.'
outline: [2, 2]
---

# Historial de versiones

Todas las versiones publicadas en npm, de la más nueva a la primera. Para actualizar un proyecto:

```bash
npm install morfeo@latest
```

<div class="historial-lista">
<Versiones enlaces="misma" />
</div>

## 0.5.1 {#v0-5-1}

<p class="fecha-version">13 de noviembre de 2026</p>

**Arreglos**
- Videos 3D sin textos fantasma: con la tarjeta de video, los videos que usan 3D renderizan como máximo 3 cuadros a la vez (con más, algunos cuadros salían con rótulos o subtítulos de cuadros anteriores). Casi igual de rápido; `render.concurrencia` o `MORFEO_CONCURRENCIA` lo siguen cambiando.
- `morfeo revisar` ya reconoce "tú" y otras formas en segunda persona con acento.
- Los consejos de duración de formato largo nombran la fórmula y su rango (por ejemplo, biografía 90–180 s).
- La página del paquete en npm apunta a la documentación en morfeo.ureck.dev.

## 0.5.0 {#v0-5-0}

<p class="fecha-version">13 de noviembre de 2026</p>

**Del tema al reel terminado** (ver [la guía](/guia/estudio))
- Cada proyecto trae instrucciones para Claude Code y Codex: «Configúrame» y «Hazme un video sobre…».
- `npx morfeo estilo`: página para crear tu estilo (nombre, siglas, colores, letra, voz, ritmo y cierre) con vista previa.
- `npx morfeo guion "tema" --investigar`: cada dato con su fuente, buscado en la web.
- `npx morfeo previa <id>`: solo el gancho, para aprobarlo antes del render completo.
- `revisar` comprueba que la voz dijo el guion y que nada quede bajo los botones de las apps; `hoja --zona` las pinta.
- Portada con tu marca (`<título> (portada).jpg`) y texto del post con fuentes y 3 ganchos de reserva.
- Capa `linea` (línea de tiempo), `tierra` que vuela al lugar y 8 efectos de sonido nuevos.

## 0.4.0 {#v0-4-0}

<p class="fecha-version">12 de noviembre de 2026</p>

**Todas las fórmulas de historia, con su base lista** (ver [Historias, series y fórmulas](/guia/historias))
- 11 fórmulas medidas en videos de referencia: `construiste`, `recomendable`, `escalada`, `supervivencia`, `experimento`, `misterio`, `demuestralo`, `mito`, `roast`, `serie` y `biografia`. `npx morfeo formulas` las lista.
- `npx morfeo guion "tema" --formula serie`: la IA sigue el esqueleto de la fórmula (y ya usa sellos, pasos, pixel y rayos X). Sin `--formula`, elige la que mejor le quede.
- `formula: 'serie'` en el guion: `morfeo revisar` da consejos propios de cada fórmula.
- `npx morfeo nuevo-video mi-video --look serie` (o `mito`, `escalada`, `biografia`, `construiste`): bases que ya renderizan.

**Series interactivas y documental**
- Capas nuevas: `bloqueo` (pantalla de bloqueo con salto de año y notificaciones), `llamada`, `recuento` (lo que votaron), `capitulo` (fin de capítulo con A/B y horario), `vigilancia`, `cintillo`, `fecha`, `calendario`, `dividida` (pantalla A | B) y `tierra` (globo que gira y clava un pin).
- `lugares`: varios mundos en un video; cada escena elige el suyo con `lugar` y la cámara corta o usa la transición al cambiar.

**Kit para armar** (`morfeo/kit`)
- `Aparece` (piezas que caen con rebote o crecen en su palabra), `Multitud3D` (cientos de figuras en una sola pieza), `Mano3D` (mano en primera persona que aprieta un control), y `Rueda`, `Motor`, `Asiento`.

**Arreglos**
- Los rótulos `paso` y `pixel` ya no se enciman con los subtítulos de arriba, y el `sello` se aparta del subtítulo a media altura.

## 0.3.4 {#v0-3-4}

<p class="fecha-version">12 de noviembre de 2026</p>

**Sellos y modos de imagen** (ver [Rayos X, plano y holograma](/guia/mundo#rayos-x-plano-y-holograma))
- Rótulos nuevos: `sello` (sello de goma inclinado que cae de golpe, con su sonido), `paso` (titular arriba a la izquierda con insignia numerada, `rotuloPaso`) y `pixel` (letra de videojuego en caja de color). `rotuloColor` y `rotuloY` para todos.
- Modos de imagen por escena: `modo: 'rayosx' | 'plano' | 'holograma'`, con `modoEn` y `modoHasta` por palabra y un barrido de entrada. Funcionan en 2D, 3D y componentes propios.
- Subtítulos `palabra` y `pop`: `coloresClave` rota colores entre las palabras clave.
- Validación: estilos de rótulo y modos que no existen, `rotuloPaso` sin `paso` y `modoEn` sin `modo` se avisan antes de renderizar.

## 0.3.3 {#v0-3-3}

<p class="fecha-version">11 de noviembre de 2026 · incluye los cambios de 0.3.2, que no se publicó por separado</p>

**Videos listos para subir**
- Los videos terminados se llaman como su título: `salida/El cachalote, el gigante del océano.mp4` (con su `.jpg` y `.txt`). YouTube y TikTok toman el nombre del archivo como título al subirlo. `render.nombreArchivo: 'id'` vuelve al nombre por id.
- Los videos que ya tenías con el id, o con un título que cambiaste, se renombran solos sin volver a renderizar. Dos títulos iguales llevan " (2)".
- El nombre se limpia para que sirva en Windows, Mac y Linux (conserva acentos y emojis).

**Render limpio**
- Un render a la vez por computadora: si corres dos, el segundo espera su turno. Dos renders usando la tarjeta de video a la vez dejaban pedazos de texto de otros cuadros (rótulos o subtítulos fantasma).
- Los reflejos 3D se aplican desde el primer cuadro (antes el inicio de algunos tramos salía más oscuro).
- Tus componentes pueden importar `three` y `react` aunque tu proyecto no los tenga instalados.
- `morfeo revisar` reconoce más frases en segunda persona ("¿sabías…?", "crees", "pagarías").

## 0.3.1 {#v0-3-1}

<p class="fecha-version">11 de noviembre de 2026</p>

**Producción en serie**
- `npx morfeo nuevo-video <id> --look 2d|3d`: crea el guion y su mundo desde una base que ya renderiza y registra el componente en `morfeo.config.mjs`. `morfeo nuevo` ya trae `ejemplo-2d` y `ejemplo-3d`.
- Lote que no se detiene: si un video falla, los demás siguen; al final ves cuáles fallaron y `render --solo-fallidos` reintenta solo esos.
- Aviso antes de renderizar cuando un momento por palabra (`en`, `rotuloEn`, `hasta`…) no está en lo que dice la voz o en el `show`.
- Validación más clara: componentes no registrados, `toma` sin `mundo`, `medida`, `trazo`, `cta pide`, `calidad`, `tags`.
- Calidad por video: `calidad: 'alta' | 'media' | 'ligera'` (o `render.calidad`); los videos con `mundo` usan `media` por defecto y pesan menos.
- `salida/<id>.txt` con título, `descripcion`, `tags` y créditos listos para publicar.
- Sonidos automáticos según cómo entra cada capa (`sonido: false` lo apaga); efecto nuevo `golpe`.
- Más rápido: si la voz ya está en caché, el audio se prepara en una sola pasada (unas 40 % menos de espera al volver a renderizar).
- El texto de una capa que no cabe se achica solo (palabra más larga o más de `maxLineas` renglones); `ajustar: false` lo apaga.

**Kit para cualquier tema, en 2D o 3D** (ver [Mundo, anotaciones y estructura](/guia/mundo#kit-para-escenas-a-medida))
- Personajes 2D: `Persona2D` con 8 expresiones (feliz, triste, enojado, sorpresa, miedo, dormido, pensativo, neutral), 7 poses, boca que se mueve mientras habla y cambios por palabra; `Multitud` y `Globo` de diálogo (con `en` y `hasta`).
- Escenarios 2D listos: `CiudadNoche`, `Cuarto`, `Campo`, `Calle`, `Oficina` y `Mar` (superficie o fondo marino).
- 3D: `Persona3D` con cara y las mismas expresiones y poses, `Ciudad` (de día o de noche), `Camino` y `Cuarto3D`.
- Gráficas que se dibujan solas: `GraficaBarras`, `GraficaLinea`, `Comparacion` y `Lupa`.
- Los nombres `Persona` y `Coche` siguen siendo los del diorama (0.3.0).

**Arreglos**
- Windows: Whisper ya funciona (Remotion dejaba sus binarios en otra carpeta y el render se caía); el progreso de su descarga va en una sola línea.
- Una instalación desde npm ya no pide `npx morfeo instalar` otra vez por diferencias de saltos de línea (CRLF/LF).
- Los efectos de sonido caen en su momento con `en: 'palabra+0.3'`, `'voz'` o `'fin'`, y con palabras con acento.
- `hoja` acepta rutas relativas.

## 0.3.0 {#v0-3-0}

<p class="fecha-version">11 de noviembre de 2026</p>

**Maqueta 3D: explicadores en un diorama low-poly**
- Estilo nuevo **`maqueta`**: una palabra a la vez al centro (Primera Letra, sombra suave), rótulos blancos con contorno o en pastilla oscura inclinada (`rotuloEstilo: 'pastilla'`), cortes rápidos. Ver [Maqueta 3D](/guia/maqueta).
- Kit diorama (`morfeo/kit`): `Maqueta` (isla flotante con estratos, pasto y flores), `Modelo` (cualquier `.glb` o recurso de la biblioteca, con sus animaciones), `Persona`, `Coche`, `Trafico` (coches que hacen fila en una pluma o un rojo), `Pluma`, `Corte` (rayos X), `Gotas`, `Confeti3D` y `Linterna`.
- `Lienzo3D` con `hora` (día → atardecer → noche) y `etiquetas`: pastillas con flecha pegadas a puntos 3D que siguen al objeto cuando la cámara se mueve. `proyectar()` dice dónde cae un punto 3D en la pantalla.
- Tarjetas de datos nuevas: `reloj`, `cronometro`, `termometro`, `recipientes`, `ficha` (credencial), `checklist` y `mapa`.
- `morfeo revisar` entiende el formato largo: en `maqueta` (o `formato: 'largo'`) 90–130 s está bien y pide un corte de cámara cada 2–3 s.
- Rótulos: `tema.rotulo` (`estilo`, `inclinar`, `y`, `tam`) y, por escena, `rotuloEstilo` y `rotuloInclinar`. Subtítulos con `mayusculas: 'inicial'`, y `contorno: 0` usa sombra suave.

## 0.2.1 {#v0-2-1}

<p class="fecha-version">11 de noviembre de 2026</p>

**Whisper se instala a la primera**
- `npx morfeo instalar --whisper` revisa antes que estén `git`, `make` y `cmake`. En Mac con Homebrew, si falta `cmake`, pregunta y lo instala.
- Si la compilación falla, ya no deja la carpeta a medias: el siguiente intento empieza limpio (antes había que borrar `~/.morfeo/whisper` a mano).

## 0.2.0 {#v0-2-0}

<p class="fecha-version">10 de noviembre de 2026</p>

**Videos que se ven producidos**
- **Mundo por video**: `mundo: [...]` y `toma` en cada escena; la cámara viaja entre planos en vez de cambiar de fondo. Ver [Mundo, anotaciones y estructura](/guia/mundo).
- **Kit** (`morfeo/kit`) para armar escenas a medida: 2D ilustrado con paralaje y 3D (`Lienzo3D`, terreno, tubos con agua, casas, mesa, pilas).
- **Anotaciones**: `dato`, `medida`, `trazo`, `contorno`, `fuente`, `seccion`, `insignia`, `sello`, `nombre`, `accion`, `cursor` y `terminal`; `sigue` pega una capa a otra.
- **Texto en dos niveles**: subtítulo `seleccion` (chico, arriba) con `claves`, y `rotulo` grande por escena. `serie` pone una pastilla fija arriba.
- **Cierre que pide algo**: `{type: 'cta', pide: 'comenta', palabra: '…'}` o `pide: 'comparte'`.
- Transiciones `barrido`, `empuje`, `mascara` y `destello`; curvas `resorte` y `seca`; acabado `post` (tinte, luz, bordes).

**Estructura y revisión**
- `npx morfeo revisar`: consejos de gancho, ritmo, preguntas y cierre medidos en videos virales (también al renderizar; `render.consejos: false` los apaga).
- `npx morfeo hoja <id>`: hoja de contacto PNG del video.
- El guion con IA apunta a ~45 s, agrega rótulos, claves y un cierre que pide algo.

**Más rápido en Windows**
- La tarjeta de video (`angle`) es el modo por defecto también en Windows (~4× más rápido) y se renderizan más cuadros en paralelo. `MORFEO_CONCURRENCIA=n` la fuerza.

**Cambia el aspecto**
- Los subtítulos por defecto de documental, ilustrado, historia y mesa ahora son chicos y arriba (`seleccion`). Para el aspecto anterior: `tema: {subtitulos: {tipo: 'karaoke', y: 330, tam: 54}}`.
- El estilo `3d` usa subtítulos `pop` de hasta 3 palabras (antes, una palabra a la vez).

## 0.1.3 {#v0-1-3}

<p class="fecha-version">10 de noviembre de 2026</p>

**Recursos más difíciles de romper**
- Si un recurso no está en la variante 2D pedida, prueba las otras variantes 2D antes de usar un modelo 3D.
- Nueva variante 2D `plano`: ilustración plana con muchísimos animales y objetos.
- Un recurso que no está en ninguna biblioteca ya no detiene el render: se avisa y se omite la capa.
- Diccionario: televisión, tele, tv, monitor, pantalla, cd, disco, dvd, tablet, consola portátil, cartucho, joystick, arcade, vida, nivel, bloque, hongo y más.
- Modelos externos planos (un control acostado) se levantan hacia la cámara, y el encuadre ignora cables y partes sueltas largas.

**Arreglos**
- Subtítulo `pop`: las palabras ya no se pegan cuando la palabra activa crece.

## 0.1.2 {#v0-1-2}

<p class="fecha-version">10 de noviembre de 2026</p>

**Objetos 2D y 3D sin dibujar nada**
- Biblioteca de recursos con diccionario temático en español (19 temas): `{tipo: 'recurso', buscar: 'tubería', estilo: '3d'}`.
- 3D low-poly de Kenney (~1.400 modelos), 3D realista de Poly Haven (~500 con texturas), 2D de Iconify (200 mil+, en 17 estilos visuales) y Poly Pizza opcional.
- Caché compartida en `~/.morfeo/biblioteca` y créditos automáticos en `salida/creditos.md`.
- `npx morfeo recursos temas` y `npx morfeo recursos buscar "pizza" --3d`.
- 20 objetos 3D hechos en código (trofeo, cohete, corazón…) y piezas de construcción: tubería con agua que fluye, muro de ladrillos, viga, columna, escalera, losa, tanque y corte de suelo.
- El guion con IA elige objetos del diccionario según la temática; los emojis quedan como último recurso.

**Escenarios ilustrados**
- Bosque, cuarto, departamento, túnel y pasillo, animados, como fondo (`{tipo: 'escenario'}`) o como capa.
- `serie`, `ilustrado` e `historia` los usan por defecto.

**Arreglos**
- Una escena con solo `say` (sin capas) ya es válida.
- Personaje, pose, escenario u objeto 3D inexistentes se avisan antes de renderizar.
- Chat más legible y metales 3D menos oscuros.

## 0.1.1 {#v0-1-1}

<p class="fecha-version">10 de noviembre de 2026</p>

**Render más rápido y estable**
- En Mac con Apple Silicon usa la GPU por defecto (unas 4 veces más rápido); si falla, reintenta con CPU.
- Concurrencia segura y reintento automático si el navegador truena.
- Progreso visible también sin terminal interactiva.
- Miniatura cuando la primera escena ya está completa y sin subtítulos (`miniaturaEn`).

**Errores antes de renderizar**
- Voces que no existen, con sugerencias ("¿quisiste decir em_alex?").
- Archivos de `assets/` que no existen.

**Arreglos visuales**
- `escribir` ya no muestra los `**` del resaltado.
- Estilo `3d` legible sobre cielo claro.
- Los botones de `eleccion` ya no se enciman con los subtítulos de `serie`.
- Teléfono sin imagen con pantalla de app; textura de papel fija (el estilo `explicativo` pesaba 10 veces más).
- Cambiar solo parte de un tema (por ejemplo `tema: {subtitulos: {tipo: 'bloque'}}`) ya no borra el resto.

**Nuevo:** capa `ventana`, una escotilla circular con borde metálico.

## 0.1.0 {#v0-1-0}

<p class="fecha-version">9 de noviembre de 2026</p>

Primera versión: 10 estilos, motor de capas, voces Kokoro/ElevenLabs/OpenAI, música, subtítulos, guiones con IA,
personajes, HUD, 3D y componentes propios.
