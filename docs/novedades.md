# Novedades

Para actualizar un proyecto: `npm install morfeo@latest`.

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
