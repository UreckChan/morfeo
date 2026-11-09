# Animación y cámara

## Cuándo aparece cada capa

`en` y `hasta` aceptan:

- **segundos** desde que empieza la escena: `en: 1.5`;
- **una palabra** de lo que dice la voz: `en: 'orcas'` (encuentra también "orca"); la capa aparece justo cuando se dice;
- `'voz'` (cuando empieza a hablar) o `'fin'` (cuando termina);
- un ajuste: `en: 'orcas+0.3'`, `hasta: 'fin-0.5'`.

```js
{tipo: 'chip', texto: '×5', en: 'orca', hasta: 'fin', salida: 'escala'}
```

::: tip
Con Whisper instalado, las palabras caen exactas. Sin Whisper, se reparten dentro de cada frase, lo cual suele bastar.
:::

## Entrada y salida

`entrada`: `escala` (por defecto), `rebote`, `aparecer`, `subir`, `caer`, `girar`, `deslizar-izq`, `deslizar-der`,
`deslizar-arriba`, `deslizar-abajo` o `ninguna`. `duracionEntrada` cambia su duración (0.5 s por defecto).

`salida` (cuando llega `hasta`): `aparecer` (se desvanece), `escala`, `subir`, `deslizar-izq`, `deslizar-der`.

## Movimiento

| Campo | Ejemplo | Qué hace |
|---|---|---|
| `mover` | `{a: [700, 900], en: 'luego', duracion: 1.2}` | Va a otra posición (suave, o `curva: 'lineal'`) |
| `escalar` | `{a: 1.5, en: 'crece'}` | Cambia de tamaño |
| `girar` | `30` | Grados por segundo |
| `rotar` | `-6` | Inclinación fija |
| `flotar` | `true` o `20` | Sube y baja suavemente |
| `latir` | `true` | Late como un corazón |
| `opacidad`, `desenfoque` | `0.6`, `4` | — |
| `z` | `10` | Qué capa va encima |

## Cambios en el tiempo

Cualquier capa puede cambiar sus datos durante el video. Es ideal para el [HUD](./series#hud). Los números se animan
desde el valor anterior:

```js
{tipo: 'barra', titulo: 'Probabilidad', valor: 0, cambios: [{en: {escena: 3}, valor: 15}, {en: 'perfecto', valor: 90}]}
```

## Efectos de sonido

`sonido` en una capa suena cuando entra: `pop`, `whoosh`, `tick`, `glitch` o `ding`. Entre escenas suena un whoosh,
salvo si la escena lleva `transicion: 'corte'`.

## Cámara

Por escena:

```js
{say: 'Y entonces, la policía encontró la verdad.', camara: {zoom: [1, 1.25], x: [0, 80], temblor: {fuerza: 14}}, capas: [/* ... */]}
```

| Campo | Para qué |
|---|---|
| `zoom` | Número fijo o `[inicio, fin]` a lo largo de la escena |
| `x`, `y` | Paneo en píxeles, fijo o `[inicio, fin]` |
| `origen` | `[x, y]`: punto hacia el que hace zoom, relativo al centro |
| `en`, `duracion` | Cuándo empieza y cuánto dura el movimiento |
| `temblor` | `{fuerza, duracion}`: sacudida al inicio |

El fondo se mueve a la mitad de velocidad, lo que da profundidad.

## Transiciones

`transicion` por escena, o la del estilo: `corte`, `fundido`, `deslizar` o `zoom`.
