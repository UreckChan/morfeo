# Guiones e imágenes con IA

Pon tus claves en el `.env` de tu proyecto (copia `.env.example`):

```bash
ANTHROPIC_API_KEY=...   # guiones con Claude
OPENAI_API_KEY=...      # imágenes y poses
```

## Guiones

```bash
npx morfeo guion "por qué el cielo es azul"
npx morfeo guion "la leyenda de la llorona" --estilo historia --duracion 50
npx morfeo guion "el día 31 de Neto" --estilo serie --tono "comedia"
npx morfeo guion --desde mi-guion.txt                 # tu texto, convertido en escenas
npx morfeo guion --desde mi-guion.txt --sin-ia        # sin IA: una escena por frase
```

Claude escribe el video completo: escenas variadas, números con letras para la voz, palabras clave resaltadas, el
momento exacto de cada animación y el título para publicar. El resultado queda en `guiones/<id>.json` para que lo
revises y lo edites; luego corre `npx morfeo render <id>`.

| Opción | Para qué |
|---|---|
| `--estilo` | Estilo visual (por defecto, el de tu proyecto) |
| `--imagenes` | Que pida ilustraciones con IA en lugar de emojis |
| `--duracion` | Segundos aproximados |
| `--idioma` | "inglés", "portugués"… |
| `--tono` | "humor", "misterio", "serio"… |
| `--voz`, `--id` | Voz e id del video |

## Imágenes

Cualquier imagen o fondo puede pedirse a la IA:

```js
{tipo: 'imagen', generar: 'un oso pardo de frente', ancho: 600}
fondo: {tipo: 'imagen', generar: 'un bosque al atardecer'}
```

Para que todas tengan la misma línea gráfica, en `morfeo.config.mjs`:

```js
imagenes: {proveedor: 'openai', estilo: 'ilustración plana, colores cálidos, contornos suaves', calidad: 'medium'},
```

Cada imagen se genera una sola vez (caché) y queda en `assets/ia/`. Los objetos salen con fondo transparente y los
fondos en formato vertical. Con `proveedor: async (prompt) => ruta` usas cualquier otro servicio.

## Poses de personajes

Ver [Series y personajes](./series#poses-con-ia).
