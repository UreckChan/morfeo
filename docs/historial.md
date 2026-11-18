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

## 1.6.0 {#v1-6-0}

<p class="fecha-version">18 de noviembre de 2026</p>

- **Lugares para historias**: `campamento` (fogata con amigos que miran al fuego) y `recamara` (solo en tu cama: puerta, clóset, ventana). Plano `correr` en la calle y el barrio (la cámara rebota al paso).
- **Día y noche en todos los lugares**: `hora` ilumina de día un lugar de noche y oscurece uno de día; los relámpagos alumbran los interiores.
- `plano: 'quien'` también en la sala y el campamento, y con la gente del lugar donde pasa la escena. El teléfono baja en la elección aunque la historia cambie de lugar.
- El aviso de voz faltante dice qué escena no tiene `quien`. «Son las tres…» cuenta como gancho.

## 1.5.0 {#v1-5-0}

<p class="fecha-version">18 de noviembre de 2026</p>

- **[Historias en primera persona](/guia/primera-persona)**: la `combi` por dentro, gente sentada con nombre y cambios por escena, tu teléfono con pantallas (chat, llamada, galería, foto, ubicación y cámara de seguridad) y `acercar`.
- 22 personajes, 19 atuendos, caras expresivas y gestos (`shh`, `saludar`, `señalar`, `cubrirse`).
- Monstruos y animales en el set (`figuras`), luces de suspenso por escena, música `suspenso` y `terror` y `sonidos` por escena.
- Voces: ElevenLabs v3 con emoción por línea, búsqueda de voces por tono, edad y uso, y `morfeo costo` con `--tope`.

## 1.4.0 {#v1-4-0}

<p class="fecha-version">18 de noviembre de 2026</p>

- **Reparto**: una voz por personaje (final y de borrador), con nombre y color; la escena dice `quien` habla.
- **Series interactivas**: `morfeo serie iniciar / estado / voto / terminar`; la parte con elección espera el voto antes de la siguiente.
- `morfeo perfil` hace la foto de perfil de la cuenta con IA.

## 1.3.0 {#v1-3-0}

<p class="fecha-version">18 de noviembre de 2026</p>

- **[El objeto, dentro de la escena](/guia/ambientes#el-objeto-del-que-se-habla-dentro-de-la-escena)**: `objeto: 'consola'` lo pone en el set (en el escritorio, el mostrador o el pedestal) con la cámara encima, en vez de un 3D encimado. Con `ambiente: 'auto'` aparece solo cuando se nombra.
- **Ambientes `estudio` y `cueva`**: pedestal de exhibición para el objeto protagonista, y una cueva con antorchas y cristales. `auto` reconoce cueva, caverna, mina, calle y esquina.
- **[Calendario](/guia/publicar#calendario-de-temas)**: `npx morfeo calendario --dias 30`, un tema por día sin repetir lo hecho.
- **[Series](/guia/publicar#series-de-varias-partes)**: `npx morfeo serie "tema" --partes 4`, videos encadenados.
- **[Carrusel e hilo](/guia/publicar#un-video-varias-publicaciones)**: `npx morfeo carrusel <id>` saca las imágenes de los momentos clave y el hilo para X/Threads.

## 1.2.1 {#v1-2-1}

<p class="fecha-version">17 de noviembre de 2026</p>

- **[Plano técnico](/guia/ambientes#plano-tecnico-plano)**: ambiente `plano` con fondo azul y cuadrícula, un rascacielos de alambre que se arma piso por piso (`armado`), grúa torre, anotaciones naranjas de CAD y barra "Comando: _LINE_". En el kit: `Alambre`, `Cuadricula`, `BarraCAD` y `post: 'plano'`.
- **[Placa de fecha dorada](/guia/mundo#estilos-de-rotulo)**: `rotuloEstilo: 'placa'` (con `rotuloPie`) y `fecha` con `estilo: 'placa'`, para fechas de documental: "1898", "13 DE AGOSTO / DE 1971".

## 1.2.0 {#v1-2-0}

<p class="fecha-version">17 de noviembre de 2026</p>

- **[Ambientes de día](/guia/ambientes)**: `laboratorio`, `salon`, `parque` y `barrio`, con su luz de sol y su sonido de fondo (pájaros, fuente, burbujeo, coches).
- **[Cambiar de lugar en un video](/guia/ambientes#cambiar-de-lugar-dentro-de-un-video)**: `ambiente` en una escena lleva la historia a otro set, que abre con su plano general.
- **[Paisajes generados](/guia/ambientes)**: `isla`, `montana`, `playa`, `desierto`, `bosque`, `nevado`, `oceano` y `ciudad`, con agua que ondea y cámara de dron.
- **[`ambiente: 'auto'`](/guia/ambientes#que-el-lugar-siga-a-la-historia-ambiente-auto)**: cada escena va al lugar del que habla.
- **[Clima, estaciones y desastres](/guia/ambientes#clima-estaciones-y-desastres)**: lluvia, nieve, tormenta, niebla, viento; primavera, otoño, invierno; inundación, incendio, sismo, tornado, volcán, meteorito y calor, con su sonido.
- **[Filas y letreros](/guia/ambientes#filas-y-letreros)**: una fila de personas distintas y el nombre de la tienda o marca.
- **[Juegos, documentos y banderas](/guia/capas#juegos-documentos-y-banderas)**: la pantalla del juego en movimiento (tetris, comecocos, invasores, pong, snake…), hojas con texto, firma y sello, y banderas de 27 países que ondean.
- **[Figuras de videojuegos](/guia/recursos)**: comecocos, fantasmas, tetrominós, invasores, hongo, bloque, tubo… y `buscar: 'bandera de japón'`.
- **[Varias copias](/guia/capas#varias-copias)**: `cantidad: 4` repite un objeto acomodado (fila, cuadrícula, pila, círculo o regados).
- **Persona con nombre**: `persona: {nombre: 'Satoru Iwata', sub: 'presidente de Nintendo'}`.
- **[Varios personajes](/guia/ambientes#persona)**: 10 personas con distinta piel, peinado, ropa, lentes o barba; cada video toma una distinta, o eliges con `persona: 'ana'`. `Persona3D` suma `peinado`, `lentes`, `barba` y `bata`.

## 1.1.0 {#v1-1-0}

<p class="fecha-version">17 de noviembre de 2026</p>

- **[Voz de borrador](/guia/estudio#aprobar-sin-gastar-tu-voz-de-pago)**: `previa` y `animatica` usan una voz gratis aunque el video lleve ElevenLabs u OpenAI, así no gastas créditos mientras apruebas. `--voz-final` y `render --borrador`.
- `npx morfeo voces --elevenlabs`: las voces más usadas en español con su ID, por acento y género, con muestras opcionales.
- `npx morfeo estilo --desde https://tusitio.com`: colores y letra de tu web en `estilo.json`.
- `revisar` también avisa de franjas vacías en los bordes y de destellos blancos en los cortes.

## 1.0.0 {#v1-0-0}

<p class="fecha-version">17 de noviembre de 2026</p>

La primera versión estable: todo lo de las 0.x junto, probado de punta a punta (un video por estilo, un lote
completo y un proyecto nuevo instalado desde el paquete).

- **Música sin estática.** Los platillos y aplausos de la música generada eran ruido blanco hasta 22 kHz y la lluvia de
  fondo de los ambientes sonaba casi tan fuerte como la música. Ahora van filtrados y la lluvia va mucho más baja: el
  siseo bajó de 2.7 % a 0.03 % de la potencia en `chillpop`.
- **Estilo `caricatura`**: personajes 2D de cabeza grande (capa `caricatura`, con expresiones, poses y boca que habla)
  y subtítulos en mayúsculas.
- **Primera persona**: `ambiente: {nombre, pov: {sostiene: 'movil', manos: 'ambas'}}` pone tus manos en cámara.
- **Capa `fila`**: personas de la mano que van entrando, para retos colectivos.
- **[Tu esencia: gustos y configuración](/guia/esencia)**: cómo hacer que tus videos suenen y se vean como tú, y un
  `gustos.md` más completo en los proyectos nuevos.
- **Arreglo:** los proyectos guardados tras un enlace simbólico (como las carpetas temporales de macOS) no encontraban
  los archivos de Morfeo al renderizar con componentes propios.
- La portada muestra las descargas de npm y las estrellas de GitHub en vivo.

## 0.9.0 {#v0-9-0}

<p class="fecha-version">17 de noviembre de 2026</p>

- [Efectos de sonido grabados](/guia/capas#sonido): 44 de Kenney (CC0), que se bajan solos. Suenan en sellos, contadores, monedas, objetos de videojuegos, cada `enfasis` y el cierre; se pide uno con `sonido: 'moneda'`, `'error'`, `'victoria'`…
- Cierre «¿ya lo sabías?»: `{type: 'cta', pide: 'sabias', si: 'PINZA', no: 'CABLE'}`.
- Capas `marcador` (el chiste que va sumando) y `hora` (reloj con lugar para series), y `habla` en la escena para poner el nombre de quien habla sobre el subtítulo.
- Pieza `cuerpo`: cuerpo humano en rayos X que resalta un órgano y puede correr. Ya son 158.
- Fórmulas `dia` ("Un día en la vida de…") y `reto` (meta colectiva con los seguidores).
- El `.txt` de cada video trae un texto listo para TikTok, YouTube Shorts e Instagram Reels.

## 0.8.0 {#v0-8-0}

<p class="fecha-version">15 de noviembre de 2026</p>

- [Salidas](/guia/animacion#entrada-y-salida) con los mismos tipos que las entradas (`rebote`, `caer`, `girar`, `enfocar`, `bajar`, deslizar hacia arriba o abajo). Ahora salen acelerando, como algo que se va, y aceptan `duracionSalida` y `curvaSalida`.
- `enfasis`: golpes puntuales en una palabra sin mover la capa de su sitio (`pop`, `sacudir`, `saltar`, `girar`).
- `anticipar`: antes de `mover` o `escalar`, la capa toma impulso en sentido contrario.
- `mover` y `escalar` aceptan `curva: 'resorte'` (sobrepasa y asienta) y `'seca'`.
- [`escalonar`](/guia/animacion#escalonado) en la escena (o en el estilo): las capas que entran a la vez lo hacen una tras otra.

## 0.7.2 {#v0-7-2}

<p class="fecha-version">15 de noviembre de 2026</p>

- Buscar "control" ya da un control de videojuegos y no una canasta de arcade. La búsqueda de modelos dejó de tomar palabras que solo empiezan igual ("gamepad" no es "game"); también se corrigieron mariposa, béisbol, cartera, maleta y otros.
- 12 [piezas en código](/guia/recursos#piezas-de-ingenieria) más: control, consola, cartucho, audífonos, cronómetro, termómetro, pincel, cartera, caja fuerte, pastilla, fuegos artificiales y etiqueta. Ya son 157.

## 0.7.1 {#v0-7-1}

<p class="fecha-version">14 de noviembre de 2026</p>

- Los videos con [ambiente](/guia/ambientes) y postproceso `'cine'` ya renderizan en Windows: el desenfoque de fondo agotaba la tarjeta de video a los ~30 segundos.
- `tamano` muy grande en una capa `modelo` o `recurso` ahora es un error con explicación: es la escala del objeto (1 = normal); el tamaño en pantalla se pone con `ancho`.

## 0.7.0 {#v0-7-0}

<p class="fecha-version">14 de noviembre de 2026</p>

- [Skills para tu IA](/guia/skills) dentro del paquete: `morfeo-guion` (ganchos, historia por retención, cierre), `morfeo-animacion` (tiempos, curvas, escalonado, cámara), `morfeo-3d` (luz, materiales, encuadre) y `morfeo-video` (la ruta completa).
- Comando `npx morfeo skills` para instalarlas o ponerlas al día; `npx morfeo nuevo` ya las trae.
- `AGENTS.md` de la plantilla dice qué guía abrir en cada paso, para Claude Code, Codex u otra IA.
- `revisar` mira los ganchos de reserva: sugiere dejar tres y avisa si repiten el arranque del principal. También reconoce ganchos de hallazgo y de experimento ("Dentro de tu…", "Probé…").
- `guion` con IA escribe los ganchos de reserva de arquetipos distintos.

## 0.6.7 {#v0-6-7}

<p class="fecha-version">14 de noviembre de 2026</p>

- Nueve [piezas en código](/guia/recursos#piezas-de-ingenieria) más, las que seguían sin modelo: lago, burbuja, código, músculo, doctor, bicicleta estática, confeti, registro sanitario y cable submarino. Ya son 145.

## 0.6.6 {#v0-6-6}

<p class="fecha-version">14 de noviembre de 2026</p>

- 51 [piezas en código](/guia/recursos#piezas-de-ingenieria) más, para lo que ninguna biblioteca traía: música (guitarra, piano, tambor, trompeta), animales (pulpo, medusa, tortuga, pájaro, búho), moto, deporte, oficina y escuela (tijeras, mapa, calculadora, diploma, birrete), industria (planta de tratamiento, refinería, pozo petrolero, subestación) y espacio (galaxia, cometa). Con las anteriores ya son 136.
- El cerebro y la presa se rehicieron: se reconocen mejor.

## 0.6.5 {#v0-6-5}

<p class="fecha-version">14 de noviembre de 2026</p>

- 35 [piezas de ingeniería](/guia/recursos#piezas-de-ingenieria) hechas en código, para explicar cómo funciona una casa, una ciudad o una consola: válvula, llave de agua, tinaco, boiler, interruptor, enchufe, tablero, transformador, chip, placa madre, tarjeta gráfica, engranes, motor… `recurso` las encuentra por su nombre en español.
- Otras 50 piezas en código para ciencia y cuerpo (átomo, ADN, célula, virus, cerebro, pulmones), consola (disco, USB, cable HDMI, visor VR), casa y ciudad (tanque de gas, cámara de seguridad, antena celular, presa, ascensor) y transporte (autobús, helicóptero, submarino, bicicleta).
- Kenney pasa de 12 a 49 kits (unos 3.100 modelos más): fábrica con bandas y brazos robot, ciudad industrial y comercial, edificios modulares, trenes, estación espacial.
- Dos bibliotecas nuevas para [`recurso`](/guia/recursos) en estilo `3d`, las dos CC0: Quaternius (unos 1.500 modelos: animales, dinosaurios, peces, naves, robots, objetos de rol, interiores) y KayKit (unos 900: personajes, calabozo, ciudad, muebles, restaurante, base espacial).
- Buscar por tema trae el paquete completo: `dinosaurio` devuelve los seis del paquete aunque el archivo se llame "Trex".
- Los modelos con esqueleto (animales, personajes) ya se centran y escalan como los demás; antes podían salir enormes y recortados.
- El diccionario suma animales, fantasía, espacio y barcos: `rana`, `venado`, `caballero`, `esqueleto`, `torreta`, `velero`, `panel solar`…

## 0.6.4 {#v0-6-4}

<p class="fecha-version">14 de noviembre de 2026</p>

- `render` borra al terminar el empaquetado temporal que deja Remotion (unos 350 MB por render, que antes se quedaban en la carpeta temporal del sistema) y, al empezar, los que tengan más de un día.
- Conserva solo los dos cachés de empaquetado más recientes en `node_modules/.cache`; antes se acumulaba uno de unos 300 MB por cada actualización de Morfeo.

## 0.6.3 {#v0-6-3}

<p class="fecha-version">14 de noviembre de 2026</p>

- Dos [ambientes](/guia/ambientes) nuevos: `tienda` (tienda de videojuegos con pared de juegos, mostrador, tele de demostración y neón) y `calle` (calle de noche con lluvia, un local con vitrina, farola y un coche), cada uno con su sonido de fondo.
- `render --revisar`: al terminar cada video saca su hoja y lo revisa, en un solo paso.
- `render --cambiados`: rehace solo los videos cuyo guion o componentes cambiaron desde su último render.
- Los videos con postproceso (ambientes, `post: 'cine'`) se renderizan alrededor de 14 % más rápido, sin cambio visible.
- Con ambiente, los titulares de las plantillas llevan contorno oscuro: se leen sobre cualquier fondo del set.
- El cierre "Escribe PALABRA" de dos renglones ya no se encima con el texto de abajo.
- `MORFEO_TIEMPOS=1` muestra cuánto tardó cada fase del render (audio, empaquetado, video, miniatura).

## 0.6.2 {#v0-6-2}

<p class="fecha-version">14 de noviembre de 2026</p>

- Los estilos de texto oscuro (como `explicativo`) se pueden usar con un [ambiente](/guia/ambientes): el texto pasa solo a claro. Tus ajustes de `tema` siguen mandando.
- Con ambiente, una sombra suave arriba (subtítulos y titular) y el cierre oscurecido: el texto blanco se lee aunque el set sea claro, como la oficina.
- El `titular` de dos renglones ya no tapa su etiqueta: mide el texto con la fuente real y la sube lo necesario.
- En el arcade, las escenas con un ícono al centro usan planos sin la persona detrás.
- `sello` acepta `fondo` para ponerle una caja detrás sobre fondos claros.
- `revisar` ya no marca como "tapado" una escena de día con cielo pastel.

## 0.6.1 {#v0-6-1}

<p class="fecha-version">13 de noviembre de 2026</p>

- Dos [ambientes](/guia/ambientes) nuevos: `taller` (mesa de reparación con un control abierto, cautín, lupa y herramientas) y `oficina` (escritorios con monitor, ventanal al atardecer y pizarrón), cada uno con su sonido de fondo.
- Entre escenas la cámara del ambiente corta en seco: el viaje de un plano a otro podía cruzar paredes y muebles.
- Cada corte de cámara suena con un whoosh suave.
- Planos mejor encuadrados: la tele del cuarto con el jugador de espaldas, la cara a más distancia y nada de respaldos tapando la toma.

## 0.6.0 {#v0-6-0}

<p class="fecha-version">13 de noviembre de 2026</p>

**Fondo vivo** (ver [Ambientes 3D](/guia/ambientes))
- `ambiente: 'cuarto-gamer' | 'sala' | 'arcade'`: sets 3D completos como fondo de cualquier video, con vida propia (tele que alumbra, LED, lluvia, polvo, un gato) y sonido de fondo.
- Persona en el set que reacciona a lo que se dice (pregunta, sorpresa, festejo).
- Postproceso 3D (`post: 'cine' | 'miniatura' | 'suave'`): fondo desenfocado, brillo y viñeta.

**Cámara con ritmo**
- Un ángulo distinto en cada escena y corte en seco en la palabra clave de las escenas largas (`plano`, `cortes`).
- Golpe de cámara cuando cae un rótulo `sello` o `pixel` (`golpe`).
- Lente despejado: la cámara avanza si algo le tapa el lente. `tomaA()` calcula una toma donde el objeto cabe completo.
- Etiquetas 3D con `en: 'palabra'`: salen junto con su objeto.

**Revisar sin rehacer todo**
- `npx morfeo animatica <id>`: todo el video a 1/3 de tamaño y su hoja. `render --escenas 5-7`: solo esas escenas.
- `revisar` avisa el riesgo de "diapositiva" y, en el MP4, cuadros negros, tapados, lisos o quietos.
- Plantilla con `gustos.md`: tus reglas de estilo, que la IA sigue en cada video.
- Piezas nuevas del kit: `Tele3D`, `Gato3D`, `Chip`, `Ventilador`, `Escritorio`, `Puerta`, `Audifonos`, `Nube3D`.

**Arreglos**
- Un objeto 3D que no existe ahora busca su versión 2D antes que una realista (no más estatuas fotorrealistas en un video plano).
- La sugerencia de rayos X en "demuéstralo" solo aparece si el guion habla de lo de adentro.

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
