# Novedades

Para actualizar un proyecto: `npm install morfeo@latest`.

## 0.3.1

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

**Kit para cualquier tema, en 2D o 3D** (ver [Mundo, anotaciones y estructura](./guia/mundo#kit-para-escenas-a-medida))
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

## 0.3.0

**Maqueta 3D: explicadores en un diorama low-poly**
- Estilo nuevo **`maqueta`**: una palabra a la vez al centro (Primera Letra, sombra suave), rótulos blancos con contorno o en pastilla oscura inclinada (`rotuloEstilo: 'pastilla'`), cortes rápidos. Ver [Maqueta 3D](./guia/maqueta).
- Kit diorama (`morfeo/kit`): `Maqueta` (isla flotante con estratos, pasto y flores), `Modelo` (cualquier `.glb` o recurso de la biblioteca, con sus animaciones), `Persona`, `Coche`, `Trafico` (coches que hacen fila en una pluma o un rojo), `Pluma`, `Corte` (rayos X), `Gotas`, `Confeti3D` y `Linterna`.
- `Lienzo3D` con `hora` (día → atardecer → noche) y `etiquetas`: pastillas con flecha pegadas a puntos 3D que siguen al objeto cuando la cámara se mueve. `proyectar()` dice dónde cae un punto 3D en la pantalla.
- Tarjetas de datos nuevas: `reloj`, `cronometro`, `termometro`, `recipientes`, `ficha` (credencial), `checklist` y `mapa`.
- `morfeo revisar` entiende el formato largo: en `maqueta` (o `formato: 'largo'`) 90–130 s está bien y pide un corte de cámara cada 2–3 s.
- Rótulos: `tema.rotulo` (`estilo`, `inclinar`, `y`, `tam`) y, por escena, `rotuloEstilo` y `rotuloInclinar`. Subtítulos con `mayusculas: 'inicial'`, y `contorno: 0` usa sombra suave.

## 0.2.1

**Whisper se instala a la primera**
- `npx morfeo instalar --whisper` revisa antes que estén `git`, `make` y `cmake`. En Mac con Homebrew, si falta `cmake`, pregunta y lo instala.
- Si la compilación falla, ya no deja la carpeta a medias: el siguiente intento empieza limpio (antes había que borrar `~/.morfeo/whisper` a mano).

## 0.2.0

**Videos que se ven producidos**
- **Mundo por video**: `mundo: [...]` y `toma` en cada escena; la cámara viaja entre planos en vez de cambiar de fondo. Ver [Mundo, anotaciones y estructura](./guia/mundo).
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

## 0.1.3

**Recursos más difíciles de romper**
- Si un recurso no está en la variante 2D pedida, prueba las otras variantes 2D antes de usar un modelo 3D.
- Nueva variante 2D `plano`: ilustración plana con muchísimos animales y objetos.
- Un recurso que no está en ninguna biblioteca ya no detiene el render: se avisa y se omite la capa.
- Diccionario: televisión, tele, tv, monitor, pantalla, cd, disco, dvd, tablet, consola portátil, cartucho, joystick, arcade, vida, nivel, bloque, hongo y más.
- Modelos externos planos (un control acostado) se levantan hacia la cámara, y el encuadre ignora cables y partes sueltas largas.

**Arreglos**
- Subtítulo `pop`: las palabras ya no se pegan cuando la palabra activa crece.

## 0.1.2

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

## 0.1.1

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

## 0.1.0

Primera versión: 10 estilos, motor de capas, voces Kokoro/ElevenLabs/OpenAI, música, subtítulos, guiones con IA,
personajes, HUD, 3D y componentes propios.
