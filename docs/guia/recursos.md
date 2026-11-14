---
description: 'Objetos 2D y 3D sin dibujar: escribe "tubería" o "pizza" y Morfeo trae el modelo de Kenney, Quaternius, KayKit, Poly Haven o Iconify, con créditos.'
---

# Objetos 2D y 3D

Para ilustrar un video no hace falta dibujar nada. Usa, en este orden:

1. **Recursos de la biblioteca**: miles de objetos 2D y 3D buscados por palabra, en español.
2. **Objetos 3D incluidos**: un catálogo hecho en código, sin descargas.
3. **Tus imágenes** en `assets/`, o **imágenes con IA**.
4. **Emojis**: solo como último recurso.

![Objetos 2D y 3D](/img/objetos.jpg)

## Recursos de la biblioteca

```js
{tipo: 'recurso', buscar: 'tubería', estilo: '3d'}                       // 3D low-poly
{tipo: 'recurso', buscar: 'silla', estilo: 'realista'}                   // 3D realista con texturas
{tipo: 'recurso', buscar: 'cohete', estilo: '2d', variante: 'clay'}      // ilustración 2D
```

Morfeo traduce la palabra con su diccionario temático, busca en las bibliotecas, descarga el archivo **una sola vez**
(queda en `~/.morfeo/biblioteca`, compartido por todos tus proyectos) y lo pone como modelo o imagen. Acepta las mismas
posiciones y animaciones que cualquier capa. Si no te gusta el resultado, `indice: 1` elige el siguiente.
Si no hay nada en ese estilo, prueba solo en los otros.

| Estilo | Fuente | Qué hay | Licencia |
|---|---|---|---|
| `3d` | [Kenney](https://kenney.nl) | ~4.500 modelos low-poly: vehículos, comida, muebles, naturaleza, pueblo, fábrica (bandas, máquinas, brazos robot), ciudad industrial y comercial, edificios modulares, trenes, estación espacial… | CC0 |
| `3d` | [Quaternius](https://quaternius.com) | ~1.500 modelos low-poly: animales, dinosaurios, peces, naves y planetas, robots, armas y objetos de rol, interiores de casa, calles, ciudad futurista… | CC0 |
| `3d` | [KayKit](https://kaylousberg.com) | ~900 modelos low-poly: personajes (caballero, mago, esqueletos), calabozo, ciudad y coches, muebles, restaurante, Halloween, base espacial… | CC0 |
| `realista` | [Poly Haven](https://polyhaven.com) | ~500 modelos con texturas: herramientas, industria, tuberías, muebles, plantas, rocas, iluminación… | CC0 |
| `2d` | [Iconify](https://iconify.design) | más de 200 mil íconos e ilustraciones de sets abiertos | MIT, Apache, CC0 o CC BY según el set |
| `3d` (opcional) | [Poly Pizza](https://poly.pizza) | 10 mil+ modelos (incluye Quaternius) con `POLYPIZZA_API_KEY` en `.env` | CC0 o CC-BY |

### Piezas de ingeniería

Para explicar cómo funciona una casa, una ciudad o una consola hacen falta piezas que ninguna biblioteca libre trae.
Morfeo incluye 35 hechas en código; `recurso` las encuentra primero, y también se piden directo con
`{tipo: 'modelo', forma: 'valvula'}`.

| Área | Piezas (`buscar` o `forma`) |
|---|---|
| Plomería | `valvula`, `grifo` (llave de agua, con gota), `tinaco`, `calentador` (boiler), `bomba` (bomba de agua), `alcantarilla`, `codo` |
| Electricidad | `interruptor` (apagador), `enchufe`, `tablero` (centro de carga), `medidor`, `transformador`, `poste`, `bateria`, `turbina`, `torre_electrica`, `aire` (aire acondicionado) |
| Electrónica | `chip` (procesador), `placa` (placa madre), `resistor`, `capacitor`, `led`, `disco_duro`, `tarjeta_grafica`, `disipador`, `ram`, `router`, `servidor`, `fuente_poder` |
| Mecánica | `engrane` (`par: true` para dos que engranan), `tornillo`, `tuerca`, `motor`, `resorte`, `piston` |

Varias se mueven solas: giran el engrane, la turbina, el eje del motor y los ventiladores; gotea el grifo; parpadean
el router y el servidor. `color` cambia el color principal y `velocidad` el ritmo. Opciones propias: `nivel` (0 a 1)
en `bateria`, `botado: true` en `tablero`, `encendido: false` en `interruptor` y `led`.

Para elegir biblioteca, `fuente: 'kenney' | 'kenney-mas' | 'quaternius' | 'kaykit' | 'polyhaven' | 'morfeo'`. En la terminal: `npx morfeo recursos buscar "dinosaurio" --fuente quaternius`.

### Variantes 2D

Toda una línea gráfica para el video: `color` (por defecto), `clay`, `glass`, `kawaii`, `retro`, `pastel`, `sticker`,
`skeuo`, `plush`, `anime`, `luxe`, `chrome`, `liquid`, `bauhaus`, `brutal`, `gothic`, `plano` (ilustración plana con
muchísimos animales y objetos) y `linea` (íconos de un color, que se pintan con `color`).

### Si no lo encuentra

- Primero prueba el mismo estilo con otra línea gráfica (`2d glass` → `2d color` → … → `2d plano`), y después los
  otros estilos (`3d`, `realista`). La terminal dice qué usó: `"tiburón" no está en 2d glass; uso 2d plano`.
- Si no está en ninguna biblioteca, avisa y omite esa capa: el video se hace igual.
- Los modelos externos planos (un control, un libro) se levantan hacia la cámara, y si tienen partes sueltas largas
  (un cable) el encuadre se centra en el objeto. Para un `.glb` tuyo, usa `levantar: true` en la capa `modelo`.

### Buscar desde la terminal

```bash
npx morfeo recursos temas                          # el diccionario por temática
npx morfeo recursos buscar "tubería" --3d
npx morfeo recursos buscar "silla" --realista
npx morfeo recursos buscar "cohete" --2d --variante kawaii
```

El diccionario tiene cientos de términos en 19 temas: objetos, hogar, construcción, ciudad, transporte, naturaleza,
océano, animales, comida, dinero, tecnología, espacio, cuerpo, escuela, deporte, misterio, juegos y fiestas.
Una palabra que no está se busca tal cual; también puedes escribirla en inglés (`buscar: 'barrel'`).

### Créditos

Cada render escribe `salida/creditos.md` y agrega los créditos a `salida/resumen.json`. Las licencias CC BY piden
mencionar al autor: copia esas líneas a la descripción del video. Poly Haven pide un "Powered by Poly Haven".

## Objetos 3D incluidos

Hechos en código con Three.js, sin descargas:

```js
{tipo: 'modelo', forma: 'trofeo', ancho: 500, girar3d: [0, 45, 0]}
```

`corazon`, `estrella`, `rayo`, `diamante`, `trofeo`, `cohete`, `foco`, `reloj`, `planeta`, `arbol`, `nube`, `regalo`,
`llave`, `candado`, `casa`, `libro`, `globo`, `medalla`, `escudo`, `pin`, más `moneda`, `billete`, `lingote`, `cubo`
y `esfera` (estas cinco forman pilas con `cantidad` y `crecer`).

### Construcción

Para videos de plomería, obra o "cómo funciona por dentro":

```js
{tipo: 'modelo', forma: 'tuberia', agua: true, material: 'vidrio',
	puntos: [[-1.7, 1.2, 0], [-1.7, -0.4, 0], [-0.7, -0.9, 0], [0.3, -0.4, 0], [0.3, 0.3, 0], [1.8, 0.3, 0]]}
```

| Forma | Opciones |
|---|---|
| `tuberia` | `puntos` (codos redondeados), `radio`, `material` (`pvc`, `cobre`, `acero`, `vidrio`), `agua` (gotas que fluyen), `velocidad`, `colorAgua` |
| `muro` | `columnas`, `filas`, `colorLadrillo`, `colorMezcla` |
| `viga` | `largo`, `vertical`: viga de acero en I |
| `columna`, `escalera` (`escalones`), `losa`, `tanque` | — |
| `suelo` | `capas: [[color, alto], ...]`: corte de terreno (pasto, tierra, roca) |

Para escenas completas de Blender, ver [3D](./3d).
