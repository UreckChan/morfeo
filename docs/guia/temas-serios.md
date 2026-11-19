---
description: 'Morfeo para negocios, finanzas, vlogs, deportes y biografías: estilo línea (blanco sobre negro con pictogramas e íconos), canchas de futbol, básquet, voleibol, béisbol y tenis, auditorio, teatro, conferencia, sala de juntas, estudio de vlog e historias de vida donde la persona crece y cambia de ropa.'
---

# Negocios, deportes e historias de vida

Morfeo también sirve para videos serios: explicar finanzas, contar la historia de una empresa, dar una charla o
narrar la vida de alguien desde niño hasta que se vuelve famoso.

<div class="galeria-docs">
<figure><img src="/img/serio-linea.jpg" alt="Estilo línea" loading="lazy"><figcaption>Estilo <code>linea</code></figcaption></figure>
<figure><img src="/img/serio-estadio.jpg" alt="Estadio de futbol" loading="lazy"><figcaption><code>cancha-futbol</code></figcaption></figure>
<figure><img src="/img/serio-basquet.jpg" alt="Cancha de básquet" loading="lazy"><figcaption><code>cancha-basquet</code></figcaption></figure>
<figure><img src="/img/serio-conferencia.jpg" alt="Conferencia" loading="lazy"><figcaption><code>conferencia</code></figcaption></figure>
<figure><img src="/img/serio-teatro.jpg" alt="Teatro" loading="lazy"><figcaption><code>teatro</code></figcaption></figure>
<figure><img src="/img/serio-etapas.jpg" alt="Historia de vida" loading="lazy"><figcaption><code>etapa</code>: la persona crece</figcaption></figure>
</div>

## Estilo línea: explicadores en blanco sobre negro

`estilo: 'linea'` deja el fondo negro con un foco de luz y usa tres capas hechas para explicar ideas:

| Capa | Qué es | Opciones |
|---|---|---|
| `pictograma` | Persona blanca con brillo, de pie en un aro de luz y con su nombre en una pastilla | `nombre`, `apagado` (gris, en segundo plano), `pose: 'brazos' \| 'sentado'`, `foco: false` |
| `icono-linea` | Ícono de contorno que se dibuja solo | `icono`, `texto` (dentro, como `$1,000` en un recibo), `destellos`, `apagado`, `grosor` |
| `leyenda` | Texto corto | `estilo: 'espaciado'` (mayúsculas espaciadas), `'titulo'`, `'pildora'`, `'caja'` (cifra en un recuadro) |

Íconos: `tarjeta`, `alcancia`, `recibo`, `casa`, `edificio`, `moneda`, `billete`, `calendario`, `mesa`, `grafica`,
`baja`, `maletin`, `carrito`, `reloj`, `telefono`, `foco`, `corazon`, `escudo`, `llave`, `candado`, `check`, `cruz`,
`flecha`, `igual`, `diferente`, `mas`, `menos`, `globo`, `persona`, `grupo`, `mundo`, `diana`, `cohete`, `documento`,
`camion` y `fabrica`.

```js
export default {
	estilo: 'linea',
	title: 'La trampa de invitar',
	scenes: [
		{say: 'Ana y Luis ganan lo mismo.', capas: [
			{tipo: 'leyenda', texto: 'MISMO SUELDO', x: 540, y: 520},
			{tipo: 'pictograma', nombre: 'Ana', x: 340, y: 1000},
			{tipo: 'pictograma', nombre: 'Luis', x: 740, y: 1000, apagado: true, en: 0.4},
		]},
		{say: 'Pero cada viernes, Ana invita la cuenta.', capas: [
			{tipo: 'icono-linea', icono: 'mesa', x: 540, y: 820, tam: 320},
			{tipo: 'icono-linea', icono: 'recibo', texto: '$1,000', x: 540, y: 1220, destellos: true, en: 'cuenta'},
			{tipo: 'leyenda', texto: 'EL QUE INVITA', estilo: 'pildora', x: 540, y: 1460},
		]},
		{say: 'En un año son veinticuatro mil pesos.', capas: [
			{tipo: 'leyenda', texto: '$24,000', estilo: 'caja', x: 540, y: 1150, en: 'veinticuatro'},
		]},
	],
};
```

## Estilos de empresa

Además de `linea` hay tres estilos pensados para negocios y explicadores:

| Estilo | Cómo se ve |
|---|---|
| `corporativo` | Fondo claro con puntos, azul marino y azul eléctrico, tarjetas blancas con sombra suave, subtítulos en caja |
| `pizarra` | Pizarrón blanco con marco de aluminio y plumones; tinta oscura (las capas de `linea` se dibujan como plumón) |
| `datos` | Tablero azul noche con cuadrícula y cifras en verde agua, para finanzas, tecnología y métricas |

Y tres capas que toman el color de cualquier estilo:

```js
{tipo: 'grafica', forma: 'barras', titulo: 'Ventas', datos: [{etiqueta: 'T1', valor: 120}, {etiqueta: 'T2', valor: 340}], prefijo: '$', unidad: 'k', resaltar: 1}
{tipo: 'kpi', etiqueta: 'Ingreso mensual', valor: 1250000, prefijo: '$', cambio: 12.5, periodo: 'vs. mes pasado'}
{tipo: 'proceso', pasos: [{titulo: 'Idea', texto: 'Un problema real'}, 'Prototipo', 'Clientes', 'Escala']}
```

- `grafica`: `forma` es `barras`, `columnas` (horizontales), `linea`, `area` o `dona`; crece al entrar y abrevia cifras (1.3 M, 38 mil M).
- `kpi`: la cifra cuenta y `cambio` pone ▲ verde o ▼ rojo.
- `proceso`: círculos numerados unidos por una línea que avanza; cada paso entra por turno o en su palabra (`en`).

## Lugares nuevos

Todos funcionan como cualquier [ambiente](/guia/ambientes): de día o de noche, con clima, con `persona` y con
`ambiente: 'auto'`, que los elige solos cuando el guion los menciona.

| Ambiente | Planos | El guion lo elige si dice… |
|---|---|---|
| `cancha-futbol` | general, persona, balon, porteria, tribuna, aereo, gradas, centro | futbol, gol, portería, estadio |
| `cancha-basquet` | general, persona, aro, balon, gradas, duela, marcador | básquet, NBA, canasta, triple |
| `cancha-voleibol` | general, persona, red, balon, gradas, cancha | voleibol, volley |
| `cancha-beisbol` | general, persona, home, monticulo, jardin, aereo, gradas | béisbol, jonrón, bateador, pitcher |
| `cancha-tenis` | general, persona, red, pelota, fondo, gradas | tenis, raqueta, Wimbledon |
| `auditorio` | general, persona, pantalla, publico, escenario, atril | auditorio, discurso, graduación |
| `teatro` | general, persona, escenario, telon, palcos, publico, candil | teatro, actor, telón, musical |
| `conferencia` | general, persona, pantalla, panel, grafica, publico | conferencia, keynote, startup |
| `sala-juntas` | general, persona, pantalla, mesa, equipo, ventana | inversionistas, socios, ventas, finanzas |
| `vlog` | frente, cerca, general, lado, mic, repisa | vlog, mi canal, hoy les cuento |

Las canchas traen gradas con público, jugadores con su uniforme, árbitro, torres de luz, marcador y su balón.

### Gente de fondo

Ningún lugar se ve solo a menos que el video lo pida: la calle tiene gente caminando, el salón alumnos, la tienda
clientes y las canchas jugadores y gradas llenas. `publico` lo cambia:

```js
ambiente: {nombre: 'salon', publico: 'lleno'}     // 'vacio' | 'poco' | 'normal' (por defecto) | 'lleno'
```

Con `ambiente: 'auto'` se detecta del guion: "el estadio estaba vacío" o "no había nadie" lo vacían; "lleno",
"repleto" o "miles de personas" lo llenan. El auditorio y la conferencia traen una
pantalla con una gráfica que sube. La sala de juntas trae a cuatro compañeros sentados (cámbialos con `gente`), y en
el vlog la persona te habla de frente.

Para videos 2D hay fondos ilustrados de los mismos lugares: `fondo: {tipo: 'escenario', nombre: 'estadio'}`, y también
`cancha-basquet`, `teatro`, `auditorio`, `sala-juntas`, `ciudad-noche`, `campo`, `calle`, `oficina` y `mar`.

## Historias de vida: la persona crece

Con `etapa` en una escena, la persona del ambiente cambia de edad o de ropa desde ahí. Sigue siendo la misma persona,
con la misma cara. Junto con `ambiente: 'auto'`, cada etapa sucede en su lugar.

```js
export default {
	estilo: 'documental',
	title: 'De la calle al estadio',
	ambiente: 'auto',
	scenes: [
		{say: 'De niño jugaba futbol descalzo en la calle de su barrio.', etapa: {edad: 'nino', atuendo: 'deportivo'}, rotulo: '1998'},
		{say: 'En la escuela le decían que eso no era un trabajo.', etapa: {edad: 'nino', atuendo: 'escolar'}},
		{say: 'A los quince metió su primer gol en un estadio.', etapa: {edad: 'joven', atuendo: 'futbolista', ropa: '#2F6FE0'}, rotulo: '2008'},
		{say: 'Ya de adulto jugó la final con el diez en la espalda.', etapa: {edad: 'adulto', atuendo: 'futbolista', ropa: '#E5484D'}},
		{say: 'Y hoy da conferencias para niños que sueñan lo mismo.', etapa: {edad: 'adulto', atuendo: 'traje'}},
	],
};
```

- **Edades:** `bebe`, `nino`, `joven`, `adulto`, `mayor`.
- **Ropa:** `atuendo` es `escolar`, `deportivo`, `futbolista`, `basquetbolista`, `beisbolista`, `sudadera`, `graduado`,
  `traje`, `doctor`, `chef`, `policia`, `bombero` y muchos más; `ropa` y `pantalon` cambian los colores.
- **En la mano:** `sostiene` (`balon-futbol`, `bate`, `raqueta`, `microfono`, `laptop`, `maletin`, `trofeo`…).
- **Etapa corta:** `etapa: 'joven'` cambia solo la edad.

## Uniformes y equipo

Cada deporte tiene su uniforme completo: camiseta con número, short, medias y zapatos (con tachones en futbol y
béisbol); el beisbolista trae gorra y guante. Los oficios traen su detalle: estetoscopio del doctor, gorra y galones del
piloto, casco del astronauta, goggles del científico, audífonos del programador, cinturón del mecánico.

```js
persona: {personaje: 'beto', atuendo: 'futbolista', ropa: '#E5484D', sostiene: 'balon-futbol'}
{tipo: 'caricatura', atuendo: 'doctor', sostiene: 'portapapeles'}   // también en 2D
```

Ver todos en la [Galería](/guia/galeria#uniformes-y-equipo).
