---
description: 'Personajes de Morfeo 3.0: cuatro estilos de cuerpo, ropa y accesorios por piezas, 56 oficios, piel, rasgos, barbas, acciones animadas (gol, canasta, remate…), modelos animados y 33 animales.'
---

# Personajes, ropa y acciones

Desde la 3.0 cada persona se arma por piezas. Nada es fijo: el oficio, la ropa, los accesorios, la cara y lo que hace
se eligen en el guion, y lo que no digas lo pone Morfeo **distinto en cada video** y acorde al lugar (formal en la
oficina, ligera en la playa, abrigada en la nieve).

<figure><img src="/img/personajes-3.jpg" alt="Personas al azar en los cuatro estilos y oficios" loading="lazy" style="width:100%;border-radius:12px"><figcaption>Personas al azar en los cuatro estilos (redondo, bloques, chibi y estilizado) y 56 oficios</figcaption></figure>

## Estilos de cuerpo

```js
ambiente: {nombre: 'oficina', persona: {estilo: 'bloques'}}
```

| Estilo | Cómo se ve |
|---|---|
| `redondo` | El de siempre (por defecto). |
| `bloques` | Cuerpo y cabeza de cubo, tipo juguete de bloques. |
| `chibi` | Cabeza enorme, cuerpo chico. |
| `estilizado` | Alto y delgado, más realista. |
| `clasico` | El cuerpo de las versiones 2.x, igualito. |

Además: `altura` (0.6 a 1.5), `cuerpo` (`delgado`, `normal`, `robusto`, `atletico`) y `edad` (`bebe`, `nino`,
`joven`, `adulto`, `mayor`, `anciano`).

## Ropa y accesorios por piezas

Cada pieza es un nombre o `{tipo, color, color2}`:

```js
persona: {
	torso: {tipo: 'sudadera', color: '#2F6FE0'},
	piernas: 'jeans',
	pies: {tipo: 'tenis', color: '#FFFFFF', color2: '#E5484D'},
	cabeza: 'gorra-atras',
	collar: 'cadena',
	aretes: 'aro',
	munecas: 'reloj',
	espalda: 'mochila',
}
```

| Ranura | Opciones |
|---|---|
| `pelo` | rapado, corto, copete, flequillo, lacio, ondulado, rizado, afro, rastas, trenzas, mohicano, cola, cola-alta, chongo, dos-chongos, bob, largo, largo-ondulado, melena, calvo, entradas, picos, raya, chino, capucha (+ `colorPelo`) |
| `cabeza` | gorra, gorra-atras, sombrero, vaquero, gorro, casco, casco-obra, boina, diadema, corona, chef, enfermera, graduado, policia, piloto, militar, bombero, monja, astronauta, mago, pirata, charro, audifonos, banda |
| `lentes` | redondos, cuadrados, sol, aviador, gogles |
| `aretes` | boton, aro, colgante |
| `collar` | cadena, perlas, dije, gafete, estetoscopio, silbato |
| `cuello` | corbata, mono, bufanda, cuello-blanco, paliacate |
| `torso` | playera, camisa, polo, blusa, sudadera, chamarra, saco, chaleco, top, vestido, uniforme, bata, delantal, overol, traje-espacial, tunica, armadura, sueter (+ `patron`: rayas, cuadros, lunares, banda, mitades; `manga`; `numero`) |
| `piernas` | jeans, pantalon, pants, short, falda, falda-larga, overol, mallas |
| `pies` | tenis, botas, zapatos, tacones, sandalias, tachones, botas-obra, descalzo |
| `munecas` | reloj, pulsera, reloj-pulsera |
| `espalda` | mochila, capa, alas-ave, alas-murcielago, alas-hada, tanque, caja, guitarra |

## Oficios (recetas)

`atuendo` es una receta de piezas, y lo que digas aparte la cambia pieza por pieza:

```js
persona: {atuendo: 'doctor', pies: 'tenis', lentes: 'redondos'}
```

De fábrica hay 56: policía, enfermera, obrero, escolar, payaso, monja, chef, pijama, abrigo, vestido, militar, traje,
deportivo, vaquero, bombero, doctor, sacerdote, repartidor, charro, futbolista, basquetbolista, beisbolista, tenista,
voleibolista, árbitro, piloto, astronauta, mecánico, científico, programador, maestro, oficinista, ejecutiva, mesero,
granjero, surfista, skater, rapero, rockero, gamer, pirata, mago, rey, reina, superhéroe, caballero, hada, ángel,
vampiro, músico, pescador, bailarina, turista, graduado, sudadera y pijama.

¿Falta una profesión? Créala en `morfeo.config.mjs` sin programar:

```js
atuendos: {
	salvavidas: {torso: {tipo: 'top', color: '#E5484D'}, piernas: {tipo: 'short', color: '#E5484D'}, pies: 'descalzo', collar: 'silbato'},
},
```

Y guárdala en tu biblioteca para otros proyectos (`npx morfeo plantillas guardar salvavidas`).

## Piel, cara, barba y bigote

<figure><img src="/img/rasgos-modelos-3.jpg" alt="Rasgos, barbas y modelos animados" loading="lazy" style="width:100%;border-radius:12px"><figcaption>Rasgos, barbas, bigotes y tonos de piel; modelos animados de Kenney y KayKit</figcaption></figure>

```js
persona: {piel: 'morena', ojos: 'almendrados', colorOjos: 'miel', cejas: 'pobladas', nariz: 'aguilena', barba: 'chivo', bigote: 'manubrio'}
```

- `piel`: muy-clara, clara, triguena, apinonada, morena-clara, morena, morena-oscura, oscura, muy-oscura (de fantasía:
  verde, azul, gris, morado, rojo, zombi) o un color.
- `ojos` (normales, grandes, chicos, almendrados, rasgados, redondos), `colorOjos`, `cejas` (gruesas, delgadas,
  pobladas, arqueadas, unicejas), `nariz` (chica, grande, respingada, ancha, aguilena), `labios` (delgados, gruesos) y
  `colorLabios`, `orejas` (chicas, grandes, puntiagudas), `pestanas`, `lunar`, `pecas`, `cicatriz`, `arrugas`,
  `maquillaje`.
- `barba`: corta, completa, larga, candado, chivo, patillas, tres-dias · `bigote`: normal, grueso, manubrio, lapiz,
  herradura · `colorBarba`.

## Cuerpos diversos y rasgos de la piel

<figure><img src="/img/diversos-3.jpg" alt="Rasgos, prótesis, apoyos y peces con aletas" loading="lazy" style="width:100%;border-radius:12px"><figcaption>Acné, ojeras, cicatrices y parche; prótesis, muletas y silla de ruedas; peces con aletas; lo mismo en 2D</figcaption></figure>

```js
persona: {acne: true, ojeras: true, cicatriz: ['ojo', 'labio'], parche: 'izquierdo', manchas: true}
persona: {falta: ['pierna-izq'], protesis: ['pierna-izq-carrera'], accion: 'trotar'}
persona: {falta: ['antebrazo-der'], protesis: ['antebrazo-der']}   // con gancho
persona: {apoyo: 'silla-ruedas'}                                   // va sentada en su silla
```

- `acne`, `ojeras`, `manchas` (vitíligo), `cicatriz` (true o dónde: mejilla, ojo, frente, labio, ceja; o varias),
  `parche` (true, 'izquierdo' o 'derecho'), `arrugas`, `pecas`, `lunar`.
- `falta`: brazo, antebrazo, mano, pierna, ojo u oreja, de cada lado (`'brazo-izq'`, `'ojo-der'`…). Sin una pierna y
  sin prótesis, la persona va con muletas.
- `protesis`: pierna (tubo y pie), pierna de carrera (hoja), brazo o antebrazo (gancho), mano.
- `apoyo`: `baston`, `muletas`, `silla-ruedas`, `andadera`.

Todo vale igual en la caricatura 2D.

## Acciones animadas

<figure><img src="/img/acciones-3.jpg" alt="Acciones deportivas" loading="lazy" style="width:100%;border-radius:12px"><figcaption>Tiro a la canasta, remate, cabezazo y correr, con su balón</figcaption></figure>

```js
persona: {atuendo: 'futbolista', accion: 'patear'}                // desde que empieza
persona: {estados: [{en: 2.4, accion: 'tirar'}, {en: 5, accion: 'celebrar'}]}
persona: {accion: {accion: 'driblar', veces: 4}}
```

De fábrica: correr, trotar, patear (tiro a gol), gol (festejo de rodillas), tirar (canasta), clavar, driblar, rematar
(voleibol), cabecear, batear, lanzar, saque (tenis), saltar, celebrar, aplaudir, bailar, agacharse, caer, empujar y
levantar. Las deportivas traen su balón, que vuela con el golpe.

Cada acción son **cuadros clave** (datos), así que puedes cambiar una o crear otra:

```js
animaciones: {
	chilena: {
		duracion: 1.2,
		balon: 'balon-futbol',
		claves: [
			{t: 0, bi: [0, 30], bd: [0, 30], pi: 0, pd: 0, balon: [0, 2.2, 0.5]},
			{t: 0.45, bi: [-60, 70], bd: [-60, 70], pi: -40, pd: -150, sube: 0.9, inclina: -80, balon: [0, 2.1, 0.3]},
			{t: 1, bi: [0, 30], bd: [0, 30], sube: 0, inclina: 0, balon: [0, 2.5, -9]},
		],
	},
},
```

Brazos `[adelante, afuera]` y piernas en grados (negativo = al frente; -180 = arriba), `sube` (metros), `inclina`
(grados del torso), `giro`, `avanza` y `balon` `[x, y, z]`. Una propia con el nombre de una de fábrica la reemplaza.

## Modelos animados

```js
persona: {modelo: 'caballero', accion: 'correr'}
```

Personajes con sus propias animaciones (CC0): `bloque-a` … `bloque-r` y `mini-mujer-a…f` / `mini-hombre-a…f` (Kenney),
`caballero`, `barbaro`, `maga`, `picara`, `encapuchado`, `esqueleto`, `esqueleto-guerrero`, `esqueleto-mago`,
`esqueleto-picaro` (KayKit), o la ruta a tu propio `.glb`. La pose y la acción usan el clip más parecido del modelo, y
`cabeza`, `lentes` y `sostiene` se pegan a sus huesos.

## Animales

<figure><img src="/img/animales-3.jpg" alt="Animales con accesorios" loading="lazy" style="width:100%;border-radius:12px"><figcaption>Animales con gorra, lentes, sombrero, capa y alas</figcaption></figure>

```js
persona: {especie: 'gato', cabeza: 'sombrero', collar: 'dije', espalda: 'capa'}
```

perro, gato, caballo, unicornio, vaca, cerdo, oveja, conejo, oso, panda, león, tigre, zorro, lobo, elefante, jirafa,
cebra, ratón, cocodrilo, tortuga, rana, dinosaurio, dragón, mono, pingüino, gallina, pato, águila, loro, pez, tiburón,
delfín y ballena. Caminan, corren, se sientan y saltan. Los de tierra pueden llevar alas; los peces nadan con sus aletas y las aves ya traen sus alas.

## En 2D

La caricatura usa las mismas recetas y piezas:

```js
{tipo: 'caricatura', atuendo: 'chef', peinado: 'afro', piel: 'morena', aretes: 'aro', lentesTipo: 'sol', barba: 'chivo'}
```

<figure><img src="/img/caricatura-3.jpg" alt="Caricaturas 2D con piezas" loading="lazy" style="width:60%;border-radius:12px"><figcaption>Caricatura 2D con oficios, sombreros, barba, bigote y accesorios</figcaption></figure>
